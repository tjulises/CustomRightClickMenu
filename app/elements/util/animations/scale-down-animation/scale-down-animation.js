"use strict";
var FadeOutAnimationElement;
(function (FadeOutAnimationElement) {
    var SDA = (function () {
        function SDA() {
        }
        SDA.configure = function (_a) {
            var node = _a.node;
            return window.animateTransform(node, {
                propName: 'scale',
                postfix: '',
                from: 1,
                to: 0
            }, {
                duration: 500,
                easing: 'bez',
                fill: 'both'
            });
        };
        SDA.is = 'scale-down-animation';
        SDA.behaviors = [
            Polymer.NeonAnimationBehavior
        ];
        return SDA;
    }());
    FadeOutAnimationElement.SDA = SDA;
    if (window.objectify) {
        window.register(SDA);
    }
    else {
        window.addEventListener('RegisterReady', function () {
            window.register(SDA);
        });
    }
})(FadeOutAnimationElement || (FadeOutAnimationElement = {}));
