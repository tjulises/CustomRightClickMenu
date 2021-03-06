/// <reference path="../../../tools/definitions/chrome.d.ts" />
/// <reference path="../background/sharedTypes.d.ts"/>
import { ModuleData } from "./moduleTypes";

declare const window: BackgroundpageWindow;

export namespace CRMNodes.Script.Handler {
	async function genCodeOnPage({		
		tab,
		key,
		info,
		node,
		safeNode,
	}: {
		tab: _browser.tabs.Tab;
		key: number[];
		info: _browser.contextMenus.OnClickData;
		node: CRM.ScriptNode;
		safeNode: CRM.SafeNode;
	}, [contextData, [nodeStorage, greaseMonkeyData, script, indentUnit, runAt, tabIndex]]: [EncodedContextData,		
		[any, GreaseMonkeyData, string, string, string, number]]): Promise<string> {		

		const enableBackwardsCompatibility = (await modules.Util.getScriptNodeScript(node)).indexOf('/*execute locally*/') > -1 &&		
			node.isLocal;		
		const catchErrs = modules.storages.storageLocal.catchErrors;		
		const supportedBrowserAPIs = [];
		if (BrowserAPI.isBrowserAPISupported('chrome')) {
			supportedBrowserAPIs.push('chrome');
		}
		if (BrowserAPI.isBrowserAPISupported('browser')) {
			supportedBrowserAPIs.push('browser');
		}

		modules.Util.setMapDefault(modules.storages.nodeStorageSync,
			node.id, {});
		return [		
			[		
				`var crmAPI = new (window._crmAPIRegistry.pop())(${[		
					safeNode, node.id, tab, info, key, nodeStorage,		
					contextData, greaseMonkeyData, false, (node.value && node.value.options) || {},		
					enableBackwardsCompatibility, tabIndex, browserAPI.runtime.id, supportedBrowserAPIs.join(','),
					modules.storages.nodeStorageSync.get(node.id)
				].map((param) => {		
					if (param === void 0) {		
						return JSON.stringify(null);		
					}		
					return JSON.stringify(param);		
				}).join(', ')});`		
			].join(', '),		
			modules.constants.templates.globalObjectWrapperCode('window', 'windowWrapper', node.isLocal && BrowserAPI.isBrowserAPISupported('chrome') ? 'chrome' : 'void 0', node.isLocal && BrowserAPI.isBrowserAPISupported('browser') ? 'browser' : 'void 0'),		
			`${catchErrs ? 'try {' : ''}`,		
			'function main(crmAPI, window, chrome, browser, menuitemid, parentmenuitemid, mediatype,' +		
			'linkurl, srcurl, pageurl, frameurl, frameid,' +		
			'selectiontext, editable, waschecked, checked) {',		
			script,		
			'}',		
			`crmAPI.onReady(function() {main.apply(this, [crmAPI, windowWrapper, ${node.isLocal && BrowserAPI.isBrowserAPISupported('chrome') ? 'chrome' : 'void 0'}, ${node.isLocal && BrowserAPI.isBrowserAPISupported('browser') ? 'browser' : 'void 0'}].concat(${		
			JSON.stringify([		
				info.menuItemId, info.parentMenuItemId, info.mediaType,		
				info.linkUrl, info.srcUrl, info.pageUrl, info.frameUrl,		
				(info as any).frameId, info.selectionText,		
				info.editable, info.wasChecked, info.checked		
			])		
			}))})`,		
			`${catchErrs ? [		
				`} catch (error) {`,		
				`${indentUnit}if (crmAPI.debugOnError) {`,		
				`${indentUnit}${indentUnit}debugger;`,		
				`${indentUnit}}`,		
				`${indentUnit}throw error;`,		
				`}`		
			].join('\n') : ''}`		
		].join('\n');		
	}		
	async function getScriptsToRun(code: string, runAt: _browser.extensionTypes.RunAt, 
		node: CRM.ScriptNode, usesUnsafeWindow: boolean): Promise<{		
			code?: string;		
			file?: string;		
			runAt: _browser.extensionTypes.RunAt;		
		}[]> {		
			const scripts = [];		
			const globalLibraries = modules.storages.storageLocal.libraries;
			const urlDataPairs = modules.storages.urlDataPairs;
			for (let i = 0; i < node.value.libraries.length; i++) {		
				let lib: {		
					name: string;		
					url?: string;		
					code?: string;		
				} | {		
					code: string;		
				};		
				if (globalLibraries) {		
					for (let j = 0; j < globalLibraries.length; j++) {		
						if (globalLibraries[j].name === node.value.libraries[i].name) {		
							const currentLib = globalLibraries[j];
							if (currentLib.ts && currentLib.ts.enabled) {
								lib = {
									code: await modules.Util.getLibraryCode(currentLib)
								}
							} else {
								lib = currentLib;
							}
							break;
						}
					}	
				}	
				if (!lib) {		
					//Resource hasn't been registered with its name, try if it's an anonymous one		
					if (!node.value.libraries[i].name) {		
						//Check if the value has been registered as a resource		
						if (urlDataPairs.get(node.value.libraries[i].url as any)) {		
							lib = {		
								code: urlDataPairs.get(node.value.libraries[i].url as any).dataString		
							};		
						}		
					}		
				}		
				if (lib) {		
					scripts.push({		
						code: lib.code,		
						runAt: runAt		
					});		
				}		
			}		
			if (!usesUnsafeWindow) {		
				//Let the content script determine whether to run this		
				scripts.push({		
					file: '/js/crmapi.js',		
					runAt: runAt			
				});		
			}		
			scripts.push({		
				code: code,		
				runAt: runAt		
			});		
			return scripts;		
		}
	function generateMetaAccessFunction(metaData: {
		[key: string]: any;
	}): (key: string) => any {
		return (key: string) => {
			if (metaData[key]) {
				return metaData[key][0];
			}
			return undefined;
		};
	}
	function getResourcesArrayForScript(scriptId: CRM.NodeId<CRM.ScriptNode>): {
		name: string;
		sourceUrl: string;
		matchesHashes: boolean;
		dataURI: string;
		dataString: string;
		crmUrl: string;
		hashes: {
			algorithm: string;
			hash: string;
		}[];
	}[] {
		const resourcesArray = [];
		const scriptResources = modules.storages.resources.get(scriptId);
		if (!scriptResources) {
			return [];
		}
		for (let resourceName in scriptResources) {
			if (scriptResources.hasOwnProperty(resourceName)) {
				resourcesArray.push(scriptResources[resourceName]);
			}
		}
		return resourcesArray;
	}
	function ensureRunAt(id: CRM.GenericNodeId, script: {
		code?: string;
		file?: string;
		runAt: string;
	}): {
		code?: string;
		file?: string;
		runAt: 'document_start'|'document_end'|'document_idle';
	} {
		const newScript: {
			code?: string;
			file?: string;
			runAt: 'document_start'|'document_end'|'document_idle';
		} = {
			code: script.code,
			file: script.file,
			runAt: 'document_idle'
		};

		const runAt = script.runAt;

		if (runAt === 'document_start' ||
			runAt === 'document_end' ||
			runAt === 'document_idle') {
				newScript.runAt = runAt;
			} else {
				window.log('Script with id', id, 
				'runAt value was changed to default, ', runAt, 
				'is not a valid value (use document_start, document_end or document_idle)');
			}

		return newScript;
	}
	function executeScripts(nodeId: CRM.NodeId<CRM.ScriptNode>, tabId: TabId, scripts: {		
		code?: string;		
		file?: string;		
		runAt: _browser.extensionTypes.RunAt;		
	}[], usesUnsafeWindow: boolean) {		
		if (usesUnsafeWindow) {		
			//Send it to the content script and run it there		
			browserAPI.tabs.sendMessage(tabId, {		
				type: 'runScript',		
				data: {		
					scripts: scripts		
				}		
			});		
		} else {
			modules.Util.promiseChain(scripts.map((script) => {
				return async () => {
					try {
						await browserAPI.tabs.executeScript(tabId, ensureRunAt(nodeId, script)).catch((err) => {
							if (err.message.indexOf('Could not establish connection') === -1 &&
								err.message.indexOf('closed') === -1) {
								window.log('Couldn\'t execute on tab with id', tabId, 'for node', nodeId, err);
							}
						});
					} catch(e) {
						//The tab was closed during execution
					}
				}
			}));
		}		
	}

	export async function generateGreaseMonkeyData(metaData: {
		[key: string]: any;
	}, node: CRM.ScriptNode, includes: string[], excludes: string[], tab: {
		incognito: boolean
	}): Promise<GreaseMonkeyData> {
		const metaString = (MetaTags.getMetaLines(node.value
			.script) || []).join('\n');
		const metaVal = generateMetaAccessFunction(metaData);
		return {
			info: {
				script: {
					author: metaVal('author') || '',
					copyright: metaVal('copyright'),
					description: metaVal('description'),
					excludes: metaData['excludes'],
					homepage: metaVal('homepage'),
					icon: metaVal('icon'),
					icon64: metaVal('icon64'),
					includes: (metaData['includes'] || []).concat(metaData['include']),
					lastUpdated: 0, //Never updated
					matches: metaData['matches'],
					isIncognito: tab.incognito,
					downloadMode: 'browser',
					name: node.name,
					namespace: metaVal('namespace'),
					options: {
						awareOfChrome: true,
						compat_arrayleft: false,
						compat_foreach: false,
						compat_forvarin: false,
						compat_metadata: false,
						compat_prototypes: false,
						compat_uW_gmonkey: false,
						noframes: metaVal('noframes'),
						override: {
							excludes: true,
							includes: true,
							orig_excludes: metaData['excludes'],
							orig_includes: (metaData['includes'] || []).concat(metaData['include']),
							use_excludes: excludes,
							use_includes: includes
						}
					},
					position: 1, // what does this mean?
					resources: getResourcesArrayForScript(node.id),
					"run-at": metaData['run-at'] || metaData['run_at'] || 'document_end',
					system: false,
					unwrap: true,
					version: metaVal('version')
				},
				scriptMetaStr: metaString,
				scriptSource: await modules.Util.getScriptNodeScript(node),
				scriptUpdateURL: metaVal('updateURL'),
				scriptWillUpdate: true,
				scriptHandler: 'Custom Right-Click Menu',
				version: (await browserAPI.runtime.getManifest()).version
			},
			resources: modules.storages.resources.get(node.id) || {}
		};
	}
	export function getInExcludes(node: CRM.ScriptNode): { excludes: string[], includes: string[] } {
		const excludes: string[] = [];
		const includes: string[] = [];
		if (node.triggers) {
			for (let i = 0; i < node.triggers.length; i++) {
				if (node.triggers[i].not) {
					excludes.push(node.triggers[i].url);
				} else {
					includes.push(node.triggers[i].url);
				}
			}
		}
		return {
			excludes,
			includes
		}
	}
	export function genTabData(tabId: TabId, key: number[], nodeId: CRM.NodeId<CRM.ScriptNode>, script: string) {
		modules.Util.setMapDefault(modules.crmValues.tabData, tabId, {
			libraries: new window.Map(),
			nodes: new window.Map()
		});
		modules.Util.setMapDefault(modules.crmValues.tabData.get(tabId).nodes,
			nodeId, []);
		modules.crmValues.tabData.get(tabId).nodes.get(nodeId).push({
			secretKey: key,
			usesLocalStorage: script.indexOf('localStorageProxy') > -1
		});
	}
	export function createHandler(node: CRM.ScriptNode): ClickHandler {
		return (info: _browser.contextMenus.OnClickData, tab: _browser.tabs.Tab, isAutoActivate: boolean = false) => {
			let key: number[] = [];
			let err = false;
			try {
				key = modules.Util.createSecretKey();
			} catch (e) {
				//There somehow was a stack overflow
				err = e;
			}
			if (err) {
				browserAPI.tabs.executeScript(tab.id, {
					code: 'alert("Something went wrong very badly, please go to your Custom Right-Click Menu' +
						' options page and remove any sketchy scripts.")'
				}).then(() => {
					browserAPI.runtime.reload();
				});
			} else {
				window.Promise.all<any>([modules.Util.iipe<EncodedContextData>(async () => {
					//If it was triggered by clicking, ask contentscript about some data
					if (isAutoActivate) {
						return null;
					} else {
						const response = await browserAPI.tabs.sendMessage(tab.id, {
							type: 'getLastClickInfo'
						}) as EncodedContextData;
						return response;
					}
				}), new window.Promise<[any, GreaseMonkeyData, string, string, string, number]>(async (resolve) => {
					const globalNodeStorage = modules.storages.nodeStorage;
					const nodeStorage = globalNodeStorage.get(node.id);
					genTabData(tab.id, key, node.id, await modules.Util.getScriptNodeScript(node))

					modules.Util.setMapDefault(globalNodeStorage, node.id, {});
					const tabIndex = modules.crmValues.tabData
						.get(tab.id).nodes
						.get(node.id).length - 1;
					modules.Logging.Listeners.updateTabAndIdLists();

					const metaData: {
						[key: string]: any;
					} = MetaTags.getMetaTags(await modules.Util.getScriptNodeScript(node));
					const runAt: _browser.extensionTypes.RunAt = metaData['run-at'] || metaData['run_at'] || 'document_end';
					const { excludes, includes } = getInExcludes(node)

					const greaseMonkeyData = await generateGreaseMonkeyData(metaData, node, includes, excludes, tab)

					const indentUnit = '	';

					const script = (await modules.Util.getScriptNodeScript(node)).split('\n').map((line) => {
						return indentUnit + line;
					}).join('\n');

					resolve([nodeStorage, greaseMonkeyData, script, indentUnit, runAt, tabIndex]);
				})]).then(async (args: [EncodedContextData,
					[any, GreaseMonkeyData, string, string, _browser.extensionTypes.RunAt, number]]) => {
						const safeNode = makeSafe(node);
						(safeNode as any).permissions = node.permissions;
						const code = await genCodeOnPage({
							node,
							safeNode,
							tab,
							info,
							key
						}, args);

						const usesUnsafeWindow = (await modules.Util.getScriptNodeScript(node)).indexOf('unsafeWindow') > -1;
						const scripts = await getScriptsToRun(code, args[1][4], node, usesUnsafeWindow);
						executeScripts(node.id, tab.id, scripts, usesUnsafeWindow);
					});
			}
		};
	}
}

