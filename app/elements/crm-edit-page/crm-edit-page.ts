﻿/// <reference path="../elements.d.ts" />

namespace CrmEditPageElement {
	export const crmEditPageProperties: {
		item: CRM.Node;
		nodeInfo: CRM.NodeInfo;
		hideUpdateMessage: boolean;
	} = {
		/**
		 * The item to edit
		 */
		item: {
			type: Object,
			value: null,
			notify: true
		},
		/**
		 * The nodeInfo to display
		 */
		nodeInfo: {
			type: Object,
			value: {},
			notify: true
		},
		/**
		 * Whether to hide the update message
		 */
		hideUpdateMessage: {
			type: Boolean,
			value: true,
			notify: true
		}
	} as any;

	export class CEP {
		static is: string = 'crm-edit-page';

		/**
		 * Whether the item is a link
		 */
		static isLink: boolean = false;

		/**
		 * Whether the item is a script
		 */
		static isScript: boolean = false;

		/**
		 * Whether the item is a divider
		 */
		static isDivider: boolean = false;

		/**
		 * Whether the item is a menu
		 */
		static isMenu: boolean = false;

		/**
		 * Whether the item is a stylesheet
		 */
		static isStylesheet: boolean = false;

		/**
		 * The link item
		 */
		private static linkItem: CRM.LinkNode = {} as any;

		/**
		 * The script item
		 */
		private static scriptItem: CRM.ScriptNode = {} as any;

		/**
		 * The divider item
		 */
		private static dividerItem: CRM.DividerNode = {} as any;

		/**
		 * The menu item
		 */
		private static menuItem: CRM.MenuNode = {} as any;

		/**
		 * The stylesheet item
		 */
		private static stylesheetItem: CRM.StylesheetNode = {} as any;

		/**
		 * Whether the page is opened
		 */
		private static opened: boolean =  false;

		/**
		 * The backdrop element associated with the current dialog
		 */
		private static backdropEl: HTMLElement;

		/**
		 * The overlayEl animation
		 */
		private static overlayAnimation: Animation = null;

		static properties = crmEditPageProperties;

		static listeners = {
			"neon-animation-finish": '_onNeonAnimationFinish'
		};

		private static isLocal(this: CrmEditPage, source: {
			updateURL?: string;
			downloadURL?: string;
			url?: string;
			author?: string;
		}|string): source is string {
			if (!source) {
				return true;
			}
			return source === 'local' || this.item.isLocal;
		};

		private static nodeInfoExists(nodeInfo: CRM.NodeInfo): boolean {
			return !!nodeInfo;
		};

		static hideNodeInfo(this: CrmEditPage, nodeInfo: CRM.NodeInfo): boolean {
			return !this.nodeInfoExists(nodeInfo) ||
				(this.isLocal(nodeInfo.source) && !this.hasInstallDate(nodeInfo));
		};

		private static hasInstallDate(nodeInfo: CRM.NodeInfo): boolean {
			return this.nodeInfoExists(nodeInfo) && !!nodeInfo.installDate;
		};

		private static onAnimationDone(this: CrmEditPage) {
			if (!this.opened) {
				this.backdropEl.style.display = 'none';
				this.$.overlayCont.style.display = 'none';
				document.body.style.overflow = 'auto';
				document.body.style.marginRight = '0';
				window.app.show = false;
				this.opened = false;
				window.app.item = null;
				this.unassignItems();
			}
		};

		private static unassignItems(this: CrmEditPage) {
			this.isLink = this.isScript = this.isStylesheet = this.isMenu = this.isDivider = false;
			this.linkItem = this.scriptItem = this.stylesheetItem = this.menuItem = this.dividerItem = {} as any;
		};

		private static animateIn(this: CrmEditPage) {
			this.backdropEl.style.display = 'block';
			(this.overlayAnimation && this.overlayAnimation.play()) || (this.overlayAnimation = this.backdropEl.animate([
				{
					opacity: 0
				}, {
					opacity: 0.3
				}
			], {
				duration: 300,
				fill: 'both',
				easing: 'bez'
			}));
				
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = '17px';
			window.app.show = true;
			this.opened = true;
			this.$.overlayCont.style.display = 'block';
			this.$.overlayCont.animate([{
				transform: 'scale(0)'
			}, {
				transform: 'scale(1)'
			}], {
				easing: 'bez',
				duration: 300,
				fill: 'forwards'
			});
		};
		
		static animateOut(this: CrmEditPage) {
			this.overlayAnimation.reverse();
			const animation = this.$.overlayCont.animate([{
				transform: 'scale(0)'
			}, {
				transform: 'scale(1)'
			}], {
				easing: 'bez',
				duration: 300,
				fill: 'forwards'
			});
			animation.reverse();
			animation.onfinish = () => {
				this.onAnimationDone();
			}
			this.opened = false;
			document.body.parentElement.style.overflow = 'auto';
		};

		static updateName(this: CrmEditPage, value: any) {
			this.notifyPath('item.name', value);
		};

		static showUpgradeNotice(hideUpdateMessage: boolean, node: CRM.Node): boolean {
			return !hideUpdateMessage && (node && node.type === 'script' && node.value && node.value.updateNotice);
		};

		static getScriptUpdateStatus(node: CRM.Node): string {
			if (node) {
				if (window.app.storageLocal.upgradeErrors) {
					if (window.app.storageLocal.upgradeErrors[node.id]) {
						return 'Some errors have occurred in updating this script. Please resolve them by clicking the link and replace any chrome ' +
							'calls on error lines with their CRM API equivalent.';
					}
				}
				return 'No errors have been detected in updating this script but this is no guarantee it will work, be sure to test it at least once.';
			}
			return '';
		};

