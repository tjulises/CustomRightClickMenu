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
var StylesheetEditElement;
(function (StylesheetEditElement) {
    StylesheetEditElement.stylesheetEditProperties = {
        item: {
            type: Object,
            value: {},
            notify: true
        }
    };
    var STE = (function () {
        function STE() {
        }
        STE._getExportData = function () {
            var settings = {};
            this.save(null, settings);
            this.$.dropdownMenu.selected = 0;
            return settings;
        };
        ;
        STE.exportStylesheetAsCRM = function () {
            window.app.editCRM.exportSingleNode(this._getExportData(), 'CRM');
        };
        ;
        STE.exportStylesheetAsUserscript = function () {
            window.app.editCRM.exportSingleNode(this._getExportData(), 'Userscript');
        };
        ;
        STE.exportStylesheetAsUserstyle = function () {
            window.app.editCRM.exportSingleNode(this._getExportData(), 'Userstyle');
        };
        ;
        STE.cancelChanges = function () {
            var _this = this;
            if (this.fullscreen) {
                this.exitFullScreen();
            }
            window.setTimeout(function () {
                _this.finishEditing();
                window.externalEditor.cancelOpenFiles();
                _this.active = false;
            }, this.fullscreen ? 500 : 0);
        };
        ;
        STE.saveChanges = function () {
            this.newSettings.value.stylesheet = (this.editorManager &&
                this.editorManager.editor &&
                this.editorManager.editor.getValue()) || this.item.value.stylesheet;
            this.newSettings.value.launchMode = this.$.dropdownMenu.selected;
            this.finishEditing();
            window.externalEditor.cancelOpenFiles();
            this.active = false;
        };
        ;
        STE.reloadEditor = function (disable) {
            if (disable === void 0) { disable = false; }
            if (this.editorManager) {
                if (this.editorMode === 'main') {
                    this.newSettings.value.stylesheet = this.editorManager.editor.getValue();
                }
                else {
                    try {
                        this.newSettings.value.options = JSON.parse(this.editorManager.editor.getValue());
                    }
                    catch (e) {
                        this.newSettings.value.options = this.editorManager.editor.getValue();
                    }
                }
            }
            var value;
            if (this.editorMode === 'main') {
                value = this.newSettings.value.stylesheet;
            }
            else {
                if (typeof this.newSettings.value.options === 'string') {
                    value = this.newSettings.value.options;
                }
                else {
                    value = JSON.stringify(this.newSettings.value.options);
                }
            }
            if (this.fullscreen) {
                this.fullscreenEditorManager.reset();
                var editor = this.fullscreenEditorManager.editor;
                if (!this.fullscreenEditorManager.isDiff(editor)) {
                    editor.setValue(value);
                }
            }
            else {
                this.editorManager.reset();
                var editor = this.editorManager.editor;
                if (!this.editorManager.isDiff(editor)) {
                    editor.setValue(value);
                }
            }
        };
        ;
        STE.editorLoaded = function () {
            var editorManager = this.editorManager;
            editorManager.editor.getDomNode().classList.remove('stylesheet-edit-codeMirror');
            editorManager.editor.getDomNode().classList.add('script-edit-codeMirror');
            editorManager.editor.getDomNode().classList.add('small');
            if (this.fullscreen) {
                this.$.editorFullScreen.children[0].innerHTML = '<path d="M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z"/>';
            }
        };
        ;
        STE._loadEditor = function (content, disable) {
            if (content === void 0) { content = this.item.value.stylesheet; }
            if (disable === void 0) { disable = false; }
            return __awaiter(this, void 0, void 0, function () {
                var placeHolder, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            placeHolder = $(this.$.editor);
                            this.editorHeight = placeHolder.height();
                            this.editorWidth = placeHolder.width();
                            !window.app.settings.editor && (window.app.settings.editor = {
                                theme: 'dark',
                                zoom: '100',
                                keyBindings: {
                                    goToDef: 'Ctrl-F12',
                                    rename: 'Ctrl-F2'
                                },
                                cssUnderlineDisabled: false,
                                disabledMetaDataHighlight: false
                            });
                            _a = this;
                            return [4, this.$.editor.create(this.$.editor.EditorMode.CSS_META, {
                                    value: content,
                                    language: 'css',
                                    theme: window.app.settings.editor.theme === 'dark' ? 'vs-dark' : 'vs',
                                    wordWrap: 'off',
                                    fontSize: (~~window.app.settings.editor.zoom / 100) * 14,
                                    folding: true
                                })];
                        case 1:
                            _a.editorManager = _b.sent();
                            this.editorLoaded();
                            return [2];
                    }
                });
            });
        };
        ;
        STE.init = function () {
            var _this = this;
            this._init();
            this._CEBIinit();
            this.$.dropdownMenu.init();
            this.$.exportMenu.init();
            this.$.exportMenu.$.dropdownSelected.innerText = 'EXPORT AS';
            this.initDropdown();
            this.selectorStateChange(0, this.newSettings.value.launchMode);
            window.app.$.editorToolsRibbonContainer.classList.remove('editingScript');
            window.app.$.editorToolsRibbonContainer.classList.add('editingStylesheet');
            window.stylesheetEdit = this;
            window.externalEditor.init();
            if (window.app.storageLocal.recoverUnsavedData) {
                browserAPI.storage.local.set({
                    editing: {
                        val: this.item.value.stylesheet,
                        id: this.item.id,
                        crmType: window.app.crmTypes
                    }
                });
                this.savingInterval = window.setInterval(function () {
                    if (_this.active && _this.editorManager) {
                        var val = void 0;
                        try {
                            val = _this.editorManager.editor.getValue();
                            browserAPI.storage.local.set({
                                editing: {
                                    val: val,
                                    id: _this.item.id,
                                    crmType: window.app.crmTypes
                                }
                            });
                        }
                        catch (e) { }
                    }
                    else {
                        browserAPI.storage.local.set({
                            editing: false
                        });
                        window.clearInterval(_this.savingInterval);
                    }
                }, 5000);
            }
            this.active = true;
            setTimeout(function () {
                _this._loadEditor();
            }, 750);
        };
        STE.changeTabEvent = function (e) {
            var element = window.app.util.findElementWithClassName(e, 'editorTab');
            var isMain = element.classList.contains('mainEditorTab');
            if (isMain && this.editorMode !== 'main') {
                element.classList.remove('optionsEditorTab');
                try {
                    this.newSettings.value.options = JSON.parse(this.editorManager.editor.getValue());
                }
                catch (e) {
                    this.newSettings.value.options = this.editorManager.editor.getValue();
                }
                this.hideCodeOptions();
                this.editorMode = 'main';
            }
            else if (!isMain && this.editorMode === 'main') {
                element.classList.add('optionsEditorTab');
                this.newSettings.value.stylesheet = this.editorManager.editor.getValue();
                this.showCodeOptions();
                this.editorMode = 'options';
            }
            Array.prototype.slice.apply(window.app.shadowRoot.querySelectorAll('.editorTab')).forEach(function (tab) {
                tab.classList.remove('active');
            });
            element.classList.add('active');
        };
        STE.is = 'stylesheet-edit';
        STE.behaviors = [Polymer.NodeEditBehavior, Polymer.CodeEditBehavior];
        STE.properties = StylesheetEditElement.stylesheetEditProperties;
        return STE;
    }());
    StylesheetEditElement.STE = STE;
    if (window.objectify) {
        window.register(STE);
    }
    else {
        window.addEventListener('RegisterReady', function () {
            window.register(STE);
        });
    }
})(StylesheetEditElement || (StylesheetEditElement = {}));
;