export namespace CRMNodes.Script.Background {
	async function loadBackgroundPageLibs(node: CRM.ScriptNode): Promise<{
		libraries: string[];
		code: string[];
	}> {
		const libraries = [];
		const code = [];
		const globalLibraries = modules.storages.storageLocal.libraries;
		const urlDataPairs = modules.storages.urlDataPairs;
		for (let i = 0; i < node.value.libraries.length; i++) {
			let lib: {
				name: string;
				url?: string;
				code?: string;
				location?: string;
			} | {
				code: string;
				location?: string;
			};
			if (globalLibraries) {
				for (let j = 0; j < globalLibraries.length; j++) {
					if (globalLibraries[j].name === node.value.libraries[i].name) {
						const currentLib = globalLibraries[j];
						if (currentLib.ts && currentLib.ts.enabled) {
							lib = {
								code: await modules.Util.getLibraryCode(currentLib)
							}
						} else {
							lib = currentLib;
						}
						break;
					} else {
						//Resource hasn't been registered with its name, try if it's an anonymous one
						if (node.value.libraries[i].name === null) {
							//Check if the value has been registered as a resource
							if (urlDataPairs.get(node.value.libraries[i].url as any)) {
								lib = {
									code: urlDataPairs.get(node.value.libraries[i].url as any).dataString
								};
							}
						}
					}
				}
			}
			if (lib) {
				if (lib.location) {
					libraries.push(`/js/defaultLibraries/${lib.location}`);
				} else {
					code.push(lib.code);
				}
			}
		}

		return {
			libraries: libraries,
			code: code
		};
	}
	async function genCodeBackground(code: string[], {
		key,
		node,
		script,
		safeNode,
		indentUnit,
		nodeStorage,
		greaseMonkeyData
	}: {
		key: number[];
		node: CRM.ScriptNode;
		script: string;
		safeNode: CRM.SafeNode;
		indentUnit: string;
		nodeStorage: any;
		greaseMonkeyData: GreaseMonkeyData;
	}): Promise<string> {
		const enableBackwardsCompatibility = (await modules.Util.getScriptNodeScript(node)).indexOf('/*execute locally*/') > -1 &&
			node.isLocal;
		const catchErrs = modules.storages.storageLocal.catchErrors;
		const supportedBrowserAPIs = [];
		if (BrowserAPI.isBrowserAPISupported('chrome')) {
			supportedBrowserAPIs.push('chrome');
		}
		if (BrowserAPI.isBrowserAPISupported('browser')) {
			supportedBrowserAPIs.push('browser');
		}

		modules.Util.setMapDefault(modules.storages.nodeStorageSync,
			node.id, {});
		return [
			code.join('\n'), [
				`var crmAPI = new (window._crmAPIRegistry.pop())(${[
					safeNode, node.id, { id: 0 }, {}, key,
					nodeStorage, null,
					greaseMonkeyData, true, fixOptionsErrors((node.value && node.value.options) || {}),
					enableBackwardsCompatibility, 0, browserAPI.runtime.id, supportedBrowserAPIs.join(','),
					modules.storages.nodeStorageSync.get(node.id)
				]
					.map((param) => {
						if (param === void 0) {
							return JSON.stringify(null);
						}
						return JSON.stringify(param);
					}).join(', ')});`
			].join(', '),
			modules.constants.templates.globalObjectWrapperCode('self', 'selfWrapper', void 0, void 0),
			`${catchErrs ? 'try {' : ''}`,
			'function main(crmAPI, self, menuitemid, parentmenuitemid, mediatype,' +
			`${indentUnit}linkurl, srcurl, pageurl, frameurl, frameid,` +
			`${indentUnit}selectiontext, editable, waschecked, checked) {`,
			script,
			'}',
			`window.crmAPI = self.crmAPI = crmAPI`,
			`crmAPI.onReady(function() {main(crmAPI, selfWrapper)});`,
			`${catchErrs ? [
				`} catch (error) {`,
				`${indentUnit}if (crmAPI.debugOnError) {`,
				`${indentUnit}${indentUnit}debugger;`,
				`${indentUnit}}`,
				`${indentUnit}throw error;`,
				`}`
			].join('\n') : ''}`
		].join('\n')
	}

	async function isValidBackgroundPage(node: CRM.ScriptNode) {
		if (!node || node.type !== 'script' ||
			!await modules.Util.getScriptNodeScript(node, 'background') ||
			await modules.Util.getScriptNodeScript(node, 'background') === '') {
				return false;
			}
		return true;
	}
	export async function createBackgroundPage(node: CRM.ScriptNode) {
		if (!await isValidBackgroundPage(node)) {
			return;
		}

		let isRestart = false;
		if (modules.background.byId.has(node.id)) {
			isRestart = true;

			modules.Logging.backgroundPageLog(node.id, null,
				'Restarting background page...');
			modules.background.byId.get(node.id).terminate();
			modules.Logging.backgroundPageLog(node.id, null,
				'Terminated background page...');
		}

		const result = await loadBackgroundPageLibs(node);
		const backgroundPageCode = result.code;
		const libraries = result.libraries;

		let key: number[] = [];
		let err = false;
		try {
			key = modules.Util.createSecretKey();
		} catch (e) {
			//There somehow was a stack overflow
			err = e;
		}
		if (!err) {
			const globalNodeStorage = modules.storages.nodeStorage;
			const nodeStorage = globalNodeStorage.get(node.id);

			modules.Util.setMapDefault(globalNodeStorage, node.id, {});

			Handler.genTabData(0, key, node.id, await modules.Util.getScriptNodeScript(node, 'background'));
			modules.Logging.Listeners.updateTabAndIdLists();

			const metaData = MetaTags.getMetaTags(await modules.Util.getScriptNodeScript(node));
			const { excludes, includes } = Handler.getInExcludes(node);

			const indentUnit = '	';

			const script = (await modules.Util.getScriptNodeScript(node, 'background')).split('\n').map((line) => {
				return indentUnit + line;
			}).join('\n');

			const greaseMonkeyData = await Handler.generateGreaseMonkeyData(metaData, node, includes, excludes, {
				incognito: false
			});

			const safeNode = makeSafe(node) as any;
			safeNode.permissions = node.permissions;
			const code = await genCodeBackground(backgroundPageCode, {
				key,
				node,
				script,
				safeNode,
				indentUnit,
				nodeStorage,
				greaseMonkeyData
			});

			modules.Sandbox.sandbox(node.id, code, libraries, key, () => {
				const instancesArr: {
					id: TabId|string;
					tabIndex: TabIndex;
				}[] = [];
				const nodeInstances = modules.crmValues.nodeInstances.get(node.id);
				modules.Util.iterateMap(nodeInstances, (tabId, instance) => {
					try {
						modules.crmValues.tabData.get(tabId).nodes.get(node.id)
							.forEach((tabIndexInstance, index) => {
								modules.Util.postMessage(tabIndexInstance.port, {
									messageType: 'dummy'
								});
								instancesArr.push({
									id: tabId,
									tabIndex: index
								});
							});
					} catch (e) {
						nodeInstances.delete(tabId);
					}
				});
				return instancesArr;
			}, (worker) => {
				if (modules.background.byId.has(node.id)) {
					modules.background.byId.get(node.id).terminate();
				}
				modules.background.byId.set(node.id, worker);
				if (isRestart) {
					modules.Logging.log(node.id, '*', `Background page [${node.id}]: `,
						'Restarted background page...');
				}
			});
		} else {
			window.log('An error occurred while setting up the script for node ',
				node.id, err);
			throw err;
		}
	}
	export async function createBackgroundPages() {
		//Iterate through every node
		modules.Util.asyncIterateMap(modules.crm.crmById, async (nodeId, node) => {
			if (node.type === 'script' && node.value.backgroundScript.length > 0) {
				if (isValidBackgroundPage(node)) {
					window.info('Creating backgroundpage for node', node.id);
				}
				await createBackgroundPage(node);
			}
		});
	}

}

