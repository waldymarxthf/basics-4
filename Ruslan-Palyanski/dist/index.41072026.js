// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"Rpu6w":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f660f3ae41072026";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"f0g0D":[function(require,module,exports) {
var _storageJs = require("./storage.js");
var _constantsJs = require("./constants.js");
var _serverJs = require("./server.js");
const currentCity = (0, _storageJs.storage).getCurrentCity();
const [dataP1, dataP2] = await (0, _serverJs.getData)(currentCity);
function showDetails(data) {
    const tmpC = getCelsius(data.main.temp);
    (0, _constantsJs.temperatureNumber).textContent = tmpC;
    (0, _constantsJs.elementTemperature).textContent = tmpC;
    (0, _constantsJs.elementFeels).textContent = getCelsius(data.main.feels_like);
    (0, _constantsJs.elementWeather).textContent = data.weather[0].main;
    (0, _constantsJs.elementSunrise).textContent = getSun(data.sys.sunrise);
    (0, _constantsJs.elementSunset).textContent = getSun(data.sys.sunset);
    const icon = data.weather[0].icon;
    (0, _constantsJs.weatherIcon).setAttribute("src", `${(0, _serverJs.serverData).serverImg}${icon}@2x.png`);
    (0, _constantsJs.place).textContent = data.name;
    (0, _constantsJs.countryNodeTitle).forEach((item)=>item.textContent = data.name);
}
function showForecast(dataP2) {
    (0, _constantsJs.tabContent).innerHTML = "";
    for(let i = 0; i < dataP2.list.length; ++i){
        const [data, time] = dataP2.list[i].dt_txt.split(" ");
        const { temp: tempK , feels_like: feels  } = dataP2.list[i].main;
        const { main: rainServer , icon: img  } = dataP2.list[i].weather[0];
        const tm = getCelsius(tempK);
        const like = getCelsius(feels);
        const cloud = rainServer;
        const imgUrl = `${(0, _serverJs.serverData).serverImg}${img}@2x.png`;
        createTabBlock(data, time, tm, like, cloud, imgUrl);
    }
}
function render(dataP1, dataP2, cities, city) {
    if (dataP1) showDetails(dataP1);
    if (dataP2) showForecast(dataP2);
    if (cities) showCities(cities);
    else showCities();
    if (city) (0, _constantsJs.place).textContent = city;
}
function createHTMLElement(tag, selector, inner) {
    const element = document.createElement(tag);
    element.classList.add(selector);
    element.insertAdjacentHTML("afterbegin", `<span class='list__text'>${inner}</span>`);
    element.insertAdjacentHTML("beforeend", `<span class='list__btn'>+</span>`);
    return element;
}
function createElementRecurs(citiesArr, lengthArr, i = 0) {
    if (i === lengthArr) return;
    const element = createHTMLElement("li", "list__item", citiesArr[i]);
    (0, _constantsJs.list).append(element);
    createElementRecurs(citiesArr, lengthArr, ++i);
}
function showCities() {
    let cities = (0, _storageJs.storage).getFavoriteCities();
    deleteHTMLElement(".list__item");
    if (cities.length) // cities.forEach(item => {
    //     const element = createHTMLElement('li', 'list__item', item);
    //     list.append(element)
    // })
    createElementRecurs(cities, cities.length, 0);
}
function removeElementRecurs(nodeElements, nodeElementsLength, i = 0) {
    if (i === nodeElementsLength) return;
    nodeElements[i].remove();
    removeElementRecurs(nodeElements, nodeElementsLength, ++i);
}
function deleteHTMLElement(selector) {
    const nodeElements = document.querySelectorAll(selector);
    // nodeElements.forEach(item => item.remove())
    removeElementRecurs(nodeElements, nodeElements.length, 0);
}
async function checkClick(event) {
    if (event.target.classList.contains("list__btn")) {
        const textElement = event.target.previousSibling.textContent;
        const cities = (0, _storageJs.storage).getFavoriteCities();
        const restCities = cities.filter((item)=>item !== textElement);
        (0, _storageJs.storage).saveFavoriteCities(restCities);
        render(dataP1, dataP2, restCities);
    }
    if (event.target.classList.contains("list__text")) {
        const textElement = event.target.textContent;
        (0, _storageJs.storage).setStartCity(textElement);
        const [dataP1, dataP2] = await (0, _serverJs.getData)(textElement);
        render(dataP1, dataP2);
    }
}
function nodeTabPrintActive(nodeTab, nodeTabLangth, i = 0) {
    if (nodeTabLangth === i) return;
    nodeTab[i].classList.remove("active");
    nodeTabPrintActive(nodeTab, nodeTabLangth, ++i);
}
function changeClass(event) {
    // nodeTab.forEach(item => item.classList.remove('active'))
    // event.target.classList.add('active')
    nodeTabPrintActive((0, _constantsJs.nodeTab), (0, _constantsJs.nodeTab).length, 0);
    event.target.classList.add("active");
}
function getCelsius(tmp) {
    return Math.ceil(tmp - 273.15);
}
function getSun(upOrDown) {
    return new Date(upOrDown * 1000).getHours() + ":" + new Date(upOrDown * 1000).getMinutes();
}
async function pushData(event) {
    event.preventDefault();
    const cityName = (0, _constantsJs.input).value;
    const [dataP1, dataP2] = await (0, _serverJs.getData)(cityName);
    render(dataP1, dataP2);
    (0, _constantsJs.form).reset();
}
function createTabBlock(date, time, tm, feels, cloud, img) {
    (0, _constantsJs.tabContent).insertAdjacentHTML("beforeEnd", `
        <div class="tab-3__block">
        <div class="tab-3__data">
            <div class="tab-3__date">${date}</div>
            <div class="tab-3__time">${time}</div>
        </div>
        <div class="tab-3__weaather">
            <div class="block-1">
                <div class="tm">Temperature: <span class="tm-i">${tm}</span>&deg;</div>
                <div class="like">Feels like: <span class="like-i">${feels}</span>&deg;</div>
            </div>
            <div class="block-2">
                <div class="rain">${cloud}</div>
                <div class="img__cloud"><img src="${img}" height="35" class="img__png" alt=""></div>
            </div>
        </div>
        </div>`);
}
function addCity() {
    const myCity = (0, _constantsJs.city).textContent;
    (0, _storageJs.storage).saveFavoriteCities([
        ...(0, _storageJs.storage).getFavoriteCities(),
        myCity
    ]);
    (0, _storageJs.storage).setStartCity(myCity);
    const cities = (0, _storageJs.storage).getFavoriteCities();
    render(dataP1, dataP2, cities, myCity);
}
(0, _constantsJs.list).addEventListener("click", checkClick);
(0, _constantsJs.tabs).addEventListener("click", changeClass);
(0, _constantsJs.form).addEventListener("submit", pushData);
(0, _constantsJs.buttonAddCity).addEventListener("click", addCity);
render(dataP1, dataP2);

},{"./storage.js":"apuZ2","./constants.js":"ksl49","./server.js":"cXIfp"}],"apuZ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "storage", ()=>storage);
const storage = {
    saveFavoriteCities (favoriteCitiesArr) {
        const favoriteCities = new Set(favoriteCitiesArr);
        localStorage.arrayCities = JSON.stringify([
            ...favoriteCities
        ]);
    },
    setStartCity (startCity) {
        localStorage.startCity = startCity;
    },
    getFavoriteCities () {
        try {
            if (!localStorage.arrayCities) return [];
            return JSON.parse(localStorage.arrayCities);
        } catch (err) {
            return console.log(err);
        }
    },
    getCurrentCity () {
        if (!localStorage.startCity) return "Minsk";
        return localStorage.startCity;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ksl49":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "form", ()=>form);
parcelHelpers.export(exports, "input", ()=>input);
parcelHelpers.export(exports, "temperatureNumber", ()=>temperatureNumber);
parcelHelpers.export(exports, "place", ()=>place);
parcelHelpers.export(exports, "buttonAddCity", ()=>buttonAddCity);
parcelHelpers.export(exports, "city", ()=>city);
parcelHelpers.export(exports, "list", ()=>list);
parcelHelpers.export(exports, "weatherIcon", ()=>weatherIcon);
parcelHelpers.export(exports, "countryNodeTitle", ()=>countryNodeTitle);
parcelHelpers.export(exports, "elementTemperature", ()=>elementTemperature);
parcelHelpers.export(exports, "elementFeels", ()=>elementFeels);
parcelHelpers.export(exports, "elementWeather", ()=>elementWeather);
parcelHelpers.export(exports, "elementSunrise", ()=>elementSunrise);
parcelHelpers.export(exports, "elementSunset", ()=>elementSunset);
parcelHelpers.export(exports, "tabs", ()=>tabs);
parcelHelpers.export(exports, "nodeTab", ()=>nodeTab);
parcelHelpers.export(exports, "tabDate", ()=>tabDate);
parcelHelpers.export(exports, "tabTime", ()=>tabTime);
parcelHelpers.export(exports, "tm", ()=>tm);
parcelHelpers.export(exports, "like", ()=>like);
parcelHelpers.export(exports, "rain", ()=>rain);
parcelHelpers.export(exports, "imgPng", ()=>imgPng);
parcelHelpers.export(exports, "tab3", ()=>tab3);
parcelHelpers.export(exports, "tabContent", ()=>tabContent);
function getElement(selector) {
    return document.querySelector(selector);
}
function getNodeList(selector) {
    return document.querySelectorAll(selector);
}
const form = getElement(".weather__form");
const input = getElement(".weather__input");
const temperatureNumber = getElement(".temperature__number");
const place = getElement(".tab-block__country");
const buttonAddCity = getElement(".tab-block__img");
const city = getElement(".tab-block__country");
const list = getElement(".list");
const weatherIcon = getElement(".weather__icon");
const countryNodeTitle = getNodeList(".country-title");
const elementTemperature = getElement(".element-temperature");
const elementFeels = getElement(".element-feels");
const elementWeather = getElement(".element-weather");
const elementSunrise = getElement(".element-sunrise");
const elementSunset = getElement(".element-sunset");
const tabs = getElement(".tabs");
const nodeTab = getNodeList(".tab");
const tab3 = getNodeList(".tab-3__block");
const tabDate = getElement(".tab-3__date");
const tabTime = getElement(".tab-3__time");
const tm = getElement(".tm-i");
const like = getElement(".like-i");
const rain = getElement(".rain");
const imgPng = getElement(".img__png");
const tabContent = getElement(".tab-3__content");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cXIfp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serverData", ()=>serverData);
parcelHelpers.export(exports, "getData", ()=>getData);
var _storageJs = require("./storage.js");
const serverData = {
    serverUrl: "http://api.openweathermap.org/data/2.5/weather",
    apiKey: "f660a2fb1e4bad108d6160b7f58c555f",
    // 'f660a2fb1e4bad108d6160b7f58c555f'
    // 'afc9f2df39f9e9e49eeb1afac7034d35'
    serverImg: "https://openweathermap.org/img/wn/",
    serverForecastUrl: "http://api.openweathermap.org/data/2.5/forecast"
};
function createUrl(serverUrl, cityName, apiKey) {
    return `${serverUrl}?q=${cityName}&appid=${apiKey}`;
}
function createLoader() {
    const loader = document.createElement("div");
    loader.classList.add("loader");
    loader.textContent = "loading";
    document.body.prepend(loader);
}
function removeLoader() {
    const loader = document.querySelector(".loader");
    loader.remove();
}
async function getData(city) {
    createLoader();
    const cityName = city;
    const url = createUrl(serverData.serverUrl, cityName, serverData.apiKey);
    async function getData() {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (err) {
            console.log(err);
        }
    }
    const data = await getData();
    const forecastUrl = createUrl(serverData.serverForecastUrl, cityName, serverData.apiKey);
    async function getData1() {
        try {
            const response = await fetch(forecastUrl);
            return await response.json();
        } catch (err) {
            console.log(err);
        }
    }
    const data1 = await getData1();
    async function getAllData() {
        const dataAll = [
            data,
            data1
        ];
        try {
            return await Promise.all(dataAll).then((data)=>data);
        } catch (err) {
            console.log(err);
        } finally{
            removeLoader();
        }
    }
    return await getAllData();
}

},{"./storage.js":"apuZ2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["Rpu6w","f0g0D"], "f0g0D", "parcelRequire9681")

//# sourceMappingURL=index.41072026.js.map
