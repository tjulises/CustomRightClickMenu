"use strict";
var PaperMenuElement;
(function (PaperMenuElement) {
    var PM = (function () {
        function PM() {
        }
        PM.is = 'paper-menu';
        PM.behaviors = [Polymer.IronMenuBehavior];
        return PM;
    }());
    PaperMenuElement.PM = PM;
    if (window.objectify) {
        window.register(PM);
    }
    else {
        window.addEventListener('RegisterReady', function () {
            window.register(PM);
        });
    }
})(PaperMenuElement || (PaperMenuElement = {}));