export namespace CRMNodes.Script.MetaTags {
	export function getMetaIndexes(script: string): {
		start: number;
		end: number;
	} {
		let metaStart = -1;
		let metaEnd = -1;
		const lines = script.split('\n');
		for (let i = 0; i < lines.length; i++) {
			if (metaStart !== -1) {
				if (lines[i].indexOf('==/UserScript==') > -1) {
					metaEnd = i;
					break;
				}
			} else if (lines[i].indexOf('==UserScript==') > -1) {
				metaStart = i;
			}
		}
		return {
			start: metaStart,
			end: metaEnd
		};
	}
	export function getMetaLines(script: string, fromCache: any = true): string[] {
		if (fromCache) {
			return modules.Caches.cacheCall(getMetaLines, arguments, true);
		}
		const metaIndexes = getMetaIndexes(script);
		const metaStart = metaIndexes.start;
		const metaEnd = metaIndexes.end;
		const startPlusOne = metaStart + 1;
		const lines = script.split('\n');
		return lines.splice(startPlusOne, (metaEnd - startPlusOne));
	}

	const cachedData: Map<string, {
		[key: string]: any;
	}> = new window.Map<string, {
		[key: string]: any;
	}>();

	export function getMetaTags(script: string): {
		[key: string]: any
	} {
		const hash = window.md5(script);
		if (cachedData.has(hash)) {
			return cachedData.get(hash);
		}

		const metaLines = getMetaLines(script);

		const metaTags: {
			[key: string]: any;
		} = {};
		const regex = /@(\w+)(\s+)(.+)/;
		for (let i = 0; i < metaLines.length; i++) {
			const regexMatches = metaLines[i].match(regex);
			if (regexMatches) {
				metaTags[regexMatches[1]] = metaTags[regexMatches[1]] || [];
				metaTags[regexMatches[1]].push(regexMatches[3]);
			}
		}

		cachedData.set(hash, metaTags);
		return metaTags;
	}
	export function getlastMetaTagValue(metaTags: {
		[key: string]: any;
	}, key: string) {
		return metaTags[key] && metaTags[key][metaTags[key].length - 1];
	}
}

export namespace CRMNodes.Script.Updating {
	export async function removeOldNode(id: CRM.GenericNodeId) {
		const { children } = modules.crm.crmById.get(id);
		if (children) {
			for (let i = 0; i < children.length; i++) {
				await removeOldNode(children[i].id);
			}
		}

		if (modules.background.byId.has(id)) {
			modules.background.byId.get(id).terminate();
			modules.background.byId.delete(id)
		}

		modules.crm.crmById.delete(id);
		modules.crm.crmByIdSafe.delete(id);

		const contextMenuId = modules.crmValues.contextMenuIds.get(id);
		if (contextMenuId !== undefined && contextMenuId !== null) {
			await browserAPI.contextMenus.remove(contextMenuId).catch(() => {});
		}
	}
	export function registerNode(node: CRM.Node, oldPath?: number[]) {
		//Update it in CRM tree
		if (oldPath !== undefined && oldPath !== null) {
			let currentTree = modules.storages.settingsStorage.crm;
			for (const index of oldPath.slice(0, -1)) {
				const { children } = currentTree[index];
				if (!children) {
					return;
				}
				currentTree = children;
			}
			currentTree[modules.Util.getLastItem(oldPath)] = node;
		} else {
			modules.storages.settingsStorage.crm.push(node);
		}
	}
	function deduceLaunchmode(metaTags: {
		[key: string]: any;
	}, triggers: CRM.Triggers): CRMLaunchModes {
		//if it's explicitly set in a metatag, use that value
		if (MetaTags.getlastMetaTagValue(metaTags, 'CRM_LaunchMode')) {
			return MetaTags.getlastMetaTagValue(metaTags, 'CRM_LaunchMode');
		}

		if (triggers.length === 0) {
			//No triggers, probably only run on clicking
			return CRMLaunchModes.RUN_ON_CLICKING;
		}
		return CRMLaunchModes.RUN_ON_SPECIFIED;
	}
	function createUserscriptTriggers(metaTags: {
		[key: string]: any;
	}): {
		triggers: CRM.Triggers,
		launchMode: CRMLaunchModes
	} {
		let triggers: CRM.Triggers = [];
		const includes: string[] = (metaTags['includes'] || []).concat(metaTags['include']);
		if (includes) {
			triggers = triggers.concat(includes.map(include => ({
				url: include,
				not: false
			})).filter(include => (!!include.url)));
		}
		const matches: string[] = metaTags['match'];
		if (matches) {
			triggers = triggers.concat(matches.map(match => ({
				url: match,
				not: false
			})).filter(match => (!!match.url)));
		}
		const excludes: string[] = metaTags['exclude'];
		if (excludes) {
			triggers = triggers.concat(excludes.map(exclude => ({
				url: exclude,
				not: false
			})).filter(exclude => (!!exclude.url)));
		}

		//Filter out duplicates
		triggers = triggers.filter((trigger, index) => (triggers.indexOf(trigger) === index));
		return {
			triggers,
			launchMode: deduceLaunchmode(metaTags, triggers)
		}
	}
	async function createUserscriptScriptData(metaTags: {
		[key: string]: any;
	}, code: string, node: Partial<CRM.Node>) {
		node.type = 'script';
		const scriptNode = node as CRM.ScriptNode;

		//Libraries
		let libs: {
			url: string;
			name: string;
		}[] = [];
		if (metaTags['CRM_libraries']) {
			(metaTags['CRM_libraries'] as EncodedString<{
				url: string;
				name: string;
			}>[]).forEach(item => {
				try {
					libs.push(JSON.parse(item));
				} catch (e) { }
			});
		}

		const requires: string[] = metaTags['require'] || [];
		const anonymousLibs: CRM.Library[] = [];
		for (let i = 0; i < requires.length; i++) {
			let skip = false;
			for (let j = 0; j < libs.length; j++) {
				if (libs[j].url === requires[i]) {
					skip = true;
					break;
				}
			}
			if (skip) {
				continue;
			}
			anonymousLibs.push({
				url: requires[i],
				name: null
			});
		}

		(anonymousLibs as {
			url: string;
			name: null;
		}[]).forEach(anonymousLib => {
			modules.Resources.Anonymous.handle({
				type: 'register',
				name: anonymousLib.url,
				url: anonymousLib.url,
				scriptId: scriptNode.id
			});
		});

		const { libraries } = await browserAPI.storage.local.get('libraries');

		//Install all libraries
		const newLibs: CRM.InstalledLibrary[] = [
			...libraries, 
			...(await Promise.all(libs.map(({ name, url }) => {
				return new Promise<CRM.InstalledLibrary>(async (resolve) => {
					const code = await modules.Util.xhr(url).catch(() => {
						resolve(null);
					});
					if (!code) {
						resolve(null);
					}
					resolve({
						name, code, url,
						ts: {
							enabled: false,
							code: {}
						}
					});
				});
			}))).filter(val => !!val)];
		await browserAPI.storage.local.set({
			libraries: newLibs
		});
		await modules.Storages.applyChanges({
			type: 'libraries',
			libraries: newLibs
		});

		libs = libs.concat(anonymousLibs as any);

		scriptNode.value = modules.constants.templates.getDefaultScriptValue({
			script: code,
			libraries: libs
		});
	}
	function createUserscriptStylesheetData(metaTags: {
		[key: string]: any;
	}, code: string, node: Partial<CRM.Node>) {
		node = node as CRM.StylesheetNode;
		node.type = 'stylesheet';
		node.value = {
			stylesheet: code,
			defaultOn: (metaTags['CRM_defaultOn'] =
				MetaTags.getlastMetaTagValue(metaTags, 'CRM_defaultOn') ||
					false),
			toggle: (metaTags['CRM_toggle'] = MetaTags
				.getlastMetaTagValue(metaTags,
				'CRM_toggle') ||
				false),
			launchMode: CRMLaunchModes.ALWAYS_RUN,
			options: {},
			convertedStylesheet: null
		};
	}
	async function createUserscriptTypeData(metaTags: {
		[key: string]: any;
	}, code: string, node: Partial<CRM.Node>) {
		if (MetaTags.getlastMetaTagValue(metaTags,
			'CRM_stylesheet')) {
			createUserscriptStylesheetData(metaTags, code, node);
		} else {
			await createUserscriptScriptData(metaTags, code, node);
		}
	}
	export async function install(message: {
		script: string;
		downloadURL: string;
		allowedPermissions: CRM.Permission[];
		metaTags: {
			[key: string]: any;
		};
	}) {
		const oldTree = JSON.parse(JSON.stringify(
			modules.storages.settingsStorage.crm));
		const {
			path, oldNodeId, node
		} = await Updating.installUserscript(message.metaTags, message.script,
			message.downloadURL, message.allowedPermissions);

		if (path) { //Has old node
			const nodePath = path as number[];
			await removeOldNode(oldNodeId);
			registerNode(node, nodePath);
		} else {
			registerNode(node);
		}

		await modules.Storages.uploadChanges('settings', [{
			key: 'crm',
			oldValue: oldTree,
			newValue: modules.storages.settingsStorage.crm
		}]);
	}
	export async function installUserscript(metaTags: {
		[key: string]: any;
	}, code: string, downloadURL: string, allowedPermissions: CRM.Permission[],
		oldNodeId?: CRM.NodeId<CRM.ScriptNode>): Promise<{
			node: CRM.ScriptNode | CRM.StylesheetNode,
			path?: number[],
			oldNodeId?: CRM.NodeId<CRM.ScriptNode>,
		}> {
			let node: Partial<CRM.ScriptNode | CRM.StylesheetNode> = {};
			let hasOldNode = false;
			if (oldNodeId !== undefined && oldNodeId !== null) {
				hasOldNode = true;
				node.id = oldNodeId;
			} else {
				node.id = await modules.Util.generateItemId() as 
					CRM.NodeId<CRM.ScriptNode>|
					CRM.NodeId<CRM.StylesheetNode>
			}

			//If userscripts is empty something might have gone wrong, try to re-parse it
			if (Object.getOwnPropertyNames(metaTags).length === 0) {
				metaTags = MetaTags.getMetaTags(code);
			}

			node.name = MetaTags.getlastMetaTagValue(metaTags, 'name') || 'name';
			await createUserscriptTypeData(metaTags, code, node);
			const { launchMode, triggers } = createUserscriptTriggers(metaTags);
			node.triggers = triggers;
			node.value.launchMode = launchMode;
			const updateUrl = MetaTags.getlastMetaTagValue(metaTags, 'updateURL') ||
				MetaTags.getlastMetaTagValue(metaTags, 'downloadURL') ||
				downloadURL;

			//Requested permissions
			let permissions = [];
			if (metaTags['grant']) {
				permissions = metaTags['grant'];
				permissions = permissions.splice(permissions.indexOf('none'), 1);
			}

			//NodeInfo
			node.nodeInfo = {
				version: MetaTags.getlastMetaTagValue(metaTags, 'version') || null,
				source: {
					updateURL: updateUrl || downloadURL,
					url: updateUrl || MetaTags.getlastMetaTagValue(metaTags, 'namespace') ||
					downloadURL,
					author: MetaTags.getlastMetaTagValue(metaTags, 'author') ||
						'Anonymous',
					autoUpdate: true
				},
				isRoot: true,
				permissions: permissions,
				lastUpdatedAt: Date.now(),
				installDate: new Date().toLocaleDateString()
			};

			if (hasOldNode) {
				node.nodeInfo.installDate = modules.Util.accessPath(
					modules.crm.crmById.get(oldNodeId),
					'nodeInfo', 'installDate') || node.nodeInfo.installDate;
			}

			//Content types
			if (MetaTags.getlastMetaTagValue(metaTags,'CRM_contentTypes')) {
				try {
					node.onContentTypes = JSON.parse(MetaTags.getlastMetaTagValue(metaTags,
						'CRM_contentTypes'));
				} catch (e) {
				}
			}
			if (!node.onContentTypes) {
				node.onContentTypes = [true, true, true, true, true, true];
			}
			//Allowed permissions
			node.permissions = allowedPermissions || [];

			//Resources
			if (metaTags['resource']) {
				//Register resources
				const resources: string[] = metaTags['resource'];
				resources.forEach(resource => {
					const resourceSplit = resource.split(/(\s*)/);
					const [resourceName, resourceUrl] = resourceSplit;
					modules.Resources.Resource.handle({
						type: 'register',
						name: resourceName,
						url: resourceUrl,
						scriptId: node.id as CRM.NodeId<CRM.ScriptNode>
					});
				});
			}

			const { requestPermissions = [] } = await browserAPI.storage.local.get<CRM.StorageLocal>();
			const allPermissions = browserAPI.permissions ? await browserAPI.permissions.getAll() : {
				permissions: []
			};
			const allowed = allPermissions.permissions || [];
			const joinedPermissions = [...requestPermissions, ...node.permissions].filter((permission: _browser.permissions.Permission) => {
				return allowed.indexOf(permission) === -1;
			}).filter((permission, index, self) => {
				return self.indexOf(permission) === index;
			});
			browserAPI.storage.local.set({
				requestPermissions: joinedPermissions
			});

			if (node.type === 'script') {
				node = modules.constants.templates.getDefaultScriptNode(node);
			} else {
				node = modules.constants.templates.getDefaultStylesheetNode(node);
			}

			if (hasOldNode) {
				const { path } = modules.crm.crmById.get(oldNodeId);
				return {
					node: node as CRM.ScriptNode | CRM.StylesheetNode,
					path: path,
					oldNodeId: oldNodeId
				};
			} else {
				return {
					node: node as CRM.ScriptNode | CRM.StylesheetNode,
					path: null,
					oldNodeId: null
				};
			}
		}
	function getDownloadURL({ nodeInfo }: CRM.Node) {
		return nodeInfo && nodeInfo.source &&
			typeof nodeInfo.source !== 'string' &&
				(nodeInfo.source.downloadURL ||
				nodeInfo.source.updateURL ||
				nodeInfo.source.url);
	}
	export async function updateScripts() {
		const updated: {
			oldNodeId: CRM.NodeId<CRM.ScriptNode>;
			node: CRM.Node;
			path: number[];
		}[] = [];
		const oldTree = JSON.parse(JSON.stringify(
			modules.storages.settingsStorage.crm));
		
		await Promise.all(modules.Util.mapToArr(modules.crm.crmById).map(async ([id, node]) => {
			if (node.type !== 'script') {
				return;
			}
			const isRoot = node.nodeInfo && node.nodeInfo.isRoot;
			const downloadURL = getDownloadURL(node);
			if (downloadURL && isRoot && node.nodeInfo.source !== 'local' &&
				node.nodeInfo.source.autoUpdate) {
					await checkNodeForUpdate(node, downloadURL, updated);
				}
		}));
		await onNodeUpdateDone(updated, oldTree)
	}
	async function onNodeUpdateDone(updated: {
		oldNodeId: CRM.NodeId<CRM.ScriptNode>;
		node: CRM.Node;
		path: number[];
	}[], oldTree: CRM.Tree) {
		const updatedData = updated.map((updatedScript) => {
			const oldNode = modules.crm.crmById.get(updatedScript.oldNodeId);
			return {
				name: updatedScript.node.name,
				id: updatedScript.node.id,
				oldVersion: (oldNode && oldNode.nodeInfo && oldNode.nodeInfo.version) ||
					undefined,
				newVersion: updatedScript.node.nodeInfo.version
			};
		});

		await Promise.all(updated.map((updatedScript) => {
			return modules.Util.iipe(async () => {
				if (updatedScript.path) { //Has old node
					await removeOldNode(updatedScript.oldNodeId);
					registerNode(updatedScript.node, updatedScript.path);
				} else {
					registerNode(updatedScript.node);
				}
			});
		}));

		await modules.Storages.uploadChanges('settings', [{
			key: 'crm',
			oldValue: oldTree,
			newValue: modules.storages.settingsStorage.crm
		}]);

		const { updatedNodes = [] } = await browserAPI.storage.local.get<CRM.StorageLocal>();
		const joinedData = [...updatedNodes, ...updatedData];
		browserAPI.storage.local.set({
			updatedScripts: joinedData
		});

		return joinedData;
	}

