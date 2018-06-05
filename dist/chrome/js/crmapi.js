/*
 * Original can be found at https://github.com/SanderRonde/CustomRightClickMenu 
 * This code may only be used under the MIT style license found in the LICENSE.txt file 
**/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (window) {
    function runtimeGetURL(url) {
        if (typeof browserAPI !== 'undefined') {
            return browserAPI.runtime.getURL(url);
        }
        else if ('chrome' in window) {
            return window.chrome.runtime.getURL(url);
        }
        else {
            return url;
        }
    }
    function runtimeConnect(id, options) {
        if (typeof browserAPI !== 'undefined') {
            return browserAPI.runtime.connect(id, options);
        }
        else if ('chrome' in window) {
            return window.chrome.runtime.connect(id, options);
        }
        else {
            return null;
        }
    }
    var localStorageProxy = {};
    try {
        Object.defineProperty(window, 'localStorageProxy', {
            get: function () {
                return localStorageProxy;
            }
        });
    }
    catch (e) {
    }
    Object.defineProperty(localStorageProxy, 'getItem', {
        get: function () {
            return function (key) {
                return localStorage[key];
            };
        }
    });
    var localStorageProxyData = {
        onSet: function (key, value) {
        }
    };
    Object.defineProperty(localStorageProxy, 'setItem', {
        get: function () {
            return localStorageProxyData.onSet;
        }
    });
    Object.defineProperty(localStorageProxy, 'clear', {
        get: function () {
            return function () { };
        }
    });
    function mapObject(obj, privateKeys) {
        var privateData = {};
        var privateValues = {};
        var _loop_1 = function (key) {
            if (privateKeys.indexOf(key) === -1) {
                Object.defineProperty(privateValues, key, {
                    get: function () {
                        return obj[key];
                    },
                    set: function (value) {
                        obj[key] = value;
                    }
                });
            }
            else {
                Object.defineProperty(privateValues, key, {
                    get: function () {
                        return privateData[key];
                    },
                    set: function (value) {
                        privateData[key] = value;
                    }
                });
                privateData[key] = obj[key];
            }
        };
        for (var key in obj) {
            _loop_1(key);
        }
        return privateValues;
    }
    function removePrivateValues(target, privateKeys) {
        for (var _i = 0, privateKeys_1 = privateKeys; _i < privateKeys_1.length; _i++) {
            var privateKey = privateKeys_1[_i];
            target[privateKey] = undefined;
        }
    }
    var DataMap = (function () {
        function DataMap() {
            this._store = [];
        }
        DataMap.prototype.set = function (key, value) {
            this._store.push([key, value]);
        };
        DataMap.prototype.get = function (key) {
            for (var _i = 0, _a = this._store; _i < _a.length; _i++) {
                var _b = _a[_i], storeKey = _b[0], storeData = _b[1];
                if (key === storeKey) {
                    return storeData;
                }
            }
            return null;
        };
        return DataMap;
    }());
    function getFunctionThisMap(original, thisMap, thisArgs) {
        var newFn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return original.apply(thisMap.get(this) || this, args);
        };
        var _loop_2 = function (key) {
            if (typeof original[key] === 'function') {
                newFn[key] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return original[key].apply(thisMap.get(this) || this, args);
                };
                if (thisArgs.indexOf(newFn) === -1) {
                    thisArgs.push(newFn);
                }
            }
            else {
                newFn[key] = original[key];
            }
        };
        for (var key in original) {
            _loop_2(key);
        }
        newFn.prototype = original.prototype;
        return newFn;
    }
    function mapObjThisArgs(target, thisMap, thisArgs) {
        var windowVar = typeof window === 'undefined' ? self : window;
        var hasKeys = false;
        for (var key in target) {
            if (!hasKeys) {
                hasKeys = true;
                if (thisArgs.indexOf(target) === -1) {
                    thisArgs.push(target);
                }
            }
            var value = target[key];
            if (value === windowVar || !value || key === '_chromeRequest') {
                continue;
            }
            switch (typeof value) {
                case 'function':
                    target[key] = getFunctionThisMap(value, thisMap, thisArgs);
                    break;
                case 'object':
                    var htmlEl = window.HTMLElement;
                    if (htmlEl && value instanceof htmlEl) {
                        target[key] = value;
                    }
                    else {
                        mapObjThisArgs(value, thisMap, thisArgs);
                    }
                    break;
            }
        }
    }
    function truePrivateClass(target) {
        var thisMap = new DataMap();
        var proto = target.prototype;
        var thisArgs = [];
        return (function (_super) {
            __extends(class_1, _super);
            function class_1(node, id, tabData, clickData, secretKey, nodeStorage, contextData, greasemonkeyData, isBackground, options, enableBackwardsCompatibility, tabIndex, extensionId, supportedAPIs, nodeStorageSync) {
                var _this = _super.call(this, node, id, tabData, clickData, secretKey, nodeStorage, contextData, greasemonkeyData, isBackground, options, enableBackwardsCompatibility, tabIndex, extensionId, supportedAPIs, nodeStorageSync) || this;
                mapObjThisArgs(_this, thisMap, thisArgs);
                var mapped = mapObject(_this, proto.__privates__);
                thisMap.set(_this, mapped);
                thisMap.set(mapped, mapped);
                thisArgs.forEach(function (thisArg) {
                    thisMap.set(thisArg, mapped);
                });
                removePrivateValues(_this, proto.__privates__);
                _this._init(node, id, tabData, clickData, secretKey, nodeStorage, contextData, greasemonkeyData, isBackground, options, enableBackwardsCompatibility, tabIndex, extensionId, supportedAPIs);
                return _this;
            }
            return class_1;
        }(target));
    }
    function makePrivate(target, name) {
        target.__privates__ = (target.__privates__ || []).concat([name]);
    }
    var CrmAPIInstance = (function () {
        function CrmAPIInstance(node, id, tabData, clickData, secretKey, nodeStorage, contextData, greasemonkeyData, isBackground, options, enableBackwardsCompatibility, tabIndex, extensionId, supportedAPIs, nodeStorageSync) {
            var _this = this;
            this.__privates = {
                _node: null,
                _id: null,
                _tabData: null,
                _clickData: null,
                _secretKey: null,
                _nodeStorage: null,
                _nodeStorageSync: null,
                _contextData: null,
                _greasemonkeyData: null,
                _isBackground: null,
                _options: null,
                _enableBackwardsCompatibility: null,
                _tabIndex: null,
                _instanceId: null,
                _extensionId: null,
                _supportedAPIs: null,
                _sendMessage: null,
                _queue: [],
                _port: {
                    postMessage: null,
                    onMessage: {
                        addListener: null
                    }
                },
                _findElementsOnPage: function (contextData) {
                    if (typeof window.document === 'undefined' || !contextData) {
                        this.contextData = {
                            target: null,
                            toElement: null,
                            srcElement: null
                        };
                        return;
                    }
                    var targetClass = 'crm_element_identifier_' + contextData.target;
                    var toElementClass = 'crm_element_identifier_' + contextData.toElement;
                    var srcElementClass = 'crm_element_identifier_' + contextData.srcElement;
                    this.contextData = {
                        target: window.document.querySelector('.' + targetClass),
                        toElement: window.document.querySelector('.' + toElementClass),
                        srcElement: window.document.querySelector('.' + srcElementClass)
                    };
                    this.contextData.target && this.contextData.target.classList.remove(targetClass);
                    this.contextData.toElement && this.contextData.toElement.classList.remove(toElementClass);
                    this.contextData.srcElement && this.contextData.srcElement.classList.remove(srcElementClass);
                },
                _setupBrowserAPI: function (instance) {
                    var __this = this;
                    var listener = {
                        addListener: function () { },
                        removeListener: function () { }
                    };
                    instance.browser = __assign({}, this._wrapBrowserObject({
                        alarms: {
                            create: function () { },
                            get: function () { },
                            getAll: function () { },
                            clear: function () { },
                            clearAll: function () { },
                            onAlarm: listener
                        },
                        bookmarks: {
                            create: function () { },
                            get: function () { },
                            getChildren: function () { },
                            getRecent: function () { },
                            getSubTree: function () { },
                            getTree: function () { },
                            move: function () { },
                            remove: function () { },
                            removeTree: function () { },
                            search: function () { },
                            update: function () { },
                            onCreated: listener,
                            onRemoved: listener,
                            onChanged: listener,
                            onMoved: listener
                        },
                        browserAction: {
                            setTitle: function () { },
                            getTitle: function () { },
                            setIcon: function () { },
                            setPopup: function () { },
                            getPopup: function () { },
                            openPopup: function () { },
                            setBadgeText: function () { },
                            getBadgeText: function () { },
                            setBadgeBackgroundColor: function () { },
                            getBadgeBackgroundColor: function () { },
                            enable: function () { },
                            disable: function () { },
                            onClicked: listener
                        },
                        browsingData: {
                            remove: function () { },
                            removeCache: function () { },
                            removeCookies: function () { },
                            removeDownloads: function () { },
                            removeFormData: function () { },
                            removeHistory: function () { },
                            removePasswords: function () { },
                            removePluginData: function () { },
                            settings: function () { }
                        },
                        commands: {
                            getAll: function () { },
                            onCommand: listener
                        },
                        contextMenus: {
                            create: function () { },
                            update: function () { },
                            remove: function () { },
                            removeAll: function () { },
                            onClicked: listener
                        },
                        contextualIdentities: {
                            create: function () { },
                            get: function () { },
                            query: function () { },
                            update: function () { },
                            remove: function () { }
                        },
                        cookies: {
                            get: function () { },
                            getAll: function () { },
                            set: function () { },
                            remove: function () { },
                            getAllCookieStores: function () { },
                            onChanged: listener
                        },
                        devtools: {
                            inspectedWindow: {
                                eval: function () { },
                                reload: function () { }
                            },
                            network: {
                                onNavigated: listener
                            },
                            panels: {
                                create: function () { }
                            }
                        },
                        downloads: {
                            download: function () { },
                            search: function () { },
                            pause: function () { },
                            resume: function () { },
                            cancel: function () { },
                            open: function () { },
                            show: function () { },
                            showDefaultFolder: function () { },
                            erase: function () { },
                            removeFile: function () { },
                            onCreated: listener,
                            onErased: listener,
                            onChanged: listener
                        },
                        extension: {
                            getURL: function () { },
                            getViews: function () { },
                            getBackgroundPage: function () { },
                            isAllowedIncognitoAccess: function () { },
                            isAllowedFileSchemeAccess: function () { }
                        },
                        history: {
                            search: function () { },
                            getVisits: function () { },
                            addUrl: function () { },
                            deleteUrl: function () { },
                            deleteRange: function () { },
                            deleteAll: function () { },
                            onVisited: listener,
                            onVisitRemoved: listener
                        },
                        i18n: {
                            getAcceptLanguage: function () { },
                            getMessage: function () { },
                            getUILanguage: function () { },
                            detectLanguage: function () { }
                        },
                        identity: {
                            getRedirectURL: function () { },
                            launchWebAuthFlow: function () { }
                        },
                        idle: {
                            queryState: function () { },
                            setDetectionInterval: function () { },
                            onStateChanged: listener
                        },
                        management: {
                            getSelf: function () { },
                            uninstallSelf: function () { }
                        },
                        notifications: {
                            create: function () { },
                            clear: function () { },
                            getAll: function () { },
                            onClicked: listener,
                            onClosed: listener
                        },
                        omnibox: {
                            setDefaultSuggestion: function () { },
                            onInputStarted: listener,
                            onInputChanged: listener,
                            onInputEntered: listener,
                            onInputCancelled: listener
                        },
                        pageAction: {
                            show: function () { },
                            hide: function () { },
                            setTitle: function () { },
                            getTitle: function () { },
                            setIcon: function () { },
                            setPopup: function () { },
                            getPopup: function () { },
                            onClicked: listener
                        },
                        permissions: {
                            contains: function () { },
                            getAll: function () { },
                            request: function () { },
                            remove: function () { }
                        },
                        runtime: {
                            setUninstallURL: function () { },
                            connectNative: function () { },
                            sendNativeMessage: function () { },
                            getBrowserInfo: function () { },
                            connect: function () { },
                            getBackgroundPage: function () { },
                            getManifest: function () { },
                            getURL: function () { },
                            getPlatformInfo: function () { },
                            openOptionsPage: function () { },
                            reload: function () { },
                            sendMessage: function () { },
                            onStartup: listener,
                            onUpdateAvailable: listener,
                            onInstalled: listener,
                            onConnectExternal: listener,
                            onConnect: listener,
                            onMessage: listener,
                            onMessageExternal: listener,
                            lastError: undefined,
                            id: null
                        },
                        sessions: {
                            getRecentlyClosed: function () { },
                            restore: function () { },
                            setTabValue: function () { },
                            getTabValue: function () { },
                            removeTabValue: function () { },
                            setWindowValue: function () { },
                            getWindowValue: function () { },
                            removeWindowValue: function () { },
                            onChanged: listener
                        },
                        sidebarAction: {
                            setPanel: function () { },
                            getPanel: function () { },
                            setTitle: function () { },
                            getTitle: function () { },
                            setIcon: function () { },
                            open: function () { },
                            close: function () { }
                        },
                        storage: {
                            local: {
                                get: function () { },
                                set: function () { },
                                remove: function () { },
                                clear: function () { }
                            },
                            sync: {
                                get: function () { },
                                set: function () { },
                                remove: function () { },
                                clear: function () { }
                            },
                            onChanged: listener
                        },
                        tabs: {
                            connect: function () { },
                            detectLanguage: function () { },
                            duplicate: function () { },
                            getZoom: function () { },
                            getZoomSettings: function () { },
                            insertCSS: function () { },
                            removeCSS: function () { },
                            move: function () { },
                            print: function () { },
                            printPreview: function () { },
                            reload: function () { },
                            remove: function () { },
                            saveAsPDF: function () { },
                            setZoom: function () { },
                            setZoomSettings: function () { },
                            create: function () { },
                            get: function () { },
                            getCurrent: function () { },
                            captureVisibleTab: function () { },
                            update: function () { },
                            query: function () { },
                            executeScript: function () { },
                            sendMessage: function () { },
                            onActivated: listener,
                            onAttached: listener,
                            onCreated: listener,
                            onDetached: listener,
                            onMoved: listener,
                            onReplaced: listener,
                            onZoomChanged: listener,
                            onUpdated: listener,
                            onRemoved: listener,
                            onHighlighted: listener
                        },
                        topSites: {
                            get: function () { }
                        },
                        webNavigation: {
                            getFrame: function () { },
                            getAllFrames: function () { },
                            onBeforeNavigate: listener,
                            onCommitted: listener,
                            onCreateNavigationTarget: listener,
                            onDOMContentLoaded: listener,
                            onCompleted: listener,
                            onErrorOccurred: listener,
                            onReferenceFragmentUpdated: listener,
                            onHistoryStateUpdated: listener
                        },
                        webRequest: {
                            onBeforeRequest: listener,
                            onBeforeSendHeaders: listener,
                            onSendHeaders: listener,
                            onHeadersReceived: listener,
                            onAuthRequired: listener,
                            onResponseStarted: listener,
                            onBeforeRedirect: listener,
                            onCompleted: listener,
                            onErrorOccurred: listener,
                            filterResponseData: function () { }
                        },
                        windows: {
                            get: function () { },
                            getCurrent: function () { },
                            getLastFocused: function () { },
                            getAll: function () { },
                            create: function () { },
                            update: function () { },
                            remove: function () { },
                            onCreated: listener,
                            onRemoved: listener,
                            onFocusChanged: listener
                        },
                        theme: {
                            getCurrent: function () { },
                            update: function () { },
                            reset: function () { }
                        }
                    }, instance), {
                        any: function (api) {
                            return new __this._browserRequest(this, api);
                        }
                    });
                },
                _setupStorages: function () {
                    this.__privates._callInfo = new CrmAPIInstance_1._helpers.CallbackStorage();
                    this.__privates._instances = new CrmAPIInstance_1._helpers.CallbackStorage();
                    this.__privates._commListeners = new CrmAPIInstance_1._helpers.CallbackStorage();
                    this.__privates._backgroundPageListeners = new CrmAPIInstance_1._helpers.CallbackStorage();
                    this.__privates._storageListeners = new CrmAPIInstance_1._helpers.CallbackStorage();
                },
                _callInfo: null,
                _getStackTrace: function (error) {
                    return error.stack.split('\n');
                },
                _createDeleterFunction: function (index) {
                    var _this = this;
                    return function () {
                        _this.__privates._callInfo.remove(index);
                    };
                },
                _createCallback: function (callback, error, options) {
                    options = options || {};
                    var persistent = options.persistent;
                    var maxCalls = options.maxCalls || 1;
                    error = error || new Error();
                    var index = this.__privates._callInfo.add({
                        callback: callback,
                        stackTrace: this.stackTraces && this.__privates._getStackTrace(error),
                        persistent: persistent,
                        maxCalls: maxCalls
                    });
                    if (!persistent) {
                        setTimeout(this.__privates._createDeleterFunction(index), 3600000);
                    }
                    return index;
                },
                _createCallbackFunction: function (callback, error, options) {
                    var __this = this;
                    function onFinish(status, messageOrParams, stackTrace) {
                        if (status === 'error') {
                            __this.onError && __this.onError(messageOrParams);
                            if (__this.stackTraces) {
                                setTimeout(function () {
                                    console.log('stack trace: ');
                                    stackTrace.forEach(function (line) {
                                        console.log(line);
                                    });
                                }, 5);
                            }
                            if (__this.errors) {
                                throw new Error('CrmAPIError: ' + messageOrParams.error);
                            }
                            else {
                                console.warn('CrmAPIError: ' + messageOrParams.error);
                            }
                        }
                        else {
                            callback.apply(__this, messageOrParams);
                        }
                    }
                    return this.__privates._createCallback(onFinish, error, options);
                },
                _handshakeFunction: function () {
                    var _this = this;
                    this.__privates._sendMessage = function (message) {
                        if (message.onFinish) {
                            message.onFinish = _this.__privates._createCallback(message.onFinish.fn, new Error(), {
                                maxCalls: message.onFinish.maxCalls,
                                persistent: message.onFinish.persistent
                            });
                        }
                        _this.__privates._port.postMessage(message);
                    };
                    this.__privates._queue.forEach(function (message) {
                        _this.__privates._sendMessage(message);
                    });
                    this.__privates._queue = null;
                },
                _lastError: null,
                _callbackHandler: function (message) {
                    var call = this.__privates._callInfo.get(message.callbackId);
                    if (call) {
                        if (message.data && message.data.lastError) {
                            this.__privates._lastError = {
                                checked: false,
                                err: message.data.lastError
                            };
                        }
                        call.callback(message.type, message.data, call.stackTrace);
                        if (message.data && message.data.lastError) {
                            if (!this.__privates._lastError.checked) {
                                if (this.onError) {
                                    this.onError({
                                        error: 'Unchecked lastError',
                                        message: 'Unchecked lastError',
                                        lineNumber: 0,
                                        stackTrace: (call.stackTrace && call.stackTrace.join('\n')) || ''
                                    });
                                }
                                else {
                                    throw new Error('Unchecked lastError');
                                }
                            }
                            this.__privates._lastError = undefined;
                        }
                        if (!call.persistent) {
                            call.maxCalls--;
                            if (call.maxCalls === 0) {
                                this.__privates._callInfo.remove(message.callbackId);
                            }
                        }
                    }
                },
                _executeCode: function (message) {
                    var timestamp = new Date().toLocaleString();
                    var err = (new Error()).stack.split('\n')[1];
                    if (err.indexOf('eval') > -1) {
                        err = (new Error()).stack.split('\n')[2];
                    }
                    var val;
                    try {
                        var global_1 = (this.__privates._isBackground ? self : window);
                        val = {
                            type: 'success',
                            result: JSON.stringify(CrmAPIInstance_1._helpers.specialJSON.toJSON.apply(CrmAPIInstance_1._helpers.specialJSON, [(eval.apply(global_1, [message.code]))]))
                        };
                    }
                    catch (e) {
                        val = {
                            type: 'error',
                            result: {
                                stack: e.stack,
                                name: e.name,
                                message: e.message
                            }
                        };
                    }
                    this.__privates._sendMessage({
                        id: this.__privates._id,
                        type: 'logCrmAPIValue',
                        tabId: this.__privates._tabData.id,
                        tabIndex: this.__privates._tabIndex,
                        data: {
                            type: 'evalResult',
                            value: val,
                            id: this.__privates._id,
                            tabIndex: this.__privates._tabIndex,
                            callbackIndex: message.logCallbackIndex,
                            lineNumber: '<eval>:0',
                            timestamp: timestamp,
                            tabId: this.__privates._tabData.id
                        }
                    });
                },
                _getObjectProperties: function (target) {
                    var prototypeKeys = Object.getOwnPropertyNames(Object.getPrototypeOf(target));
                    var targetKeys = [];
                    for (var key in target) {
                        targetKeys.push(key);
                    }
                    return prototypeKeys.concat(targetKeys);
                },
                _leadingWordRegex: /^(\w+)/,
                _sectionRegex: /^((\[(['"`])(\w+)\3\])|(\.(\w+)))/,
                _endRegex: /^(\.(\w+)?|\[((['"`])((\w+)(\11)?)?)?)?/,
                _getCodeSections: function (code) {
                    var leadingWord = this.__privates._leadingWordRegex.exec(code)[1];
                    code = code.slice(leadingWord.length);
                    var subsections = [];
                    var subsection;
                    while ((subsection = this.__privates._sectionRegex.exec(code))) {
                        var word = subsection[4] || subsection[5];
                        subsections.push(word);
                        code = code.slice(word.length);
                    }
                    var endRegex = this.__privates._endRegex.exec(code);
                    var end = null;
                    if (endRegex) {
                        end = {
                            type: endRegex[3] ? 'brackets' : 'dotnotation',
                            currentWord: endRegex[2] || endRegex[6]
                        };
                    }
                    return {
                        lead: leadingWord,
                        words: subsections,
                        end: end
                    };
                },
                _getSuggestions: function (message) {
                    var _a = this.__privates._getCodeSections(message.code), lead = _a.lead, words = _a.words, end = _a.end;
                    if (!end) {
                        return null;
                    }
                    if (!(lead in window)) {
                        return null;
                    }
                    var target = window[lead];
                    if (target) {
                        for (var i = 0; i < words.length; i++) {
                            if (!(words[i] in target)) {
                                return null;
                            }
                            target = target[words[i]];
                        }
                        var hints = {
                            full: [],
                            partial: []
                        };
                        var properties = this.__privates._getObjectProperties(target);
                        for (var i = 0; i < properties.length; i++) {
                            if (properties[i] === end.currentWord) {
                                hints.full.push(properties[i]);
                            }
                            else if (properties[i].indexOf(end.currentWord) === 0) {
                                hints.partial.push(properties[i]);
                            }
                        }
                        return hints.full.sort().concat(hints.partial.sort());
                    }
                    return null;
                },
                _getHints: function (message) {
                    var suggestions = this.__privates._getSuggestions(message) || [];
                    this.__privates._sendMessage({
                        id: this.__privates._id,
                        type: 'displayHints',
                        tabId: this.__privates._tabData.id,
                        tabIndex: this.__privates._tabIndex,
                        data: {
                            hints: suggestions,
                            id: this.__privates._id,
                            tabIndex: this.__privates._tabIndex,
                            callbackIndex: message.logCallbackIndex,
                            tabId: this.__privates._tabData.id
                        }
                    });
                },
                _remoteStorageChange: function (changes, storageType) {
                    var src = storageType === 0 ?
                        this.__privates._nodeStorageSync :
                        this.__privates._nodeStorage;
                    for (var i = 0; i < changes.length; i++) {
                        var keyPath = changes[i].key.split('.');
                        this.__privates._notifyChanges(storageType, keyPath, changes[i].oldValue, changes[i].newValue, true);
                        var data = CrmAPIInstance_1._helpers.lookup(keyPath, src, true) || {};
                        data[keyPath[keyPath.length - 1]] = changes[i].newValue;
                        if (storageType === 0) {
                            this.__privates._storagePreviousSync = src;
                        }
                        else {
                            this.__privates._storagePrevious = src;
                        }
                    }
                },
                _instancesReady: false,
                _instancesReadyListeners: [],
                _instances: null,
                _instancesChange: function (change) {
                    var _this = this;
                    switch (change.type) {
                        case 'removed':
                            this.__privates._instances.forEach(function (instance, idx) {
                                if (instance.id === change.value) {
                                    _this.__privates._instances.remove(idx);
                                }
                            });
                            break;
                        case 'added':
                            this.__privates._instances.add({
                                id: change.value,
                                tabIndex: change.tabIndex,
                                sendMessage: this.__privates._generateSendInstanceMessageFunction(change.value, change.tabIndex)
                            });
                            break;
                    }
                },
                _commListeners: null,
                _instanceMessageHandler: function (message) {
                    this.__privates._commListeners.forEach(function (listener) {
                        listener && typeof listener === 'function' && listener(message.message);
                    });
                },
                _handleValueChanges: function (oldData, newData, indexes, index) {
                    var _this = this;
                    return function () {
                        if (oldData[2] !== newData[2]) {
                            switch (newData[1]) {
                                case 'Link':
                                    var newLinks = newData[2].split(',').map(function (link) {
                                        return {
                                            url: link,
                                            newTab: true
                                        };
                                    });
                                    _this.crm.link.setLinks(indexes[index], newLinks);
                                    break;
                                case 'Script':
                                    var newScriptData_1 = newData[2].split('%124');
                                    _this.crm.script.setScript(indexes[index], newScriptData_1[1], function () {
                                        _this.crm.setLaunchMode(indexes[index], ~~newScriptData_1[0]);
                                    });
                                    break;
                            }
                        }
                    };
                },
                _localStorageProxyHandler: function (message) {
                    var _this = this;
                    var indexes = message.message.indexIds;
                    var _loop_3 = function (key) {
                        if (key !== 'indexIds') {
                            try {
                                Object.defineProperty(localStorageProxy, key, {
                                    get: function () {
                                        return localStorageProxy[key];
                                    },
                                    set: function (value) {
                                        localStorageProxyData.onSet(key, value);
                                    }
                                });
                            }
                            catch (e) {
                            }
                        }
                    };
                    for (var key in message.message) {
                        _loop_3(key);
                    }
                    localStorageProxyData.onSet = function (key, value) {
                        if (!isNaN(parseInt(key, 10))) {
                            var index = parseInt(key, 10);
                            var oldValue = localStorageProxy[key];
                            var newValue = value;
                            localStorageProxy[key] = value;
                            var oldData = oldValue.split('%123');
                            var newData = newValue.split('%123');
                            if (index >= message.message.numberofrows) {
                                var createOptions = {
                                    name: newData[0],
                                    type: newData[1].toLowerCase()
                                };
                                switch (newData[1]) {
                                    case 'Link':
                                        createOptions.linkData = newData[2].split(',').map(function (link) {
                                            return {
                                                url: link,
                                                newTab: true
                                            };
                                        });
                                        break;
                                    case 'Script':
                                        var newScriptData = newData[2].split('%124');
                                        createOptions.scriptData = {
                                            launchMode: ~~newScriptData[0],
                                            script: newScriptData[1]
                                        };
                                        break;
                                }
                                _this.crm.createNode(createOptions);
                            }
                            else {
                                var changeData = {};
                                if (oldData[0] !== newData[0]) {
                                    changeData.name = newData[0];
                                }
                                if (oldData[1] !== newData[1]) {
                                    changeData.type = newData[1].toLowerCase();
                                }
                                if (changeData.name || changeData.type) {
                                    _this.crm.editNode(indexes[index], changeData, _this.__privates._handleValueChanges(oldData, newData, indexes, index));
                                }
                                else {
                                    _this.__privates._handleValueChanges(oldData, newData, indexes, index)();
                                }
                            }
                        }
                        else {
                            localStorageProxy[key] = value;
                            _this.__privates._sendMessage({
                                id: _this.__privates._id,
                                tabIndex: _this.__privates._tabIndex,
                                type: 'applyLocalStorage',
                                data: {
                                    tabIndex: _this.__privates._tabIndex,
                                    key: key,
                                    value: value
                                },
                                tabId: _this.__privates._tabData.id
                            });
                        }
                    };
                },
                _generateBackgroundResponse: function (message) {
                    var _this = this;
                    return function (data) {
                        _this.__privates._sendMessage({
                            id: _this.__privates._id,
                            tabIndex: _this.__privates._tabIndex,
                            type: 'respondToBackgroundMessage',
                            data: {
                                message: data,
                                id: message.id,
                                tabIndex: _this.__privates._tabIndex,
                                tabId: message.tabId,
                                response: message.respond
                            },
                            tabId: _this.__privates._tabData.id
                        });
                    };
                },
                _backgroundPageListeners: null,
                _backgroundPageMessageHandler: function (message) {
                    var _this = this;
                    this.__privates._backgroundPageListeners.forEach(function (listener) {
                        listener && typeof listener === 'function' &&
                            listener(message.message, _this.__privates._generateBackgroundResponse(message));
                    });
                },
                _createVariable: function (log, index) {
                    var global = (this.__privates._isBackground ? self : window);
                    var i;
                    for (i = 1; 'temp' + i in global; i++) { }
                    global[('temp' + i)] = log.originalValues[index];
                    return 'temp' + i;
                },
                _sentLogs: [null],
                _createLocalVariable: function (message) {
                    var log = this.__privates._sentLogs[message.code.logId];
                    var bracketPathArr = ('[' + message.code.index + ']' +
                        message.code.path.replace(/\.(\w+)/g, function (fullString, match) {
                            return '["' + match + '"]';
                        })).split('][');
                    bracketPathArr[0] = bracketPathArr[0].slice(1);
                    bracketPathArr[bracketPathArr.length - 1] = bracketPathArr[bracketPathArr.length - 1].slice(0, bracketPathArr[bracketPathArr.length - 1].length - 1);
                    var bracketPath = JSON.stringify(bracketPathArr.map(function (pathValue) {
                        return JSON.parse(pathValue);
                    }));
                    for (var i = 0; i < log.logObj.paths.length; i++) {
                        if (bracketPath === JSON.stringify(log.logObj.paths[i])) {
                            var createdVariableName = this.__privates._createVariable(log, i);
                            this.log('Created local variable ' + createdVariableName);
                            return;
                        }
                    }
                    this.log('Could not create local variable');
                },
                _messageHandler: function (message) {
                    if (this.__privates._queue) {
                        var _a = message, instances = _a.instances, currentInstance = _a.currentInstance;
                        if (currentInstance === null) {
                            this.__privates._instanceId = -1;
                            this.instanceId = -1;
                        }
                        else {
                            this.__privates._instanceId = currentInstance.id;
                            this.instanceId = currentInstance.id;
                        }
                        for (var i = 0; i < instances.length; i++) {
                            this.__privates._instances.add({
                                id: instances[i].id,
                                tabIndex: instances[i].tabIndex,
                                sendMessage: this.__privates._generateSendInstanceMessageFunction(instances[i].id, instances[i].tabIndex)
                            });
                        }
                        var instancesArr_1 = [];
                        this.__privates._instances.forEach(function (instance) {
                            instancesArr_1.push(instance);
                        });
                        this.__privates._instancesReady = true;
                        this.__privates._instancesReadyListeners.forEach(function (listener) {
                            listener(instancesArr_1);
                        });
                        this.__privates._handshakeFunction.apply(this, []);
                    }
                    else {
                        switch (message.messageType) {
                            case 'callback':
                                this.__privates._callbackHandler(message);
                                break;
                            case 'executeCRMCode':
                                this.__privates._executeCode(message);
                                break;
                            case 'getCRMHints':
                                this.__privates._getHints(message);
                                break;
                            case 'storageUpdate':
                                this.__privates._remoteStorageChange(message.changes, message.isSync);
                                break;
                            case 'instancesUpdate':
                                this.__privates._instancesChange(message.change);
                                break;
                            case 'instanceMessage':
                                this.__privates._instanceMessageHandler(message);
                                break;
                            case 'localStorageProxy':
                                this.__privates._localStorageProxyHandler(message);
                                break;
                            case 'backgroundMessage':
                                this.__privates._backgroundPageMessageHandler(message);
                                break;
                            case 'createLocalLogVariable':
                                this.__privates._createLocalVariable(message);
                                break;
                            case 'dummy':
                                break;
                        }
                    }
                },
                _connect: function () {
                    var _this = this;
                    this.__privates._queue = [];
                    this.__privates._sendMessage = function (message) {
                        _this.__privates._queue.push(message);
                    };
                    if (!this.__privates._isBackground) {
                        this.__privates._port = runtimeConnect(this.__privates._extensionId, {
                            name: JSON.stringify(this.__privates._secretKey)
                        });
                    }
                    if (!this.__privates._isBackground) {
                        this.__privates._port.onMessage.addListener(this.__privates._messageHandler.bind(this));
                        this.__privates._port.postMessage({
                            id: this.__privates._id,
                            key: this.__privates._secretKey,
                            tabId: this.__privates._tabData.id
                        });
                    }
                    else {
                        this.__privates._port = self.handshake(this.__privates._id, this.__privates._secretKey, this.__privates._messageHandler.bind(this));
                    }
                },
                _saveLogValues: function (arr) {
                    var _a = CrmAPIInstance_1._helpers.specialJSON.toJSON.apply(CrmAPIInstance_1._helpers.specialJSON, [arr, true]), json = _a.json, originalValues = _a.originalValues;
                    this.__privates._sentLogs.push({
                        logObj: json,
                        originalValues: originalValues
                    });
                    return {
                        data: JSON.stringify(json),
                        logId: this.__privates._sentLogs.length - 1
                    };
                },
                _generateSendInstanceMessageFunction: function (instanceId, tabIndex) {
                    var _this = this;
                    return function (message, callback) {
                        _this.__privates._sendInstanceMessage(instanceId, tabIndex, message, callback);
                    };
                },
                _sendInstanceMessage: function (instanceId, tabIndex, message, callback) {
                    function onFinish(type, data) {
                        if (!callback || typeof callback !== 'function') {
                            return;
                        }
                        if (type === 'error') {
                            callback({
                                error: true,
                                success: false,
                                message: data
                            });
                        }
                        else {
                            callback({
                                error: false,
                                success: true
                            });
                        }
                    }
                    this.__privates._sendMessage({
                        id: this.__privates._id,
                        type: 'sendInstanceMessage',
                        data: {
                            toInstanceId: instanceId,
                            toTabIndex: tabIndex,
                            tabIndex: this.__privates._tabIndex,
                            message: message,
                            id: this.__privates._id,
                            tabId: this.__privates._tabData.id
                        },
                        tabId: this.__privates._tabData.id,
                        tabIndex: this.__privates._tabIndex,
                        onFinish: {
                            maxCalls: 1,
                            fn: onFinish
                        }
                    });
                },
                _updateCommHandlerStatus: function (hasHandler) {
                    this.__privates._sendMessage({
                        id: this.__privates._id,
                        type: 'changeInstanceHandlerStatus',
                        tabIndex: this.__privates._tabIndex,
                        data: {
                            tabIndex: this.__privates._tabIndex,
                            hasHandler: hasHandler
                        },
                        tabId: this.__privates._tabData.id
                    });
                },
                _storageListeners: null,
                _storagePrevious: {},
                _storagePreviousSync: {},
                _notifyChanges: function (storageType, keyPath, oldValue, newValue, remote) {
                    if (remote === void 0) { remote = false; }
                    var keyPathString;
                    if (Array.isArray(keyPath)) {
                        keyPathString = keyPath.join('.');
                    }
                    else {
                        keyPathString = keyPath;
                    }
                    this.__privates._storageListeners.forEach(function (listener) {
                        if (listener.type !== storageType) {
                            return;
                        }
                        if (!listener.key || listener.key.indexOf(keyPathString) === 0) {
                            CrmAPIInstance_1._helpers.isFn(listener.callback) &&
                                listener.callback(keyPathString, oldValue, newValue, remote || false);
                        }
                    });
                    this.__privates._storagePrevious = this.__privates._nodeStorage;
                },
                _localStorageChange: function (keyPath, oldValue, newValue, storageType) {
                    this.__privates._sendMessage({
                        id: this.__privates._id,
                        type: 'updateStorage',
                        data: {
                            type: 'nodeStorage',
                            isSync: storageType === 0,
                            nodeStorageChanges: [
                                {
                                    key: typeof keyPath === 'string' ? keyPath : keyPath.join('.'),
                                    oldValue: oldValue,
                                    newValue: newValue
                                }
                            ],
                            id: this.__privates._id,
                            tabIndex: this.__privates._tabIndex,
                            tabId: this.__privates._tabData.id
                        },
                        tabIndex: this.__privates._tabIndex,
                        tabId: this.__privates._tabData.id
                    });
                    this.__privates._notifyChanges(storageType, keyPath, oldValue, newValue, false);
                },
                _sendOptionalCallbackCrmMessage: function (action, callback, params, persistent) {
                    var _this = this;
                    if (persistent === void 0) { persistent = false; }
                    return new Promise(function (resolve, reject) {
                        var onFinish = function (status, messageOrParams, stackTrace) {
                            if (status === 'error') {
                                _this.onError && _this.onError(messageOrParams);
                                if (_this.stackTraces) {
                                    setTimeout(function () {
                                        console.log('stack trace: ');
                                        stackTrace.forEach(function (line) {
                                            console.log(line);
                                        });
                                    }, 5);
                                }
                                if (_this.errors) {
                                    reject(new Error('CrmAPIError: ' + messageOrParams.error));
                                }
                                else {
                                    console.warn('CrmAPIError: ' + messageOrParams.error);
                                }
                            }
                            else {
                                callback && callback.apply(_this, messageOrParams);
                                resolve(messageOrParams[0]);
                            }
                        };
                        var message = {
                            type: 'crmapi',
                            id: _this.__privates._id,
                            tabIndex: _this.__privates._tabIndex,
                            action: action,
                            crmPath: _this.__privates._node.path,
                            data: params,
                            onFinish: {
                                persistent: persistent,
                                maxCalls: 1,
                                fn: onFinish
                            },
                            tabId: _this.__privates._tabData.id
                        };
                        _this.__privates._sendMessage(message);
                    });
                },
                _sendCrmMessage: function (action, callback, params) {
                    var _this = this;
                    if (params === void 0) { params = {}; }
                    return new Promise(function (resolve, reject) {
                        var prom = _this.__privates._sendOptionalCallbackCrmMessage
                            .call(_this, action, callback, params);
                        prom.then(resolve, reject);
                    });
                },
                _sendPromiseMessage: function (action, params) {
                    if (params === void 0) { params = {}; }
                    return this.__privates._sendOptionalCallbackCrmMessage
                        .call(this, action, function () { }, params);
                },
                _ensureBackground: function () {
                    if (!this.__privates._isBackground) {
                        throw new Error('Attempting to use background-page function from non-background page');
                    }
                    return true;
                },
                _wrapBrowserObject: function (toWrap, instance, parents) {
                    if (parents === void 0) { parents = []; }
                    var __this = this;
                    var wrapped = {};
                    var _loop_4 = function (key) {
                        var value = toWrap[key];
                        if (typeof value === 'object') {
                            wrapped[key] = this_1._wrapBrowserObject(value, instance, parents.concat([key]));
                        }
                        else if (typeof value === 'function') {
                            var obj_1 = CrmAPIInstance_1._helpers.mergeObjects(function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return (_a = new __this._browserRequest(this, parents.concat([key]).join('.'))).args.apply(_a, args);
                                var _a;
                            }, {
                                a: function () {
                                    var args = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        args[_i] = arguments[_i];
                                    }
                                    return obj_1.args.apply(this, args);
                                },
                                args: function () {
                                    var args = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        args[_i] = arguments[_i];
                                    }
                                    return (_a = new __this._browserRequest(this, parents.concat([key]).join('.'))).args.apply(_a, args);
                                    var _a;
                                },
                                p: function () {
                                    var fns = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        fns[_i] = arguments[_i];
                                    }
                                    return obj_1.persistent.apply(this, fns);
                                },
                                persistent: function () {
                                    var fns = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        fns[_i] = arguments[_i];
                                    }
                                    return (_a = new __this._browserRequest(this, parents.concat([key]).join('.'))).persistent.apply(_a, fns);
                                    var _a;
                                },
                                s: function () {
                                    return obj_1.send.apply(this, []);
                                },
                                send: function () {
                                    return new __this._browserRequest(this, parents.concat([key]).join('.')).send();
                                }
                            });
                            Object.defineProperty(obj_1, 'request', {
                                get: function () {
                                    return new __this._browserRequest(this, parents.concat([key]).join('.')).request;
                                }
                            });
                            wrapped[key] = obj_1;
                        }
                        else {
                            wrapped[key] = toWrap[key];
                        }
                    };
                    var this_1 = this;
                    for (var key in toWrap) {
                        _loop_4(key);
                    }
                    return wrapped;
                },
                _browserRequest: (function () {
                    function BrowserRequest(__this, api, type) {
                        var _this = this;
                        this.__this = __this;
                        var request = {
                            api: api,
                            chromeAPIArguments: [],
                            _sent: false
                        };
                        this.request = request;
                        if (__this.warnOnChromeFunctionNotSent) {
                            window.setTimeout(function () {
                                if (!request._sent) {
                                    console.warn('Looks like you didn\'t send your chrome function,' +
                                        ' set crmAPI.warnOnChromeFunctionNotSent to false to disable this message');
                                }
                            }, 5000);
                        }
                        Object.defineProperty(request, 'type', {
                            get: function () {
                                return type;
                            }
                        });
                        var returnVal = CrmAPIInstance_1._helpers.mergeObjects(function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            return _this.a.bind(_this).apply(void 0, args);
                        }, {
                            a: this.a.bind(this),
                            args: this.args.bind(this),
                            p: this.p.bind(this),
                            persistent: this.persistent.bind(this),
                            send: this.send.bind(this),
                            s: this.s.bind(this),
                            request: this.request
                        });
                        this.returnedVal = returnVal;
                        return this.returnedVal;
                    }
                    BrowserRequest.prototype["new"] = function (__this, api, type) {
                        return this;
                    };
                    BrowserRequest.prototype.args = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        for (var i = 0; i < args.length; i++) {
                            var arg = arguments[i];
                            if (typeof arg === 'function') {
                                this.request.chromeAPIArguments.push({
                                    type: 'fn',
                                    isPersistent: false,
                                    val: this.__this.__privates._createCallback(arg, new Error(), {
                                        maxCalls: 1
                                    })
                                });
                            }
                            else {
                                this.request.chromeAPIArguments.push({
                                    type: 'arg',
                                    val: CrmAPIInstance_1._helpers.jsonFn.stringify(arg)
                                });
                            }
                        }
                        return this.returnedVal;
                    };
                    ;
                    BrowserRequest.prototype.a = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return this.args.apply(this, args);
                    };
                    BrowserRequest.prototype.persistent = function () {
                        var fns = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            fns[_i] = arguments[_i];
                        }
                        for (var i = 0; i < fns.length; i++) {
                            this.request.chromeAPIArguments.push({
                                type: 'fn',
                                isPersistent: true,
                                val: this.__this.__privates._createCallback(fns[i], new Error(), {
                                    persistent: true
                                })
                            });
                        }
                        return this.returnedVal;
                    };
                    BrowserRequest.prototype.p = function () {
                        var fns = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            fns[_i] = arguments[_i];
                        }
                        return this.persistent.apply(this, fns);
                    };
                    BrowserRequest.prototype.s = function () {
                        return this.send();
                    };
                    BrowserRequest.prototype.send = function () {
                        var _this = this;
                        return new Promise(function (resolve, reject) {
                            var requestThis = _this;
                            _this.request._sent = true;
                            var maxCalls = 0;
                            var isPersistent = false;
                            _this.request.chromeAPIArguments.forEach(function (arg) {
                                if (arg.type === 'fn') {
                                    maxCalls++;
                                    if (arg.isPersistent) {
                                        isPersistent = true;
                                    }
                                }
                            });
                            var onFinishFn = function (status, messageOrParams, stackTrace) {
                                if (status === 'error' || status === 'chromeError') {
                                    reject(new Error(messageOrParams.error));
                                }
                                else {
                                    var successMessage = messageOrParams;
                                    if (successMessage && typeof successMessage.callbackId === 'number') {
                                        _this.__this.__privates._callInfo.get(successMessage.callbackId).callback.apply(window, successMessage.params);
                                        if (!_this.__this.__privates._callInfo.get(successMessage.callbackId).persistent) {
                                            _this.__this.__privates._callInfo.remove(successMessage.callbackId);
                                        }
                                    }
                                    else {
                                        resolve(messageOrParams);
                                    }
                                }
                            };
                            var onFinish = {
                                maxCalls: maxCalls,
                                persistent: isPersistent,
                                fn: onFinishFn
                            };
                            var message = {
                                type: 'browser',
                                id: _this.__this.__privates._id,
                                tabIndex: _this.__this.__privates._tabIndex,
                                api: requestThis.request.api,
                                args: requestThis.request.chromeAPIArguments,
                                tabId: _this.__this.__privates._tabData.id,
                                requestType: requestThis.request.type,
                                onFinish: onFinish
                            };
                            _this.__this.__privates._sendMessage(message);
                        });
                    };
                    return BrowserRequest;
                }()),
                _chromeRequest: (function () {
                    function ChromeRequest(__this, api, type) {
                        var _this = this;
                        this.__this = __this;
                        var request = {
                            api: api,
                            chromeAPIArguments: [],
                            _sent: false
                        };
                        this.request = request;
                        if (__this.warnOnChromeFunctionNotSent) {
                            window.setTimeout(function () {
                                if (!request._sent) {
                                    console.warn('Looks like you didn\'t send your chrome function,' +
                                        ' set crmAPI.warnOnChromeFunctionNotSent to false to disable this message');
                                }
                            }, 5000);
                        }
                        Object.defineProperty(request, 'type', {
                            get: function () {
                                return type;
                            }
                        });
                        var returnVal = CrmAPIInstance_1._helpers.mergeObjects(function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            return _this.a.bind(_this).apply(void 0, args);
                        }, {
                            a: this.a.bind(this),
                            args: this.args.bind(this),
                            r: this.r.bind(this),
                            "return": this["return"].bind(this),
                            p: this.p.bind(this),
                            persistent: this.persistent.bind(this),
                            send: this.send.bind(this),
                            s: this.s.bind(this),
                            request: this.request
                        });
                        this.returnedVal = returnVal;
                        return this.returnedVal;
                    }
                    ChromeRequest.prototype["new"] = function (__this, api, type) {
                        return this;
                    };
                    ChromeRequest.prototype.args = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        for (var i = 0; i < args.length; i++) {
                            var arg = arguments[i];
                            if (typeof arg === 'function') {
                                this.request.chromeAPIArguments.push({
                                    type: 'fn',
                                    isPersistent: false,
                                    val: this.__this.__privates._createCallback(arg, new Error(), {
                                        maxCalls: 1
                                    })
                                });
                            }
                            else {
                                this.request.chromeAPIArguments.push({
                                    type: 'arg',
                                    val: CrmAPIInstance_1._helpers.jsonFn.stringify(arg)
                                });
                            }
                        }
                        return this.returnedVal;
                    };
                    ;
                    ChromeRequest.prototype.a = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return this.args.apply(this, args);
                    };
                    ChromeRequest.prototype["return"] = function (handler) {
                        this.request.chromeAPIArguments.push({
                            type: 'return',
                            val: this.__this.__privates._createCallback(handler, new Error(), {
                                maxCalls: 1
                            })
                        });
                        return this.returnedVal;
                    };
                    ChromeRequest.prototype.r = function (handler) {
                        return this["return"](handler);
                    };
                    ChromeRequest.prototype.persistent = function () {
                        var fns = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            fns[_i] = arguments[_i];
                        }
                        for (var i = 0; i < fns.length; i++) {
                            this.request.chromeAPIArguments.push({
                                type: 'fn',
                                isPersistent: true,
                                val: this.__this.__privates._createCallback(fns[i], new Error(), {
                                    persistent: true
                                })
                            });
                        }
                        return this.returnedVal;
                    };
                    ChromeRequest.prototype.p = function () {
                        var fns = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            fns[_i] = arguments[_i];
                        }
                        return this.persistent.apply(this, fns);
                    };
                    ChromeRequest.prototype.send = function () {
                        var _this = this;
                        var requestThis = this;
                        this.request._sent = true;
                        var maxCalls = 0;
                        var isPersistent = false;
                        this.request.chromeAPIArguments.forEach(function (arg) {
                            if (arg.type === 'fn' || arg.type === 'return') {
                                maxCalls++;
                                if (arg.isPersistent) {
                                    isPersistent = true;
                                }
                            }
                        });
                        function showStackTrace(messageOrParams, stackTrace) {
                            if (messageOrParams.stackTrace) {
                                console.warn('Remote stack trace:');
                                messageOrParams.stackTrace.split('\n').forEach(function (line) { console.warn(line); });
                            }
                            console.warn((messageOrParams.stackTrace ? 'Local s' : 'S') + 'tack trace:');
                            stackTrace.forEach(function (line) { console.warn(line); });
                        }
                        var onFinishFn = function (status, messageOrParams, stackTrace) {
                            if (status === 'error' || status === 'chromeError') {
                                var errMessage_1 = messageOrParams;
                                if (_this.request.onError) {
                                    _this.request.onError(errMessage_1);
                                }
                                else if (_this.__this.onError) {
                                    _this.__this.onError(errMessage_1);
                                }
                                if (_this.__this.stackTraces) {
                                    window.setTimeout(function () {
                                        showStackTrace(errMessage_1, stackTrace);
                                    }, 5);
                                }
                                if (_this.__this.errors) {
                                    throw new Error('CrmAPIError: ' + errMessage_1.error);
                                }
                                else if (!_this.__this.onError) {
                                    console.warn('CrmAPIError: ' + errMessage_1.error);
                                }
                            }
                            else {
                                var successMessage = messageOrParams;
                                _this.__this.__privates._callInfo.get(successMessage.callbackId).callback.apply(window, successMessage.params);
                                if (!_this.__this.__privates._callInfo.get(successMessage.callbackId).persistent) {
                                    _this.__this.__privates._callInfo.remove(successMessage.callbackId);
                                }
                            }
                        };
                        var onFinish = {
                            maxCalls: maxCalls,
                            persistent: isPersistent,
                            fn: onFinishFn
                        };
                        var message = {
                            type: 'chrome',
                            id: this.__this.__privates._id,
                            tabIndex: this.__this.__privates._tabIndex,
                            api: requestThis.request.api,
                            args: requestThis.request.chromeAPIArguments,
                            tabId: this.__this.__privates._tabData.id,
                            requestType: requestThis.request.type,
                            onFinish: onFinish
                        };
                        this.__this.__privates._sendMessage(message);
                        return this.returnedVal;
                    };
                    ChromeRequest.prototype.s = function () {
                        return this.send();
                    };
                    return ChromeRequest;
                }()),
                _specialRequest: function (api, type) {
                    return new this.__privates._browserRequest(this, api, type);
                },
                _setupRequestEvent: function (aOpts, aReq, aEventName) {
                    if (!aOpts[('on' + aEventName)]) {
                        return;
                    }
                    aReq.addEventListener(aEventName, function (aEvent) {
                        var responseState = {
                            responseText: aReq.responseText,
                            responseXML: aReq.responseXML,
                            readyState: aReq.readyState,
                            responseHeaders: null,
                            status: null,
                            statusText: null,
                            finalUrl: null
                        };
                        switch (aEventName) {
                            case 'progress':
                                responseState.lengthComputable = aEvent.lengthComputable;
                                responseState.loaded = aEvent.loaded;
                                responseState.total = aEvent.total;
                                break;
                            case 'error':
                                break;
                            default:
                                if (4 !== aReq.readyState) {
                                    break;
                                }
                                responseState.responseHeaders = aReq.getAllResponseHeaders();
                                responseState.status = aReq.status;
                                responseState.statusText = aReq.statusText;
                                break;
                        }
                        aOpts[('on' + aEventName)](responseState);
                    });
                },
                _addNotificationListener: function (notificationId, onclick, ondone) {
                    this.__privates._sendMessage({
                        id: this.__privates._id,
                        type: 'addNotificationListener',
                        data: {
                            notificationId: notificationId,
                            onClick: onclick,
                            tabIndex: this.__privates._tabIndex,
                            onDone: ondone,
                            id: this.__privates._id,
                            tabId: this.__privates._tabData.id
                        },
                        tabIndex: this.__privates._tabIndex,
                        tabId: this.__privates._tabData.id
                    });
                },
                _setGlobalFunctions: function () {
                    var GM = this.GM;
                    for (var gmKey in GM) {
                        if (GM.hasOwnProperty(gmKey)) {
                            var GMProperty = GM[gmKey];
                            window[gmKey] = typeof GMProperty === 'function' ?
                                GMProperty.bind(this) : GMProperty;
                        }
                    }
                    window.$ = window.$ || this.$crmAPI;
                    window.log = window.log || this.log;
                },
                _storageGet: function (storageType, keyPath) {
                    var src = storageType === 0 ?
                        this.__privates._nodeStorageSync :
                        this.__privates._nodeStorage;
                    if (!keyPath) {
                        return src;
                    }
                    if (CrmAPIInstance_1._helpers.checkType(keyPath, 'string', true)) {
                        var keyPathString = keyPath;
                        if (typeof keyPathString === 'string') {
                            if (keyPathString.indexOf('.') === -1) {
                                return src[keyPathString];
                            }
                            else {
                                keyPath = keyPathString.split('.');
                            }
                        }
                    }
                    CrmAPIInstance_1._helpers.checkType(keyPath, 'array', 'keyPath');
                    if (Array.isArray(keyPath)) {
                        return CrmAPIInstance_1._helpers.lookup(keyPath, src);
                    }
                },
                _storageSet: function (storageType, keyPath, value) {
                    var src = storageType === 0 ?
                        this.__privates._nodeStorageSync :
                        this.__privates._nodeStorage;
                    if (CrmAPIInstance_1._helpers.checkType(keyPath, 'string', true)) {
                        var keyPathStr = keyPath;
                        if (typeof keyPathStr === 'string') {
                            if (keyPathStr.indexOf('.') === -1) {
                                this.__privates._localStorageChange(keyPath, src[keyPathStr], value, storageType);
                                src[keyPathStr] = value;
                                if (storageType === 0) {
                                    this.__privates._storagePreviousSync = src;
                                }
                                else {
                                    this.__privates._storagePrevious = src;
                                }
                                return undefined;
                            }
                            else {
                                keyPath = keyPathStr.split('.');
                            }
                        }
                    }
                    if (CrmAPIInstance_1._helpers.checkType(keyPath, 'array', true)) {
                        var keyPathArr = keyPath;
                        if (Array.isArray(keyPathArr)) {
                            var dataCont = src;
                            var length_1 = keyPathArr.length - 1;
                            for (var i = 0; i < length_1; i++) {
                                if (dataCont[keyPathArr[i]] === undefined) {
                                    dataCont[keyPathArr[i]] = {};
                                }
                                dataCont = dataCont[keyPathArr[i]];
                            }
                            this.__privates._localStorageChange(keyPathArr, dataCont[keyPathArr[keyPathArr.length - 1]], value, 1);
                            dataCont[keyPathArr[keyPathArr.length - 1]] = value;
                            if (storageType === 0) {
                                this.__privates._storagePreviousSync = src;
                            }
                            else {
                                this.__privates._storagePrevious = src;
                            }
                            return undefined;
                        }
                    }
                    CrmAPIInstance_1._helpers.checkType(keyPath, ['object'], 'keyPath');
                    var keyPathObj = keyPath;
                    if (typeof keyPathObj === 'object') {
                        for (var key in keyPathObj) {
                            if (keyPathObj.hasOwnProperty(key)) {
                                this.__privates._localStorageChange(key, src[key], keyPathObj[key], storageType);
                                src[key] = keyPathObj[key];
                            }
                        }
                    }
                    if (storageType === 0) {
                        this.__privates._storagePreviousSync = src;
                    }
                    else {
                        this.__privates._storagePrevious = src;
                    }
                    return undefined;
                },
                _storageRemove: function (storageType, keyPath) {
                    var src = storageType === 0 ?
                        this.__privates._nodeStorageSync :
                        this.__privates._nodeStorage;
                    if (CrmAPIInstance_1._helpers.checkType(keyPath, 'string', true)) {
                        var keyPathStr = keyPath;
                        if (typeof keyPathStr === 'string') {
                            if (keyPathStr.indexOf('.') === -1) {
                                this.__privates._notifyChanges(storageType, keyPathStr, src[keyPathStr], undefined);
                                delete src[keyPathStr];
                                if (storageType === 0) {
                                    this.__privates._storagePreviousSync = src;
                                }
                                else {
                                    this.__privates._storagePrevious = src;
                                }
                                return undefined;
                            }
                            else {
                                keyPath = keyPathStr.split('.');
                            }
                        }
                    }
                    if (CrmAPIInstance_1._helpers.checkType(keyPath, 'array', true)) {
                        var keyPathArr = keyPath;
                        if (Array.isArray(keyPathArr)) {
                            var data = CrmAPIInstance_1._helpers.lookup(keyPathArr, src, true);
                            this.__privates._notifyChanges(storageType, keyPathArr.join('.'), data[keyPathArr[keyPathArr.length - 1]], undefined);
                            delete data[keyPathArr[keyPathArr.length - 1]];
                            if (storageType === 0) {
                                this.__privates._storagePreviousSync = src;
                            }
                            else {
                                this.__privates._storagePrevious = src;
                            }
                            return undefined;
                        }
                    }
                    if (storageType === 0) {
                        this.__privates._storagePreviousSync = src;
                    }
                    else {
                        this.__privates._storagePrevious = src;
                    }
                    return undefined;
                },
                _addStorageOnChangeListener: function (storageType, listener, key) {
                    return this.__privates._storageListeners.add({
                        callback: listener,
                        type: storageType,
                        key: key
                    });
                },
                _removeStorageChangeListener: function (storageType, listener, key) {
                    var _this = this;
                    if (typeof listener === 'number') {
                        this.__privates._storageListeners.remove(listener);
                    }
                    else {
                        this.__privates._storageListeners.forEach(function (storageListener, index) {
                            if (storageListener.callback === listener &&
                                storageListener.type === storageType) {
                                if (key !== undefined) {
                                    if (storageListener.key === key) {
                                        _this.__privates._storageListeners.remove(index);
                                    }
                                }
                                else {
                                    _this.__privates._storageListeners.remove(index);
                                }
                            }
                        });
                    }
                }
            };
            this.stackTraces = true;
            this.errors = true;
            this.debugOnerror = false;
            this.lastError = undefined;
            this.onError = null;
            this.warnOnChromeFunctionNotSent = true;
            this.comm = {
                getInstances: function (callback) {
                    var _this = this;
                    return new Promise(function (resolve) {
                        if (_this.__privates._instancesReady) {
                            var instancesArr_2 = [];
                            _this.__privates._instances.forEach(function (instance) {
                                instancesArr_2.push(instance);
                            });
                            callback && callback(instancesArr_2);
                            resolve(instancesArr_2);
                        }
                        else {
                            _this.__privates._instancesReadyListeners.push(function (instances) {
                                callback && callback(instances);
                                resolve(instances);
                            });
                        }
                    });
                },
                sendMessage: function (instance, tabIndex, message, callback) {
                    var instanceObj;
                    if (typeof instance === "number") {
                        instanceObj = this.__privates._instances.get(instance);
                    }
                    else {
                        instanceObj = instance;
                    }
                    return new Promise(function (resolve) {
                        if (CrmAPIInstance_1._helpers.isFn(instanceObj.sendMessage)) {
                            instanceObj.sendMessage(message, function (response) {
                                callback && callback(response);
                                resolve(response);
                            });
                        }
                    });
                },
                addListener: function (listener) {
                    var prevLength = this.__privates._commListeners.length;
                    var idx = this.__privates._commListeners.add(listener);
                    if (prevLength === 0) {
                        this.__privates._updateCommHandlerStatus(true);
                    }
                    return idx;
                },
                removeListener: function (listener) {
                    this.__privates._commListeners.remove(listener);
                    if (this.__privates._commListeners.length === 0) {
                        this.__privates._updateCommHandlerStatus(false);
                    }
                },
                messageBackgroundPage: function (message, callback) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        if (_this.__privates._isBackground) {
                            reject('The function messageBackgroundPage is not available in background pages');
                        }
                        else {
                            _this.__privates._sendMessage({
                                id: _this.__privates._id,
                                type: 'sendBackgroundpageMessage',
                                data: {
                                    message: message,
                                    id: _this.__privates._id,
                                    tabId: _this.__privates._tabData.id,
                                    tabIndex: _this.__privates._tabIndex,
                                    response: _this.__privates._createCallbackFunction(function (response) {
                                        callback(response);
                                        resolve(response);
                                    }, new Error(), {
                                        maxCalls: 1
                                    })
                                },
                                tabIndex: _this.__privates._tabIndex,
                                tabId: _this.__privates._tabData.id
                            });
                        }
                    });
                },
                listenAsBackgroundPage: function (callback) {
                    if (this.__privates._isBackground) {
                        this.__privates._backgroundPageListeners.add(callback);
                    }
                    else {
                        this.log('The function listenAsBackgroundPage is not available in non-background script');
                    }
                }
            };
            this.storage = {
                get: function (keyPath) {
                    return this.__privates._storageGet(1, keyPath);
                },
                set: function (keyPath, value) {
                    return this.__privates._storageSet(1, keyPath, value);
                },
                remove: function (keyPath) {
                    return this.__privates._storageRemove(1, keyPath);
                },
                onChange: {
                    addListener: function (listener, key) {
                        return this.__privates._addStorageOnChangeListener(1, listener, key);
                    },
                    removeListener: function (listener, key) {
                        this.__privates._removeStorageChangeListener(1, listener, key);
                    }
                }
            };
            this.storageSync = {
                get: function (keyPath) {
                    return this.__privates._storageGet(0, keyPath);
                },
                set: function (keyPath, value) {
                    return this.__privates._storageSet(0, keyPath, value);
                },
                remove: function (keyPath) {
                    return this.__privates._storageRemove(0, keyPath);
                },
                onChange: {
                    addListener: function (listener, key) {
                        return this.__privates._addStorageOnChangeListener(0, listener, key);
                    },
                    removeListener: function (listener, key) {
                        this.__privates._removeStorageChangeListener(0, listener, key);
                    }
                }
            };
            this.contextMenuItem = {
                setType: function (itemType, allTabs) {
                    if (allTabs === void 0) { allTabs = false; }
                    return this.__privates._sendPromiseMessage.call(this, 'contextMenuItem.setType', {
                        itemType: itemType,
                        allTabs: allTabs
                    });
                },
                setChecked: function (checked, allTabs) {
                    if (allTabs === void 0) { allTabs = false; }
                    return this.__privates._sendPromiseMessage.call(this, 'contextMenuItem.setChecked', {
                        checked: checked,
                        allTabs: allTabs
                    });
                },
                setContentTypes: function (contentTypes, allTabs) {
                    if (allTabs === void 0) { allTabs = false; }
                    return this.__privates._sendPromiseMessage.call(this, 'contextMenuItem.setContentTypes', {
                        contentTypes: contentTypes,
                        allTabs: allTabs
                    });
                },
                setVisibility: function (isVisible, allTabs) {
                    if (allTabs === void 0) { allTabs = false; }
                    return this.__privates._sendPromiseMessage.call(this, 'contextMenuItem.setVisibility', {
                        isVisible: isVisible,
                        allTabs: allTabs
                    });
                },
                setDisabled: function (isDisabled, allTabs) {
                    if (allTabs === void 0) { allTabs = false; }
                    return this.__privates._sendPromiseMessage.call(this, 'contextMenuItem.setDisabled', {
                        isDisabled: isDisabled,
                        allTabs: allTabs
                    });
                },
                setName: function (name, allTabs) {
                    if (allTabs === void 0) { allTabs = false; }
                    return this.__privates._sendPromiseMessage.call(this, 'contextMenuItem.setName', {
                        name: name,
                        allTabs: allTabs
                    });
                },
                resetName: function (allTabs) {
                    if (allTabs === void 0) { allTabs = false; }
                    return this.__privates._sendPromiseMessage.call(this, 'contextMenuItem.resetName', {
                        allTabs: allTabs
                    });
                }
            };
            this.crm = {
                getRootContextMenuId: function (callback) {
                    return this.__privates._sendCrmMessage('crm.getRootContextMenuId', callback);
                },
                getTree: function (callback) {
                    return this.__privates._sendCrmMessage('crm.getTree', callback);
                },
                getSubTree: function (nodeId, callback) {
                    return this.__privates._sendCrmMessage('crm.getSubTree', callback, {
                        nodeId: nodeId
                    });
                },
                getNode: function (nodeId, callback) {
                    return this.__privates._sendCrmMessage('crm.getNode', callback, {
                        nodeId: nodeId
                    });
                },
                getNodeIdFromPath: function (path, callback) {
                    return this.__privates._sendCrmMessage('crm.getNodeIdFromPath', callback, {
                        path: path
                    });
                },
                queryCrm: function (query, callback) {
                    return this.__privates._sendCrmMessage('crm.queryCrm', callback, {
                        query: query
                    });
                },
                getParentNode: function (nodeId, callback) {
                    return this.__privates._sendCrmMessage('crm.getParentNode', callback, {
                        nodeId: nodeId
                    });
                },
                getNodeType: function (nodeId, callback) {
                    return this.__privates._sendCrmMessage('crm.getNodeType', callback, {
                        nodeId: nodeId
                    });
                },
                getNodeValue: function (nodeId, callback) {
                    return this.__privates._sendCrmMessage('crm.getNodeValue', callback, {
                        nodeId: nodeId
                    });
                },
                createNode: function (options, callback) {
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.createNode', callback, {
                        options: options
                    });
                },
                copyNode: function (nodeId, options, callback) {
                    if (options === void 0) { options = {}; }
                    var optionsCopy = JSON.parse(JSON.stringify(options));
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.copyNode', callback, {
                        nodeId: nodeId,
                        options: optionsCopy
                    });
                },
                moveNode: function (nodeId, position, callback) {
                    var positionCopy;
                    if (position) {
                        positionCopy = JSON.parse(JSON.stringify(position));
                    }
                    else {
                        positionCopy = {};
                    }
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.moveNode', callback, {
                        nodeId: nodeId,
                        position: positionCopy
                    });
                },
                deleteNode: function (nodeId, callback) {
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.deleteNode', callback, {
                        nodeId: nodeId
                    });
                },
                editNode: function (nodeId, options, callback) {
                    options = options || {};
                    var optionsCopy = JSON.parse(JSON.stringify(options));
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.editNode', callback, {
                        options: optionsCopy,
                        nodeId: nodeId
                    });
                },
                getTriggers: function (nodeId, callback) {
                    return this.__privates._sendCrmMessage('crm.getTriggers', callback, {
                        nodeId: nodeId
                    });
                },
                setTriggers: function (nodeId, triggers, callback) {
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.setTriggers', callback, {
                        nodeId: nodeId,
                        triggers: triggers
                    });
                },
                getTriggerUsage: function (nodeId, callback) {
                    return this.__privates._sendCrmMessage('crm.getTriggerUsage', callback, {
                        nodeId: nodeId
                    });
                },
                setTriggerUsage: function (nodeId, useTriggers, callback) {
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.setTriggerUsage', callback, {
                        nodeId: nodeId,
                        useTriggers: useTriggers
                    });
                },
                getContentTypes: function (nodeId, callback) {
                    return this.__privates._sendCrmMessage('crm.getContentTypes', callback, {
                        nodeId: nodeId
                    });
                },
                setContentType: function (nodeId, indexOrName, value, callback) {
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.setContentType', callback, {
                        index: indexOrName,
                        value: value,
                        nodeId: nodeId
                    });
                },
                setContentTypes: function (nodeId, contentTypes, callback) {
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.setContentTypes', callback, {
                        contentTypes: contentTypes,
                        nodeId: nodeId
                    });
                },
                setLaunchMode: function (nodeId, launchMode, callback) {
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.setLaunchMode', callback, {
                        nodeId: nodeId,
                        launchMode: launchMode
                    });
                },
                getLaunchMode: function (nodeId, callback) {
                    return this.__privates._sendCrmMessage('crm.getLaunchMode', callback, {
                        nodeId: nodeId
                    });
                },
                stylesheet: {
                    setStylesheet: function (nodeId, stylesheet, callback) {
                        return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.stylesheet.setStylesheet', callback, {
                            nodeId: nodeId,
                            stylesheet: stylesheet
                        });
                    },
                    getStylesheet: function (nodeId, callback) {
                        return this.__privates._sendCrmMessage('crm.stylesheet.getStylesheet', callback, {
                            nodeId: nodeId
                        });
                    }
                },
                link: {
                    getLinks: function (nodeId, callback) {
                        return this.__privates._sendCrmMessage('crm.link.getLinks', callback, {
                            nodeId: nodeId
                        });
                    },
                    setLinks: function (nodeId, items, callback) {
                        return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.link.setLinks', callback, {
                            nodeId: nodeId,
                            items: items
                        });
                    },
                    push: function (nodeId, items, callback) {
                        return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.link.push', callback, {
                            items: items,
                            nodeId: nodeId
                        });
                    },
                    splice: function (nodeId, start, amount, callback) {
                        return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.link.splice', function (_a) {
                            var spliced = _a.spliced, newArr = _a.newArr;
                            callback && callback(spliced, newArr);
                        }, {
                            nodeId: nodeId,
                            start: start,
                            amount: amount
                        });
                    }
                },
                script: {
                    setScript: function (nodeId, script, callback) {
                        return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.script.setScript', callback, {
                            nodeId: nodeId,
                            script: script
                        });
                    },
                    getScript: function (nodeId, callback) {
                        return this.__privates._sendCrmMessage('crm.script.getScript', callback, {
                            nodeId: nodeId
                        });
                    },
                    setBackgroundScript: function (nodeId, script, callback) {
                        return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.script.setBackgroundScript', callback, {
                            nodeId: nodeId,
                            script: script
                        });
                    },
                    getBackgroundScript: function (nodeId, callback) {
                        return this.__privates._sendCrmMessage('crm.script.getBackgroundScript', callback, {
                            nodeId: nodeId
                        });
                    },
                    libraries: {
                        push: function (nodeId, libraries, callback) {
                            return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.script.libraries.push', callback, {
                                nodeId: nodeId,
                                libraries: libraries
                            });
                        },
                        splice: function (nodeId, start, amount, callback) {
                            return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.script.libraries.splice', function (_a) {
                                var spliced = _a.spliced, newArr = _a.newArr;
                                callback && callback(spliced, newArr);
                            }, {
                                nodeId: nodeId,
                                start: start,
                                amount: amount
                            });
                        }
                    },
                    backgroundLibraries: {
                        push: function (nodeId, libraries, callback) {
                            return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.script.backgroundLibraries.push', callback, {
                                nodeId: nodeId,
                                libraries: libraries
                            });
                        },
                        splice: function (nodeId, start, amount, callback) {
                            return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.script.backgroundLibraries.splice', function (_a) {
                                var spliced = _a.spliced, newArr = _a.newArr;
                                callback && callback(spliced, newArr);
                            }, {
                                nodeId: nodeId,
                                start: start,
                                amount: amount
                            });
                        }
                    }
                },
                menu: {
                    getChildren: function (nodeId, callback) {
                        return this.__privates._sendCrmMessage('crm.menu.getChildren', callback, {
                            nodeId: nodeId
                        });
                    },
                    setChildren: function (nodeId, childrenIds, callback) {
                        return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.menu.setChildren', callback, {
                            nodeId: nodeId,
                            childrenIds: childrenIds
                        });
                    },
                    push: function (nodeId, childrenIds, callback) {
                        if (!Array.isArray(childrenIds)) {
                            childrenIds = [childrenIds];
                        }
                        return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.menu.push', callback, {
                            nodeId: nodeId,
                            childrenIds: childrenIds
                        });
                    },
                    splice: function (nodeId, start, amount, callback) {
                        return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.menu.splice', function (_a) {
                            var spliced = _a.spliced, newArr = _a.newArr;
                            callback && callback(spliced, newArr);
                        }, {
                            nodeId: nodeId,
                            start: start,
                            amount: amount
                        });
                    }
                }
            };
            this.background = {
                runScript: function (id, options) {
                    if (!this.__privates._ensureBackground()) {
                        return;
                    }
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.background.runScript', null, {
                        id: id,
                        options: options
                    }, true);
                },
                runSelf: function (options) {
                    if (!this.__privates._ensureBackground()) {
                        return;
                    }
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.background.runSelf', null, {
                        options: options
                    });
                },
                addKeyboardListener: function (key, callback) {
                    if (!this.__privates._ensureBackground()) {
                        return;
                    }
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.background.addKeyboardListener', callback, {
                        key: key
                    }, true);
                }
            };
            this.libraries = {
                register: function (name, options, callback) {
                    return this.__privates._sendOptionalCallbackCrmMessage.call(this, 'crm.libraries.register', callback, {
                        name: name,
                        url: options.url,
                        code: options.code,
                        ts: options.ts
                    });
                }
            };
            this.browser = null;
            this.GM = {
                GM_info: function () {
                    return this.__privates._greasemonkeyData.info;
                },
                GM_getValue: function (name, defaultValue) {
                    var result = _this.storage.get(name);
                    return (result !== undefined ? result : defaultValue);
                },
                GM_setValue: function (name, value) {
                    this.storage.set(name, (typeof value === 'object' ?
                        JSON.parse(JSON.stringify(value)) : value));
                },
                GM_deleteValue: function (name) {
                    this.storage.remove(name);
                },
                GM_listValues: function () {
                    var keys = [];
                    for (var key in this.__privates._nodeStorage) {
                        if (this.__privates._nodeStorage.hasOwnProperty(key)) {
                            keys.push(key);
                        }
                    }
                    return keys;
                },
                GM_getResourceURL: function (name) {
                    if (this.__privates._greasemonkeyData.resources[name]) {
                        return this.__privates._greasemonkeyData.resources[name].crmUrl;
                    }
                    return undefined;
                },
                GM_getResourceString: function (name) {
                    if (this.__privates._greasemonkeyData.resources[name]) {
                        return this.__privates._greasemonkeyData.resources[name].dataString;
                    }
                    return undefined;
                },
                GM_addStyle: function (css) {
                    var style = document.createElement('style');
                    style.appendChild(document.createTextNode(css));
                    document.head.appendChild(style);
                },
                GM_log: console.log.bind(console),
                GM_openInTab: function (url) {
                    window.open(url, '_blank');
                },
                GM_registerMenuCommand: CrmAPIInstance_1._helpers.emptyFn,
                GM_unregisterMenuCommand: CrmAPIInstance_1._helpers.emptyFn,
                GM_setClipboard: CrmAPIInstance_1._helpers.emptyFn,
                GM_xmlhttpRequest: function (options) {
                    var req = new XMLHttpRequest();
                    this.__privates._setupRequestEvent(options, req, 'abort');
                    this.__privates._setupRequestEvent(options, req, 'error');
                    this.__privates._setupRequestEvent(options, req, 'load');
                    this.__privates._setupRequestEvent(options, req, 'progress');
                    this.__privates._setupRequestEvent(options, req, 'readystatechange');
                    req.open(options.method, options.url, true, options.username || '', options.password || '');
                    if (options.overrideMimeType) {
                        req.overrideMimeType(options.overrideMimeType);
                    }
                    if (options.headers) {
                        for (var prop in options.headers) {
                            if (Object.prototype.hasOwnProperty.call(options.headers, prop)) {
                                req.setRequestHeader(prop, options.headers[prop]);
                            }
                        }
                    }
                    var body = options.data ? options.data : null;
                    return req.send(body);
                },
                GM_addValueChangeListener: function (name, callback) {
                    return this.__privates._storageListeners.add({
                        key: name,
                        type: 1,
                        callback: callback
                    });
                },
                GM_removeValueChangeListener: function (listenerId) {
                    this.__privates._storageListeners.remove(listenerId);
                },
                GM_download: function (detailsOrUrl, name) {
                    var details = {};
                    var detailsOrUrlString = detailsOrUrl;
                    if (typeof detailsOrUrlString === 'string') {
                        details.url = detailsOrUrlString;
                        details.name = name;
                    }
                    else {
                        details = detailsOrUrl;
                    }
                    var options = {
                        url: details.url,
                        fileName: details.name,
                        saveAs: name,
                        headers: details.headers
                    };
                    var request = this.__privates._specialRequest('downloads.download', 'GM_download').args(options);
                    request.send().then(function (result) {
                        var downloadId = result.APIArgs[0];
                        if (downloadId === undefined) {
                            CrmAPIInstance_1._helpers.isFn(details.onerror) && details.onerror({
                                error: 'not_succeeded',
                                details: 'request didn\'t complete'
                            });
                        }
                        else {
                            CrmAPIInstance_1._helpers.isFn(details.onload) && details.onload();
                        }
                    })["catch"](function (err) {
                        CrmAPIInstance_1._helpers.isFn(details.onerror) && details.onerror({
                            error: 'not_permitted',
                            details: err.error
                        });
                    });
                },
                GM_getTab: CrmAPIInstance_1._helpers.instantCb,
                GM_getTabs: CrmAPIInstance_1._helpers.instantCb,
                GM_saveTab: CrmAPIInstance_1._helpers.instantCb,
                unsafeWindow: typeof window === 'undefined' ? self : window,
                GM_installScript: CrmAPIInstance_1._helpers.emptyFn,
                GM_notification: function (textOrOptions, title, image, onclick) {
                    var _this = this;
                    var details;
                    if (typeof textOrOptions === 'object' && textOrOptions) {
                        details = {
                            message: textOrOptions.text,
                            title: textOrOptions.title,
                            iconUrl: textOrOptions.imageUrl,
                            isClickable: !!textOrOptions.onclick,
                            onclick: textOrOptions.onclick,
                            ondone: textOrOptions.ondone
                        };
                    }
                    else {
                        details = {
                            message: textOrOptions,
                            title: title,
                            iconUrl: image,
                            isClickable: !!onclick,
                            onclick: onclick
                        };
                    }
                    details.type = 'basic';
                    details.iconUrl = details.iconUrl || runtimeGetURL('icon-large.png');
                    var onclickRef = details.onclick && this.__privates._createCallbackFunction(details.onclick, new Error(), {
                        maxCalls: 1
                    });
                    var ondoneRef = details.ondone && this.__privates._createCallbackFunction(details.ondone, new Error(), {
                        maxCalls: 1
                    });
                    delete details.onclick;
                    delete details.ondone;
                    this.__privates._specialRequest('notifications.create', 'GM_notification').args(details).s().then(function (notificationId) {
                        _this.__privates._addNotificationListener(notificationId, onclickRef, ondoneRef);
                    })["catch"](function (err) {
                        console.warn(err);
                    });
                }
            };
            this.$crmAPI = this.$;
            this.__privates._node = node;
            this.__privates._id = id;
            this.__privates._tabData = tabData;
            this.__privates._clickData = clickData;
            this.__privates._secretKey = secretKey;
            this.__privates._nodeStorage = nodeStorage;
            this.__privates._contextData = contextData;
            this.__privates._greasemonkeyData = greasemonkeyData;
            this.__privates._isBackground = isBackground;
            this.__privates._options = options;
            this.__privates._enableBackwardsCompatibility = enableBackwardsCompatibility;
            this.__privates._tabIndex = tabIndex;
            this.__privates._extensionId = extensionId;
            this.__privates._supportedAPIs = supportedAPIs;
            this.__privates._nodeStorageSync = nodeStorageSync;
            this.tabId = tabData.id;
            this.currentTabIndex = tabIndex;
            this.permissions = JSON.parse(JSON.stringify(node.permissions || []));
            this.id = id;
            this.isBackground = isBackground;
            this.chromeAPISupported = supportedAPIs.split(',').indexOf('chrome') > -1;
            this.browserAPISupported = supportedAPIs.split(',').indexOf('browser') > -1;
            var privates = this.__privates;
            Object.defineProperty(this, 'lastError', {
                get: function () {
                    if (privates._lastError) {
                        privates._lastError.checked = true;
                        return privates._lastError.err;
                    }
                    return undefined;
                }
            });
            this.__privates._findElementsOnPage.bind(this)(contextData);
            this.__privates._setupBrowserAPI(this);
        }
        CrmAPIInstance_1 = CrmAPIInstance;
        CrmAPIInstance.prototype._init = function (node, id, tabData, clickData, secretKey, nodeStorage, contextData, greasemonkeyData, isBackground, options, enableBackwardsCompatibility, tabIndex, extensionId, supportedAPIs) {
            if (!enableBackwardsCompatibility) {
                localStorageProxy = typeof localStorage === 'undefined' ? {} : localStorage;
            }
            this.__privates._setupStorages();
            this.__privates._setGlobalFunctions();
            this.__privates._connect();
        };
        CrmAPIInstance.prototype.options = function (defaults) {
            return CrmAPIInstance_1._helpers.mergeObjects(defaults || {}, this.__privates._options);
        };
        CrmAPIInstance.prototype.onReady = function (callback) {
            if (window._crmAPIRegistry.length === 0) {
                callback();
            }
            else {
                var called_1 = false;
                var previousPop_1 = window._crmAPIRegistry.pop.bind(window._crmAPIRegistry);
                window._crmAPIRegistry.pop = function () {
                    var retVal = previousPop_1();
                    if (window._crmAPIRegistry.length === 0) {
                        !called_1 && callback && callback();
                        called_1 = true;
                    }
                    return retVal;
                };
            }
        };
        CrmAPIInstance.prototype.getSelection = function () {
            return (this.__privates._clickData.selectionText || window.getSelection() && window.getSelection().toString()) || '';
        };
        ;
        CrmAPIInstance.prototype.getClickInfo = function () {
            return this.__privates._clickData;
        };
        ;
        CrmAPIInstance.prototype.getTabInfo = function () {
            return this.__privates._tabData;
        };
        ;
        CrmAPIInstance.prototype.getNode = function () {
            return this.__privates._node;
        };
        ;
        CrmAPIInstance.prototype.chrome = function (api) {
            return new this.__privates._chromeRequest(this, api);
        };
        ;
        CrmAPIInstance.prototype.$ = function (selector, context) {
            if (context === void 0) { context = document; }
            return Array.prototype.slice.apply(context.querySelectorAll(selector));
        };
        ;
        CrmAPIInstance.prototype.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var err = (new Error()).stack.split('\n')[2];
            if (err.indexOf('eval') > -1) {
                err = (new Error()).stack.split('\n')[3];
            }
            var errSplit = err.split('at');
            var lineNumber = errSplit
                .slice(1, errSplit.length)
                .join('at')
                .replace(/anonymous/, 'script');
            var _a = this.__privates._saveLogValues(args), data = _a.data, logId = _a.logId;
            this.__privates._sendMessage({
                id: this.__privates._id,
                type: 'logCrmAPIValue',
                tabId: this.__privates._tabData.id,
                tabIndex: this.__privates._tabIndex,
                data: {
                    type: 'log',
                    data: JSON.stringify(data),
                    id: this.__privates._id,
                    logId: logId,
                    tabIndex: this.__privates._tabIndex,
                    lineNumber: lineNumber,
                    tabId: this.__privates._tabData.id
                }
            });
        };
        ;
        CrmAPIInstance._helpers = (_a = (function () {
                function Helpers() {
                }
                Helpers.checkType = function (value, type, nameOrMode) {
                    var typeArray;
                    if (!Array.isArray(type)) {
                        typeArray = [type];
                    }
                    else {
                        typeArray = type;
                    }
                    if (typeof nameOrMode === 'boolean' && nameOrMode) {
                        return (value !== undefined && value !== null && ((typeArray.indexOf(typeof value) > -1 && !value.splice) || (typeArray.indexOf('array') > -1 && typeof value === 'object' && value.splice)));
                    }
                    if (value === undefined || value === null) {
                        throw new Error('Value ' + (nameOrMode ? 'of ' + nameOrMode : '') + ' is undefined or null');
                    }
                    if (!((typeArray.indexOf(typeof value) > -1 && !value.splice) || (typeArray.indexOf('array') > -1 && typeof value === 'object' && value.splice))) {
                        throw new Error('Value ' + (nameOrMode ? 'of ' + nameOrMode : '') + ' is not of type' + ((typeArray.length > 1) ? 's ' + typeArray.join(', ') : ' ' + typeArray));
                    }
                    return true;
                };
                Helpers.lookup = function (path, data, hold) {
                    if (hold === void 0) { hold = false; }
                    this.checkType(path, 'array', 'path');
                    this.checkType(data, 'object', 'data');
                    var length = path.length;
                    hold && length--;
                    var dataChild = data;
                    for (var i = 0; i < length; i++) {
                        if (!dataChild[path[i]] && (i + 1) !== length) {
                            dataChild[path[i]] = {};
                        }
                        dataChild = dataChild[path[i]];
                    }
                    return dataChild;
                };
                Helpers.isFn = function (fn) {
                    return fn && typeof fn === 'function';
                };
                Helpers.mergeArrays = function (mainArray, additionArray) {
                    for (var i = 0; i < additionArray.length; i++) {
                        if (mainArray[i] && typeof additionArray[i] === 'object' &&
                            mainArray[i] !== undefined && mainArray[i] !== null) {
                            if (Array.isArray(additionArray[i])) {
                                mainArray[i] = this.mergeArrays(mainArray[i], additionArray[i]);
                            }
                            else {
                                mainArray[i] = this.mergeObjects(mainArray[i], additionArray[i]);
                            }
                        }
                        else {
                            mainArray[i] = additionArray[i];
                        }
                    }
                    return mainArray;
                };
                Helpers.mergeObjects = function (mainObject, additions) {
                    for (var key in additions) {
                        if (additions.hasOwnProperty(key)) {
                            if (typeof additions[key] === 'object' &&
                                key in mainObject) {
                                if (Array.isArray(additions[key])) {
                                    mainObject[key] = this.mergeArrays(mainObject[key], additions[key]);
                                }
                                else {
                                    mainObject[key] = this.mergeObjects(mainObject[key], additions[key]);
                                }
                            }
                            else {
                                mainObject[key] = additions[key];
                            }
                        }
                    }
                    return mainObject;
                };
                Helpers.instantCb = function (cb) {
                    cb();
                };
                return Helpers;
            }()),
            _a.jsonFn = {
                stringify: function (obj) {
                    return JSON.stringify(obj, function (key, value) {
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
                    var iso8061 = date2Obj ? /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d *)?)Z$/ : false;
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
                            return eval('(' + value + ')');
                        }
                        if (prefix === '_PxEgEr_') {
                            return eval(value.slice(8));
                        }
                        return value;
                    });
                }
            },
            _a.specialJSON = {
                _regexFlagNames: ['global', 'multiline', 'sticky', 'unicode', 'ignoreCase'],
                _getRegexFlags: function (expr) {
                    var flags = [];
                    this._regexFlagNames.forEach(function (flagName) {
                        if (expr[flagName]) {
                            if (flagName === 'sticky') {
                                flags.push('y');
                            }
                            else {
                                flags.push(flagName[0]);
                            }
                        }
                    });
                    return flags;
                },
                _stringifyNonObject: function (data) {
                    if (typeof data === 'function') {
                        var fn = data.toString();
                        var match = this._fnRegex.exec(fn);
                        data = "__fn$" + ("(" + match[2] + "){" + match[10] + "}") + "$fn__";
                    }
                    else if (data instanceof RegExp) {
                        data = "__regexp$" + JSON.stringify({
                            regexp: data.source,
                            flags: this._getRegexFlags(data)
                        }) + "$regexp__";
                    }
                    else if (data instanceof Date) {
                        data = "__date$" + (data + '') + "$date__";
                    }
                    else if (typeof data === 'string') {
                        data = data.replace(/\$/g, '\\$');
                    }
                    return JSON.stringify(data);
                },
                _fnRegex: /^(.|\s)*\(((\w+((\s*),?(\s*)))*)\)(\s*)(=>)?(\s*)\{((.|\n|\r)+)\}$/,
                _specialStringRegex: /^__(fn|regexp|date)\$((.|\n)+)\$\1__$/,
                _fnCommRegex: /^\(((\w+((\s*),?(\s*)))*)\)\{((.|\n|\r)+)\}$/,
                _parseNonObject: function (data) {
                    var dataParsed = JSON.parse(data);
                    if (typeof dataParsed === 'string') {
                        var matchedData = void 0;
                        if ((matchedData = this._specialStringRegex.exec(dataParsed))) {
                            var dataContent = matchedData[2];
                            switch (matchedData[1]) {
                                case 'fn':
                                    var fnRegexed = this._fnCommRegex.exec(dataContent);
                                    if (fnRegexed[1].trim() !== '') {
                                        return Function.apply(void 0, fnRegexed[1].split(',').concat([fnRegexed[6]]));
                                    }
                                    else {
                                        return new Function(fnRegexed[6]);
                                    }
                                case 'regexp':
                                    var regExpParsed = JSON.parse(dataContent);
                                    return new RegExp(regExpParsed.regexp, regExpParsed.flags.join(''));
                                case 'date':
                                    return new Date();
                            }
                        }
                        else {
                            return dataParsed.replace(/\\\$/g, '$');
                        }
                    }
                    return dataParsed;
                },
                _iterate: function (copyTarget, iterable, fn) {
                    if (Array.isArray(iterable)) {
                        copyTarget = copyTarget || [];
                        iterable.forEach(function (data, key, container) {
                            copyTarget[key] = fn(data, key, container);
                        });
                    }
                    else {
                        copyTarget = copyTarget || {};
                        Object.getOwnPropertyNames(iterable).forEach(function (key) {
                            copyTarget[key] = fn(iterable[key], key, iterable);
                        });
                    }
                    return copyTarget;
                },
                _isObject: function (data) {
                    if (data instanceof Date || data instanceof RegExp || data instanceof Function) {
                        return false;
                    }
                    return typeof data === 'object' && !Array.isArray(data);
                },
                _toJSON: function (copyTarget, data, path, refData) {
                    var _this = this;
                    if (!(this._isObject(data) || Array.isArray(data))) {
                        return {
                            refs: [],
                            data: this._stringifyNonObject(data),
                            rootType: 'normal'
                        };
                    }
                    else {
                        if (refData.originalValues.indexOf(data) === -1) {
                            var index = refData.refs.length;
                            refData.refs[index] = copyTarget;
                            refData.paths[index] = path;
                            refData.originalValues[index] = data;
                        }
                        copyTarget = this._iterate(copyTarget, data, function (element, key) {
                            if (!(_this._isObject(element) || Array.isArray(element))) {
                                return _this._stringifyNonObject(element);
                            }
                            else {
                                var index = void 0;
                                if ((index = refData.originalValues.indexOf(element)) === -1) {
                                    index = refData.refs.length;
                                    copyTarget = (Array.isArray(element) ? [] : {});
                                    refData.refs.push(null);
                                    refData.paths[index] = path;
                                    var newData = _this._toJSON(copyTarget[key], element, path.concat(key), refData);
                                    refData.refs[index] = newData.data;
                                    refData.originalValues[index] = element;
                                }
                                return "__$" + index + "$__";
                            }
                        });
                        var isArr = Array.isArray(data);
                        if (isArr) {
                            return {
                                refs: refData.refs,
                                data: copyTarget,
                                rootType: 'array'
                            };
                        }
                        else {
                            return {
                                refs: refData.refs,
                                data: copyTarget,
                                rootType: 'object'
                            };
                        }
                    }
                },
                toJSON: function (data, noJSON, refs) {
                    var _this = this;
                    if (noJSON === void 0) { noJSON = false; }
                    if (refs === void 0) { refs = []; }
                    var paths = [[]];
                    var originalValues = [data];
                    if (!(this._isObject(data) || Array.isArray(data))) {
                        var returnObj = {
                            refs: [],
                            data: this._stringifyNonObject(data),
                            rootType: 'normal',
                            paths: []
                        };
                        return {
                            json: noJSON ? returnObj : JSON.stringify(returnObj),
                            originalValues: originalValues
                        };
                    }
                    else {
                        var copyTarget_1 = (Array.isArray(data) ? [] : {});
                        refs.push(copyTarget_1);
                        copyTarget_1 = this._iterate(copyTarget_1, data, function (element, key) {
                            if (!(_this._isObject(element) || Array.isArray(element))) {
                                return _this._stringifyNonObject(element);
                            }
                            else {
                                var index = void 0;
                                if ((index = originalValues.indexOf(element)) === -1) {
                                    index = refs.length;
                                    refs.push(null);
                                    var newData = _this._toJSON(copyTarget_1[key], element, [key], {
                                        refs: refs,
                                        paths: paths,
                                        originalValues: originalValues
                                    }).data;
                                    originalValues[index] = element;
                                    paths[index] = [key];
                                    refs[index] = newData;
                                }
                                return "__$" + index + "$__";
                            }
                        });
                        var returnObj = {
                            refs: refs,
                            data: copyTarget_1,
                            rootType: Array.isArray(data) ? 'array' : 'object',
                            paths: paths
                        };
                        return {
                            json: noJSON ? returnObj : JSON.stringify(returnObj),
                            originalValues: originalValues
                        };
                    }
                },
                _refRegex: /^__\$(\d+)\$__$/,
                _replaceRefs: function (data, refs) {
                    var _this = this;
                    this._iterate(data, data, function (element) {
                        var match;
                        if ((match = _this._refRegex.exec(element))) {
                            var refNumber = match[1];
                            var ref = refs[~~refNumber];
                            if (ref.parsed) {
                                return ref.ref;
                            }
                            ref.parsed = true;
                            return _this._replaceRefs(ref.ref, refs);
                        }
                        else {
                            return _this._parseNonObject(element);
                        }
                    });
                    return data;
                },
                fromJSON: function (str) {
                    var parsed = JSON.parse(str);
                    parsed.refs = parsed.refs.map(function (ref) {
                        return {
                            ref: ref,
                            parsed: false
                        };
                    });
                    var refs = parsed.refs;
                    if (parsed.rootType === 'normal') {
                        return JSON.parse(parsed.data);
                    }
                    refs[0].parsed = true;
                    return this._replaceRefs(refs[0].ref, refs);
                }
            },
            _a.CallbackStorage = (function () {
                function CallbackStorage() {
                    this.length = 0;
                    this.items = {};
                    this.index = 0;
                }
                CallbackStorage.prototype._updateLength = function () {
                    var length = 0;
                    this.forEach(function () {
                        length++;
                    });
                    this.length = length;
                };
                CallbackStorage.prototype.add = function (item) {
                    this.items[++this.index] = item;
                    this._updateLength();
                    return this.index;
                };
                CallbackStorage.prototype.remove = function (itemOrIndex) {
                    if (typeof itemOrIndex === 'number' || typeof itemOrIndex === 'string') {
                        delete this.items[~~itemOrIndex];
                    }
                    else {
                        for (var fnId in this.items) {
                            if (this.items[fnId] === itemOrIndex) {
                                delete this.items[fnId];
                            }
                        }
                    }
                    this._updateLength();
                };
                CallbackStorage.prototype.get = function (index) {
                    return this.items[index];
                };
                CallbackStorage.prototype.forEach = function (operation) {
                    for (var fnId in this.items) {
                        operation(this.items[fnId], fnId);
                    }
                };
                return CallbackStorage;
            }()),
            _a.emptyFn = function () { },
            _a);
        __decorate([
            makePrivate
        ], CrmAPIInstance.prototype, "__privates");
        __decorate([
            makePrivate
        ], CrmAPIInstance, "_helpers");
        CrmAPIInstance = CrmAPIInstance_1 = __decorate([
            truePrivateClass
        ], CrmAPIInstance);
        return CrmAPIInstance;
        var CrmAPIInstance_1, _a;
    }());
    window._crmAPIRegistry = window._crmAPIRegistry || [];
    window._crmAPIRegistry.push(CrmAPIInstance);
}(typeof window === 'undefined' ? self : window));
