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
var MonacoEditorElement;
(function (MonacoEditorElement) {
    var metaDataDescriptions = {
        name: 'The name of this script',
        namespace: 'The namespace of the script',
        version: 'The script version. This is used for the update check.',
        author: 'The scripts author',
        description: 'A short description.',
        homepage: 'The author\'s homepage',
        homepageURL: 'The author\'s homepage',
        website: 'The author\'s homepage',
        source: 'The author\'s homepage',
        icon: 'The script\'s icon in low res',
        iconURL: 'The script\'s icon in low res',
        defaulticon: 'The script\'s icon in low res',
        icon64: 'This scripts icon in 64x64 pixels.',
        icon64URL: 'This scripts icon in 64x64 pixels.',
        updateURL: 'An update URL for the userscript',
        downloadURL: 'Defines the URL where the script will be downloaded from when an update was detected',
        supportURL: 'Defines the URL where the user can report issues and get personal support',
        include: 'The pages on which the script should run',
        match: 'The pages on which the script should run',
        exclude: 'Exclude URLs even if they are included by **@include** or **@match**',
        require: 'Points to a javascript file that is loaded and executed before the script itself',
        resource: 'Preloads resources that can be accessed by `GM_getResourceURL` and `GM_getResourceText` by the script',
        connect: 'Domains which are allowed to be retrieved by `GM_xmlhttpRequest`',
        'run_at': 'The moment the script is injected (document-start, document-body, document-end, document-idle or document-menu)',
        'run-at': 'The moment the script is injected (document-start, document-body, document-end, document-idle or document-menu)',
        grant: 'Whitelists given `GM_*` functions',
        noframes: 'Makes the script run on the main page but not in iframes',
        CRM_contentTypes: 'The content types on which to run this script as a 6 items long boolean array (e.g. [true, false, true, false, true, false]) (CRM ONLY)',
        CRM_launchMode: 'When to run this script. 0 = Run on clicking, 1 = always run, 2 = run on specified, 3 = show on specified, 4 = disabled. (CRM ONLY)',
        CRM_stylesheet: 'Interpret this as a stylesheet (userstyle) instead of a script (userscript). (CRM ONLY)',
        CRM_toggle: 'A boolean value (true/false) indicating whether to allow toggling this stylesheet on or off. Only used when @CRM_stylesheet is present. (CRM ONLY)',
        CRM_defaultOn: 'A boolean value (true/false) indicating whether this stylesheet is toggled on by default. Only used when @CRM_stylesheet and @CRM_toggle are present. (CRM ONLY)',
        CRM_libraries: 'An array containing stringified objects with a "url" and a "name" key, pointing to external libraries used in this script.'
    };
    var EventEmitter = (function () {
        function EventEmitter() {
            this._privateListenerMap = {};
            this._publicListenerMap = {};
        }
        EventEmitter.prototype._insertOnce = function (arr, value) {
            var self = (function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                arr.slice(arr.indexOf(self, 1));
                return value.apply(void 0, args);
            });
            arr.push(self);
        };
        EventEmitter.prototype._assertKeyExists = function (key, value) {
            if (!(key in value)) {
                value[key] = [];
            }
        };
        EventEmitter.prototype._listen = function (event, listener, once) {
            if (once === void 0) { once = false; }
            this._assertKeyExists(event, this._privateListenerMap);
            if (once) {
                this._insertOnce(this._privateListenerMap[event], listener);
            }
            else {
                this._privateListenerMap[event].push(listener);
            }
        };
        EventEmitter.prototype.listen = function (event, listener, once) {
            if (once === void 0) { once = false; }
            this._assertKeyExists(event, this._publicListenerMap);
            if (once) {
                this._insertOnce(this._publicListenerMap[event], listener);
            }
            else {
                this._publicListenerMap[event].push(listener);
            }
        };
        EventEmitter.prototype._clearListeners = function (event) {
            if (event in this._publicListenerMap) {
                delete this._publicListenerMap[event];
            }
            if (event in this._privateListenerMap) {
                delete this._privateListenerMap[event];
            }
        };
        EventEmitter.prototype._firePrivate = function (event, params) {
            return !(event in this._privateListenerMap) ? [] : this._privateListenerMap[event].map(function (listener) {
                return listener.apply(void 0, params);
            });
        };
        EventEmitter.prototype._firePublic = function (event, params) {
            return !(event in this._publicListenerMap) ? [] : this._publicListenerMap[event].map(function (listener) {
                return listener.apply(void 0, params);
            });
        };
        return EventEmitter;
    }());
    var MonacoTypeHandler = (function (_super) {
        __extends(MonacoTypeHandler, _super);
        function MonacoTypeHandler(editor, model) {
            var _this = _super.call(this) || this;
            _this._editor = editor;
            _this._model = model;
            return _this;
        }
        MonacoTypeHandler.prototype._isTextarea = function () {
            return '__textarea' in this._editor;
        };
        return MonacoTypeHandler;
    }(EventEmitter));
    var MonacoEditorEventHandler = (function (_super) {
        __extends(MonacoEditorEventHandler, _super);
        function MonacoEditorEventHandler(editor, model) {
            var _this = _super.call(this, editor, model) || this;
            _this._disposables = [];
            if (_this._isTextarea()) {
                return _this;
            }
            _this._onCreate(model);
            window.setTimeout(function () {
                if (_this._model.isDisposed()) {
                    return;
                }
                _this._firePrivate('onLoad', []);
                _this._clearListeners('onLoad');
            }, 2500);
            return _this;
        }
        MonacoEditorEventHandler._genDisposable = function (fn, onDispose) {
            var res = fn();
            return {
                dispose: function () {
                    onDispose(res);
                }
            };
        };
        MonacoEditorEventHandler.prototype._isDiff = function (editor) {
            if ('__textarea' in editor) {
                return '__diff' in editor;
            }
            return !('onDidChangeModel' in this._editor);
        };
        MonacoEditorEventHandler.prototype._onCreate = function (model) {
            var _this = this;
            this.destroy();
            this._disposables.push(this._model.onDidChangeContent(function (e) {
                _this._firePrivate('onModelContentChange', [e]);
            }));
        };
        MonacoEditorEventHandler.prototype.destroy = function () {
            this._disposables = this._disposables.filter(function (listener) {
                listener.dispose();
            });
        };
        return MonacoEditorEventHandler;
    }(MonacoTypeHandler));
    var MonacoEditorMetaBlockMods = (function (_super) {
        __extends(MonacoEditorMetaBlockMods, _super);
        function MonacoEditorMetaBlockMods(editor, model) {
            var _this = _super.call(this, editor, model) || this;
            _this._hasMetaBlockChanged = true;
            _this._decorations = [];
            _this._isMetaDataHighlightDisabled = false;
            if (_this._isTextarea()) {
                return _this;
            }
            _this._attachListeners();
            return _this;
        }
        MonacoEditorMetaBlockMods.prototype._attachListeners = function () {
            var _this = this;
            this._listen('onLoad', function () {
                _this._doModelUpdate();
            });
            this._listen('onModelContentChange', function () {
                _this._hasMetaBlockChanged = true;
                _this._doModelUpdate();
            });
            this._listen('shouldDecorate', function (changeEvent) {
                if (_this._isMetaDataHighlightDisabled) {
                    return false;
                }
                var force = false;
                if (!_this._metaBlock) {
                    if (_this.getMetaBlock()) {
                        force = true;
                    }
                    else {
                        return false;
                    }
                }
                if (!force && (!changeEvent || !changeEvent.isRedoing) && (!changeEvent || changeEvent.changes.filter(function (change) {
                    return _this._isInMetaRange(change.range);
                }).length === 0)) {
                    return false;
                }
                return true;
            });
            this._listen('decorate', function () {
                if (_this._isMetaDataHighlightDisabled) {
                    return [];
                }
                return [_this._userScriptGutterHighlightChange()].filter(function (val) { return val !== null; });
            });
            this._listen('decorate', function () {
                if (_this._isMetaDataHighlightDisabled) {
                    return [];
                }
                return _this._userScriptHighlightChange();
            });
            if (window.app) {
                this._isMetaDataHighlightDisabled = window.app.settings.editor.disabledMetaDataHighlight;
            }
            else {
                this._isMetaDataHighlightDisabled = window.installPage.settings.editor.disabledMetaDataHighlight;
            }
            if (!this._isDiff(this._editor)) {
                this._disposables.push(this._editor.addAction({
                    id: 'disable-metadata-highlight',
                    label: 'Disable Metadata Highlight',
                    run: function () {
                        _this._isMetaDataHighlightDisabled = true;
                    }
                }));
            }
            ;
            if (!this._isDiff(this._editor)) {
                this._disposables.push(this._editor.addAction({
                    id: 'enable-metadata-highlight',
                    label: 'Enable Metadata Highlight',
                    run: function () {
                        _this._isMetaDataHighlightDisabled = false;
                    }
                }));
            }
            this._defineMetaOnModel();
            this._listen('onModelContentChange', function (changeEvent) {
                _this._hasMetaBlockChanged = true;
                if (_this._shouldUpdateDecorations(changeEvent)) {
                    _this._doModelUpdate();
                }
            });
        };
        MonacoEditorMetaBlockMods.prototype._defineMetaOnModel = function () {
            var _this = this;
            if ('_metaBlock' in this._model) {
                return;
            }
            Object.defineProperty(this._model, '_metaBlock', {
                get: function () {
                    return _this.getMetaBlock();
                }
            });
        };
        MonacoEditorMetaBlockMods.prototype._getMetaOutlines = function () {
            var editorContent = this._model.getValue();
            if (editorContent.indexOf(MonacoEditorMetaBlockMods._userScriptStart) === -1 ||
                editorContent.indexOf(MonacoEditorMetaBlockMods._userScriptEnd) === -1) {
                return (this._metaBlock = null);
            }
            var lines = editorContent.split('\n');
            var state = {
                start: null,
                end: null
            };
            for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
                var line = lines[lineIndex];
                var char = void 0;
                if ((char = line.indexOf(MonacoEditorMetaBlockMods._userScriptStart)) !== -1) {
                    if (!state.start) {
                        state.start = new monaco.Position(lineIndex + 1, char);
                    }
                }
                if ((char = line.indexOf(MonacoEditorMetaBlockMods._userScriptEnd)) !== -1) {
                    if (!state.end) {
                        state.end = new monaco.Position(lineIndex + 1, char + MonacoEditorMetaBlockMods._userScriptEnd.length);
                    }
                    break;
                }
            }
            if (!state.start || !state.end) {
                return (this._metaBlock = null);
            }
            return state;
        };
        MonacoEditorMetaBlockMods.prototype._getMetaContent = function (outlines) {
            var content = this._model.getValue();
            var tags = {};
            var regex = MonacoEditorMetaBlockMods._metaPropRegex;
            for (var _i = 0, _a = content.split('\n'); _i < _a.length; _i++) {
                var line = _a[_i];
                var matches = regex.exec(line);
                if (matches) {
                    var key = matches[1];
                    var value = matches[3];
                    if (!key || !value) {
                        continue;
                    }
                    if (key in tags) {
                        tags[key].push(value);
                    }
                    else {
                        tags[key] = [value];
                    }
                }
            }
            return tags;
        };
        MonacoEditorMetaBlockMods.prototype._isDifferent = function (prev, current) {
            if (!prev || !current) {
                return true;
            }
            if (!prev.start.equals(current.start) || !prev.end.equals(current.end)) {
                return false;
            }
            var keys = [];
            for (var key in prev) {
                if (!(key in current)) {
                    return false;
                }
                keys.push(key);
            }
            for (var key in current) {
                if (!(key in prev)) {
                    return false;
                }
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                }
            }
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var prevVal = prev.content[key];
                var currentVal = current.content[key];
                var prevIsArray = Array.isArray(prevVal);
                var currentIsArray = Array.isArray(currentVal);
                if (prevIsArray !== currentIsArray) {
                    return false;
                }
                if (prevIsArray) {
                    for (var _a = 0, _b = prevVal; _a < _b.length; _a++) {
                        var value = _b[_a];
                        if (currentVal.indexOf(value) === -1) {
                            return false;
                        }
                    }
                    for (var _c = 0, _d = currentVal; _c < _d.length; _c++) {
                        var value = _d[_c];
                        if (prevVal.indexOf(value) === -1) {
                            return false;
                        }
                    }
                }
                else if (prevVal !== currentVal) {
                    return false;
                }
            }
            return true;
        };
        MonacoEditorMetaBlockMods.prototype.getMetaBlock = function () {
            if (!this._hasMetaBlockChanged) {
                return this._metaBlock;
            }
            var prevBlock = this._metaBlock;
            var outlines = this._getMetaOutlines();
            if (!outlines) {
                return null;
            }
            var metaContent = this._getMetaContent(outlines);
            var metaBlock = this._metaBlock = {
                start: outlines.start,
                content: metaContent,
                end: outlines.end
            };
            if (this._isDifferent(prevBlock, metaBlock)) {
                if (!prevBlock) {
                    prevBlock = {
                        start: new monaco.Position(0, 0),
                        content: {},
                        end: new monaco.Position(0, 0)
                    };
                }
                this._firePublic('metaChange', [prevBlock, metaBlock]);
            }
            return metaBlock;
        };
        MonacoEditorMetaBlockMods.prototype._getKeyDescription = function (metaKey) {
            if (metaKey in metaDataDescriptions) {
                return "Metadata key `" + metaKey + "`:\n" + metaDataDescriptions[metaKey];
            }
            return "Metadata key `" + metaKey + "`, unknown key";
        };
        MonacoEditorMetaBlockMods.prototype._isInMetaRange = function (range) {
            if (!this._metaBlock) {
                return false;
            }
            return monaco.Range.areIntersectingOrTouching({
                startColumn: this._metaBlock.start.column,
                startLineNumber: this._metaBlock.start.lineNumber,
                endColumn: this._metaBlock.end.column,
                endLineNumber: this._metaBlock.end.lineNumber
            }, range);
        };
        MonacoEditorMetaBlockMods.prototype._userScriptGutterHighlightChange = function () {
            if (!this._getMetaOutlines()) {
                return null;
            }
            var _a = this.getMetaBlock(), start = _a.start, end = _a.end;
            return {
                range: new monaco.Range(start.lineNumber, start.column, end.lineNumber, end.column),
                options: {
                    isWholeLine: true,
                    linesDecorationsClassName: 'userScriptGutterHighlight',
                    stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges
                }
            };
        };
        MonacoEditorMetaBlockMods.prototype._userScriptHighlightChange = function () {
            var content = this._model.getValue();
            if (!this.getMetaBlock()) {
                return null;
            }
            var regex = MonacoEditorMetaBlockMods._metaPropRegex;
            var lines = content.split('\n');
            var newDecorations = [];
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                var match = regex.exec(line);
                if (match) {
                    var key = match[1];
                    var value = match[3];
                    var keyStartIndex = key ? line.indexOf(key) : 0;
                    var keyEnd = key ? (keyStartIndex + key.length) : 0;
                    var monacoLineNumber = i + 1;
                    if (key) {
                        newDecorations.push({
                            range: new monaco.Range(monacoLineNumber, keyStartIndex, monacoLineNumber, keyEnd + 1),
                            options: {
                                stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
                                inlineClassName: 'userScriptKeyHighlight',
                                hoverMessage: this._getKeyDescription(key),
                                isWholeLine: false
                            }
                        });
                    }
                    if (value) {
                        var valueStartIndex = line.slice(keyEnd).indexOf(value) + keyEnd;
                        var valueStartOffset = valueStartIndex + 1;
                        newDecorations.push({
                            range: new monaco.Range(monacoLineNumber, valueStartOffset, monacoLineNumber, valueStartOffset + value.length),
                            options: {
                                stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
                                inlineClassName: 'userScriptValueHighlight',
                                hoverMessage: "Value `" + value + "` for key `" + key + "`",
                                isWholeLine: false
                            }
                        });
                    }
                }
            }
            return newDecorations;
        };
        MonacoEditorMetaBlockMods.prototype._doDecorationUpdate = function (decorations) {
            if (!this._isDiff(this._editor)) {
                if (this._editor.getModel() === this._model) {
                    this._decorations = this._editor.deltaDecorations(this._decorations, decorations);
                }
                else {
                    this._decorations = this._editor.deltaDecorations(this._decorations, []);
                }
            }
        };
        MonacoEditorMetaBlockMods.prototype._shouldUpdateDecorations = function (changeEvent) {
            var results = this._firePrivate('shouldDecorate', [changeEvent]);
            if (results.length > 1) {
                return results.reduce(function (left, right) {
                    return left || right;
                });
            }
            else if (results.length === 1) {
                return results[0];
            }
            else {
                return false;
            }
        };
        MonacoEditorMetaBlockMods.prototype._formatDecorations = function (decorations) {
            if (decorations.length === 0) {
                return [];
            }
            else if (decorations.length === 1) {
                return decorations[0];
            }
            else {
                return decorations.reduce(function (prev, current) {
                    return prev.concat(current);
                });
            }
        };
        MonacoEditorMetaBlockMods.prototype._doModelUpdate = function () {
            var decorations = this._firePrivate('decorate', [])
                .filter(function (decorationArr) { return decorationArr !== null; });
            this._doDecorationUpdate(this._formatDecorations(decorations));
        };
        MonacoEditorMetaBlockMods._metaTagProvider = {
            provideCompletionItems: function (model, position) {
                return [{
                        label: '==UserScript==',
                        kind: monaco.languages.CompletionItemKind.Property,
                        insertText: '==UserScript==',
                        detail: 'UserScript start tag',
                        documentation: 'The start tag for a UserScript metadata block'
                    }, {
                        label: '==/UserScript==',
                        kind: monaco.languages.CompletionItemKind.Property,
                        insertText: '==/UserScript==',
                        detail: 'UserScript end tag',
                        documentation: 'The end tag for a UserScript metadata block'
                    }];
            }
        };
        MonacoEditorMetaBlockMods._metaKeyProvider = {
            provideCompletionItems: function (model, position) {
                var lineRange = new monaco.Range(position.lineNumber, 0, position.lineNumber, position.column);
                var currentLineText = model.getValueInRange(lineRange);
                var metaBlock = model._metaBlock;
                if (!metaBlock || new monaco.Range(metaBlock.start.lineNumber, metaBlock.start.column, metaBlock.end.lineNumber, metaBlock.end.column).containsPosition(position)) {
                    var keyParts = currentLineText.split('@');
                    var length_1 = keyParts[0].length;
                    keyParts = keyParts.slice(1);
                    for (var _i = 0, keyParts_1 = keyParts; _i < keyParts_1.length; _i++) {
                        var keyPart = keyParts_1[_i];
                        var partialStr = "@" + keyPart;
                        var match = null;
                        if ((match = /@(\w*)/.exec(partialStr))) {
                            var matchIndex = length_1 + partialStr.indexOf(match[0]) + 1;
                            var matchRange = new monaco.Range(position.lineNumber, matchIndex, position.lineNumber, matchIndex + match[0].length);
                            if (matchRange.containsPosition(position)) {
                                return {
                                    isIncomplete: true,
                                    items: Object.getOwnPropertyNames(metaDataDescriptions).map(function (key) {
                                        var description = metaDataDescriptions[key];
                                        return {
                                            label: "@" + key,
                                            kind: monaco.languages.CompletionItemKind.Property,
                                            insertText: "@" + key,
                                            detail: 'Metadata key',
                                            documentation: description
                                        };
                                    })
                                };
                            }
                        }
                        length_1 += partialStr.length;
                    }
                }
                return [];
            }
        };
        MonacoEditorMetaBlockMods._userScriptStart = '==UserScript==';
        MonacoEditorMetaBlockMods._userScriptEnd = '==/UserScript==';
        MonacoEditorMetaBlockMods._metaPropRegex = /@(\w+)(\s+)(.+)?/;
        return MonacoEditorMetaBlockMods;
    }(MonacoEditorEventHandler));
    var MonacoEditorScriptMetaMods = (function (_super) {
        __extends(MonacoEditorScriptMetaMods, _super);
        function MonacoEditorScriptMetaMods(editor, model) {
            var _this = _super.call(this, editor, model) || this;
            _this.metaBlockChanged = true;
            if (_this._isTextarea()) {
                return _this;
            }
            MonacoEditorHookManager.Completion.register('javascript', MonacoEditorMetaBlockMods._metaTagProvider);
            MonacoEditorHookManager.Completion.register('javascript', MonacoEditorMetaBlockMods._metaKeyProvider);
            MonacoEditorHookManager.Completion.register('typescript', MonacoEditorMetaBlockMods._metaTagProvider);
            MonacoEditorHookManager.Completion.register('typescript', MonacoEditorMetaBlockMods._metaKeyProvider);
            _this._disposables.push({
                dispose: function () {
                    MonacoEditorHookManager.Completion.clearAll();
                }
            });
            return _this;
        }
        MonacoEditorScriptMetaMods.getSettings = function () {
            return {};
        };
        return MonacoEditorScriptMetaMods;
    }(MonacoEditorMetaBlockMods));
    MonacoEditorElement.MonacoEditorScriptMetaMods = MonacoEditorScriptMetaMods;
    var MonacoEditorCSSMetaMods = (function (_super) {
        __extends(MonacoEditorCSSMetaMods, _super);
        function MonacoEditorCSSMetaMods(editor, model) {
            var _this = _super.call(this, editor, model) || this;
            _this._underlineDisabled = false;
            _this._currentStylesheetRules = '';
            _this._styleLines = [];
            if (_this._isTextarea()) {
                return _this;
            }
            MonacoEditorHookManager.Completion.register('css', MonacoEditorMetaBlockMods._metaTagProvider);
            MonacoEditorHookManager.Completion.register('css', MonacoEditorMetaBlockMods._metaKeyProvider);
            _this._disposables.push({
                dispose: function () {
                    MonacoEditorHookManager.Completion.clearAll();
                }
            });
            _this._listen('shouldDecorate', function (event) {
                if (event.isFlush) {
                    return true;
                }
                for (var _i = 0, _a = event.changes; _i < _a.length; _i++) {
                    var change = _a[_i];
                    var lines = [change.range.startLineNumber];
                    if (change.range.endLineNumber !== change.range.startLineNumber) {
                        lines.push(change.range.endLineNumber);
                    }
                    for (var _b = 0, lines_1 = lines; _b < lines_1.length; _b++) {
                        var line = lines_1[_b];
                        if (_this._styleLines.indexOf(line) > -1) {
                            return true;
                        }
                        var lineContent = _this._model.getLineContent(line);
                        var cssRuleParts = _this._getCssRuleParts(lineContent);
                        for (var _c = 0, cssRuleParts_1 = cssRuleParts; _c < cssRuleParts_1.length; _c++) {
                            var cssRulePart = cssRuleParts_1[_c];
                            if (_this._findColor(0, cssRulePart.text)) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            });
            _this._listen('decorate', function () {
                return _this._highlightColors();
            });
            _this._disposables.push(MonacoEditorEventHandler._genDisposable(function () {
                return window.setInterval(function () {
                    if (!_this._underlineDisabled && window.app.item) {
                        _this._markUnderlines();
                    }
                }, 50);
            }, function (timer) {
                window.clearInterval(timer);
            }));
            if (window.app) {
                _this._underlineDisabled = window.app.settings.editor.cssUnderlineDisabled;
            }
            else {
                _this._underlineDisabled = window.installPage.settings.editor.cssUnderlineDisabled;
            }
            if (!_this._isDiff(_this._editor)) {
                _this._disposables.push(_this._editor.addAction({
                    id: 'disable-css-underline',
                    label: 'Disable CSS underline',
                    run: function () {
                        _this._underlineDisabled = true;
                    }
                }));
                _this._disposables.push(_this._editor.addAction({
                    id: 'enable-css-underline',
                    label: 'Enable CSS Underline',
                    run: function () {
                        _this._underlineDisabled = false;
                    }
                }));
            }
            return _this;
        }
        MonacoEditorCSSMetaMods.prototype._getCssRuleParts = function (str) {
            var match = null;
            var ruleParts = [];
            while ((match = MonacoEditorCSSMetaMods._cssRuleRegex.exec(str))) {
                var startIndex = str.indexOf(match[0]);
                var endIndex = startIndex + match[0].length;
                ruleParts.push({
                    text: match[0],
                    start: startIndex
                });
                str = str.slice(0, startIndex) +
                    this._stringRepeat('-', match[0].length) +
                    str.slice(endIndex);
            }
            return ruleParts;
        };
        MonacoEditorCSSMetaMods.prototype._findColor = function (lineNumber, str, offset) {
            if (offset === void 0) { offset = 0; }
            for (var _i = 0, _a = MonacoEditorCSSMetaMods._cssColorNames; _i < _a.length; _i++) {
                var color = _a[_i];
                var index = -1;
                if ((index = str.toLowerCase().indexOf(color)) > -1) {
                    return {
                        pos: new monaco.Range(lineNumber + 1, index + offset + 1, lineNumber + 1, index + offset + color.length + 1),
                        color: color
                    };
                }
            }
            var match = null;
            if ((match = MonacoEditorCSSMetaMods._hexRegex.exec(str))) {
                var index = str.indexOf(match[1]);
                return {
                    pos: new monaco.Range(lineNumber + 1, index + offset + 1, lineNumber + 1, index + offset + match[1].length + 1),
                    color: match[1]
                };
            }
            if ((match = MonacoEditorCSSMetaMods._rgbRegex.exec(str))) {
                var index = str.indexOf(match[0]);
                return {
                    pos: new monaco.Range(lineNumber + 1, index + offset + 1, lineNumber + 1, index + offset + match[0].length + 1),
                    color: match[0]
                };
            }
            if ((match = MonacoEditorCSSMetaMods._rgbaRegex.exec(str))) {
                var index = str.indexOf(match[0]);
                return {
                    pos: new monaco.Range(lineNumber + 1, index + offset + 1, lineNumber + 1, index + offset + match[0].length + 1),
                    color: match[0]
                };
            }
            return null;
        };
        MonacoEditorCSSMetaMods.prototype._stringRepeat = function (str, amount) {
            var result = '';
            for (var i = 0; i < amount; i++) {
                result = result + str;
            }
            return result;
        };
        MonacoEditorCSSMetaMods.prototype._getColors = function () {
            var content = this._model.getValue();
            var lines = content.split('\n');
            var colors = [];
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                var result = null;
                var cssRuleParts = this._getCssRuleParts(line);
                for (var _i = 0, cssRuleParts_2 = cssRuleParts; _i < cssRuleParts_2.length; _i++) {
                    var cssRulePart = cssRuleParts_2[_i];
                    if (result = this._findColor(i, cssRulePart.text, cssRulePart.start)) {
                        colors.push(result);
                    }
                }
            }
            return colors;
        };
        MonacoEditorCSSMetaMods.prototype._highlightColors = function () {
            var colors = this._getColors();
            this._styleLines = colors.map(function (color) { return color.pos.startLineNumber; });
            return colors.map(function (color) {
                return {
                    range: color.pos,
                    options: {
                        stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
                        beforeContentClassName: "userScriptColorUnderline color" + color.color
                    }
                };
            });
        };
        MonacoEditorCSSMetaMods.prototype._markUnderlines = function () {
            var newRules = [];
            var newRulesString = '';
            if (this._editor.getModel() === this._model) {
                var underlinables = this._editor.getDomNode().querySelectorAll('.userScriptColorUnderline');
                Array.prototype.slice.apply(underlinables).forEach(function (underlineable) {
                    for (var i = 0; i < underlineable.classList.length; i++) {
                        if (underlineable.classList[i].indexOf('color') === 0) {
                            var color = underlineable.classList[i].slice(5);
                            var className = underlineable.classList[i];
                            newRules.push(["." + className + "::before", "background-color: " + color]);
                            newRulesString += "" + className + color;
                        }
                    }
                });
                if (newRulesString === this._currentStylesheetRules) {
                    return;
                }
                var stylesheet = (window.app.item.type === 'script' ?
                    window.scriptEdit : window.stylesheetEdit)
                    .$.editor._getStylesheet();
                var sheet_1 = stylesheet.sheet;
                while (sheet_1.rules.length !== 0) {
                    sheet_1.deleteRule(0);
                }
                this._currentStylesheetRules = newRulesString;
                newRules.forEach(function (_a) {
                    var selector = _a[0], value = _a[1];
                    sheet_1.addRule(selector, value);
                });
            }
        };
        MonacoEditorCSSMetaMods.getSettings = function () {
            return {};
        };
        MonacoEditorCSSMetaMods._cssRuleRegex = /:(\s*)?(.*)(\s*);/;
        MonacoEditorCSSMetaMods._cssColorNames = [
            'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque',
            'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood',
            'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk',
            'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray',
            'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen',
            'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen',
            'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise',
            'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue',
            'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro',
            'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow',
            'HoneyDew', 'HotPink', 'IndianRed ', 'Indigo ', 'Ivory', 'Khaki', 'Lavender',
            'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral',
            'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen',
            'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray',
            'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen',
            'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue',
            'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue',
            'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue',
            'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace',
            'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod',
            'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff',
            'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red',
            'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen',
            'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray',
            'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle',
            'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow',
            'YellowGreen'
        ].map(function (str) { return str.toLowerCase(); }).sort(function (a, b) {
            return b.length - a.length;
        });
        MonacoEditorCSSMetaMods._hexRegex = /#((([a-f]|[A-F]){8})|(([a-f]|[A-F]){6})|(([a-f]|[A-F]){3}))[^a-f|A-F]/;
        MonacoEditorCSSMetaMods._rgbRegex = /rgb\((\d{1,3}),(\s*)?(\d{1,3}),(\s*)?(\d{1,3})\)/;
        MonacoEditorCSSMetaMods._rgbaRegex = /rgb\((\d{1,3}),(\s*)?(\d{1,3}),(\s*)?(\d{1,3})\),(\s*)?(\d{1,3})\)/;
        return MonacoEditorCSSMetaMods;
    }(MonacoEditorMetaBlockMods));
    var MonacoEditorJSONOptionsMods = (function (_super) {
        __extends(MonacoEditorJSONOptionsMods, _super);
        function MonacoEditorJSONOptionsMods(editor, model) {
            var _this = _super.call(this, editor, model) || this;
            if (_this._isTextarea()) {
                return _this;
            }
            var value = model.getValue();
            if (!_this._findSchema(value)) {
                model.setValue(_this._addSchemaKey(value));
            }
            MonacoEditorJSONOptionsMods.enableSchema();
            _this._disposables.push({
                dispose: function () {
                    MonacoEditorJSONOptionsMods.disableSchema();
                }
            });
            return _this;
        }
        MonacoEditorJSONOptionsMods.prototype._addSchemaKey = function (options) {
            var str1 = "\t\"$schema\": \"crm-settings.json\"";
            if (options.split('\n').join('').trim().length === 0) {
                return "{\n" + str1 + "\n}";
            }
            var lines = options.split('\n');
            for (var i in lines) {
                var line = lines[i];
                if (line.trim().indexOf('{') === 0) {
                    if (line.trim().length > 1) {
                        lines[i] = '{';
                        lines.splice(~~i + 1, 0, str1, line.trim().slice(1));
                    }
                    else {
                        lines.splice(~~i + 1, 0, str1);
                    }
                }
            }
            return lines.join('\n');
        };
        MonacoEditorJSONOptionsMods.prototype._findSchema = function (str) {
            str = str.replace(/\/\*.*?\*\//g, '');
            var lines = str.split('\n');
            for (var i in lines) {
                if (lines[i].indexOf('//') > -1) {
                    var inStr = false;
                    for (var index = 0; index < lines[i].length; index++) {
                        var char = lines[i][index];
                        if (char === '\\') {
                            continue;
                        }
                        else if (char === '"') {
                            inStr = !inStr;
                        }
                        else if (!inStr && char === '/' && lines[i][index + 1] === '/') {
                            lines[i] = lines[i].slice(0, index);
                        }
                    }
                }
            }
            try {
                var parsed = JSON.parse(str);
                if ('$schema' in parsed) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (_a) {
                return true;
            }
        };
        MonacoEditorJSONOptionsMods.disableSchema = function () {
            monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
                allowComments: true
            });
        };
        MonacoEditorJSONOptionsMods.enableSchema = function () {
            var schema = {
                type: 'object',
                properties: {
                    '$schema': {
                        type: 'string',
                        "enum": ['crm-settings.json']
                    }
                },
                additionalProperties: {
                    title: 'The name of the option',
                    type: 'object',
                    oneOf: [{
                            type: 'object',
                            properties: {
                                type: {
                                    title: 'A number type option',
                                    type: 'string',
                                    "enum": ['number']
                                },
                                minimum: {
                                    title: 'The minimum value of the number',
                                    type: 'number'
                                },
                                maximum: {
                                    title: 'The maximum value of the number',
                                    type: 'number'
                                },
                                descr: {
                                    title: 'A description for this option',
                                    type: 'string'
                                },
                                value: {
                                    title: 'The value of this option (set to null for unset)',
                                    description: 'The value of this option, changing it here will have the' +
                                        ' same effect as changing it in the options dialog',
                                    type: ['number', 'null']
                                }
                            }
                        }, {
                            type: 'object',
                            properties: {
                                type: {
                                    title: 'A string type option',
                                    type: 'string',
                                    "enum": ['string']
                                },
                                maxLength: {
                                    title: 'The maximum length of the string',
                                    type: 'number'
                                },
                                format: {
                                    title: 'A regex format that the string has to follow',
                                    type: 'string'
                                },
                                descr: {
                                    title: 'A description for this option',
                                    type: 'string'
                                },
                                value: {
                                    title: 'The value of this option (set to null for unset)',
                                    description: 'The value of this option, changing it here will have the' +
                                        ' same effect as changing it in the options dialog',
                                    type: ['string', 'null']
                                }
                            }
                        }, {
                            type: 'object',
                            properties: {
                                type: {
                                    title: 'A choice type option',
                                    type: 'string',
                                    "enum": ['choice']
                                },
                                selected: {
                                    title: 'The selected value\'s index',
                                    type: 'number'
                                },
                                descr: {
                                    title: 'A description for this option',
                                    type: 'string'
                                },
                                values: {
                                    title: 'The possible values of this option',
                                    type: 'array',
                                    items: {
                                        type: ['string', 'number']
                                    }
                                }
                            }
                        }, {
                            type: 'object',
                            properties: {
                                type: {
                                    title: 'A boolean type option',
                                    type: 'string',
                                    "enum": ['boolean']
                                },
                                descr: {
                                    title: 'A description for this option',
                                    type: 'string'
                                },
                                value: {
                                    title: 'The value of this option (set to null for unset)',
                                    description: 'The value of this option, changing it here will have the' +
                                        ' same effect as changing it in the options dialog',
                                    type: ['boolean', 'null']
                                }
                            }
                        }, {
                            type: 'object',
                            properties: {
                                type: {
                                    title: 'An array type option',
                                    type: 'string',
                                    "enum": ['array']
                                },
                                maxItems: {
                                    title: 'The maximum number of array items',
                                    type: 'number'
                                },
                                items: {
                                    title: 'The type of items this array contains (array or string)',
                                    type: 'string',
                                    "enum": ['string', 'number']
                                },
                                descr: {
                                    title: 'A description for this option',
                                    type: 'string'
                                },
                                value: {
                                    title: 'The value of this option (set to null for unset)',
                                    description: 'The value of this option, changing it here will have the' +
                                        ' same effect as changing it in the options dialog',
                                    type: ['boolean', 'null']
                                }
                            },
                            required: ['items']
                        }]
                }
            };
            monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
                allowComments: false,
                schemas: [{
                        uri: 'crm-settings.json',
                        schema: schema
                    }],
                validate: true
            });
        };
        MonacoEditorJSONOptionsMods.getSettings = function () {
            return {};
        };
        return MonacoEditorJSONOptionsMods;
    }(MonacoEditorEventHandler));
    var MonacoEditorTSLibrariesMetaMods = (function (_super) {
        __extends(MonacoEditorTSLibrariesMetaMods, _super);
        function MonacoEditorTSLibrariesMetaMods(editor, model, _a) {
            var node = _a.node, isBackground = _a.isBackground;
            var _this = _super.call(this, editor, model) || this;
            _this._libraries = [];
            _this._registrationDisposables = [];
            _this._node = node;
            _this._isBackground = isBackground;
            if (_this._isTextarea()) {
                return _this;
            }
            _this._enable();
            if (!_this._isDiff(_this._editor)) {
                _this._disposables.push(_this._editor.onDidChangeModel(function (e) {
                    if (e.newModelUrl === model.uri) {
                        _this._enable();
                    }
                    else {
                        _this._disable();
                    }
                }));
            }
            _this._disposables.push({
                dispose: function () {
                    _this._registrationDisposables.forEach(function (reg) {
                        reg.dispose();
                    });
                }
            });
            return _this;
        }
        MonacoEditorTSLibrariesMetaMods.prototype._enable = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this._registerLibraries(this._libraries)];
                        case 1:
                            _a._registrationDisposables = _b.sent();
                            return [2];
                    }
                });
            });
        };
        MonacoEditorTSLibrariesMetaMods.prototype._disable = function () {
            this._registrationDisposables.forEach(function (disposable) {
                disposable.dispose();
            });
            this._registrationDisposables = [];
        };
        MonacoEditorTSLibrariesMetaMods.prototype.updateLibraries = function () {
            this._libraries = this._getLibraries(this._node, this._isBackground);
        };
        MonacoEditorTSLibrariesMetaMods.prototype._getLibraries = function (node, isBackground) {
            if (isBackground) {
                return node.value.backgroundLibraries;
            }
            return node.value.libraries;
        };
        MonacoEditorTSLibrariesMetaMods.prototype._getLibrary = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                var data, libs, _i, libs_1, lib;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!name) {
                                return [2, false];
                            }
                            return [4, browserAPI.storage.local.get()];
                        case 1:
                            data = _a.sent();
                            libs = data.libraries;
                            for (_i = 0, libs_1 = libs; _i < libs_1.length; _i++) {
                                lib = libs_1[_i];
                                if (lib.name === name) {
                                    if (lib.ts && lib.ts.enabled) {
                                        return [2, lib.ts.code.compiled];
                                    }
                                    break;
                                }
                            }
                            return [2, false];
                    }
                });
            });
        };
        MonacoEditorTSLibrariesMetaMods.prototype._registerLibrary = function (library) {
            return __awaiter(this, void 0, void 0, function () {
                var content;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._getLibrary(library.name)];
                        case 1:
                            content = _a.sent();
                            if (content === false) {
                                return [2, { dispose: function () { } }];
                            }
                            return [2, monaco.languages.typescript.typescriptDefaults.addExtraLib(content, library.name + ".ts")];
                    }
                });
            });
        };
        MonacoEditorTSLibrariesMetaMods.prototype._registerLibraries = function (libraries) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, Promise.all(libraries.map(function (library) { return _this._registerLibrary(library); }))];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        MonacoEditorTSLibrariesMetaMods.getSettings = function () {
            return {};
        };
        return MonacoEditorTSLibrariesMetaMods;
    }(MonacoEditorScriptMetaMods));
    MonacoEditorElement.MonacoEditorTSLibrariesMetaMods = MonacoEditorTSLibrariesMetaMods;
    var TextareaEditorBase = (function () {
        function TextareaEditorBase(container, _options) {
            this._options = _options;
            this._models = [];
            this.__textarea = true;
            var model = _options.model;
            if (model) {
                this._model = model;
                if ('original' in model) {
                    this._models = [model.original, model.modified];
                }
                else {
                    this._models = [model];
                }
            }
            this._genBaseElements(container);
            if (model) {
                if ('original' in model) {
                    this._addModelListenersBase(model.original);
                    this._addModelListenersBase(model.modified);
                }
                else {
                    this._addModelListenersBase(model);
                }
            }
        }
        TextareaEditorBase.prototype._genBaseElements = function (container) {
            var textareaContainer = document.createElement('div');
            textareaContainer.classList.add('monacoTextareaContainer');
            container.appendChild(textareaContainer);
            this._baseElements = {
                container: textareaContainer
            };
        };
        TextareaEditorBase.prototype._totalCharIndexToPosition = function (content, total) {
            var lines = content.split('\n');
            for (var i in lines) {
                var line = lines[i];
                if (total - line.length <= 0) {
                    return {
                        line: ~~i,
                        char: total - line.length
                    };
                }
            }
            return {
                line: lines.length - 1,
                char: lines[lines.length - 1].length
            };
        };
        TextareaEditorBase.prototype._addModelListenersBase = function (model) {
            this._models.push(model);
            this._addModelListeners(model);
        };
        TextareaEditorBase.prototype._assertModelAdded = function (model) {
            if (this._models.indexOf(model) === -1) {
                this._models.push(model);
                this._addModelListeners(model);
            }
        };
        TextareaEditorBase.prototype._genTextarea = function () {
            var textarea = document.createElement('textarea');
            textarea.classList.add('monacoEditorTextarea');
            textarea.setAttribute('spellcheck', 'false');
            textarea.setAttribute('autocomplete', 'off');
            textarea.setAttribute('autocorrect', 'off');
            textarea.setAttribute('autocapitalize', 'off');
            if (this._options.theme === 'vs-dark') {
                textarea.classList.add('dark-theme');
            }
            return textarea;
        };
        TextareaEditorBase.prototype.updateOptions = function (options) { };
        TextareaEditorBase.prototype.getValue = function (options) {
            return this._getValue();
        };
        TextareaEditorBase.prototype.saveViewState = function () {
            if ('original' in this._model) {
                return this._model.modified;
            }
            return this._model;
        };
        TextareaEditorBase.prototype.restoreViewState = function (model) {
            this._swapToModel(model);
        };
        TextareaEditorBase.prototype.focus = function () {
            this._textareaElements[0] && this._textareaElements[0].focus();
        };
        TextareaEditorBase.prototype.layout = function () { };
        TextareaEditorBase.prototype.dispose = function () {
            this._textareaElements && this._textareaElements.forEach(function (el) {
                el && el.remove();
            });
            this._textareaElements = [];
            this._models.forEach(function (model) { return model.dispose(); });
            this._models = [];
            this._baseElements.container && this._baseElements.container.remove();
            this._baseElements = {};
        };
        TextareaEditorBase.prototype.getDomNode = function () {
            return this._baseElements.container;
        };
        TextareaEditorBase.prototype.getSelected = function () {
            for (var _i = 0, _a = this._textareaElements; _i < _a.length; _i++) {
                var textarea = _a[_i];
                if (!textarea) {
                    continue;
                }
                var start = textarea.selectionStart;
                var finish = textarea.selectionEnd;
                var selection = textarea.value.substring(start, finish);
                return {
                    from: __assign({}, this._totalCharIndexToPosition(textarea.value, start), { totalChar: start }),
                    to: __assign({}, this._totalCharIndexToPosition(textarea.value, finish), { totalChar: finish }),
                    content: selection
                };
            }
            return null;
        };
        return TextareaEditorBase;
    }());
    var TextareaStandardEditor = (function (_super) {
        __extends(TextareaStandardEditor, _super);
        function TextareaStandardEditor(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this._genElements(container);
            _this._textarea.addEventListener('keydown', function () {
                window.setTimeout(function () {
                    _this._model.setValue(_this._textarea.value, _this._textarea);
                }, 0);
            });
            if (options.model) {
                _this._textarea.value = options.model.getValue();
            }
            return _this;
        }
        TextareaStandardEditor.prototype._genElements = function (container) {
            this._textarea = this._genTextarea();
            this._textareaElements = [this._textarea];
            this._baseElements.container.appendChild(this._textarea);
        };
        TextareaStandardEditor.prototype._isActiveModel = function (model) {
            return this._model === model;
        };
        TextareaStandardEditor.prototype._addModelListeners = function (model) {
            var _this = this;
            model.listen('change', function (_a) {
                var newValue = _a.newValue, src = _a.src;
                if (_this._isActiveModel(model)) {
                    if (src !== _this._textarea) {
                        _this._textarea.value = newValue;
                    }
                }
            });
        };
        TextareaStandardEditor.prototype._getValue = function () {
            return this._model.getValue();
        };
        TextareaStandardEditor.prototype._swapToModel = function (model) {
            this.setModel(model);
        };
        TextareaStandardEditor.prototype.getModel = function () {
            return this._model;
        };
        ;
        TextareaStandardEditor.prototype.setModel = function (model) {
            this._assertModelAdded(model);
            this._model = model;
            this._textarea.value = model.getValue();
        };
        ;
        TextareaStandardEditor.prototype.setValue = function (value) {
            this._model.setValue(value);
        };
        return TextareaStandardEditor;
    }(TextareaEditorBase));
    var TextareaDiffEditor = (function (_super) {
        __extends(TextareaDiffEditor, _super);
        function TextareaDiffEditor(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.__diff = true;
            _this._genElements();
            if (options.model) {
                _this._textareas.original.value = options.model.original.getValue();
                _this._textareas.modified.value = options.model.modified.getValue();
            }
            return _this;
        }
        TextareaDiffEditor.prototype._genElements = function () {
            var originalTextarea = this._genTextarea();
            var modifiedTextarea = this._genTextarea();
            originalTextarea.classList.add('monacoOriginalTextarea');
            modifiedTextarea.classList.add('monacoModifiedTextarea');
            this._textareas = {
                original: originalTextarea,
                modified: modifiedTextarea
            };
            this._textareaElements = [originalTextarea, modifiedTextarea];
            this._baseElements.container.classList.add('diffContainer');
            this._baseElements.container.appendChild(originalTextarea);
            this._baseElements.container.appendChild(modifiedTextarea);
        };
        TextareaDiffEditor.prototype._setTextareaValues = function (model) {
            this._textareas.original.value = model.original.getValue();
            this._textareas.modified.value = model.modified.getValue();
        };
        TextareaDiffEditor.prototype._isActiveOriginalModel = function (model) {
            return this._model.original === model;
        };
        TextareaDiffEditor.prototype._isActiveModifiedModel = function (model) {
            return this._model.modified === model;
        };
        TextareaDiffEditor.prototype._addModelListeners = function (model) {
            var _this = this;
            model.listen('change', function (_a) {
                var newValue = _a.newValue, src = _a.src;
                if (_this._isActiveOriginalModel(model)) {
                    if (src !== _this._textareas.original) {
                        _this._textareas.original.value = newValue;
                    }
                }
                else if (_this._isActiveModifiedModel(model)) {
                    if (src !== _this._textareas.modified) {
                        _this._textareas.modified.value = newValue;
                    }
                }
            });
        };
        TextareaDiffEditor.prototype._getValue = function () {
            return this._model.modified.getValue();
        };
        TextareaDiffEditor.prototype._swapToModel = function (model) {
            this.setModel(model);
        };
        TextareaDiffEditor.prototype.getModel = function () {
            return this._model;
        };
        TextareaDiffEditor.prototype.setModel = function (model) {
            this._assertModelAdded(model.original);
            this._assertModelAdded(model.modified);
            this._model = model;
            this._setTextareaValues(model);
        };
        return TextareaDiffEditor;
    }(TextareaEditorBase));
    var TextareaModel = (function (_super) {
        __extends(TextareaModel, _super);
        function TextareaModel(value) {
            var _this = _super.call(this) || this;
            _this.setValue(value);
            return _this;
        }
        TextareaModel.prototype.getValue = function () {
            return this._value;
        };
        TextareaModel.prototype.setValue = function (value, src) {
            var oldValue = this._value;
            this._value = value;
            if (this._value !== oldValue) {
                this._firePublic('change', [{
                        oldValue: oldValue,
                        newValue: this._value,
                        src: src
                    }]);
            }
        };
        TextareaModel.prototype.dispose = function () { };
        return TextareaModel;
    }(EventEmitter));
    var monacoEditorProperties = {
        noSpinner: {
            type: Boolean,
            notify: true,
            value: false
        }
    };
    var EditorMode;
    (function (EditorMode) {
        EditorMode[EditorMode["CSS"] = 0] = "CSS";
        EditorMode[EditorMode["JS"] = 1] = "JS";
        EditorMode[EditorMode["TS"] = 2] = "TS";
        EditorMode[EditorMode["JSON"] = 3] = "JSON";
        EditorMode[EditorMode["JSON_OPTIONS"] = 4] = "JSON_OPTIONS";
        EditorMode[EditorMode["JS_META"] = 5] = "JS_META";
        EditorMode[EditorMode["TS_META"] = 6] = "TS_META";
        EditorMode[EditorMode["CSS_META"] = 7] = "CSS_META";
        EditorMode[EditorMode["PLAIN_TEXT"] = 8] = "PLAIN_TEXT";
    })(EditorMode || (EditorMode = {}));
    var CustomEditorModes;
    (function (CustomEditorModes) {
        CustomEditorModes[CustomEditorModes["TS_LIBRARIES_META"] = 0] = "TS_LIBRARIES_META";
    })(CustomEditorModes || (CustomEditorModes = {}));
    var MOE = (function () {
        function MOE() {
        }
        MOE._typeIsCss = function (editorType) {
            switch (editorType) {
                case EditorMode.CSS:
                case EditorMode.CSS_META:
                    return true;
            }
            return false;
        };
        MOE._typeIsTS = function (editorType) {
            switch (editorType) {
                case EditorMode.TS:
                case EditorMode.TS_META:
                    return true;
            }
            return false;
        };
        MOE._typeIsJS = function (editorType) {
            switch (editorType) {
                case EditorMode.JS:
                case EditorMode.JS_META:
                    return true;
            }
            return false;
        };
        MOE._typeIsJSON = function (editorType) {
            switch (editorType) {
                case EditorMode.JSON:
                case EditorMode.JSON_OPTIONS:
                    return true;
            }
            return false;
        };
        MOE._getSettings = function (editorType) {
            switch (editorType) {
                case EditorMode.CSS_META:
                    return MonacoEditorCSSMetaMods.getSettings();
                case EditorMode.TS_META:
                    return MonacoEditorScriptMetaMods.getSettings();
                case EditorMode.JSON_OPTIONS:
                    return MonacoEditorJSONOptionsMods.getSettings();
            }
            if (typeof editorType === 'object') {
                switch (editorType.mode) {
                    case CustomEditorModes.TS_LIBRARIES_META:
                        return MonacoEditorTSLibrariesMetaMods.getSettings();
                }
            }
            return {};
        };
        MOE._getTypeHandler = function (editorType, editor, model) {
            switch (editorType) {
                case EditorMode.CSS_META:
                    return new MonacoEditorCSSMetaMods(editor, model);
                case EditorMode.JS_META:
                case EditorMode.TS_META:
                    return new MonacoEditorScriptMetaMods(editor, model);
                case EditorMode.JSON_OPTIONS:
                    return new MonacoEditorJSONOptionsMods(editor, model);
            }
            if (typeof editorType === 'object') {
                switch (editorType.mode) {
                    case CustomEditorModes.TS_LIBRARIES_META:
                        return new MonacoEditorTSLibrariesMetaMods(editor, model, editorType.config);
                }
            }
            return null;
        };
        MOE._getLanguage = function (editorType) {
            if (this._typeIsCss(editorType)) {
                return 'css';
            }
            if (this._typeIsJS(editorType)) {
                return 'javascript';
            }
            if (this._typeIsTS(editorType)) {
                return 'typescript';
            }
            if (this._typeIsJSON(editorType)) {
                return 'json';
            }
            return 'text/plain';
        };
        MOE.initTSLibrariesMode = function (node, isBackground) {
            return {
                custom: true,
                config: {
                    node: node,
                    isBackground: isBackground
                },
                mode: CustomEditorModes.TS_LIBRARIES_META
            };
        };
        MOE._mergeArrays = function (mainArray, additionArray) {
            for (var i = 0; i < additionArray.length; i++) {
                if (mainArray[i] && typeof additionArray[i] === 'object' &&
                    mainArray[i] !== undefined && mainArray[i] !== null) {
                    if (Array.isArray(additionArray[i])) {
                        mainArray[i] = this._mergeArrays(mainArray[i], additionArray[i]);
                    }
                    else {
                        mainArray[i] = this._mergeObjects(mainArray[i], additionArray[i]);
                    }
                }
                else {
                    mainArray[i] = additionArray[i];
                }
            }
            return mainArray;
        };
        ;
        MOE._mergeObjects = function (mainObject, additions) {
            for (var key in additions) {
                if (additions.hasOwnProperty(key)) {
                    if (typeof additions[key] === 'object' &&
                        typeof mainObject[key] === 'object' &&
                        mainObject[key] !== undefined &&
                        mainObject[key] !== null) {
                        if (Array.isArray(additions[key])) {
                            mainObject[key] = this._mergeArrays(mainObject[key], additions[key]);
                        }
                        else {
                            mainObject[key] = this._mergeObjects(mainObject[key], additions[key]);
                        }
                    }
                    else {
                        mainObject[key] = additions[key];
                    }
                }
            }
            return mainObject;
        };
        ;
        MOE.setMonacoEditorScopes = function (getEditor) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this._supportsMonaco()) return [3, 2];
                            return [4, MonacoEditorHookManager.monacoReady];
                        case 1:
                            _a.sent();
                            MonacoEditorHookManager.setScope(this);
                            _a.label = 2;
                        case 2:
                            result = getEditor();
                            if (this._supportsMonaco()) {
                                MonacoEditorHookManager.registerScope(this, this.editor);
                                MonacoEditorHookManager.StyleHack.copyThemeScope(this);
                            }
                            this._hideSpinner();
                            return [2, result];
                    }
                });
            });
        };
        MOE._getChromeVersion = function () {
            if (BrowserAPI.getBrowser() === 'chrome') {
                return parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2], 10);
            }
            return 1000;
        };
        MOE._supportsMonaco = function () {
            return this._getChromeVersion() >= 30;
        };
        MOE.create = function (editorType, options, override) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                var language, model, typeHandler;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            language = this._getLanguage(editorType);
                            this._createInfo = {
                                method: 'create',
                                options: options,
                                override: override
                            };
                            this._isTypescript = this._typeIsTS(editorType);
                            this.options = options;
                            return [4, this.setMonacoEditorScopes(function () {
                                    if (_this._supportsMonaco()) {
                                        var model_1 = monaco.editor.createModel(options.value, language);
                                        _this.editor = window.monaco.editor.create(_this.$.editorElement, _this._mergeObjects({
                                            model: model_1
                                        }, options), override);
                                        return model_1;
                                    }
                                    else {
                                        var model_2 = new TextareaModel(options.value);
                                        _this.editor = new TextareaStandardEditor(_this.$.editorElement, {
                                            model: model_2
                                        });
                                        return model_2;
                                    }
                                })];
                        case 1:
                            model = _a.sent();
                            this.editor.updateOptions(this._getSettings(editorType));
                            typeHandler = this._getTypeHandler(editorType, this.editor, model);
                            this._models['default'] = {
                                models: [this.editor.getModel()],
                                handlers: [typeHandler],
                                state: null,
                                editorType: editorType
                            };
                            return [2, this];
                    }
                });
            });
        };
        MOE.createDiff = function (_a, editorType, options, override) {
            var oldValue = _a[0], newValue = _a[1];
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                var language, originalModel, modifiedModel, typeHandlers;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            language = this._getLanguage(editorType);
                            this._createInfo = {
                                method: 'diff',
                                values: [oldValue, newValue],
                                language: language,
                                editorType: editorType,
                                options: options,
                                override: override
                            };
                            this._isTypescript = this._typeIsTS(editorType);
                            this.options = options;
                            return [4, this.setMonacoEditorScopes(function () {
                                    if (_this._supportsMonaco()) {
                                        _this.editor = monaco.editor.createDiffEditor(_this.$.editorElement, options, override);
                                    }
                                    else {
                                        _this.editor = new TextareaDiffEditor(_this.$.editorElement, {});
                                    }
                                })];
                        case 1:
                            _b.sent();
                            if (this._supportsMonaco()) {
                                originalModel = monaco.editor.createModel(oldValue, language);
                                modifiedModel = monaco.editor.createModel(newValue, language);
                            }
                            else {
                                originalModel = new TextareaModel(oldValue);
                                modifiedModel = new TextareaModel(newValue);
                            }
                            this.editor.updateOptions(this._getSettings(editorType));
                            this.editor.setModel({
                                original: originalModel,
                                modified: modifiedModel
                            });
                            typeHandlers = [
                                this._getTypeHandler(editorType, this.editor, originalModel),
                                this._getTypeHandler(editorType, this.editor, modifiedModel)
                            ];
                            this._models['default'] = {
                                editorType: editorType,
                                handlers: typeHandlers,
                                models: [originalModel, modifiedModel],
                                state: null
                            };
                            return [2, this];
                    }
                });
            });
        };
        MOE.createFrom = function (from) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                var editor, editorType, typeHandler;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this._createInfo && this._createInfo.method === 'from') {
                                this._createInfo.from.removeChild(this);
                            }
                            editor = from.editor;
                            editorType = from.getCurrentModel().editorType;
                            this._createInfo = {
                                method: 'from',
                                from: from,
                                modelId: from.getCurrentModelId()
                            };
                            this._isTypescript = this._typeIsTS(editorType);
                            return [4, this.setMonacoEditorScopes(function () {
                                    if (_this._supportsMonaco()) {
                                        _this.editor = window.monaco.editor.create(_this.$.editorElement, _this._mergeObjects({
                                            model: editor.getModel()
                                        }, _this.options));
                                    }
                                    else {
                                        _this.editor = new TextareaStandardEditor(_this.$.editorElement, {
                                            model: editor.getModel()
                                        });
                                    }
                                })];
                        case 1:
                            _a.sent();
                            this.editor.updateOptions(this._getSettings(editorType));
                            typeHandler = this._getTypeHandler(editorType, this.editor, this.editor.getModel());
                            this._models['default'] = {
                                models: [this.editor.getModel()],
                                handlers: [typeHandler],
                                state: null,
                                editorType: editorType
                            };
                            from.addChild(this);
                            return [2, this];
                    }
                });
            });
        };
        MOE.isDiff = function (editor) {
            return this._createInfo.method === 'diff';
        };
        MOE.isTextarea = function (editor) {
            return '__textarea' in this.editor;
        };
        MOE.getEditorAsMonaco = function () {
            return this.editor;
        };
        MOE.setValue = function (value) {
            if (!this.isDiff(this.editor)) {
                this.editor.setValue(value);
            }
        };
        MOE.reset = function () {
            return __awaiter(this, void 0, void 0, function () {
                var createInfo, currentModel, editorType;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            createInfo = this._createInfo;
                            currentModel = this.getCurrentModel();
                            if (!currentModel) {
                                return [2, null];
                            }
                            editorType = currentModel.editorType;
                            this.destroy();
                            if (!(createInfo.method === 'create')) return [3, 2];
                            return [4, this.create(editorType, createInfo.options, createInfo.override)];
                        case 1: return [2, _a.sent()];
                        case 2:
                            if (!(createInfo.method === 'diff')) return [3, 4];
                            return [4, this.createDiff(createInfo.values, createInfo.editorType, createInfo.options, createInfo.override)];
                        case 3: return [2, _a.sent()];
                        case 4: return [4, this.createFrom(createInfo.from)];
                        case 5: return [2, _a.sent()];
                    }
                });
            });
        };
        MOE.addChild = function (child) {
            this._children.push(child);
        };
        MOE.removeChild = function (child) {
            this._children.splice(this._children.indexOf(child), 1);
        };
        MOE.setNewModels = function (models) {
            var editor = this.editor;
            if (this.isDiff(editor)) {
                editor.setModel({
                    original: models[0],
                    modified: models[1]
                });
            }
            else {
                editor.setModel(models[0]);
            }
        };
        MOE.setTypescript = function (enabled) {
            var _this = this;
            if (this._isTypescript === enabled) {
                return;
            }
            if (this._createInfo.method === 'from') {
                this._createInfo.from.setTypescript(enabled);
                return;
            }
            var currentModelId = this.getCurrentModelId();
            var currentModel = this.getCurrentModel();
            var lang = enabled ? 'typescript' : 'javascript';
            var oldModels = currentModel.models;
            currentModel.handlers.forEach(function (handler) {
                handler.destroy();
            });
            var newModels = oldModels.map(function (oldModel) {
                return monaco.editor.createModel(oldModel.getValue(), lang);
            });
            if (MonacoEditorHookManager.hasScope(this)) {
                this.setNewModels(newModels);
            }
            else {
                this.setNewModels([MonacoEditorHookManager.getNullModel()]);
                MonacoEditorHookManager.onHasScope(this, function () {
                    _this.setNewModels(newModels);
                });
            }
            oldModels.forEach(function (oldModel) { return oldModel.dispose(); });
            currentModel.handlers = newModels.map(function (newModel) {
                return _this._getTypeHandler(currentModel.editorType, _this.editor, newModel);
            });
            currentModel.models = newModels;
            for (var modelId in this._models) {
                if (modelId !== currentModelId) {
                    delete this._models[modelId];
                }
            }
            this._isTypescript = enabled;
            this._children.forEach(function (child) {
                child._isTypescript = enabled;
                var copiedModelName = child._createInfo.modelId;
                var model = _this.getModel(copiedModelName);
                if (!_this.isDiff(child.editor)) {
                    child.editor.setModel(model.models[0]);
                }
            });
        };
        MOE.addModel = function (identifier, value, editorType) {
            if (this.hasModel(identifier)) {
                return;
            }
            var model = monaco.editor.createModel(value, this._getLanguage(editorType));
            var handler = this._getTypeHandler(editorType, this.editor, model);
            this._models[identifier] = {
                models: [model],
                handlers: [handler],
                state: null,
                editorType: editorType
            };
        };
        MOE.hasModel = function (identifier) {
            return identifier in this._models;
        };
        MOE.getModel = function (identifier) {
            return this._models[identifier];
        };
        MOE.switchToModel = function (identifier, value, editorType) {
            if (!this.hasModel(identifier)) {
                this.addModel(identifier, value, editorType);
            }
            if (this.getCurrentModelId() === identifier) {
                return;
            }
            var currentState = this.editor.saveViewState();
            var currentModel = this.getCurrentModelId();
            if (currentModel in this._models) {
                this._models[currentModel].state = currentState;
            }
            var newModel = this._models[identifier];
            this.editor.setModel(newModel.models[0]);
            this.editor.restoreViewState(newModel.state);
            this.editor.focus();
        };
        MOE.getCurrentModelId = function () {
            for (var modelId in this._models) {
                var models = this._models[modelId].models;
                if (models[0] === this.editor.getModel()) {
                    return modelId;
                }
            }
            return null;
        };
        MOE.getCurrentModel = function () {
            return this._models[this.getCurrentModelId()];
        };
        MOE.destroy = function () {
            this.editor.dispose();
            for (var modelId in this._models) {
                var model = this._models[modelId];
                model.handlers.forEach(function (handler) {
                    handler.destroy();
                });
                model.handlers = null;
                delete this._models[modelId];
            }
            this._showSpinner();
        };
        MOE._runJsLint = function () {
            var code = this.getCurrentModel().models[0].getValue();
            var warnings = window.jslint(code, {}, window.app.jsLintGlobals.slice()).warnings;
            return warnings.map(function (warning) { return ({
                col: warning.column,
                line: warning.line,
                message: warning.message
            }); });
        };
        MOE._runCssLint = function () {
            var code = this.getCurrentModel().models[0].getValue();
            var messages = window.CSSLint.verify(code).messages;
            return messages.map(function (message) { return ({
                col: message.col,
                line: message.line,
                message: message.message
            }); });
        };
        MOE._showLintResults = function (name, messages) {
            if ('__textarea' in this.editor) {
                return;
            }
            monaco.editor.setModelMarkers(this.getCurrentModel().models[0], name, messages.map(function (message) { return ({
                startLineNumber: message.line,
                endLineNumber: message.line,
                startColumn: message.col,
                endColumn: message.col,
                message: message.message,
                severity: 2
            }); }));
        };
        MOE.runLinter = function () {
            return __awaiter(this, void 0, void 0, function () {
                var type;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            type = this._models[this.getCurrentModelId()].editorType;
                            if (!this._typeIsJS(type)) return [3, 2];
                            return [4, MonacoEditorHookManager.Libraries.runFile('js/libraries/jslint.js')];
                        case 1:
                            _a.sent();
                            this._showLintResults('jslint', this._runJsLint());
                            return [3, 5];
                        case 2:
                            if (!this._typeIsTS(type)) return [3, 3];
                            alert('No linting possible in typescript mode');
                            return [3, 5];
                        case 3:
                            if (!this._typeIsCss(type)) return [3, 5];
                            return [4, MonacoEditorHookManager.Libraries.runFile('js/libraries/csslint.js')];
                        case 4:
                            _a.sent();
                            this._showLintResults('csslint', this._runCssLint());
                            _a.label = 5;
                        case 5: return [2];
                    }
                });
            });
        };
        MOE.getTypeHandler = function () {
            return this._models[this.getCurrentModelId()].handlers;
        };
        MOE._showSpinner = function () {
            window.setDisplayFlex(this.$.placeholder);
            this.$.spinner && (this.$.spinner.active = true);
            this.$.placeholder.classList.remove('hidden');
        };
        MOE._hideSpinner = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.$.spinner && (this.$.spinner.active = false);
                            this.$.placeholder.classList.add('hidden');
                            return [4, new window.Promise(function (resolve) {
                                    window.setTimeout(function () {
                                        resolve(null);
                                    }, 1000);
                                })];
                        case 1:
                            _a.sent();
                            this.$.placeholder.style.display = 'none';
                            return [2];
                    }
                });
            });
        };
        MOE._getStylesheet = function () {
            if (this._stylesheet) {
                return this._stylesheet;
            }
            var el = document.createElement('style');
            this.shadowRoot.appendChild(el);
            return (this._stylesheet = el);
        };
        MOE.claimScope = function () {
            MonacoEditorHookManager.setScope(this);
        };
        MOE.setDefaultHeight = function () {
            var previous = this.$.editorElement.getBoundingClientRect().height;
            if (this._tempLayoutInfo) {
                previous = this._tempLayoutInfo.previous;
            }
            this._tempLayoutInfo = {
                previous: previous,
                current: previous
            };
        };
        MOE.setTempLayout = function () {
            var current = this.$.editorElement.getBoundingClientRect().height;
            var previous = current;
            if (this._tempLayoutInfo) {
                previous = this._tempLayoutInfo.previous;
            }
            this._tempLayoutInfo = {
                previous: previous,
                current: current
            };
            this.editor && this.editor.layout();
        };
        MOE.stopTempLayout = function () {
            if (!this._tempLayoutInfo) {
                return;
            }
            var previous = this._tempLayoutInfo.previous;
            this.$.editorElement.style.maxHeight = previous + "px";
            this.editor.layout();
            this._tempLayoutInfo.current = previous;
            this.$.editorElement.style.maxHeight = 'none';
        };
        MOE.ready = function () {
            this._showSpinner();
            this._models = {};
            this._children = [];
            MonacoEditorHookManager.setup();
        };
        MOE.is = 'monaco-editor';
        MOE.EditorMode = EditorMode;
        MOE.CustomEditorModes = CustomEditorModes;
        MOE.properties = monacoEditorProperties;
        MOE.options = null;
        MOE._createInfo = null;
        MOE._tempLayoutInfo = null;
        return MOE;
    }());
    var MonacoEditorHookManager = (function () {
        function MonacoEditorHookManager() {
        }
        MonacoEditorHookManager.setScope = function (scope) {
            var _this = this;
            this.currentScope = scope;
            window.setTimeout(function () {
                scope.editor.getDomNode() &&
                    scope.editor.getDomNode().addEventListener('mouseover', function () {
                        _this.currentScope = scope;
                    });
            }, 500);
            this._scopeListeners = this._scopeListeners.filter(function (_a) {
                var listenerScope = _a.scope, listener = _a.listener;
                if (listenerScope === scope) {
                    listener();
                    return false;
                }
                return true;
            });
        };
        MonacoEditorHookManager.hasScope = function (scope) {
            return this.currentScope === scope;
        };
        MonacoEditorHookManager.onHasScope = function (scope, listener) {
            if (scope === this.currentScope) {
                listener();
                return;
            }
            this._scopeListeners.push({
                scope: scope,
                listener: listener
            });
        };
        MonacoEditorHookManager.registerScope = function (scope, editor) {
            this._scopes.push([scope, editor]);
        };
        MonacoEditorHookManager._setupRequire = function () {
            var _this = this;
            return new window.Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                var require;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, window.onExistsChain(window, 'AMDLoader', 'global', 'require')];
                        case 1:
                            require = _a.sent();
                            require.config({
                                paths: {
                                    'vs': '../elements/options/editpages/monaco-editor/src/min/vs'
                                }
                            });
                            require(['vs/editor/editor.main'], function () {
                                resolve(null);
                            });
                            return [2];
                    }
                });
            }); });
        };
        MonacoEditorHookManager._getShadowRoot = function () {
            return this.currentScope.shadowRoot;
        };
        MonacoEditorHookManager._defineProperties = function () {
            var _this = this;
            var tagCompletions = [{
                    label: '==UserScript==',
                    kind: monaco.languages.CompletionItemKind.Property,
                    insertText: '==UserScript==',
                    detail: 'UserScript start tag',
                    documentation: 'The start tag for a UserScript metadata block'
                }, {
                    label: '==/UserScript==',
                    kind: monaco.languages.CompletionItemKind.Property,
                    insertText: '==/UserScript==',
                    detail: 'UserScript end tag',
                    documentation: 'The end tag for a UserScript metadata block'
                }];
            var keyCompletions = {
                isIncomplete: true,
                items: Object.getOwnPropertyNames(metaDataDescriptions).map(function (key) {
                    var description = metaDataDescriptions[key];
                    return {
                        label: "@" + key,
                        kind: monaco.languages.CompletionItemKind.Property,
                        insertText: "@" + key,
                        detail: 'Metadata key',
                        documentation: description
                    };
                })
            };
            Object.defineProperties(this, {
                getLocalBodyShadowRoot: {
                    get: function () {
                        return _this._getShadowRoot();
                    }
                },
                caretRangeFromPoint: {
                    get: function () {
                        return function (context) {
                            for (var _i = 0, _a = _this._scopes; _i < _a.length; _i++) {
                                var _b = _a[_i], scope = _b[0], editor = _b[1];
                                if (context.viewDomNode === editor.getDomNode()) {
                                    return _this.Caret.caretRangeFromPoint.bind(scope.shadowRoot);
                                }
                            }
                            return document.caretRangeFromPoint.bind(document);
                        };
                    }
                },
                _metaTagCompletions: {
                    get: function () {
                        return tagCompletions;
                    }
                },
                _metaKeyCompletions: {
                    get: function () {
                        return keyCompletions;
                    }
                }
            });
        };
        MonacoEditorHookManager._loadCRMAPI = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.Libraries.readFile('js/libraries/crmapi.d.ts')];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        MonacoEditorHookManager._setupCRMDefs = function () {
            return __awaiter(this, void 0, void 0, function () {
                var fileContent;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._loadCRMAPI()];
                        case 1:
                            fileContent = _a.sent();
                            monaco.languages.typescript.javascriptDefaults.addExtraLib(fileContent, 'crmapi.d.ts');
                            monaco.languages.typescript.typescriptDefaults.addExtraLib(fileContent, 'crmapi.d.ts');
                            return [2];
                    }
                });
            });
        };
        MonacoEditorHookManager._captureMonacoErrors = function () {
            window.onerror = function (msg, filename) {
                if (filename.indexOf('vs/editor/editor.main.js') > -1) {
                    console.log('Caught monaco editor error (ignore these)');
                    return true;
                }
                return undefined;
            };
        };
        MonacoEditorHookManager._createNullModel = function () {
            this._nullModel = monaco.editor.createModel('');
        };
        MonacoEditorHookManager.getNullModel = function () {
            return this._nullModel;
        };
        MonacoEditorHookManager.setup = function () {
            var _this = this;
            if (this._setup) {
                return;
            }
            this._setup = true;
            this._captureMonacoErrors();
            this.monacoReady = new window.Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    this._setupRequire();
                    window.onExists('monaco').then(function () {
                        MonacoEditorJSONOptionsMods.enableSchema();
                        _this._defineProperties();
                        _this._createNullModel();
                        _this._setupCRMDefs();
                        resolve(null);
                    });
                    return [2];
                });
            }); });
        };
        MonacoEditorHookManager._setup = false;
        MonacoEditorHookManager.monacoReady = null;
        MonacoEditorHookManager.currentScope = null;
        MonacoEditorHookManager._scopeListeners = [];
        MonacoEditorHookManager._nullModel = null;
        MonacoEditorHookManager._scopes = [];
        MonacoEditorHookManager.Caret = (_a = (function () {
                function MonacoEditorCaret() {
                }
                MonacoEditorCaret.getCharWidth = function (char, font) {
                    var cacheKey = char + font;
                    if (this._charCache[cacheKey]) {
                        return this._charCache[cacheKey];
                    }
                    var context = this._charCanvas.getContext("2d");
                    context.font = font;
                    var metrics = context.measureText(char);
                    var width = metrics.width;
                    this._charCache[cacheKey] = width;
                    return width;
                };
                MonacoEditorCaret.caretRangeFromPoint = function (x, y) {
                    var el = this.elementFromPoint(x, y);
                    while (el.firstChild.nodeType !== el.firstChild.TEXT_NODE) {
                        el = el.lastChild;
                    }
                    var rect = el.getBoundingClientRect();
                    var font = window.getComputedStyle(el, null).getPropertyValue('font');
                    var text = el.innerText;
                    var pixelCursor = rect.left;
                    var offset = 0;
                    var step;
                    if (x > rect.left + rect.width) {
                        offset = text.length;
                    }
                    else {
                        for (var i = 0; i < text.length + 1; i++) {
                            step = MonacoEditorHookManager.Caret.getCharWidth(text.charAt(i), font) / 2;
                            pixelCursor += step;
                            if (x < pixelCursor) {
                                offset = i;
                                break;
                            }
                            pixelCursor += step;
                        }
                    }
                    var range = document.createRange();
                    range.setStart(el.firstChild, offset);
                    range.setEnd(el.firstChild, offset);
                    return range;
                };
                ;
                return MonacoEditorCaret;
            }()),
            _a._charCache = {},
            _a._charCanvas = document.createElement('canvas'),
            _a);
        MonacoEditorHookManager.StyleHack = (_b = (function () {
                function MonacoEditorStyleHack() {
                }
                MonacoEditorStyleHack.copyThemeScope = function (scope) {
                    this.monacoStyleElement = this.monacoStyleElement ||
                        document.getElementsByClassName('monaco-colors')[0];
                    if (scope.shadowRoot.children[0] !== this.monacoStyleElement) {
                        var clone = this.monacoStyleElement.cloneNode(true);
                        scope.shadowRoot.insertBefore(clone, scope.shadowRoot.children[0]);
                    }
                };
                return MonacoEditorStyleHack;
            }()),
            _b.monacoStyleElement = null,
            _b);
        MonacoEditorHookManager.Completion = (_c = (function () {
                function MonacoEditorCompletions() {
                }
                MonacoEditorCompletions.register = function (language, item) {
                    this._enabledCompletions[language] = this._enabledCompletions[language] || [];
                    for (var _i = 0, _a = this._enabledCompletions[language]; _i < _a.length; _i++) {
                        var completionData = _a[_i];
                        if (completionData.completion === item) {
                            return;
                        }
                    }
                    this._enabledCompletions[language].push({
                        completion: item,
                        disposable: monaco.languages.registerCompletionItemProvider(language, item)
                    });
                };
                MonacoEditorCompletions.clearAll = function () {
                    for (var lang in this._enabledCompletions) {
                        for (var _i = 0, _a = this._enabledCompletions[lang]; _i < _a.length; _i++) {
                            var completion = _a[_i];
                            completion.disposable.dispose();
                        }
                    }
                };
                return MonacoEditorCompletions;
            }()),
            _c._enabledCompletions = {},
            _c);
        MonacoEditorHookManager.Fetching = (_d = (function () {
                function MonacoEditorFetches() {
                }
                MonacoEditorFetches._isWebPageEnv = function () {
                    return location.protocol === 'http:' || location.protocol === 'https:';
                };
                MonacoEditorFetches.loadFile = function (name) {
                    var _this = this;
                    return new window.Promise(function (resolve, reject) {
                        var xhr = new window.XMLHttpRequest();
                        var url = _this._isWebPageEnv() ? "" + _this.BASE + name :
                            browserAPI.runtime.getURL(name);
                        xhr.open('GET', url);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === XMLHttpRequest.DONE) {
                                if (xhr.status === 200) {
                                    _this._fetchedFiles[name] = xhr.responseText;
                                    resolve(xhr.responseText);
                                }
                                else {
                                    reject(new Error('Failed XHR'));
                                }
                            }
                        };
                        xhr.send();
                    });
                };
                MonacoEditorFetches.isLoaded = function (name) {
                    return name in this._fetchedFiles;
                };
                MonacoEditorFetches.getLoadedFile = function (name) {
                    return this._fetchedFiles[name];
                };
                return MonacoEditorFetches;
            }()),
            _d._fetchedFiles = {},
            _d.BASE = '../',
            _d);
        MonacoEditorHookManager.Libraries = (function () {
            function MonacoEditorLibraries() {
            }
            MonacoEditorLibraries._execFile = function (name) {
                var _this = this;
                return new window.Promise(function (resolve, reject) {
                    _this._parent().Fetching.loadFile(name).then(function (content) {
                        eval(content);
                        resolve(null);
                    }, function (err) {
                        alert('Failed to load lint library');
                        reject(new Error('Failed to load lint library'));
                    });
                });
            };
            MonacoEditorLibraries.readFile = function (path) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (this._parent().Fetching.isLoaded(path)) {
                                    return [2, this._parent().Fetching.getLoadedFile(path)];
                                }
                                return [4, this._parent().Fetching.loadFile(path)];
                            case 1: return [2, _a.sent()];
                        }
                    });
                });
            };
            MonacoEditorLibraries.runFile = function (path) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (this._parent().Fetching.isLoaded(path)) {
                            return [2];
                        }
                        return [2, this._execFile(path)];
                    });
                });
            };
            MonacoEditorLibraries._parent = function () {
                return window.MonacoEditorHookManager;
            };
            return MonacoEditorLibraries;
        }());
        return MonacoEditorHookManager;
        var _a, _b, _c, _d;
    }());
    MonacoEditorElement.MonacoEditorHookManager = MonacoEditorHookManager;
    ;
    window.MonacoEditorHookManager = MonacoEditorHookManager;
    if (window.objectify) {
        window.register(MOE);
    }
    else {
        window.addEventListener('RegisterReady', function () {
            window.register(MOE);
        });
    }
})(MonacoEditorElement || (MonacoEditorElement = {}));