	function checkNodeForUpdate(node: CRM.ScriptNode, downloadURL: string,
		updatedScripts: {
			node: CRM.Node;
			path?: number[];
			oldNodeId?: CRM.NodeId<CRM.ScriptNode>;
		}[]) {
			return new Promise<void>((resolve) => {
				//Do a request to get that script from its download URL
				if (downloadURL && modules.Util.endsWith(downloadURL, '.user.js')) {
					try {
						modules.Util.convertFileToDataURI(downloadURL, async (dataURI, dataString) => {
							//Get the meta tags
							try {
								const metaTags = MetaTags.getMetaTags(dataString);
								if (modules.Util.isNewer(metaTags['version'][0], node.nodeInfo.version)) {
									if (!modules.Util.compareArray(node.nodeInfo.permissions,
										metaTags['grant']) &&
										!(metaTags['grant'].length === 0 &&
											metaTags['grant'][0] === 'none')) {
										//New permissions were added, notify user
										const { addedPermissions = [] } = await browserAPI.storage.local.get<CRM.StorageLocal>();
										addedPermissions.push({
											node: node.id,
											permissions: metaTags['grant'].filter((newPermission: CRM.Permission) => {
												return node.nodeInfo.permissions.indexOf(newPermission) === -1;
											})
										});
										await browserAPI.storage.local.set({
											addedPermissions: addedPermissions
										});
									}

									updatedScripts.push(await installUserscript(metaTags,
										dataString, downloadURL, node.permissions, node.id));
								}

							} catch (err) {
								window.log('Tried to update script ', node.id, ' ', node.name,
									' but could not reach download URL');
							}
							resolve(null);
						}, () => {
							window.log('Tried to update script ', node.id, ' ', node.name,
							' but could not reach download URL');
							resolve(null);
						});
					} catch (e) {
						window.log('Tried to update script ', node.id, ' ', node.name,
							' but could not reach download URL');
						resolve(null);
					}
				}
			});
	}
}

export namespace CRMNodes.Running {
	function urlIsGlobalExcluded(url: string): boolean {
		if (modules.storages.globalExcludes.indexOf('<all_urls>') >-1) {
			return true;
		}
		for (let i = 0; i < modules.storages.globalExcludes.length;i++) {
			const pattern = modules.storages.globalExcludes[i] as MatchPattern;
			if (pattern && modules.URLParsing.urlMatchesPattern(pattern, url)) {
				return true;
			}
		}
		return false;
	}
	export function executeNode(node: CRM.Node, tab: _browser.tabs.Tab) {
		if (node.type === 'script') {
			Script.Handler.createHandler(node as CRM.ScriptNode)({
				pageUrl: tab.url,
				menuItemId: 0,
				editable: false,
				modifiers: []
			}, tab, true);
		} else if (node.type === 'stylesheet') {
			Stylesheet.createClickHandler(node)({
				pageUrl: tab.url,
				menuItemId: 0,
				editable: false,
				modifiers: []
			}, tab);
		} else if (node.type === 'link') {
			Link.createHandler(node)({
				pageUrl: tab.url,
				menuItemId: 0,
				editable: false,
				modifiers: []
			}, tab);
		}
	}

	export async function executeScriptsForTab(tabId: TabId, respond: (message: any) => void) {
		try {
			const tab = await browserAPI.tabs.get(tabId);
			if (tab.url && tab.url.indexOf('chrome') !== 0) {
				modules.crmValues.tabData.set(tab.id, {
					libraries: new window.Map(),
					nodes: new window.Map()
				});
				modules.Logging.Listeners.updateTabAndIdLists();
				if (!urlIsGlobalExcluded(tab.url)) {
					const { toExecuteNodes } = modules;
					const toExecute = toExecuteNodes.onUrl.documentEnd.filter(({ id, triggers }) => {
						return modules.URLParsing.matchesUrlSchemes(triggers, tab.url);
					});

					for (const { id } of toExecuteNodes.always.documentEnd.concat(toExecute)) {
						executeNode(modules.crm.crmById.get(id), tab);
					}
					return {
						matched: toExecute.length > 0
					};
				}
			}
		} catch(e) { }
		return {
			matched: false
		};
	}

};

export namespace CRMNodes.Script { }

export namespace CRMNodes.Link {
	function sanitizeUrl(url: string): string {
		if (url.indexOf('://') === -1) {
			url = `http://${url}`;
		}
		return url;
	}

	function substituteSearch(url: string, 
		clickData: _browser.contextMenus.OnClickData) {
			return url.replace(/%s/g, clickData.selectionText || '');
		}

	export function createHandler(node: CRM.LinkNode): ClickHandler {
		return (clickData: _browser.contextMenus.OnClickData,
			tabInfo: _browser.tabs.Tab) => {
			let finalUrl: string;
			for (let i = 0; i < node.value.length; i++) {
				if (node.value[i].newTab) {
					browserAPI.tabs.create({
						windowId: tabInfo.windowId,
						url: substituteSearch(
							sanitizeUrl(node.value[i].url), 
							clickData),
						openerTabId: tabInfo.id
					});
				} else {
					finalUrl = node.value[i].url;
				}
			}
			if (finalUrl) {
				browserAPI.tabs.update(tabInfo.id, {
					url: substituteSearch(
						sanitizeUrl(finalUrl),
						clickData)
				});
			}
		};
	}
}

export namespace CRMNodes.Stylesheet.Updating {
	export function getDownloadURL({ nodeInfo }: CRM.Node) {
		return nodeInfo && nodeInfo.source &&
			typeof nodeInfo.source !== 'string' &&
				(nodeInfo.source.downloadURL ||
				nodeInfo.source.updateURL ||
				nodeInfo.source.url);
	}

