"use strict";
var ScaleUpAnimationElement;
(function (ScaleUpAnimationElement) {
    var SUA = (function () {
        function SUA() {
        }
        SUA.configure = function (_a) {
            var node = _a.node;
            return window.animateTransform(node, {
                propName: 'scale',
                postfix: '',
                from: 0,
                to: 1
            }, {
                duration: 500,
                easing: 'bez',
                fill: 'both'
            });
        };
        SUA.is = 'scale-up-animation';
        SUA.behaviors = [
            Polymer.NeonAnimationBehavior
        ];
        return SUA;
    }());
    ScaleUpAnimationElement.SUA = SUA;
    if (window.objectify) {
        window.register(SUA);
    }
    else {
        window.addEventListener('RegisterReady', function () {
            window.register(SUA);
        });
    }
})(ScaleUpAnimationElement || (ScaleUpAnimationElement = {}));
