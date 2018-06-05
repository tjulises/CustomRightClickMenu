"use strict";
var monacoCommand = (function () {
    var ReplaceCommand = (function () {
        function ReplaceCommand(_range, _text) {
            this._range = _range;
            this._text = _text;
        }
        ReplaceCommand.prototype.getEditOperations = function (model, builder) {
            builder.addTrackedEditOperation(this._range, this._text);
        };
        ReplaceCommand.prototype.computeCursorState = function (model, helper) {
            var inverseEditOperations = helper.getInverseEditOperations();
            var srcRange = inverseEditOperations[0].range;
            return new monaco.Selection(srcRange.startLineNumber, srcRange.startColumn, srcRange.endLineNumber, srcRange.endColumn);
        };
        return ReplaceCommand;
    }());
    return {
        createReplaceCommand: function (selection, text) {
            return new ReplaceCommand(selection, text);
        }
    };
})();
window.monacoCommands = monacoCommand;