	export async function updateStylesheet(nodeId: CRM.NodeId<CRM.StylesheetNode>) {
		const node = modules.crm.crmById.get(nodeId) as CRM.StylesheetNode;
		const url = getDownloadURL(node);
		const updateData = (await CRMNodes.Stylesheet.Installing.getUpdateData(url))
			.sections[node.nodeInfo.source !== 'local' && node.nodeInfo.source.sectionIndex];
		const launchData = CRMNodes.Stylesheet.Installing.extractStylesheetData(
			updateData);
		const oldTree = JSON.parse(JSON.stringify(
			modules.storages.settingsStorage.crm));
		node.value.launchMode = launchData.launchMode;
		node.triggers = JSON.parse(JSON.stringify(launchData.triggers));
		node.value.stylesheet = launchData.code;
		await modules.Storages.uploadChanges('settings', [{
			key: 'crm',
			oldValue: oldTree,
			newValue: modules.storages.settingsStorage.crm
		}]);
	}
	export async function updateStylesheets() {
		const updated: {
			oldNodeId: CRM.NodeId<CRM.StylesheetNode>;
			node: CRM.Node;
			path: number[];
		}[] = [];
		const oldTree = JSON.parse(JSON.stringify(
				modules.storages.settingsStorage.crm));
		await Promise.all(modules.Util.mapToArr(modules.crm.crmById).map(async ([id, node]) => {
			if (node.type !== 'stylesheet') {
				return;
			}
			const isRoot = node.nodeInfo && node.nodeInfo.isRoot;
			const downloadURL = getDownloadURL(node);
			if (downloadURL && isRoot && node.nodeInfo.source !== 'local' &&
				node.nodeInfo.source.autoUpdate) {
					await checkNodeForUpdate(node, downloadURL, updated);
				}
		}));
		await onNodeUpdateDone(updated, oldTree)
	}

	function checkNodeForUpdate(node: CRM.StylesheetNode, downloadURL: string,
		updatedScripts: {
			node: CRM.Node;
			path?: number[];
			oldNodeId?: CRM.NodeId<CRM.StylesheetNode>;
		}[]) {
			return new Promise<void>((resolve) => {
				modules.Util.convertFileToDataURI(downloadURL, async (_, dataString) => {
					try {
						const parsed: {
							md5Url :string;
							name: string;
							originalMd5: string;
							updateUrl: string;
							url: string;
							sections: {
								domains: string[];
								regexps: string[];
								urlPrefixes: string[];
								urls: string[];
								code: string;
							}[];
						} = JSON.parse(dataString);

						//Just check whether everything matches
						for (let i = 0; i < parsed.sections.length; i++) {
							const section = parsed.sections[i];
							const launchData = CRMNodes.Stylesheet.Installing.extractStylesheetData(
								section);
							
							//Make sure the section index is correct
							if (node.nodeInfo.source !== 'local' && 
								node.nodeInfo.source.sectionIndex !== i) {
									continue;
								}

							if (node.value.launchMode !== launchData.launchMode) {
								node.value.launchMode = launchData.launchMode;
							}
							if (!modules.Util.compareArray(node.triggers, launchData.triggers)) {
								node.triggers = JSON.parse(JSON.stringify(launchData.triggers));
							}
							if (node.value.stylesheet !== launchData.code) {
								node.value.stylesheet = launchData.code;
							}
						}
						resolve(null);
					} catch(e) {
						//Malformed data string or wrong URL
						resolve(null);
					}
				}, () => {
					window.log('Tried to update stylesheet ', node.id, ' ', node.name,
						' but could not reach download URL');
					resolve(null);
				});
			});
		}

	async function onNodeUpdateDone(updated: {
		oldNodeId: CRM.NodeId<CRM.StylesheetNode>;
		node: CRM.Node;
		path: number[];
	}[], oldTree: CRM.Tree) {
		const updatedData = updated.map((updatedNode) => {
			const oldNode = modules.crm.crmById.get(updatedNode.oldNodeId);
			return {
				name: updatedNode.node.name,
				id: updatedNode.node.id,
				oldVersion: modules.Util.accessPath(oldNode,
					'nodeInfo', 'version') || undefined,
				newVersion: updatedNode.node.nodeInfo.version
			};
		});

		await Promise.all(updated.map((updateNode) => {
			return modules.Util.iipe(async () => {
				if (updateNode.path) { //Has old node
					await Script.Updating.removeOldNode(updateNode.oldNodeId);
					Script.Updating.registerNode(updateNode.node, updateNode.path);
				} else {
					Script.Updating.registerNode(updateNode.node);
				}
			});
		}));

		await modules.Storages.uploadChanges('settings', [{
			key: 'crm',
			oldValue: oldTree,
			newValue: modules.storages.settingsStorage.crm
		}]);

		const { updatedNodes = [] } = await browserAPI.storage.local.get<CRM.StorageLocal>();
		const joinedData = [...updatedNodes, ...updatedData];
		browserAPI.storage.local.set({
			updatedScripts: joinedData
		});

		return joinedData;
	}
}

export namespace CRMNodes.Stylesheet.Options {
	function splitComments(stylesheet: string): {
		isComment: boolean;
		line: string;
	}[] {
		const lines: {
			isComment: boolean;
			line: string;
		}[] = [{
			isComment: false,
			line: ''
		}];
		let lineIndex = 0;
		for (let i = 0; i < stylesheet.length; i++) {
			if (stylesheet[i] === '/' && stylesheet[i + 1] === '*') {
				lineIndex++;
				i += 1;
				lines[lineIndex] = {
					isComment: true,
					line: ''
				};
			} else if (stylesheet[i] === '*' && stylesheet[i + 1] === '/') {
				lineIndex++;
				i += 1;
				lines[lineIndex] = {
					isComment: false,
					line: ''
				};
			} else {
				lines[lineIndex].line += stylesheet[i];
			}
		}
		return lines;
	}
	function evalOperator(left: any, operator: string, right: any): boolean {
		switch (operator) {
			case '<=':
				return left <= right;
			case '>=':
				return left >= right;
			case '<':
				return left < right;
			case '>':
				return left > right;
			case '!==':
				return left !== right;
			case '!=':
				return left != right;
			case '===':
				return left === right;
			case '==':
				return left == right;
		}
		return false;
	}
	function getOptionValue(option: CRM.OptionsValue): any {
		switch (option.type) {
			case 'array':
				return option.items;
			case 'boolean':
			case 'number':
			case 'string':
				return option.value;
			case 'choice':
				return option.values[option.selected];
		}
	}
	const _numRegex = /^(-)?(\d)+(\.(\d)+)?$/;
	const _strRegex = /^("(.*)"|'(.*)'|`(.*)`)$/;
	const _valueRegex = /^(\n|\r|\s)*("(.*)"|'(.*)'|`(.*)`|(-)?(\d)+(\.(\d)+)?|\w(\w|\d)*)(\n|\r|\s)*$/;
	const _boolExprRegex = /^(\n|\r|\s)*("(.*)"|'(.*)'|`(.*)`|(-)?(\d)+(\.(\d)+)?|\w(\w|\d)*)(\n|\r|\s)*(<=|>=|<|>|!==|!=|===|==)(\n|\r|\s)*("(.*)"|'(.*)'|`(.*)`|(-)?(\d)+|\w(\w|\d)*)(\n|\r|\s)*$/;
	function getStringExprValue(expr: string, options: CRM.Options): any {
		if (expr === 'true') {
			return true;
		}
		if (expr === 'false') {
			return false;
		}
		if (_numRegex.exec(expr)) {
			return parseFloat(expr);
		}
		if (_strRegex.exec(expr)) {
			return expr.slice(1, -1);
		}
		//It must be a variable
		if (options[expr]) {
			return getOptionValue(options[expr]);
		}
	}
	function evaluateBoolExpr(expr: string, options: CRM.Options): boolean {
		if (expr.indexOf('||') > -1) {
			return evaluateBoolExpr(expr.slice(0, expr.indexOf('||')), options) ||
				evaluateBoolExpr(expr.slice(expr.indexOf('||') + 2), options);
		}
		if (expr.indexOf('&&') > -1) {
			return evaluateBoolExpr(expr.slice(0, expr.indexOf('&&')), options) &&
				evaluateBoolExpr(expr.slice(expr.indexOf('&&') + 2), options);
		}
		const regexEval = _boolExprRegex.exec(expr);
		if (regexEval) {
			const leftExpr = regexEval[2];
			const operator = regexEval[12];
			const rightExpr = regexEval[14];
			return evalOperator(
				getStringExprValue(leftExpr, options),
				operator,
				getStringExprValue(rightExpr, options)
			);
		}
		const valueRegexEval = _valueRegex.exec(expr);
		if (valueRegexEval) {
			return !!getStringExprValue(valueRegexEval[2], options);
		}
		return false;
	}
	function evaluateIfStatement(line: string, options: CRM.Options): boolean {
		const statement = _ifRegex.exec(line)[2];
		return evaluateBoolExpr(statement, options);
	}
	function replaceVariableInstances(line: string, options: CRM.Options): string {
		const parts: {
			isVariable: boolean;
			content: string;
		}[] = [{
			isVariable: false,
			content: ''
		}];
		let inVar: boolean = false;
		for (let i = 0; i < line.length; i++) {
			if (line[i] === '{' && line[i + 1] === '{') {
				if (!inVar) {
					inVar = true;
					parts.push({
						isVariable: true,
						content: ''
					});
				} else {
					parts[parts.length - 1].content += '{{';
				}
				i += 1;
			} else if (line[i] === '}' && line[i + 1] === '}') {
				if (inVar) {
					inVar = false;
					parts.push({
						isVariable: false,
						content: ''
					});
				} else {
					parts[parts.length - 1].content += '}}';
				}
				i += 1;
			} else {
				parts[parts.length - 1].content += line[i];
			}
		}

		return parts.map((part) => {
			if (!part.isVariable) {
				return part.content;
			}
			return options[part.content] && getOptionValue(options[part.content]);
		}).join('');
	}
	function getLastIf(ifs: {
		skip: boolean;
		isElse: boolean;
		ignore: boolean;
	}[]): {
			skip: boolean;
			isElse: boolean;
			ignore: boolean;
		} {
		if (ifs.length > 0) {
			return ifs[ifs.length - 1];
		}
		return {
			skip: false,
			isElse: false,
			ignore: false
		}
	}
	const _ifRegex = /^(\n|\r|\s)*if (.+) then(\n|\r|\s)*$/;
	const _elseRegex = /^(\n|\r|\s)*else(\n|\r|\s)*$/;
	const _endifRegex = /^(\n|\r|\s)*endif(\n|\r|\s)*$/;
	const _variableRegex = /^(\n|\r|\s)*(\w|-)+:(\n|\r|\s)*(.*)\{\{\w(\w|\d)*\}\}(.*)((\n|\r|\s)*,(\n|\r|\s)*(.*)\{\{\w(\w|\d)*\}\}(.*))*$/;
	function convertStylesheet(stylesheet: string, options: CRM.Options): string {
		const split = splitComments(stylesheet);
		const lines: string[] = [];

		const ifs: {
			skip: boolean;
			isElse: boolean;
			ignore: boolean;
		}[] = [];
		for (let i = 0; i < split.length; i++) {
			if (_ifRegex.exec(split[i].line)) {
				ifs.push({
					skip: getLastIf(ifs).skip || !evaluateIfStatement(split[i].line, options),
					isElse: false,
					ignore: getLastIf(ifs).skip
				});
			} else if (_elseRegex.exec(split[i].line)) {
				//Double else, don't flip anymore
				if (!getLastIf(ifs).isElse && !getLastIf(ifs).ignore) {
					getLastIf(ifs).skip = !getLastIf(ifs).skip;
				}
				getLastIf(ifs).isElse = true;
			} else if (_endifRegex.exec(split[i].line)) {
				ifs.pop();
			} else if (!getLastIf(ifs).skip) {
				//Don't skip this
				if (!split[i].isComment) {
					//No comment, don't have to evaluate anything
					lines.push(split[i].line);
				} else {
					if (_variableRegex.exec(split[i].line)) {
						lines.push(replaceVariableInstances(
							split[i].line, fixOptionsErrors(options)
						));
					} else {
						//Regular comment, just add it
						lines.push(split[i].line);
					}
				}
			}
		}
		return lines.join('');
	}
	export function getConvertedStylesheet(node: CRM.StylesheetNode): string {
		if (node.value.convertedStylesheet &&
			node.value.convertedStylesheet.options === JSON.stringify(node.value.options)) {
			return node.value.convertedStylesheet.stylesheet;
		}
		node.value.convertedStylesheet = {
			options: JSON.stringify(node.value.options),
			stylesheet: convertStylesheet(node.value.stylesheet, typeof node.value.options === 'string' ?
				{} : node.value.options)
		};
		return node.value.convertedStylesheet.stylesheet;
	}
}

