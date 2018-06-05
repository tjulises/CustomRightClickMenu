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
var _this = this;
var activeNodes;
document.addEventListener('stylishUpdateChrome', function () {
    if (!activeNodes) {
        return;
    }
    browserAPI.runtime.sendMessage({
        type: 'updateStylesheet',
        data: {
            nodeId: activeNodes[0].node.id
        }
    });
    sendEvent('styleInstalledChrome');
});
document.addEventListener("stylishInstallChrome", function () { return __awaiter(_this, void 0, void 0, function () {
    var data, parsed, author, authorName;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, getResource(getMeta('stylish-code-chrome'))];
            case 1:
                data = _a.sent();
                try {
                    parsed = JSON.parse(data);
                    author = document.querySelector('#style_author a');
                    authorName = author ? author.innerText : 'anonymous';
                    browserAPI.runtime.sendMessage({
                        type: 'styleInstall',
                        data: {
                            code: JSON.stringify(parsed),
                            author: authorName
                        }
                    });
                    getResource(getMeta('stylish-install-ping-url-chrome'));
                    sendEvent('styleInstalledChrome');
                }
                catch (e) { }
                return [2];
        }
    });
}); });
function sendEvent(type, data) {
    if (data === void 0) { data = null; }
    var stylishEvent = new CustomEvent(type, { detail: data });
    document.dispatchEvent(stylishEvent);
}
function getResource(url) {
    return new Promise(function (resolve) {
        if (!url) {
            resolve(null);
            return;
        }
        if (url.indexOf("#") == 0) {
            resolve(document.getElementById(url.substring(1)).innerText);
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 400) {
                    resolve(null);
                }
                else {
                    resolve(xhr.responseText);
                }
            }
        };
        if (url.length > 2000) {
            var parts = url.split("?");
            xhr.open("POST", parts[0], true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(parts[1]);
        }
        else {
            xhr.open("GET", url, true);
            xhr.send();
        }
    });
}
function getMeta(name) {
    var e = document.querySelector("link[rel='" + name + "']");
    return e ? e.getAttribute("href") : null;
}
(function () {
    (function () {
        var url = getMeta('stylish-id-url') || location.href;
        browserAPI.runtime.sendMessage({
            type: 'getStyles',
            data: {
                url: url
            }
        }).then(function (response) {
            activeNodes = response;
            if (response.length !== 0) {
                var firstNode = response[0];
                if (firstNode.state === 'updatable') {
                    sendEvent('styleCanBeUpdatedChrome', {
                        updateUrl: firstNode.node.nodeInfo.source !== 'local' &&
                            firstNode.node.nodeInfo.source.updateURL
                    });
                }
                else {
                    sendEvent('styleAlreadyInstalledChrome', {
                        updateUrl: firstNode.node.nodeInfo.source !== 'local' &&
                            firstNode.node.nodeInfo.source.updateURL
                    });
                }
            }
        });
    })();
    window.setTimeout(function () {
        sendEvent('styleCanBeInstalledChrome');
    }, 50);
})();