		static hideUpdateMergeDialog(this: CrmEditPage) {
			if (this.showUpgradeNotice(this.hideUpdateMessage, this.item)) {
				var height = this.$.scriptUpdateNotice.getBoundingClientRect().height;
				var marginBot = '-' + height + 'px';
				this.$.scriptUpdateNotice.animate([
					{
						marginBottom: '0px'
					}, {
						marginBottom: marginBot
					}
				], {
					duration: 350,
					easing: 'bez'
				}).onfinish = () => {
					this.$.scriptUpdateNotice.style.marginBottom = marginBot;
					this.hideUpdateMessage = true;
				};
			}
			window.scriptEdit.newSettings.value.updateNotice = false;
		};

		static showScriptUpdateDiff(this: CrmEditPage) {
			var oldScript = (this.item as CRM.ScriptNode).value.oldScript;
			var newScript = (this.item as CRM.ScriptNode).value.script;
			const chooseDialog = window.doc.externalEditorChooseFile;
			chooseDialog.init(oldScript, newScript, (chosenScript: string) => {
				if (window.app.storageLocal.upgradeErrors) {
					delete window.app.storageLocal.upgradeErrors[this.item.id];
				}
				const editor = window.scriptEdit.editorManager.editor;
				if (!window.scriptEdit.editorManager.isDiff(editor)) {
					editor.setValue(chosenScript);
				}
				setTimeout(() => {
					this.hideUpdateMergeDialog();
				}, 250);
				chrome.storage.local.set({
					upgradeErrors: window.app.storageLocal.upgradeErrors || {}
				});
			}, true, window.app.storageLocal.upgradeErrors && window.app.storageLocal.upgradeErrors[this.item.id]);
			window.externalEditor.showMergeDialog(window.externalEditor, oldScript, newScript);
			chooseDialog.open();
		};

		static getInstallDateTextFormat(this: CrmEditPage) {
			if (window.Intl && typeof window.Intl === 'object' && this.nodeInfo) {
				const format = (new Date('1-13-2016').toLocaleDateString() === '1-13-2016' ? 'eu' : 'na');
				let date;
				if (format === 'eu') {
					date = this.nodeInfo.installDate.split('-');
					date = date[1] + '-' + date[0] + '-' + date[2];
				} else {
					date = this.nodeInfo.installDate;
				}
				date = new Date(date);
				return Math.floor(new Date(Date.now() - date.getMilliseconds()).getMilliseconds() / (1000 * 60 * 60 * 24)) + ' days ago';
			}
			return null;
		};

		static ready(this: CrmEditPage) {
			$(this.$$('.popupCont')).click(function(e) {
				e.stopPropagation();
			});
			window.onExists('app').then(() => {
				this.backdropEl = window.app.$$('.backdropCont');
				window.crmEditPage = this;
				this.isLink = this.isMenu = this.isScript = this.isDivider = false;

				this.$.nodeInfoVersion.addEventListener('input', () => {
					this.item.nodeInfo.version = this.$.nodeInfoVersion.innerText.length > 0 ?
						this.$.nodeInfoVersion.innerText : '1.0';
				});
			});
		};
		
		static init(this: CrmEditPage) {
			const valueStorer: {
				isScript: boolean;
				isLink: boolean;
				isMenu: boolean;
				isDivider: boolean;
				isStylesheet: boolean;
			} = {
				isScript: false,
				isLink: false,
				isDivider: false,
				isMenu: false,
				isStylesheet: false
			};
			this.hideUpdateMessage = false;
			this.scriptItem = this.linkItem = this.dividerItem = this.menuItem = this.stylesheetItem = {} as any;
			const node = this.item;
			if ((valueStorer.isScript = node.type === 'script')) {
				this.scriptItem = node as CRM.ScriptNode;
				valueStorer.isLink = valueStorer.isMenu = valueStorer.isDivider = valueStorer.isStylesheet = false;
			} else if ((valueStorer.isLink = node.type === 'link')) {
				this.linkItem = node as CRM.LinkNode;
				valueStorer.isMenu = valueStorer.isDivider = valueStorer.isStylesheet = false;
			} else if ((valueStorer.isStylesheet = node.type === 'stylesheet')) {
				this.stylesheetItem = node as CRM.StylesheetNode;
				valueStorer.isMenu = valueStorer.isDivider = false;
			} else if ((valueStorer.isMenu = node.type === 'menu')) {
				this.menuItem = node as CRM.MenuNode;
				valueStorer.isDivider = false;
			} else {
				valueStorer.isDivider = true;
				this.dividerItem = node as CRM.DividerNode;

			}
			setTimeout(() => {
				window.app.show = true;
				this.isScript = valueStorer.isScript;
				this.isLink = valueStorer.isLink;
				this.isMenu = valueStorer.isMenu;
				this.isDivider = valueStorer.isDivider;
				this.isStylesheet = valueStorer.isStylesheet;
				const page = this.shadowRoot.querySelector('#editPageCont > :not([hidden])') as EditPage;
				page.init.apply(page);
				this.animateIn();
			}, 300);
		}
	}

	if (window.objectify) {
		Polymer(window.objectify(CEP));
	} else {
		window.addEventListener('ObjectifyReady', () => {
			Polymer(window.objectify(CEP));
		});
	}
}

type CrmEditPage = Polymer.El<'crm-edit-page',
	typeof CrmEditPageElement.CEP & typeof CrmEditPageElement.crmEditPageProperties
>;