export namespace CRMNodes.Stylesheet.Installing {
	function triggerify(url: string): string {
		const match =
			/((http|https|file|ftp):\/\/)?(www\.)?((\w+)\.)*((\w+)?|(\w+)?(\/(.*)))?/g
				.exec(url);

		return [
			match[2] || '*',
			'://',
			(match[4] && match[6]) ? match[4] + match[6] : '*',
			match[7] || '/'
		].join('');
	}
	export function extractStylesheetData(data: {
		domains: string[];
		regexps: string[];
		urlPrefixes: string[];
		urls: string[];
		code: string;
	}) {
		//Get the @document declaration
		if (data.domains.length === 0 &&
			data.regexps.length === 0 &&
			data.urlPrefixes.length &&
			data.urls.length === 0) {
			return {
				launchMode: 1,
				triggers: [],
				code: data.code
			};
		}

		const triggers: string[] = [];
		data.domains.forEach((domainRule) => {
			triggers.push(`*://${domainRule}/*`);
		});
		data.regexps.forEach((regexpRule) => {
			const match =
				/((http|https|file|ftp):\/\/)?(www\.)?((\w+)\.)*((\w+)?|(\w+)?(\/(.*)))?/g
					.exec(regexpRule);
			triggers.push([
				(match[2] ?
					(match[2].indexOf('*') > -1 ?
						'*' : match[2]) : '*'), '://',
				((match[4] && match[6]) ?
					((match[4].indexOf('*') > -1 || match[6].indexOf('*') > -1) ?
						'*' : match[4] + match[6]) : '*'),
				(match[7] ?
					(match[7].indexOf('*') > -1 ?
						'*' : match[7]) : '*')
			].join(''));
		});
		data.urlPrefixes.forEach((urlPrefixRule) => {
			if (modules.URLParsing.triggerMatchesScheme(urlPrefixRule)) {
				triggers.push(urlPrefixRule + '*');
			} else {
				triggers.push(triggerify(urlPrefixRule + '*'));
			}
		});
		data.urls.forEach((urlRule) => {
			if (modules.URLParsing.triggerMatchesScheme(urlRule)) {
				triggers.push(urlRule);
			} else {
				triggers.push(triggerify(urlRule));
			}
		});

		return {
			launchMode: 2,
			triggers: triggers.map((trigger) => {
				return {
					url: trigger,
					not: false
				};
			}),
			code: data.code
		};
	}
	function canBeUpdated(node: CRM.StylesheetNode, data: {
		md5Url :string;
		name: string;
		originalMd5: string;
		updateUrl: string;
		url: string;
		sections: {
			domains: string[];
			regexps: string[];
			urlPrefixes: string[];
			urls: string[];
			code: string;
		}[];
	}) {

		//Just check whether everything matches
		for (let i = 0; i < data.sections.length; i++) {
			const section = data.sections[i];
			const launchData = CRMNodes.Stylesheet.Installing.extractStylesheetData(
				section);
			
			//Make sure the section index is correct
			if (node.nodeInfo.source !== 'local' && 
				node.nodeInfo.source.sectionIndex !== i) {
					continue;
				}

			if (node.value.launchMode !== launchData.launchMode ||
				!modules.Util.compareArray(node.triggers, launchData.triggers) ||
				node.value.stylesheet !== launchData.code) {
					return true;
				}
		}
		return false;
	}
	export function getUpdateData(downloadURL: string) {
		return new Promise<{
			md5Url :string;
			name: string;
			originalMd5: string;
			updateUrl: string;
			url: string;
			sections: {
				domains: string[];
				regexps: string[];
				urlPrefixes: string[];
				urls: string[];
				code: string;
			}[];
		}>((resolve) => {
			modules.Util.convertFileToDataURI(downloadURL, async (_, dataString) => {
				try {
					const parsed: {
						md5Url :string;
						name: string;
						originalMd5: string;
						updateUrl: string;
						url: string;
						sections: {
							domains: string[];
							regexps: string[];
							urlPrefixes: string[];
							urls: string[];
							code: string;
						}[];
					} = JSON.parse(dataString);
					resolve(parsed);
				} catch(e) {
					//Malformed data string or wrong URL
					resolve(null);
				}
			}, () => {
				resolve(null);
			});
		});
	}

	export async function getInstalledStatus(url: string) {
		const results: {
			node: CRM.StylesheetNode;
			state: 'installed'|'updatable'
		}[] = [];

		const data = await getUpdateData(url);

		modules.Util.crmForEachAsync(modules.crm.crmTree, async (node) => {
			if (node.type !== 'stylesheet') {
				return;
			}
			if (node.nodeInfo && node.nodeInfo.source &&
				node.nodeInfo.source !== 'local' &&
				node.nodeInfo.source.updateURL === url) {
					if (canBeUpdated(node, data)) {
						results.push({
							node,
							state: 'updatable',
						});
					} else {
						results.push({
							node,
							state: 'installed'
						});
					}
				}
		});
		return results;
	}
	export async function installStylesheet(data: {
		code: EncodedString<{
			sections: {
				domains: string[];
				regexps: string[];
				urlPrefixes: string[];
				urls: string[];
				code: string;
			}[];
			md5Url :string;
			name: string;
			originalMd5: string;
			updateUrl: string;
			url: string;
		}>;
		author: string
	}) {
		const stylesheetData = JSON.parse(data.code);

		await modules.Util.promiseChain(stylesheetData.sections.map((section, index) => {
			return async () => {
				const sectionData = extractStylesheetData(section);
				const node = modules.constants.templates
					.getDefaultStylesheetNode({
						isLocal: false,
						name: stylesheetData.name,
						nodeInfo: {
							version: '1',
							source: {
								updateURL: stylesheetData.updateUrl,
								url: stylesheetData.url,
								author: data.author,
								sectionIndex: index,
								autoUpdate: true
							},
							permissions: [],
							installDate: new Date().toLocaleDateString()
						},
						triggers: sectionData.triggers,
						value: {
							launchMode: sectionData.launchMode,
							stylesheet: sectionData.code
						},
						id: await modules.Util.generateItemId()
					});

				const crmFn = new modules.CRMAPICall.Instance(null, null);
				await crmFn.moveNode(node, {});
			}
		}));
	}
};

export namespace CRMNodes.Stylesheet {
	export function createToggleHandler(node: CRM.StylesheetNode): ClickHandler {
		return (info: _browser.contextMenus.OnClickData, tab: _browser.tabs.Tab) => {
			let code: string;
			const className = node.id + '' + tab.id;
			if (info.wasChecked) {
				code = [
					`var nodes = Array.prototype.slice.apply(document.querySelectorAll(".styleNodes${className}")).forEach(function(node){`,
					'node.remove();',
					'});'
				].join('');
			} else {
				const css = Options.getConvertedStylesheet(node).replace(/[ |\n]/g, '');
				code = [
					'var CRMSSInsert=document.createElement("style");',
					`CRMSSInsert.className="styleNodes${className}";`,
					'CRMSSInsert.type="text/css";',
					`CRMSSInsert.appendChild(document.createTextNode(${JSON
						.stringify(css)}));`,
					'document.head.appendChild(CRMSSInsert);'
				].join('');
			}
			if (!modules.crmValues.nodeTabStatuses.get(node.id).tabs.has(tab.id)) {
				modules.crmValues.nodeTabStatuses.get(node.id).tabs.set(tab.id, {});
			}
			modules.crmValues.nodeTabStatuses.get(node.id).tabs.get(tab.id).checked = info.checked;
			browserAPI.tabs.executeScript(tab.id, {
				code: code,
				allFrames: true
			});
		};
	}
	export function createClickHandler(node: CRM.StylesheetNode): ClickHandler {
		return (info: _browser.contextMenus.OnClickData, tab: _browser.tabs.Tab) => {
			const className = node.id + '' + tab.id;
			const css = Options.getConvertedStylesheet(node).replace(/[ |\n]/g, '');
			const code = [
				'(function() {',
				`if (document.querySelector(".styleNodes${className}")) {`,
				'return false;',
				'}',
				'var CRMSSInsert=document.createElement("style");',
				`CRMSSInsert.classList.add("styleNodes${className}");`,
				'CRMSSInsert.type="text/css";',
				`CRMSSInsert.appendChild(document.createTextNode(${JSON.stringify(css)}));`,
				'document.head.appendChild(CRMSSInsert);',
				'}());'
			].join('');
			browserAPI.tabs.executeScript(tab.id, {
				code: code,
				allFrames: true
			});
			return node.value.stylesheet;
		};
	}
}

