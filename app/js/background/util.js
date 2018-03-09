"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Util;
(function (Util) {
    function initModule(_modules) {
        Util.modules = _modules;
    }
    Util.initModule = initModule;
    Util.jsonFn = {
        stringify: function (obj) {
            return JSON.stringify(obj, function (_, value) {
                if (value instanceof Function || typeof value === 'function') {
                    return value.toString();
                }
                if (value instanceof RegExp) {
                    return '_PxEgEr_' + value;
                }
                return value;
            });
        },
        parse: function (str, date2Obj) {
            var iso8061 = !date2Obj ? false :
                /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;
            return JSON.parse(str, function (key, value) {
                if (typeof value !== 'string') {
                    return value;
                }
                if (value.length < 8) {
                    return value;
                }
                var prefix = value.substring(0, 8);
                if (iso8061 && value.match(iso8061)) {
                    return new Date(value);
                }
                if (prefix === 'function') {
                    return eval("(" + value + ")");
                }
                if (prefix === '_PxEgEr_') {
                    return eval(value.slice(8));
                }
                return value;
            });
        }
    };
    function compareArray(firstArray, secondArray) {
        if (!firstArray && !secondArray) {
            return false;
        }
        else if (!firstArray || !secondArray) {
            return true;
        }
        var firstLength = firstArray.length;
        if (firstLength !== secondArray.length) {
            return false;
        }
        for (var i = 0; i < firstLength; i++) {
            if (typeof firstArray[i] === 'object') {
                if (typeof secondArray[i] !== 'object') {
                    return false;
                }
                if (Array.isArray(firstArray[i])) {
                    if (!Array.isArray(secondArray[i])) {
                        return false;
                    }
                    if (!compareArray(firstArray[i], secondArray[i])) {
                        return false;
                    }
                }
                else if (!_compareObj(firstArray[i], secondArray[i])) {
                    return false;
                }
            }
            else if (firstArray[i] !== secondArray[i]) {
                return false;
            }
        }
        return true;
    }
    Util.compareArray = compareArray;
    function safe(node) {
        return Util.modules.crm.crmByIdSafe[node.id];
    }
    Util.safe = safe;
    function createSecretKey() {
        var key = [];
        for (var i = 0; i < 25; i++) {
            key[i] = Math.round(Math.random() * 100);
        }
        if (!Util.modules.globalObject.globals.keys[key.join(',')]) {
            Util.modules.globalObject.globals.keys[key.join(',')] = true;
            return key;
        }
        else {
            return createSecretKey();
        }
    }
    Util.createSecretKey = createSecretKey;
    function generateItemId() {
        Util.modules.globalObject.globals.latestId =
            Util.modules.globalObject.globals.latestId || 0;
        Util.modules.globalObject.globals.latestId++;
        if (Util.modules.storages.settingsStorage) {
            Util.modules.Storages.applyChanges({
                type: 'optionsPage',
                settingsChanges: [{
                        key: 'latestId',
                        oldValue: Util.modules.globalObject.globals.latestId - 1,
                        newValue: Util.modules.globalObject.globals.latestId
                    }]
            });
        }
        return Util.modules.globalObject.globals.latestId;
    }
    Util.generateItemId = generateItemId;
    function convertFileToDataURI(url, callback, onError) {
        var xhr = new window.XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function () {
            var readerResults = [null, null];
            var blobReader = new FileReader();
            blobReader.onloadend = function () {
                readerResults[0] = blobReader.result;
                if (readerResults[1]) {
                    callback(readerResults[0], readerResults[1]);
                }
            };
            blobReader.readAsDataURL(xhr.response);
            var textReader = new FileReader();
            textReader.onloadend = function () {
                readerResults[1] = textReader.result;
                if (readerResults[0]) {
                    callback(readerResults[0], readerResults[1]);
                }
            };
            textReader.readAsText(xhr.response);
        };
        if (onError) {
            xhr.onerror = onError;
        }
        xhr.open('GET', url);
        xhr.send();
    }
    Util.convertFileToDataURI = convertFileToDataURI;
    function isNewer(newVersion, oldVersion) {
        var newSplit = newVersion.split('.');
        var oldSplit = oldVersion.split('.');
        var longest = Math.max(newSplit.length, oldSplit.length);
        for (var i = 0; i < longest; i++) {
            var newNum = ~~newSplit[i];
            var oldNum = ~~oldSplit[i];
            if (newNum > oldNum) {
                return true;
            }
            else if (newNum < oldNum) {
                return false;
            }
        }
        return false;
    }
    Util.isNewer = isNewer;
    function pushIntoArray(toPush, position, target) {
        if (position === target.length) {
            target[position] = toPush;
        }
        else {
            var length_1 = target.length + 1;
            var temp1 = target[position];
            var temp2 = toPush;
            for (var i = position; i < length_1; i++) {
                target[i] = temp2;
                temp2 = temp1;
                temp1 = target[i + 1];
            }
        }
        return target;
    }
    Util.pushIntoArray = pushIntoArray;
    function flattenCrm(searchScope, obj) {
        searchScope.push(obj);
        if (obj.type === 'menu' && obj.children) {
            for (var _i = 0, _a = obj.children; _i < _a.length; _i++) {
                var child = _a[_i];
                flattenCrm(searchScope, child);
            }
        }
    }
    Util.flattenCrm = flattenCrm;
    function removeTab(tabId) {
        var nodeStatusses = Util.modules.crmValues.stylesheetNodeStatusses;
        for (var nodeId in nodeStatusses) {
            if (nodeStatusses[nodeId][tabId]) {
                delete nodeStatusses[nodeId][tabId];
            }
        }
        delete Util.modules.crmValues.tabData[tabId];
    }
    Util.removeTab = removeTab;
    function leftPad(char, amount) {
        var res = '';
        for (var i = 0; i < amount; i++) {
            res += char;
        }
        return res;
    }
    Util.leftPad = leftPad;
    function getLastItem(arr) {
        return arr[arr.length - 1];
    }
    Util.getLastItem = getLastItem;
    function endsWith(haystack, needle) {
        return haystack.split('').reverse().join('')
            .indexOf(needle.split('').reverse().join('')) === 0;
    }
    Util.endsWith = endsWith;
    function isTamperMonkeyEnabled(callback) {
        if (window.chrome && window.chrome.management) {
            window.chrome.management.getAll(function (installedExtensions) {
                var TMExtensions = installedExtensions.filter(function (extension) {
                    return Util.modules.constants.tamperMonkeyExtensions
                        .indexOf(extension.id) > -1 && extension.enabled;
                });
                callback(TMExtensions.length > 0);
            });
        }
        else {
            callback(false);
        }
    }
    Util.isTamperMonkeyEnabled = isTamperMonkeyEnabled;
    function execFile(path) {
        return __awaiter(this, void 0, void 0, function () {
            var fileContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (_requiredFiles.indexOf(path) > -1) {
                            return [2];
                        }
                        return [4, _loadFile(path, 'Fetching library file', path)];
                    case 1:
                        fileContent = _a.sent();
                        eval(fileContent);
                        _requiredFiles.push(path);
                        return [2];
                }
            });
        });
    }
    Util.execFile = execFile;
    function getScriptNodeJS(script, type) {
        if (type === void 0) { type = 'script'; }
        return type === 'background' ?
            script.value.backgroundScript : script.value.script;
    }
    Util.getScriptNodeJS = getScriptNodeJS;
    function getScriptNodeScript(script, type) {
        if (type === void 0) { type = 'script'; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(script.value.ts && script.value.ts.enabled)) return [3, 2];
                        return [4, Util.modules.CRMNodes.TS.compileNode(script)];
                    case 1:
                        _a.sent();
                        return [2, type === 'background' ?
                                script.value.ts.backgroundScript.compiled :
                                script.value.ts.script.compiled];
                    case 2: return [2, getScriptNodeJS(script, type)];
                }
            });
        });
    }
    Util.getScriptNodeScript = getScriptNodeScript;
    function canRunOnUrl(url) {
        return __awaiter(this, void 0, void 0, function () {
            var allowed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!url || url.indexOf('chrome://') !== -1) {
                            return [2, false];
                        }
                        return [4, browserAPI.extension.isAllowedFileSchemeAccess()];
                    case 1:
                        allowed = _a.sent();
                        if (allowed) {
                            return [2, true];
                        }
                        return [2, url.indexOf('file://') !== -1];
                }
            });
        });
    }
    Util.canRunOnUrl = canRunOnUrl;
    function xhr(url, msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        var xhr = new window.XMLHttpRequest();
                        xhr.open('GET', url);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === window.XMLHttpRequest.LOADING) {
                                msg.length > 0 && window.info.apply(console, msg);
                            }
                            if (xhr.readyState === window.XMLHttpRequest.DONE) {
                                if (xhr.status >= 200 && xhr.status < 300) {
                                    resolve(xhr.responseText);
                                }
                                else {
                                    reject(new Error('Failed XHR'));
                                }
                            }
                        };
                        xhr.send();
                    })];
            });
        });
    }
    Util.xhr = xhr;
    function proxyPromise(promise, rejectHandler) {
        return new Promise(function (resolve) {
            promise.then(function (result) {
                resolve(result);
            })["catch"](function (err) {
                rejectHandler && rejectHandler(err);
                resolve(null);
            });
        });
    }
    Util.proxyPromise = proxyPromise;
    function wait(duration) {
        return new Promise(function (resolve) {
            window.setTimeout(function () {
                resolve(null);
            }, duration);
        });
    }
    Util.wait = wait;
    function iipe(fn) {
        return fn();
    }
    Util.iipe = iipe;
    function createArray(length) {
        var arr = [];
        for (var i = 0; i < length; i++) {
            arr[i] = undefined;
        }
        return arr;
    }
    Util.createArray = createArray;
    function promiseChain(initializers) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!initializers[0]) {
                return resolve(null);
            }
            initializers[0]().then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!initializers[1]) return [3, 2];
                            return [4, promiseChain(initializers.slice(1))];
                        case 1:
                            result = _a.sent();
                            _a.label = 2;
                        case 2:
                            resolve(result);
                            return [2];
                    }
                });
            }); });
        });
    }
    Util.promiseChain = promiseChain;
    function postMessage(port, message) {
        port.postMessage(message);
    }
    Util.postMessage = postMessage;
    function crmForEach(crm, fn) {
        for (var _i = 0, crm_1 = crm; _i < crm_1.length; _i++) {
            var node = crm_1[_i];
            fn(node);
            if (node.type === 'menu' && node.children) {
                crmForEach(node.children, fn);
            }
        }
    }
    Util.crmForEach = crmForEach;
    function crmForEachAsync(crm, fn) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, crm_2, node;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, crm_2 = crm;
                        _a.label = 1;
                    case 1:
                        if (!(_i < crm_2.length)) return [3, 5];
                        node = crm_2[_i];
                        return [4, fn(node)];
                    case 2:
                        _a.sent();
                        if (!(node.type === 'menu' && node.children)) return [3, 4];
                        return [4, crmForEach(node.children, fn)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3, 1];
                    case 5: return [2];
                }
            });
        });
    }
    Util.crmForEachAsync = crmForEachAsync;
    var _requiredFiles = [];
    function _loadFile(path) {
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        return xhr(browserAPI.runtime.getURL(path), msg);
    }
    function _compareObj(firstObj, secondObj) {
        for (var key in firstObj) {
            if (firstObj.hasOwnProperty(key) && firstObj[key] !== undefined) {
                if (typeof firstObj[key] === 'object') {
                    if (typeof secondObj[key] !== 'object') {
                        return false;
                    }
                    if (Array.isArray(firstObj[key])) {
                        if (!Array.isArray(secondObj[key])) {
                            return false;
                        }
                        if (!compareArray(firstObj[key], secondObj[key])) {
                            return false;
                        }
                    }
                    else if (!_compareObj(firstObj[key], secondObj[key])) {
                        return false;
                    }
                }
                else if (firstObj[key] !== secondObj[key]) {
                    return false;
                }
            }
        }
        return true;
    }
})(Util = exports.Util || (exports.Util = {}));
