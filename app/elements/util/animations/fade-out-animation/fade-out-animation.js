"use strict";
var FadeOutAnimationElement;
(function (FadeOutAnimationElement) {
    var FOA = (function () {
        function FOA() {
        }
        FOA.configure = function (_a) {
            var node = _a.node;
            return node.animate([{
                    opacity: 1
                }, {
                    opacity: 0
                }], {
                duration: 500,
                easing: 'bez',
                fill: 'both'
            });
        };
        FOA.is = 'fade-out-animation';
        FOA.behaviors = [
            Polymer.NeonAnimationBehavior
        ];
        return FOA;
    }());
    FadeOutAnimationElement.FOA = FOA;
    if (window.objectify) {
        window.register(FOA);
    }
    else {
        window.addEventListener('RegisterReady', function () {
            window.register(FOA);
        });
    }
})(FadeOutAnimationElement || (FadeOutAnimationElement = {}));