export namespace CRMNodes.NodeCreation {
	function getStylesheetReplacementTabs(node: CRM.Node): {
		id: TabId;
	}[] {
		const replaceOnTabs: {
			id: TabId;
		}[] = [];
		const crmNode: CRM.Node = modules.crm.crmById.get(node.id as CRM.GenericNodeId);
		if (modules.crmValues.contextMenuIds.get(node.id) && //Node already exists
			crmNode.type === 'stylesheet' &&
			node.type === 'stylesheet' && //Node type stayed stylesheet
			crmNode.value.stylesheet !== node.value.stylesheet) { //Value changed

				//Update after creating a new node
				const statusses = modules.crmValues.nodeTabStatuses;
				modules.Util.iterateMap(statusses.get(node.id).tabs, (tabId, tab) => {
					replaceOnTabs.push({
						id: tabId
					});
				});
			}
		return replaceOnTabs;
	}
	function extractToExecuteNode(node: CRM.Node): ToExecuteNode {
		const { triggers, id } = node;
		return { triggers, id }
	}
	function pushToGlobalToExecute(node: CRM.Node, launchMode: CRMLaunchModes) {
		//On by default
		if (node.type === 'stylesheet' && node.value.toggle && node.value.defaultOn) {
			if (launchMode === CRMLaunchModes.ALWAYS_RUN ||
				launchMode === CRMLaunchModes.RUN_ON_CLICKING) {
					modules.toExecuteNodes.always.documentEnd.push(extractToExecuteNode(node));
				} else if (launchMode === CRMLaunchModes.RUN_ON_SPECIFIED ||
					launchMode === CRMLaunchModes.SHOW_ON_SPECIFIED) {
						modules.toExecuteNodes.onUrl.documentEnd.push(extractToExecuteNode(node));
					}
		}
	}
	function handleHideOnPages(node: CRM.Node, launchMode: CRMLaunchModes,
		rightClickItemOptions: ContextMenuCreateProperties) {
		if ((node['showOnSpecified'] && (node.type === 'link' || node.type === 'divider' ||
			node.type === 'menu')) ||
			launchMode === CRMLaunchModes.SHOW_ON_SPECIFIED) {
			rightClickItemOptions.documentUrlPatterns = [];
			modules.crmValues.hideNodesOnPagesData.set(node.id, []);
			for (let i = 0; i < node.triggers.length; i++) {
				const prepared = modules.URLParsing.prepareTrigger(node.triggers[i].url);
				if (prepared) {
					if (node.triggers[i].not) {
						modules.crmValues.hideNodesOnPagesData.get(node.id)
							.push({
								not: false,
								url: prepared
							});
					} else {
						rightClickItemOptions.documentUrlPatterns.push(prepared);
					}
				}
			}
		}
	}
	function generateClickHandler(node: CRM.Node,
		rightClickItemOptions: ContextMenuCreateProperties) {
			//It requires a click handler
			switch (node.type) {
				case 'divider':
					rightClickItemOptions.type = 'separator';
					break;
				case 'link':
					rightClickItemOptions.onclick = Link.createHandler(node);
					break;
				case 'script':
					rightClickItemOptions.onclick = Script.Handler.createHandler(node);
					break;
				case 'stylesheet':
					if (node.value.toggle) {
						rightClickItemOptions.type = 'checkbox';
						rightClickItemOptions.onclick = 
							Stylesheet.createToggleHandler(node);
						rightClickItemOptions.checked = node.value.defaultOn;
					} else {
						rightClickItemOptions.onclick = 
							Stylesheet.createClickHandler(node);
					}
					modules.crmValues.nodeTabStatuses.set(node.id, {
						defaultCheckedValue: node.value.defaultOn,
						tabs: new window.Map()
					});
					break;
			}
		}
	async function handleContextMenuError(options: ContextMenuCreateProperties, 
		e: _chrome.runtime.LastError|string, idHolder: {
			id: number|string;
		}) {
			if (options.documentUrlPatterns) {
				window.log('An error occurred with your context menu,' + 
					' attempting again with no url matching.', e);
				delete options.documentUrlPatterns;
				idHolder.id = await browserAPI.contextMenus.create(options, async () => {
					idHolder.id = await browserAPI.contextMenus.create({
						title: 'ERROR',
						onclick: createOptionsPageHandler()
					});
					window.log('Another error occured with your context menu!', e);
				});
			} else {
				window.log('An error occured with your context menu!', e);
			}
		}
	async function generateContextMenuItem(rightClickItemOptions: ContextMenuCreateProperties, idHolder: {
		id: number|string;
	}) {
		try {
			idHolder.id = await browserAPI.contextMenus.create(rightClickItemOptions, async () => {
				if ((window as any).chrome && (window as any).chrome.runtime) {
					const __chrome: typeof _chrome = (window as any).chrome;
					if (__chrome && __chrome.runtime && __chrome.runtime.lastError) {
						await handleContextMenuError(rightClickItemOptions, __chrome.runtime.lastError, idHolder);
					}
				} else {
					if (browserAPI.runtime.lastError) {
						await handleContextMenuError(rightClickItemOptions, browserAPI.runtime.lastError, idHolder);
					}
				}
			});
		} catch(e) {
			await handleContextMenuError(rightClickItemOptions, e, idHolder);
		}
	}
	function getContextmenuGlobalOverrides(node: CRM.Node): ContextMenuOverrides {
		return modules.crmValues.contextMenuGlobalOverrides.get(node.id);
	}
	async function addRightClickItemClick(node: CRM.Node, launchMode: CRMLaunchModes,
		rightClickItemOptions: ContextMenuCreateProperties, idHolder: {
			id: number|string;
		}) {
			//On by default
			pushToGlobalToExecute(node, launchMode)
			handleHideOnPages(node, launchMode, rightClickItemOptions);
			generateClickHandler(node, rightClickItemOptions);
			modules.Util.applyContextmenuOverride(
				rightClickItemOptions, getContextmenuGlobalOverrides(node));
			await generateContextMenuItem(rightClickItemOptions, idHolder);

			modules.crmValues.contextMenuInfoById.set(idHolder.id, {
				settings: rightClickItemOptions,
				path: node.path,
				enabled: false
			});
		}
	function pushToToExecute(node: CRM.Node, always: boolean, onDocumentStart: boolean) {
		const toExecute = extractToExecuteNode(node);
		if (always) {
			if (onDocumentStart) {
				modules.toExecuteNodes.always.documentStart.push(toExecute);
			} else {
				modules.toExecuteNodes.always.documentEnd.push(toExecute);
			}
		} else {
			if (onDocumentStart) {
				modules.toExecuteNodes.onUrl.documentStart.push(toExecute);
			} else {
				modules.toExecuteNodes.onUrl.documentEnd.push(toExecute);
			}
		}
	}
	async function hasDocumentStartMetaTag(node: CRM.Node) {
		if (node.type === 'script') {
			const meta = Script.MetaTags.getMetaTags(await modules.Util.getScriptNodeScript(node));
			return meta['run-at'] === 'document_start' || meta['run_at'] === 'document_start';
		}
		return false;
	}
	async function setupUserInteraction(node: CRM.Node,
		rightClickItemOptions: ContextMenuCreateProperties, idHolder: {
			id: number|string;
		}) {
			const launchMode = ((node.type === 'script' || node.type === 'stylesheet') &&
				node.value.launchMode) || CRMLaunchModes.RUN_ON_CLICKING;

			if (launchMode === CRMLaunchModes.ALWAYS_RUN || launchMode === CRMLaunchModes.RUN_ON_SPECIFIED) {
				//If always run, place in .always instead of .onUrl
				//If it's a styesheet or has the run_at=document_start tag, run early
				pushToToExecute(node, launchMode === CRMLaunchModes.ALWAYS_RUN, 
					node.type === 'stylesheet' || await hasDocumentStartMetaTag(node));
			} else if (launchMode !== CRMLaunchModes.DISABLED) {
				await addRightClickItemClick(node, launchMode, rightClickItemOptions, idHolder);
			}
		}

	export async function createNode(node: CRM.Node, parentId: string|number) {
		const replaceStylesheetTabs = getStylesheetReplacementTabs(node);
		const rightClickItemOptions = {
			title: node.name,
			contexts: getContexts(node.onContentTypes),
			parentId: parentId
		};

		const idHolder: {
			id: number|string;
		} = { id: null };
		await setupUserInteraction(node, rightClickItemOptions, idHolder);
		const id = idHolder.id;

		if (replaceStylesheetTabs.length !== 0) {
			node = node as CRM.StylesheetNode;
			for (let i = 0; i < replaceStylesheetTabs.length; i++) {
				const className = node.id + '' + replaceStylesheetTabs[i].id;
				let code = `var nodes = document.querySelectorAll(".styleNodes${
					className
					}");var i;for (i = 0; i < nodes.length; i++) {nodes[i].remove();}`;
				const css = node.value.stylesheet.replace(/[ |\n]/g, '');
				code +=
					`var CRMSSInsert=document.createElement("style");CRMSSInsert.className="styleNodes${className}";CRMSSInsert.type="text/css";CRMSSInsert.appendChild(document.createTextNode(${JSON.stringify(css)}));document.head.appendChild(CRMSSInsert);`;
				browserAPI.tabs.executeScript(replaceStylesheetTabs[i].id, {
					code: code,
					allFrames: true
				});
				const statusses = modules.crmValues.nodeTabStatuses;
				statusses.get(node.id).tabs.get(replaceStylesheetTabs[i].id).checked = true;
			}
		}

		return id;
	}
}

export namespace CRMNodes.TS {
	export async function compileAllInTree() {
		await compileTree(modules.crm.crmTree);
	}
	export async function compileNode(node: CRM.ScriptNode|CRM.SafeScriptNode) {
		if (node.value.ts && node.value.ts.enabled) {
			node.value.ts.script = await compileChangedScript(node.value.script, node.value.ts.script);
			node.value.ts.backgroundScript = await compileChangedScript(modules.Util.getScriptNodeJS(node, 'background'),
			node.value.ts.backgroundScript);
		}
	}
	export async function compileLibrary(library: CRM.InstalledLibrary): Promise<CRM.InstalledLibrary> {
		if (library.ts && library.ts.enabled) {
			library.ts.code = await compileChangedScript(library.code, library.ts.code);
		}
		return library;
	}
	export async function compileAllLibraries(libraries: CRM.InstalledLibrary[]): Promise<CRM.InstalledLibrary[]> {
		for (const library of libraries) {
			await compileLibrary(library);
		}				
		return libraries;
	}

	async function compileTree(tree: CRM.Tree) {
		const length = tree.length;
		for (let i = 0; i < length; i++) {
			const node = tree[i];
			if (!node) {
				continue;
			}

			if (node.type === 'script') {
				await compileNode(node);
			} else if (node.type === 'menu') {
				await compileTree(node.children);
			}
		}
	}
	async function compileChangedScript(script: string, 
		compilationData: CRM.TypescriptCompilationData): Promise<CRM.TypescriptCompilationData> {
			const { sourceHash } = compilationData;
			const scriptHash = window.md5(script);
			if (scriptHash !== sourceHash) {
				return {
					compiled: await compileScript(script),
					sourceHash: scriptHash
				}
			}
			return compilationData;
		}
	function captureTSDef() {
		window.module = {
			exports: {}
		};
		return Promise.resolve(() => {
			const ts = window.module && window.module.exports;
			window.ts = window.ts || ts;
			window.module = undefined;
		});
	}
	async function compileScript(script: string): Promise<string> {
		return new window.Promise<string>(async (resolve) => {
			await window.withAsync(captureTSDef, async () => {
				await modules.Util.execFile('js/libraries/typescript.js');
			});
			resolve(window.ts.transpile(script, {
				module: window.ts.ModuleKind.None,
				target: window.ts.ScriptTarget.ES3,
				noLib: true,
				noResolve: true,
				suppressOutputPathCheck: true
			}));
		});
	}
}

export namespace CRMNodes {
	export let modules: ModuleData;

	export function initModule(_modules: ModuleData) {
		modules = _modules;
	}

	export type ClickHandler = (clickData: _browser.contextMenus.OnClickData,
		tabInfo: _browser.tabs.Tab, isAutoActivate?: boolean) => void;

	export async function updateCrm(toUpdate?: CRM.GenericNodeId[]) {
		await modules.Storages.uploadChanges('settings', [{
			key: 'crm',
			newValue: JSON.parse(JSON.stringify(modules.crm.crmTree)),
			oldValue: {} as any
		}]);
		TS.compileAllInTree();
		await updateCRMValues();
		await buildPageCRM();
		await modules.MessageHandling.signalNewCRM();

		toUpdate && await modules.Storages.checkBackgroundPagesForChange({
			toUpdate
		});
	}
	export async function updateCRMValues() {
		const crmBefore = JSON.stringify(modules.storages.settingsStorage.crm);
		await modules.Util.crmForEachAsync(modules.storages.settingsStorage.crm, async (node) => {
			if (!node.id && node.id !== 0) {
				node.id = await modules.Util.generateItemId();
			}
		});

		const match = crmBefore === JSON.stringify(modules.storages.settingsStorage.crm);

		modules.crm.crmTree = modules.storages.settingsStorage.crm;
		modules.crm.safeTree = buildSafeTree(modules.storages.settingsStorage.crm);
		buildNodePaths(modules.crm.crmTree);
		buildByIdObjects();

		if (!match) {
			await modules.Storages.uploadChanges('settings', [{
				key: 'crm',
				newValue: JSON.parse(JSON.stringify(modules.crm.crmTree)),
				oldValue: {} as any
			}]);
		}
	}
	export function makeSafe(node: CRM.Node): CRM.SafeNode {
		let newNode: CRM.SafeNode = {} as any;
		if (node.children) {
			const menuNode = newNode as CRM.SafeMenuNode;
			menuNode.children = [];
			for (let i = 0; i < node.children.length; i++) {
				menuNode.children[i] = makeSafe(node.children[i]);
			}
			newNode = menuNode;
		}

		const copy = createCopyFunction(node, newNode);

		copy([
			'id', 'path', 'type', 'name', 'value', 'linkVal',
			'menuVal', 'scriptVal', 'stylesheetVal', 'nodeInfo',
			'triggers', 'onContentTypes', 'showOnSpecified'
		]);
		return newNode as CRM.SafeNode;
	}
	export function handleUserAddedContextMenuErrors() {
		const __window = window as any;
		if (__window.chrome && __window.chrome.runtime) {
			const __chrome: typeof _chrome = __window.chrome;
			if (__chrome && __chrome.runtime && __chrome.runtime.lastError) {
				window.log('Error recreating user contextmenu',
					__chrome.runtime.lastError)
			}
		} else {
			if (browserAPI.runtime.lastError) {
				window.log('Error recreating user contextmenu',
					browserAPI.runtime.lastError)
			}
		}
	}
	async function createUserContextMenuTree(tree: UserAddedContextMenu[]) {
		const menus = modules.crmValues.userAddedContextMenus;
		const byId = modules.crmValues.userAddedContextMenusById;
		for (const menu of menus) {
			const { children, createProperties } = menu;
			const { parentId } = createProperties;
			if (parentId && byId.get(parentId)) {
				//Map mapped value to actual value
				createProperties.parentId = byId.get(parentId).actualId;
			}
			const actualId = await browserAPI.contextMenus.create(createProperties, 
				handleUserAddedContextMenuErrors);
			menu.actualId = actualId;

			createUserContextMenuTree(children);
		}
	}
	export async function addUserAddedContextMenuItems() {
		createUserContextMenuTree(modules.crmValues.userAddedContextMenus);
	}
	export function buildPageCRM() {
		return new Promise<void>((resolve) => {
			modules.crmValues.nodeTabStatuses = new window.Map();
			browserAPI.contextMenus.removeAll().then(async () => {
				modules.crmValues.rootId = await browserAPI.contextMenus.create({
					title: modules.storages.settingsStorage.rootName || 'Custom Menu',
					contexts: ['all']
				});
				modules.toExecuteNodes = {
					onUrl: {
						documentStart: [],
						documentEnd: []
					},
					always: {
						documentStart: [],
						documentEnd: []
					}
				};
				modules.Util.promiseChain(modules.crm.crmTree.map((node, index) => {
					return () => {
						return new Promise<void>((resolveInner) => {
							buildPageCRMTree(node, modules.crmValues.rootId, [index], 
								modules.crmValues.contextMenuItemTree).then((result) => {
									if (result) {
										modules.crmValues.contextMenuItemTree[index] = {
											index, node,
											id: result.id,
											enabled: true,
											parentId: modules.crmValues.rootId,
											children: result.children,
											parentTree: modules.crmValues.contextMenuItemTree
										};
									}
									resolveInner(null);
								});
						});
					}
				})).then(() => {
					addUserAddedContextMenuItems().then(async () => {
						if (modules.storages.storageLocal.showOptions) {
							const tree = modules.crmValues.contextMenuItemTree;
							const index = tree.length;
							tree[index] = {
								index,
								id: await browserAPI.contextMenus.create({
									type: 'separator',
									parentId: modules.crmValues.rootId
								}),
								enabled: true,
								node: null,
								parentId: modules.crmValues.rootId,
								children: [],
								parentTree: tree
							};
							tree[index + 1] = {
								index: index + 1,
								id: await browserAPI.contextMenus.create({
									title: 'Options',
									onclick: createOptionsPageHandler(),
									parentId: modules.crmValues.rootId
								}),
								enabled: true,
								node: null,
								parentId: modules.crmValues.rootId,
								children: [],
								parentTree: tree
							};
						}
						resolve(null);
					});
				});
			});
		});
	}
	export function getContexts(contexts: CRM.ContentTypes): _browser.contextMenus.ContextType[] {
		const newContexts: _browser.contextMenus.ContextType[] = ['browser_action'];
		const textContexts = modules.constants.contexts;
		for (let i = 0; i < 6; i++) {
			if (contexts[i]) {
				newContexts.push(textContexts[i]);
			}
		}
		if (contexts[0]) {
			newContexts.push('editable');
		}
		return newContexts;
	}
	export async function converToLegacy(): Promise<{
		[key: number]: string;
		[key: string]: string;
	}> {
		const { arr } = walkCRM(modules.crm.crmTree, {
			arr: []
		});

		const res: {
			[key: number]: string;
			[key: string]: string;
		} = {};

		for (let i = 0; i < arr.length; i++) {
			res[i] = await convertNodeToLegacy(arr[i]);
		}

		res.customcolors = '0';
		res.firsttime = 'no';
		res.noBeatAnnouncement = 'true';
		res.numberofrows = arr.length + '';
		res.optionson = modules.storages.storageLocal.showOptions.toString();
		res.scriptoptions = '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0';
		res.waitforsearch = 'false';
		res.whatpage = 'false';

		res.indexIds = JSON.stringify(arr.map((node) => {
			return node.id;
		}));

		return res;
	}

	export function fixOptionsErrors(options: string): string;
	export function fixOptionsErrors(options: CRM.Options): CRM.Options;
	export function fixOptionsErrors(options: CRM.Options|string): CRM.Options|string;
	export function fixOptionsErrors(options: CRM.Options|string): CRM.Options|string {
		if (typeof options === 'string') {
			return options;
		}
		for (const key in options) {
			const value = options[key];
			if (value.type === 'choice') {
				//If nothing is selected, select the first item
				const choice = value as CRM.OptionChoice;
				if (typeof choice.selected !== 'number' ||
					choice.selected > choice.values.length ||
					choice.selected < 0) {
						choice.selected = 0;
					}
			}
			options[key] = value;
		}
		return options;
	}
	async function convertNodeToLegacy(node: CRM.Node): Promise<string> {
		switch (node.type) {
			case 'divider':
				return [node.name, 'Divider', ''].join('%123');
			case 'link':
				return [node.name, 'Link', node.value.map((val) => {
					return val.url;
				}).join(',')].join('%123');
			case 'menu':
				return [node.name, 'Menu', node.children.length].join('%123');
			case 'script':
				return [
					node.name,
					'Script', [
						node.value.launchMode,
						await modules.Util.getScriptNodeScript(node)
					].join('%124')
				].join('%123');
			case 'stylesheet':
				return [
					node.name,
					'Script',
					[
						node.value.launchMode,
						node.value.stylesheet
					].join('%124')
				].join('%123');
		}
	}
	function walkCRM(crm: CRM.Tree, state: {
		arr: CRM.Node[];
	}) {
		for (let i = 0; i < crm.length; i++) {
			const node = crm[i];
			state.arr.push(node);
			if (node.type === 'menu' && node.children) {
				walkCRM(node.children, state);
			}
		}
		return state;
	}
	function createCopyFunction(obj: CRM.Node,
		target: CRM.SafeNode): (props: string[]) => void {
			return (props: string[]) => {
				props.forEach((prop) => {
					if (prop in obj) {
						if (typeof obj[prop as keyof CRM.Node] === 'object') {
							(target as any)[prop as keyof CRM.SafeNode] = JSON.parse(JSON.stringify(obj[prop as keyof CRM.Node]));
						} else {
							(target as any)[prop] = obj[prop as keyof CRM.Node];
						}
					}
				});
			};
		}
	export function buildNodePaths(tree: CRM.Node[], currentPath: number[] = []) {
		for (let i = 0; i < tree.length; i++) {
			const childPath = currentPath.concat([i]);
			const child = tree[i];
			child.path = childPath;
			if (child.children) {
				buildNodePaths(child.children, childPath);
			}
		}
	}
	export function createOptionsPageHandler(): () => void {
		return () => {
			browserAPI.runtime.openOptionsPage();
		};
	}
	async function buildPageCRMTree(node: CRM.Node, parentId: string|number,
		path: number[],
		parentTree: ContextMenuItemTreeItem[]): Promise<{
			id: string|number;
			path: number[];
			enabled: boolean;
			children: ContextMenuItemTreeItem[];
			index?: number;
			parentId?: string|number;
			node?: CRM.Node;
			parentTree?: ContextMenuItemTreeItem[];
		}> {
		const id = await NodeCreation.createNode(node, parentId);
		modules.crmValues.contextMenuIds.set(node.id, id);
		if (id !== null) {
			const children = [];
			if (node.children) {
				let visibleIndex = 0;
				for (let i = 0; i < node.children.length; i++) {
					const newPath = JSON.parse(JSON.stringify(path));
					newPath.push(visibleIndex);
					const result: any = await buildPageCRMTree(node.children[i], id, newPath, children);
					if (result) {
						visibleIndex++;
						result.index = i;
						result.parentId = id;
						result.node = node.children[i];
						result.parentTree = parentTree;
						children.push(result);
					}
				}
			}
			modules.crmValues.contextMenuInfoById.get(id).path = path;
			return {
				id: id,
				path: path,
				enabled: true,
				children: children
			};
		}

		return null;
	}

	function parseNode(node: CRM.Node, isSafe: boolean = false) {
		if (isSafe) {
			modules.crm.crmByIdSafe.set(node.id, makeSafe(node));
		} else {
			modules.crm.crmById.set(node.id, node);
		}
		if (node.children && node.children.length > 0) {
			for (let i = 0; i < node.children.length; i++) {
				parseNode(node.children[i], isSafe);
			}
		}
	}

	function buildByIdObjects() {
		modules.crm.crmById = new window.Map();
		modules.crm.crmByIdSafe = new window.Map();
		for (let i = 0; i < modules.crm.crmTree.length; i++) {
			parseNode(modules.crm.crmTree[i]);
			parseNode(modules.crm.safeTree[i] as any, true);
		}
	}

	function safeTreeParse(node: CRM.Node): CRM.SafeNode {
		if (node.children) {
			const children = [];
			for (let i = 0; i < node.children.length; i++) {
				children.push(safeTreeParse(node.children[i]));
			}
			node.children = children as any;
		}
		return makeSafe(node);
	}

	function buildSafeTree(crm: CRM.Node[]): CRM.SafeNode[] {
		const treeCopy = JSON.parse(JSON.stringify(crm));
		const safeBranch = [];
		for (let i = 0; i < treeCopy.length; i++) {
			safeBranch.push(safeTreeParse(treeCopy[i]));
		}
		return safeBranch;
	}
}