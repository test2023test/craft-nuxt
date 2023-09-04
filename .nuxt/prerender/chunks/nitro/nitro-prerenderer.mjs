globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/node-fetch-native/dist/polyfill.mjs';
import { defineEventHandler, handleCacheHeaders, isEvent, createEvent, getRequestHeader, splitCookiesString, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47memory from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unstorage/drivers/memory.mjs';
import unstorage_47drivers_47lru_45cache from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/pathe/dist/index.mjs';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/craft-nuxt/",
    "buildAssetsDir": "assets",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/assets/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "API_BASE_URL": "https://promo-orenbeer.dreamdev.space",
    "MAP_API_KEY": "53f8fad6-a29a-4bf6-81e9-8d6aad62eed3"
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/ruslanbaroev/Projects/craft-nuxt/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', unstorage_47drivers_47memory({"driver":"memory"}));
storage.mount('internal:nuxt:prerender:island', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('internal:nuxt:prerender:payload', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/Users/ruslanbaroev/Projects/craft-nuxt/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/ruslanbaroev/Projects/craft-nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/ruslanbaroev/Projects/craft-nuxt/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/ruslanbaroev/Projects/craft-nuxt/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/ruslanbaroev/Projects/craft-nuxt/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && entry.value) {
      _resolvePromise.catch((error) => {
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-09-04T17:56:52.925Z",
    "size": 4286,
    "path": "../../.output/public/favicon.ico"
  },
  "/assets/BasicLotterySection.2290c2ee.js": {
    "type": "application/javascript",
    "etag": "\"f1c-CfzbVIc9IylT3VAjx2x3zPv4inA\"",
    "mtime": "2023-09-04T17:56:52.869Z",
    "size": 3868,
    "path": "../../.output/public/assets/BasicLotterySection.2290c2ee.js"
  },
  "/assets/Sprite.ef21bc2a.js": {
    "type": "application/javascript",
    "etag": "\"7da4-l/3JmWUTx80xUWobbF/mrEVRCZw\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 32164,
    "path": "../../.output/public/assets/Sprite.ef21bc2a.js"
  },
  "/assets/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2023-09-04T17:56:52.869Z",
    "size": 91,
    "path": "../../.output/public/assets/_plugin-vue_export-helper.c27b6911.js"
  },
  "/assets/agreement.dd191399.js": {
    "type": "application/javascript",
    "etag": "\"297c-y9HEByz5p29QeSoTGkEIngBmNcg\"",
    "mtime": "2023-09-04T17:56:52.869Z",
    "size": 10620,
    "path": "../../.output/public/assets/agreement.dd191399.js"
  },
  "/assets/bg1.9e1c131e.jpg": {
    "type": "image/jpeg",
    "etag": "\"2c84c-oQNDAnMZfO+FuDrLcAyfvacD1zc\"",
    "mtime": "2023-09-04T17:56:52.869Z",
    "size": 182348,
    "path": "../../.output/public/assets/bg1.9e1c131e.jpg"
  },
  "/assets/corki-regular.660217af.woff2": {
    "type": "font/woff2",
    "etag": "\"52c0-bN15JCzb4BbFyE1KiJ7l4GjkA98\"",
    "mtime": "2023-09-04T17:56:52.869Z",
    "size": 21184,
    "path": "../../.output/public/assets/corki-regular.660217af.woff2"
  },
  "/assets/corki-tuscan.d07bf62b.woff2": {
    "type": "font/woff2",
    "etag": "\"5424-bXHBkuWYRwF5QaMdNGoaJhk5KY4\"",
    "mtime": "2023-09-04T17:56:52.869Z",
    "size": 21540,
    "path": "../../.output/public/assets/corki-tuscan.d07bf62b.woff2"
  },
  "/assets/cuprum-v25-cyrillic_latin-700.bb4014c1.woff2": {
    "type": "font/woff2",
    "etag": "\"3510-07/mjZtJbVxDsXcwEbekPFAUDIQ\"",
    "mtime": "2023-09-04T17:56:52.869Z",
    "size": 13584,
    "path": "../../.output/public/assets/cuprum-v25-cyrillic_latin-700.bb4014c1.woff2"
  },
  "/assets/cuprum-v25-cyrillic_latin-regular.3e977657.woff2": {
    "type": "font/woff2",
    "etag": "\"34b8-Gg0IIzxdqCy/CY6Sg73NIdQt6Ug\"",
    "mtime": "2023-09-04T17:56:52.870Z",
    "size": 13496,
    "path": "../../.output/public/assets/cuprum-v25-cyrillic_latin-regular.3e977657.woff2"
  },
  "/assets/default.080b1bfb.js": {
    "type": "application/javascript",
    "etag": "\"7c53-yUIQp7usDKE/32o1O/epLe8lAPA\"",
    "mtime": "2023-09-04T17:56:52.870Z",
    "size": 31827,
    "path": "../../.output/public/assets/default.080b1bfb.js"
  },
  "/assets/entry.3ecbd8d3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"136ab-f0u22oilN/bytr5a2pOl7o5lu+k\"",
    "mtime": "2023-09-04T17:56:52.870Z",
    "size": 79531,
    "path": "../../.output/public/assets/entry.3ecbd8d3.css"
  },
  "/assets/entry.f9d10e7e.js": {
    "type": "application/javascript",
    "etag": "\"28923-HiI/GBeS22HT/EBtp88t78Ef/GA\"",
    "mtime": "2023-09-04T17:56:52.870Z",
    "size": 166179,
    "path": "../../.output/public/assets/entry.f9d10e7e.js"
  },
  "/assets/error-404.7d37c744.js": {
    "type": "application/javascript",
    "etag": "\"907-od29pmMudzmnar1MfDH9smmkKCs\"",
    "mtime": "2023-09-04T17:56:52.870Z",
    "size": 2311,
    "path": "../../.output/public/assets/error-404.7d37c744.js"
  },
  "/assets/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2023-09-04T17:56:52.870Z",
    "size": 3630,
    "path": "../../.output/public/assets/error-404.7fc72018.css"
  },
  "/assets/error-500.9ee66a05.js": {
    "type": "application/javascript",
    "etag": "\"78b-7mIl2bKxV1Qv0zVLE95IVrtJpB8\"",
    "mtime": "2023-09-04T17:56:52.870Z",
    "size": 1931,
    "path": "../../.output/public/assets/error-500.9ee66a05.js"
  },
  "/assets/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 1950,
    "path": "../../.output/public/assets/error-500.c5df6088.css"
  },
  "/assets/hops-leafs1.cd0e1a3b.svg": {
    "type": "image/svg+xml",
    "etag": "\"4241e-7eTYrkZfbFn+Rc/ngXrwaGqL66U\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 271390,
    "path": "../../.output/public/assets/hops-leafs1.cd0e1a3b.svg"
  },
  "/assets/hops-leafs2.80d4df76.svg": {
    "type": "image/svg+xml",
    "etag": "\"2be06-kR6gSpEUvVoOpMyUomvkxGfF3ho\"",
    "mtime": "2023-09-04T17:56:52.870Z",
    "size": 179718,
    "path": "../../.output/public/assets/hops-leafs2.80d4df76.svg"
  },
  "/assets/index.a91b4b8c.js": {
    "type": "application/javascript",
    "etag": "\"118a7-2RgIJ0EZhZC+fZ5G48zd2UvvPfA\"",
    "mtime": "2023-09-04T17:56:52.870Z",
    "size": 71847,
    "path": "../../.output/public/assets/index.a91b4b8c.js"
  },
  "/assets/inter-v12-cyrillic_latin-600.3f874f5d.woff2": {
    "type": "font/woff2",
    "etag": "\"584c-BBS3atJOVzxETflbPBtzEDywpj0\"",
    "mtime": "2023-09-04T17:56:52.870Z",
    "size": 22604,
    "path": "../../.output/public/assets/inter-v12-cyrillic_latin-600.3f874f5d.woff2"
  },
  "/assets/inter-v12-cyrillic_latin-regular.4152910b.woff2": {
    "type": "font/woff2",
    "etag": "\"52e4-7Kw4dinr9D+I9nsfCBFscEMWUHI\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 21220,
    "path": "../../.output/public/assets/inter-v12-cyrillic_latin-regular.4152910b.woff2"
  },
  "/assets/lk.9992e289.js": {
    "type": "application/javascript",
    "etag": "\"361f-2Mhs5LFcBgRztrPzDBANEUgNgdg\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 13855,
    "path": "../../.output/public/assets/lk.9992e289.js"
  },
  "/assets/lk.fce86c0e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"195-OlG7yTCtQ9cBpVw3Xcr1mvskBAY\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 405,
    "path": "../../.output/public/assets/lk.fce86c0e.css"
  },
  "/assets/login.5274fe82.js": {
    "type": "application/javascript",
    "etag": "\"12f-/ikA51GqVhhRXjMqTS7SQ1z8NjQ\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 303,
    "path": "../../.output/public/assets/login.5274fe82.js"
  },
  "/assets/login.6f705ed6.js": {
    "type": "application/javascript",
    "etag": "\"85a-6vFXppGhiJGei1dCWvewMUo5q48\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 2138,
    "path": "../../.output/public/assets/login.6f705ed6.js"
  },
  "/assets/logo.32c72655.js": {
    "type": "application/javascript",
    "etag": "\"67-/pRscGlJyA+Nu9k8hMkVnpsMPds\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 103,
    "path": "../../.output/public/assets/logo.32c72655.js"
  },
  "/assets/main-prize-bg.03d3e1d4.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e6f7-Zq1WBB/k2HrWneizSNB+W/6pC94\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 124663,
    "path": "../../.output/public/assets/main-prize-bg.03d3e1d4.jpg"
  },
  "/assets/modal.2f64c84b.js": {
    "type": "application/javascript",
    "etag": "\"417-Bm3DPe61kvuSnRxdCSU17YzwHmw\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 1047,
    "path": "../../.output/public/assets/modal.2f64c84b.js"
  },
  "/assets/noise.24c45e14.png": {
    "type": "image/png",
    "etag": "\"854f-EFiJk97HoRah/uNM9I7VTU8qJ5k\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 34127,
    "path": "../../.output/public/assets/noise.24c45e14.png"
  },
  "/assets/nuxt-link.248d42b2.js": {
    "type": "application/javascript",
    "etag": "\"10f7-KJeUj7A3IBaKe3oSoUo8Gi9D8pg\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 4343,
    "path": "../../.output/public/assets/nuxt-link.248d42b2.js"
  },
  "/assets/where-to-buy.ac7e94cc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a3-ByFwatrOJIu98hnFAh/3lWPiQP8\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 163,
    "path": "../../.output/public/assets/where-to-buy.ac7e94cc.css"
  },
  "/assets/where-to-buy.b5f3ba7e.js": {
    "type": "application/javascript",
    "etag": "\"fb7-iJb/CdjmZjEzxbt/qC8wryMOcXE\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 4023,
    "path": "../../.output/public/assets/where-to-buy.b5f3ba7e.js"
  },
  "/assets/winners.94472356.js": {
    "type": "application/javascript",
    "etag": "\"75d-JHV0oNVYM663gAo+EqmuG88hKkU\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 1885,
    "path": "../../.output/public/assets/winners.94472356.js"
  },
  "/assets/winners.aa96b29c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d9-skc2vnFnRsWGVfkWa5rPTn8jabk\"",
    "mtime": "2023-09-04T17:56:52.871Z",
    "size": 217,
    "path": "../../.output/public/assets/winners.aa96b29c.css"
  },
  "/js/YaMap.js": {
    "type": "application/javascript",
    "etag": "\"168-WkI4zRHeCkAxmOQOxGD78Acyf5k\"",
    "mtime": "2023-09-04T17:56:52.902Z",
    "size": 360,
    "path": "../../.output/public/js/YaMap.js"
  },
  "/js/main.js": {
    "type": "application/javascript",
    "etag": "\"547c-Y1E3w9CdlQXQQs7qwFL5xdVjKHo\"",
    "mtime": "2023-09-04T17:56:52.902Z",
    "size": 21628,
    "path": "../../.output/public/js/main.js"
  },
  "/js/main.js.map": {
    "type": "application/json",
    "etag": "\"68e3-X5x3FBQtUhFfknt49hp//TRiK/s\"",
    "mtime": "2023-09-04T17:56:52.900Z",
    "size": 26851,
    "path": "../../.output/public/js/main.js.map"
  },
  "/js/vendor.js": {
    "type": "application/javascript",
    "etag": "\"997d2-6B1xntSPNsFaQd7RX54SHLZ49Pg\"",
    "mtime": "2023-09-04T17:56:52.901Z",
    "size": 628690,
    "path": "../../.output/public/js/vendor.js"
  },
  "/js/vendor.js.map": {
    "type": "application/json",
    "etag": "\"9d8c7-SDPsNf0FhYdpASuUuiwEeipni0I\"",
    "mtime": "2023-09-04T17:56:52.903Z",
    "size": 645319,
    "path": "../../.output/public/js/vendor.js.map"
  },
  "/images/bg1.jpg": {
    "type": "image/jpeg",
    "etag": "\"2c84c-oQNDAnMZfO+FuDrLcAyfvacD1zc\"",
    "mtime": "2023-09-04T17:56:52.902Z",
    "size": 182348,
    "path": "../../.output/public/images/bg1.jpg"
  },
  "/images/hero-img1@1x.png": {
    "type": "image/png",
    "etag": "\"14910-zc8lzKGY8hx9mFirXk9gJ+3ckoY\"",
    "mtime": "2023-09-04T17:56:52.899Z",
    "size": 84240,
    "path": "../../.output/public/images/hero-img1@1x.png"
  },
  "/images/hero-img1@1x.webp": {
    "type": "image/webp",
    "etag": "\"c156-ufMGTsUbknrd6XfUhC6vM7VLQLo\"",
    "mtime": "2023-09-04T17:56:52.900Z",
    "size": 49494,
    "path": "../../.output/public/images/hero-img1@1x.webp"
  },
  "/images/hero-img1@2x.png": {
    "type": "image/png",
    "etag": "\"42d37-mGy3H8UPpZk8Ck7m4F2HzfEHFEc\"",
    "mtime": "2023-09-04T17:56:52.901Z",
    "size": 273719,
    "path": "../../.output/public/images/hero-img1@2x.png"
  },
  "/images/hero-img1@2x.webp": {
    "type": "image/webp",
    "etag": "\"2297a-RzsRp38/5/IOSLCE1YtKHGsYKJ8\"",
    "mtime": "2023-09-04T17:56:52.901Z",
    "size": 141690,
    "path": "../../.output/public/images/hero-img1@2x.webp"
  },
  "/images/hops-leafs1.svg": {
    "type": "image/svg+xml",
    "etag": "\"4241e-7eTYrkZfbFn+Rc/ngXrwaGqL66U\"",
    "mtime": "2023-09-04T17:56:52.903Z",
    "size": 271390,
    "path": "../../.output/public/images/hops-leafs1.svg"
  },
  "/images/hops-leafs2.svg": {
    "type": "image/svg+xml",
    "etag": "\"2be06-kR6gSpEUvVoOpMyUomvkxGfF3ho\"",
    "mtime": "2023-09-04T17:56:52.903Z",
    "size": 179718,
    "path": "../../.output/public/images/hops-leafs2.svg"
  },
  "/images/instant-card-bg1.png": {
    "type": "image/png",
    "etag": "\"f9-C5/CVd29OYSLbE7OZojT3PQ4ZtY\"",
    "mtime": "2023-09-04T17:56:52.902Z",
    "size": 249,
    "path": "../../.output/public/images/instant-card-bg1.png"
  },
  "/images/instant-card-bg2.png": {
    "type": "image/png",
    "etag": "\"cb-GLbIrat5A3rc2WwyBb3HgRRn75g\"",
    "mtime": "2023-09-04T17:56:52.903Z",
    "size": 203,
    "path": "../../.output/public/images/instant-card-bg2.png"
  },
  "/images/instant-card-bg3.png": {
    "type": "image/png",
    "etag": "\"26c-uidEa4iBO3Cu2ix+A465erqXIis\"",
    "mtime": "2023-09-04T17:56:52.903Z",
    "size": 620,
    "path": "../../.output/public/images/instant-card-bg3.png"
  },
  "/images/instant-card-bg4.png": {
    "type": "image/png",
    "etag": "\"159-llbX58JAp+arIDtUD7OfETYuxjM\"",
    "mtime": "2023-09-04T17:56:52.903Z",
    "size": 345,
    "path": "../../.output/public/images/instant-card-bg4.png"
  },
  "/images/instant-card-bg5.png": {
    "type": "image/png",
    "etag": "\"1f5-X/f1NwOsm8Dc23qGSFaVENoSjIE\"",
    "mtime": "2023-09-04T17:56:52.903Z",
    "size": 501,
    "path": "../../.output/public/images/instant-card-bg5.png"
  },
  "/images/instant-card-bg6.png": {
    "type": "image/png",
    "etag": "\"3fc-Qx3CCUdDOYo+sygsSIG7pQD7S0Y\"",
    "mtime": "2023-09-04T17:56:52.903Z",
    "size": 1020,
    "path": "../../.output/public/images/instant-card-bg6.png"
  },
  "/images/instant-card-img1@1x.png": {
    "type": "image/png",
    "etag": "\"256b-QsnmgUKJzmzuBzoygI2ZYnZlHg4\"",
    "mtime": "2023-09-04T17:56:52.903Z",
    "size": 9579,
    "path": "../../.output/public/images/instant-card-img1@1x.png"
  },
  "/images/instant-card-img1@1x.webp": {
    "type": "image/webp",
    "etag": "\"8f6-UJWuGodRZx6d5/VMAxf7vCeU/zE\"",
    "mtime": "2023-09-04T17:56:52.903Z",
    "size": 2294,
    "path": "../../.output/public/images/instant-card-img1@1x.webp"
  },
  "/images/instant-card-img1@2x.png": {
    "type": "image/png",
    "etag": "\"7877-sVVtvEb8bYweya5JRIJ8546c6TM\"",
    "mtime": "2023-09-04T17:56:52.903Z",
    "size": 30839,
    "path": "../../.output/public/images/instant-card-img1@2x.png"
  },
  "/images/instant-card-img1@2x.webp": {
    "type": "image/webp",
    "etag": "\"15fc-jlz5N2WeUjZU1xj6QZPJHToqyWw\"",
    "mtime": "2023-09-04T17:56:52.903Z",
    "size": 5628,
    "path": "../../.output/public/images/instant-card-img1@2x.webp"
  },
  "/images/instant-card-img2@1x.png": {
    "type": "image/png",
    "etag": "\"2e78-9k7R7bkIzge5H3/97a0C0yfM/bU\"",
    "mtime": "2023-09-04T17:56:52.903Z",
    "size": 11896,
    "path": "../../.output/public/images/instant-card-img2@1x.png"
  },
  "/images/instant-card-img2@1x.webp": {
    "type": "image/webp",
    "etag": "\"c7c-R+DDyMVEWmaLOa9BFEwWAZEsmCo\"",
    "mtime": "2023-09-04T17:56:52.904Z",
    "size": 3196,
    "path": "../../.output/public/images/instant-card-img2@1x.webp"
  },
  "/images/instant-card-img2@2x.png": {
    "type": "image/png",
    "etag": "\"847a-RE4CMtoHFSPsPMNnmpG7QBfgJ0k\"",
    "mtime": "2023-09-04T17:56:52.904Z",
    "size": 33914,
    "path": "../../.output/public/images/instant-card-img2@2x.png"
  },
  "/images/instant-card-img2@2x.webp": {
    "type": "image/webp",
    "etag": "\"1cfe-QpWbWLCTPvpSxQzh8K5KZ7HS7nk\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 7422,
    "path": "../../.output/public/images/instant-card-img2@2x.webp"
  },
  "/images/instant-card-img3@1x.png": {
    "type": "image/png",
    "etag": "\"102c-mjc5jLTteHrv/EwWzn+aQqdEvPY\"",
    "mtime": "2023-09-04T17:56:52.904Z",
    "size": 4140,
    "path": "../../.output/public/images/instant-card-img3@1x.png"
  },
  "/images/instant-card-img3@1x.webp": {
    "type": "image/webp",
    "etag": "\"a82-Tw0Smo2QNuT1WmpSSQ+P7QpFvF8\"",
    "mtime": "2023-09-04T17:56:52.904Z",
    "size": 2690,
    "path": "../../.output/public/images/instant-card-img3@1x.webp"
  },
  "/images/instant-card-img3@2x.png": {
    "type": "image/png",
    "etag": "\"29e5-lKf7xWofFvi3SEJok2D2128mjww\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 10725,
    "path": "../../.output/public/images/instant-card-img3@2x.png"
  },
  "/images/instant-card-img3@2x.webp": {
    "type": "image/webp",
    "etag": "\"17d2-G44Nk0yuNvGr+q5szRWRoRNQqi8\"",
    "mtime": "2023-09-04T17:56:52.904Z",
    "size": 6098,
    "path": "../../.output/public/images/instant-card-img3@2x.webp"
  },
  "/images/instant-card-img4@1x.png": {
    "type": "image/png",
    "etag": "\"1170-SOOboCO2Qe80nCv2rQUAGVd+Ixc\"",
    "mtime": "2023-09-04T17:56:52.904Z",
    "size": 4464,
    "path": "../../.output/public/images/instant-card-img4@1x.png"
  },
  "/images/instant-card-img4@1x.webp": {
    "type": "image/webp",
    "etag": "\"b08-eGaS+liwn58lubruWzailkDfDt8\"",
    "mtime": "2023-09-04T17:56:52.904Z",
    "size": 2824,
    "path": "../../.output/public/images/instant-card-img4@1x.webp"
  },
  "/images/instant-card-img4@2x.png": {
    "type": "image/png",
    "etag": "\"2d82-r0zfjbmy0+Y6bt/v/TucdEUTvsc\"",
    "mtime": "2023-09-04T17:56:52.904Z",
    "size": 11650,
    "path": "../../.output/public/images/instant-card-img4@2x.png"
  },
  "/images/instant-card-img4@2x.webp": {
    "type": "image/webp",
    "etag": "\"1bfa-dodQjBdQeoi/thpHEchPjcWYJsU\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 7162,
    "path": "../../.output/public/images/instant-card-img4@2x.webp"
  },
  "/images/instant-card-img5@1x.png": {
    "type": "image/png",
    "etag": "\"1818-/ob3wvCTF+kawphHHRXeT/oNW80\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 6168,
    "path": "../../.output/public/images/instant-card-img5@1x.png"
  },
  "/images/instant-card-img5@1x.webp": {
    "type": "image/webp",
    "etag": "\"8ac-zvQHop3ppi47YKs4he8+XimGURA\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 2220,
    "path": "../../.output/public/images/instant-card-img5@1x.webp"
  },
  "/images/instant-card-img5@2x.png": {
    "type": "image/png",
    "etag": "\"4652-tWN7Sl4f9fmiOiPvvy3XEpVUX7w\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 18002,
    "path": "../../.output/public/images/instant-card-img5@2x.png"
  },
  "/images/instant-card-img5@2x.webp": {
    "type": "image/webp",
    "etag": "\"1308-AuCg6fC+hO8LizVwRTWNssjuu6s\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 4872,
    "path": "../../.output/public/images/instant-card-img5@2x.webp"
  },
  "/images/instant-card-img6@1x.png": {
    "type": "image/png",
    "etag": "\"18b2-Cp3wiq5r/Z5sxtEfOSD5FKrs++s\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 6322,
    "path": "../../.output/public/images/instant-card-img6@1x.png"
  },
  "/images/instant-card-img6@1x.webp": {
    "type": "image/webp",
    "etag": "\"cfc-S75VnMYP8RtJSJREA/PgX21+KXA\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 3324,
    "path": "../../.output/public/images/instant-card-img6@1x.webp"
  },
  "/images/instant-card-img6@2x.png": {
    "type": "image/png",
    "etag": "\"4553-YZbrnrhSPBrXdLbsbgnSCLjP8q4\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 17747,
    "path": "../../.output/public/images/instant-card-img6@2x.png"
  },
  "/images/instant-card-img6@2x.webp": {
    "type": "image/webp",
    "etag": "\"1bbc-0EhN9xC3b1l9eSSDEAqKfBOXpDk\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 7100,
    "path": "../../.output/public/images/instant-card-img6@2x.webp"
  },
  "/images/instant-card-img7@1x.png": {
    "type": "image/png",
    "etag": "\"1eae-rcOj6p2/NOQFnLF46VIRMNtjjAE\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 7854,
    "path": "../../.output/public/images/instant-card-img7@1x.png"
  },
  "/images/instant-card-img7@1x.webp": {
    "type": "image/webp",
    "etag": "\"f62-ooWt2kKMLjLhXIsseITyvrYTlm8\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 3938,
    "path": "../../.output/public/images/instant-card-img7@1x.webp"
  },
  "/images/instant-card-img7@2x.png": {
    "type": "image/png",
    "etag": "\"635b-6CkEg2a2hGF9qZgWK5Ec9s+Q28k\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 25435,
    "path": "../../.output/public/images/instant-card-img7@2x.png"
  },
  "/images/instant-card-img7@2x.webp": {
    "type": "image/webp",
    "etag": "\"1f94-d02Z394IVebCq8g5p5j7M9YwMuM\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 8084,
    "path": "../../.output/public/images/instant-card-img7@2x.webp"
  },
  "/images/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"a36c-9Or+/qjc2Kv0z5y8aYR5YR78mdQ\"",
    "mtime": "2023-09-04T17:56:52.905Z",
    "size": 41836,
    "path": "../../.output/public/images/logo.svg"
  },
  "/images/main-prize-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e6f7-Zq1WBB/k2HrWneizSNB+W/6pC94\"",
    "mtime": "2023-09-04T17:56:52.906Z",
    "size": 124663,
    "path": "../../.output/public/images/main-prize-bg.jpg"
  },
  "/images/map-mobile@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"11b93-lQmLY6utEYEplqpqLbMarL04ZRY\"",
    "mtime": "2023-09-04T17:56:52.909Z",
    "size": 72595,
    "path": "../../.output/public/images/map-mobile@1x.jpg"
  },
  "/images/map-mobile@1x.webp": {
    "type": "image/webp",
    "etag": "\"4ac6-afIVxshSQCunRlbINGKh4e/MSf8\"",
    "mtime": "2023-09-04T17:56:52.906Z",
    "size": 19142,
    "path": "../../.output/public/images/map-mobile@1x.webp"
  },
  "/images/map-mobile@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"16f2b-NF7xnKzL8f5si7fj6DeKlxqALvU\"",
    "mtime": "2023-09-04T17:56:52.906Z",
    "size": 93995,
    "path": "../../.output/public/images/map-mobile@2x.jpg"
  },
  "/images/map-mobile@2x.webp": {
    "type": "image/webp",
    "etag": "\"f370-SwRgSslZhJ9RSxQgdxyl8avjQws\"",
    "mtime": "2023-09-04T17:56:52.906Z",
    "size": 62320,
    "path": "../../.output/public/images/map-mobile@2x.webp"
  },
  "/images/map@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"29d4c-foSCE6PC3Sn/yrr4UD4sYmm0kSs\"",
    "mtime": "2023-09-04T17:56:52.907Z",
    "size": 171340,
    "path": "../../.output/public/images/map@1x.jpg"
  },
  "/images/map@1x.webp": {
    "type": "image/webp",
    "etag": "\"f70c-bvlIIQhiQNLoZIqOJJXTMKGA7I8\"",
    "mtime": "2023-09-04T17:56:52.906Z",
    "size": 63244,
    "path": "../../.output/public/images/map@1x.webp"
  },
  "/images/map@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"52324-SqZZ+SMyUd52pH4BpcGULFFLyGQ\"",
    "mtime": "2023-09-04T17:56:52.908Z",
    "size": 336676,
    "path": "../../.output/public/images/map@2x.jpg"
  },
  "/images/map@2x.webp": {
    "type": "image/webp",
    "etag": "\"335f6-CD4H5MUYTKBMoQi9zsMRiKsZphc\"",
    "mtime": "2023-09-04T17:56:52.910Z",
    "size": 210422,
    "path": "../../.output/public/images/map@2x.webp"
  },
  "/images/modal-img1@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"ee5c-WpSH04+3jG2HwpdApiNgfDH4+/0\"",
    "mtime": "2023-09-04T17:56:52.907Z",
    "size": 61020,
    "path": "../../.output/public/images/modal-img1@1x.jpg"
  },
  "/images/modal-img1@1x.webp": {
    "type": "image/webp",
    "etag": "\"4234-MVa58Id/EZTKXIRbhSIHmF84ljQ\"",
    "mtime": "2023-09-04T17:56:52.907Z",
    "size": 16948,
    "path": "../../.output/public/images/modal-img1@1x.webp"
  },
  "/images/modal-img1@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"1cb52-77xGK+lsXWa0vpV41rhf77mxF+Q\"",
    "mtime": "2023-09-04T17:56:52.908Z",
    "size": 117586,
    "path": "../../.output/public/images/modal-img1@2x.jpg"
  },
  "/images/modal-img1@2x.webp": {
    "type": "image/webp",
    "etag": "\"b592-GhizL6bDKw57UktfJFaswSEVAC8\"",
    "mtime": "2023-09-04T17:56:52.908Z",
    "size": 46482,
    "path": "../../.output/public/images/modal-img1@2x.webp"
  },
  "/images/modal-img2@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"12807-U8v4hj6pzEFrDMG8+t0uyk5L/90\"",
    "mtime": "2023-09-04T17:56:52.908Z",
    "size": 75783,
    "path": "../../.output/public/images/modal-img2@1x.jpg"
  },
  "/images/modal-img2@1x.webp": {
    "type": "image/webp",
    "etag": "\"63de-CUg2Q/j7byP6/dRE5FkeGCmq3fk\"",
    "mtime": "2023-09-04T17:56:52.908Z",
    "size": 25566,
    "path": "../../.output/public/images/modal-img2@1x.webp"
  },
  "/images/modal-img2@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"20136-X2X52oJ54Sdib+ZdDKQUelB3nx0\"",
    "mtime": "2023-09-04T17:56:52.908Z",
    "size": 131382,
    "path": "../../.output/public/images/modal-img2@2x.jpg"
  },
  "/images/modal-img2@2x.webp": {
    "type": "image/webp",
    "etag": "\"10664-1iWW0CEvPSAy0RDUtrfN263n2ZE\"",
    "mtime": "2023-09-04T17:56:52.908Z",
    "size": 67172,
    "path": "../../.output/public/images/modal-img2@2x.webp"
  },
  "/images/noise.png": {
    "type": "image/png",
    "etag": "\"854f-EFiJk97HoRah/uNM9I7VTU8qJ5k\"",
    "mtime": "2023-09-04T17:56:52.909Z",
    "size": 34127,
    "path": "../../.output/public/images/noise.png"
  },
  "/images/prize-img1@1x.png": {
    "type": "image/png",
    "etag": "\"3892-hQexrvQpOZb5CcWCaThuv3bwKhE\"",
    "mtime": "2023-09-04T17:56:52.909Z",
    "size": 14482,
    "path": "../../.output/public/images/prize-img1@1x.png"
  },
  "/images/prize-img1@1x.webp": {
    "type": "image/webp",
    "etag": "\"2fac-h6NNjJnL7K+Zw/AZqjIDvvb33AQ\"",
    "mtime": "2023-09-04T17:56:52.908Z",
    "size": 12204,
    "path": "../../.output/public/images/prize-img1@1x.webp"
  },
  "/images/prize-img1@2x.png": {
    "type": "image/png",
    "etag": "\"af3f-/BplGx7k5iX0wii7yu9OjeEpJWI\"",
    "mtime": "2023-09-04T17:56:52.909Z",
    "size": 44863,
    "path": "../../.output/public/images/prize-img1@2x.png"
  },
  "/images/prize-img1@2x.webp": {
    "type": "image/webp",
    "etag": "\"9e9c-nq1gMR/tWq+gfP0P3cVcDHaj1IQ\"",
    "mtime": "2023-09-04T17:56:52.910Z",
    "size": 40604,
    "path": "../../.output/public/images/prize-img1@2x.webp"
  },
  "/images/prize-img2@1x.png": {
    "type": "image/png",
    "etag": "\"350b-hsTob9LzMWSb+CNg/pPrzLkapnM\"",
    "mtime": "2023-09-04T17:56:52.909Z",
    "size": 13579,
    "path": "../../.output/public/images/prize-img2@1x.png"
  },
  "/images/prize-img2@1x.webp": {
    "type": "image/webp",
    "etag": "\"30ca-6tVOIZ+O0xBBnjXZPsX1/zPf6N0\"",
    "mtime": "2023-09-04T17:56:52.910Z",
    "size": 12490,
    "path": "../../.output/public/images/prize-img2@1x.webp"
  },
  "/images/prize-img2@2x.png": {
    "type": "image/png",
    "etag": "\"873a-POEhsd0L0Pfv+cwCrsuTnx/OnKE\"",
    "mtime": "2023-09-04T17:56:52.910Z",
    "size": 34618,
    "path": "../../.output/public/images/prize-img2@2x.png"
  },
  "/images/prize-img2@2x.webp": {
    "type": "image/webp",
    "etag": "\"9c66-Fes2FxUEElxi07iv2INVI9UyN7M\"",
    "mtime": "2023-09-04T17:56:52.910Z",
    "size": 40038,
    "path": "../../.output/public/images/prize-img2@2x.webp"
  },
  "/images/prize-img3@1x.png": {
    "type": "image/png",
    "etag": "\"4b1c-109R9grMc81cwNxHflp5o97OA3Q\"",
    "mtime": "2023-09-04T17:56:52.910Z",
    "size": 19228,
    "path": "../../.output/public/images/prize-img3@1x.png"
  },
  "/images/prize-img3@1x.webp": {
    "type": "image/webp",
    "etag": "\"3404-OeeniVMr0oBbecnIXzYOC/uA2dA\"",
    "mtime": "2023-09-04T17:56:52.910Z",
    "size": 13316,
    "path": "../../.output/public/images/prize-img3@1x.webp"
  },
  "/images/prize-img3@2x.png": {
    "type": "image/png",
    "etag": "\"f3b0-f7LAQMZJ/lL+o4rhlZnfAE9JAkc\"",
    "mtime": "2023-09-04T17:56:52.911Z",
    "size": 62384,
    "path": "../../.output/public/images/prize-img3@2x.png"
  },
  "/images/prize-img3@2x.webp": {
    "type": "image/webp",
    "etag": "\"a0c0-GDwrleSbtz7YH6uXwdXhNgWGzE0\"",
    "mtime": "2023-09-04T17:56:52.910Z",
    "size": 41152,
    "path": "../../.output/public/images/prize-img3@2x.webp"
  },
  "/images/prize-img4@1x.png": {
    "type": "image/png",
    "etag": "\"2c9b-Ua8LdO81DZQ5JEVYP3jCh6axDR4\"",
    "mtime": "2023-09-04T17:56:52.910Z",
    "size": 11419,
    "path": "../../.output/public/images/prize-img4@1x.png"
  },
  "/images/prize-img4@1x.webp": {
    "type": "image/webp",
    "etag": "\"29a0-FlTAIsA7zAHzVIZ77TmeSv+W+pk\"",
    "mtime": "2023-09-04T17:56:52.911Z",
    "size": 10656,
    "path": "../../.output/public/images/prize-img4@1x.webp"
  },
  "/images/prize-img4@2x.png": {
    "type": "image/png",
    "etag": "\"7a0c-2EWKsN/vIYi4TJZRTHjeorpk3kg\"",
    "mtime": "2023-09-04T17:56:52.910Z",
    "size": 31244,
    "path": "../../.output/public/images/prize-img4@2x.png"
  },
  "/images/prize-img4@2x.webp": {
    "type": "image/webp",
    "etag": "\"860c-si+gDe5ZpVl+oB1wqx+E2216M5k\"",
    "mtime": "2023-09-04T17:56:52.910Z",
    "size": 34316,
    "path": "../../.output/public/images/prize-img4@2x.webp"
  },
  "/images/prize-img5@1x.png": {
    "type": "image/png",
    "etag": "\"457d-goETDjanxA9D6YmP5eNAUACDvvQ\"",
    "mtime": "2023-09-04T17:56:52.911Z",
    "size": 17789,
    "path": "../../.output/public/images/prize-img5@1x.png"
  },
  "/images/prize-img5@1x.webp": {
    "type": "image/webp",
    "etag": "\"3a46-i7BIeT+VZYOVV1bNS6SNDuQoje4\"",
    "mtime": "2023-09-04T17:56:52.911Z",
    "size": 14918,
    "path": "../../.output/public/images/prize-img5@1x.webp"
  },
  "/images/prize-img5@2x.png": {
    "type": "image/png",
    "etag": "\"a4b0-icE7DyFhUEjqjPJE5I1eIkQi3ug\"",
    "mtime": "2023-09-04T17:56:52.911Z",
    "size": 42160,
    "path": "../../.output/public/images/prize-img5@2x.png"
  },
  "/images/prize-img5@2x.webp": {
    "type": "image/webp",
    "etag": "\"b308-Y0tXKYYEw1qAr9jq+hqSPhx0wcE\"",
    "mtime": "2023-09-04T17:56:52.911Z",
    "size": 45832,
    "path": "../../.output/public/images/prize-img5@2x.webp"
  },
  "/images/prize-instant-img1@1x.png": {
    "type": "image/png",
    "etag": "\"2cf8-nY2daOtvt3evd6gaEVw+GTP0ir8\"",
    "mtime": "2023-09-04T17:56:52.911Z",
    "size": 11512,
    "path": "../../.output/public/images/prize-instant-img1@1x.png"
  },
  "/images/prize-instant-img1@2x.png": {
    "type": "image/png",
    "etag": "\"8e9f-vcBTCJO4WMiBoUpxS+DGvuFCavc\"",
    "mtime": "2023-09-04T17:56:52.911Z",
    "size": 36511,
    "path": "../../.output/public/images/prize-instant-img1@2x.png"
  },
  "/images/prize-instant-img2@1x.png": {
    "type": "image/png",
    "etag": "\"35cc-mtLDkRlux/kDFvL0PklvzE6dmEU\"",
    "mtime": "2023-09-04T17:56:52.911Z",
    "size": 13772,
    "path": "../../.output/public/images/prize-instant-img2@1x.png"
  },
  "/images/prize-instant-img2@2x.png": {
    "type": "image/png",
    "etag": "\"8f8b-HMA8zTW6LxmUm31JkObniSvmGsU\"",
    "mtime": "2023-09-04T17:56:52.913Z",
    "size": 36747,
    "path": "../../.output/public/images/prize-instant-img2@2x.png"
  },
  "/images/prize-instant-img3@1x.png": {
    "type": "image/png",
    "etag": "\"1977-Aaff6WZrK6TQ4LJUVteX3unjMg0\"",
    "mtime": "2023-09-04T17:56:52.911Z",
    "size": 6519,
    "path": "../../.output/public/images/prize-instant-img3@1x.png"
  },
  "/images/prize-instant-img3@2x.png": {
    "type": "image/png",
    "etag": "\"4715-gDVmP/TA13Q1WLhAHAFDXwKUyow\"",
    "mtime": "2023-09-04T17:56:52.912Z",
    "size": 18197,
    "path": "../../.output/public/images/prize-instant-img3@2x.png"
  },
  "/images/prize-instant-img4@1x.png": {
    "type": "image/png",
    "etag": "\"1863-wUnq0szhl+y97aePj0SFwc9FHZQ\"",
    "mtime": "2023-09-04T17:56:52.912Z",
    "size": 6243,
    "path": "../../.output/public/images/prize-instant-img4@1x.png"
  },
  "/images/prize-instant-img4@2x.png": {
    "type": "image/png",
    "etag": "\"3ff9-pLWW99Y0knfdBYVvdjA0g0p64Fk\"",
    "mtime": "2023-09-04T17:56:52.912Z",
    "size": 16377,
    "path": "../../.output/public/images/prize-instant-img4@2x.png"
  },
  "/images/progress.svg": {
    "type": "image/svg+xml",
    "etag": "\"510-nMIwYUuhYVrn9f4gC/z18TIhG9c\"",
    "mtime": "2023-09-04T17:56:52.911Z",
    "size": 1296,
    "path": "../../.output/public/images/progress.svg"
  },
  "/images/steps-img1@1x.png": {
    "type": "image/png",
    "etag": "\"3d3c-MtL7uavV974CqROpHDtU9oylTqY\"",
    "mtime": "2023-09-04T17:56:52.912Z",
    "size": 15676,
    "path": "../../.output/public/images/steps-img1@1x.png"
  },
  "/images/steps-img1@1x.webp": {
    "type": "image/webp",
    "etag": "\"3d9a-nyZ68iK0o0wizoQjMghIg699I1w\"",
    "mtime": "2023-09-04T17:56:52.913Z",
    "size": 15770,
    "path": "../../.output/public/images/steps-img1@1x.webp"
  },
  "/images/steps-img1@2x.png": {
    "type": "image/png",
    "etag": "\"a7fb-GKtLpb69aFBxFZiEpfzXaraD/pc\"",
    "mtime": "2023-09-04T17:56:52.913Z",
    "size": 43003,
    "path": "../../.output/public/images/steps-img1@2x.png"
  },
  "/images/steps-img1@2x.webp": {
    "type": "image/webp",
    "etag": "\"a406-sOMxjEJNwPJrtfaZyvQrbjAfyFg\"",
    "mtime": "2023-09-04T17:56:52.913Z",
    "size": 41990,
    "path": "../../.output/public/images/steps-img1@2x.webp"
  },
  "/images/steps-img2@1x.png": {
    "type": "image/png",
    "etag": "\"47c1-KJW7IZJHgWaEtTia2wRMVPAi9wM\"",
    "mtime": "2023-09-04T17:56:52.913Z",
    "size": 18369,
    "path": "../../.output/public/images/steps-img2@1x.png"
  },
  "/images/steps-img2@1x.webp": {
    "type": "image/webp",
    "etag": "\"4642-FWr0Eu9H3/isTooP0RwnmCcl0cM\"",
    "mtime": "2023-09-04T17:56:52.913Z",
    "size": 17986,
    "path": "../../.output/public/images/steps-img2@1x.webp"
  },
  "/images/steps-img2@2x.png": {
    "type": "image/png",
    "etag": "\"a13b-fXP29roNo0HvAVZ3eRYDhVCuOl4\"",
    "mtime": "2023-09-04T17:56:52.913Z",
    "size": 41275,
    "path": "../../.output/public/images/steps-img2@2x.png"
  },
  "/images/steps-img2@2x.webp": {
    "type": "image/webp",
    "etag": "\"f3a4-gCUrb8rgNWrTb8+Qy87vuUaBY2c\"",
    "mtime": "2023-09-04T17:56:52.915Z",
    "size": 62372,
    "path": "../../.output/public/images/steps-img2@2x.webp"
  },
  "/images/steps-img3@1x.png": {
    "type": "image/png",
    "etag": "\"2832-BkVL+U/6X0qk7SI1apK05IlxrYA\"",
    "mtime": "2023-09-04T17:56:52.914Z",
    "size": 10290,
    "path": "../../.output/public/images/steps-img3@1x.png"
  },
  "/images/steps-img3@1x.webp": {
    "type": "image/webp",
    "etag": "\"1bfe-7pFwKHXO01dA0KEZXVvofDxqECE\"",
    "mtime": "2023-09-04T17:56:52.915Z",
    "size": 7166,
    "path": "../../.output/public/images/steps-img3@1x.webp"
  },
  "/images/steps-img3@2x.png": {
    "type": "image/png",
    "etag": "\"613b-NLim7+0iBQPohuvEPFsCljcOjqU\"",
    "mtime": "2023-09-04T17:56:52.914Z",
    "size": 24891,
    "path": "../../.output/public/images/steps-img3@2x.png"
  },
  "/images/steps-img3@2x.webp": {
    "type": "image/webp",
    "etag": "\"46dc-4CkF1ypb1VkTAGncDUfeFyPfF8o\"",
    "mtime": "2023-09-04T17:56:52.913Z",
    "size": 18140,
    "path": "../../.output/public/images/steps-img3@2x.webp"
  },
  "/images/sticker-bg.png": {
    "type": "image/png",
    "etag": "\"7c-YiVV/8mLXMzxQEnlai68IV3JvdQ\"",
    "mtime": "2023-09-04T17:56:52.913Z",
    "size": 124,
    "path": "../../.output/public/images/sticker-bg.png"
  },
  "/images/sticker10@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"24f8-1E2i91Niqey4Cm/7vjbx21P4ijk\"",
    "mtime": "2023-09-04T17:56:52.914Z",
    "size": 9464,
    "path": "../../.output/public/images/sticker10@1x.jpg"
  },
  "/images/sticker10@1x.webp": {
    "type": "image/webp",
    "etag": "\"d94-8QXXw9QmtqdRe5VTbbNMoodh9X4\"",
    "mtime": "2023-09-04T17:56:52.914Z",
    "size": 3476,
    "path": "../../.output/public/images/sticker10@1x.webp"
  },
  "/images/sticker10@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"8251-BTlnBtACNtD5bvzZZ30/IwamIso\"",
    "mtime": "2023-09-04T17:56:52.913Z",
    "size": 33361,
    "path": "../../.output/public/images/sticker10@2x.jpg"
  },
  "/images/sticker10@2x.webp": {
    "type": "image/webp",
    "etag": "\"2afa-9umWYbIJ+NMU8AXyDYLpdAZFvUA\"",
    "mtime": "2023-09-04T17:56:52.914Z",
    "size": 11002,
    "path": "../../.output/public/images/sticker10@2x.webp"
  },
  "/images/sticker11@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"24b8-bnicF3QqgCBR/0Bvkcu9gLaJM8Q\"",
    "mtime": "2023-09-04T17:56:52.913Z",
    "size": 9400,
    "path": "../../.output/public/images/sticker11@1x.jpg"
  },
  "/images/sticker11@1x.webp": {
    "type": "image/webp",
    "etag": "\"fd0-nY/YCL+TnpamwpQ50FMeUOUC3Jg\"",
    "mtime": "2023-09-04T17:56:52.915Z",
    "size": 4048,
    "path": "../../.output/public/images/sticker11@1x.webp"
  },
  "/images/sticker11@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"6d6d-g4uaiizDA1dUVQ2YYP2HSGalfE0\"",
    "mtime": "2023-09-04T17:56:52.915Z",
    "size": 28013,
    "path": "../../.output/public/images/sticker11@2x.jpg"
  },
  "/images/sticker11@2x.webp": {
    "type": "image/webp",
    "etag": "\"3008-WxLqJJ2yV9rgfxxPsU40twOgE7U\"",
    "mtime": "2023-09-04T17:56:52.914Z",
    "size": 12296,
    "path": "../../.output/public/images/sticker11@2x.webp"
  },
  "/images/sticker12@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"12d7-wK0WXBWtASkQjaBV5fqAHXgRHNk\"",
    "mtime": "2023-09-04T17:56:52.914Z",
    "size": 4823,
    "path": "../../.output/public/images/sticker12@1x.jpg"
  },
  "/images/sticker12@1x.webp": {
    "type": "image/webp",
    "etag": "\"800-IwQL5W9HfZ3bkHxaUpnnONCfMcc\"",
    "mtime": "2023-09-04T17:56:52.915Z",
    "size": 2048,
    "path": "../../.output/public/images/sticker12@1x.webp"
  },
  "/images/sticker12@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"34f0-b+Ha8nMuNe4cojDOc2q9B3xGQwo\"",
    "mtime": "2023-09-04T17:56:52.916Z",
    "size": 13552,
    "path": "../../.output/public/images/sticker12@2x.jpg"
  },
  "/images/sticker12@2x.webp": {
    "type": "image/webp",
    "etag": "\"150e-W+U1APDyYYdaMi2KfPW5seLtpU0\"",
    "mtime": "2023-09-04T17:56:52.916Z",
    "size": 5390,
    "path": "../../.output/public/images/sticker12@2x.webp"
  },
  "/images/sticker13@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"1237-b+jkFyiliOdMv9mCHWDeTga7Gwo\"",
    "mtime": "2023-09-04T17:56:52.915Z",
    "size": 4663,
    "path": "../../.output/public/images/sticker13@1x.jpg"
  },
  "/images/sticker13@1x.webp": {
    "type": "image/webp",
    "etag": "\"49a-0AnHNulSgkSjYpAopagFeenb0gM\"",
    "mtime": "2023-09-04T17:56:52.919Z",
    "size": 1178,
    "path": "../../.output/public/images/sticker13@1x.webp"
  },
  "/images/sticker13@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"309f-4DlKdic1Zatg33dtW/dVBP1gbGI\"",
    "mtime": "2023-09-04T17:56:52.916Z",
    "size": 12447,
    "path": "../../.output/public/images/sticker13@2x.jpg"
  },
  "/images/sticker13@2x.webp": {
    "type": "image/webp",
    "etag": "\"9e8-YVzjj6YHzRoJ+pPFF8OjrfhQ2hQ\"",
    "mtime": "2023-09-04T17:56:52.916Z",
    "size": 2536,
    "path": "../../.output/public/images/sticker13@2x.webp"
  },
  "/images/sticker14@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"112d-YWZWV7OsI87x8AO1Q9hDK8wH7ZM\"",
    "mtime": "2023-09-04T17:56:52.915Z",
    "size": 4397,
    "path": "../../.output/public/images/sticker14@1x.jpg"
  },
  "/images/sticker14@1x.webp": {
    "type": "image/webp",
    "etag": "\"5e2-/4kN+7qytfKszNIEAISyfFV6OGY\"",
    "mtime": "2023-09-04T17:56:52.915Z",
    "size": 1506,
    "path": "../../.output/public/images/sticker14@1x.webp"
  },
  "/images/sticker14@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"2f7e-7ArO7jtGYkr+PDUJKL3LQ1dGPno\"",
    "mtime": "2023-09-04T17:56:52.915Z",
    "size": 12158,
    "path": "../../.output/public/images/sticker14@2x.jpg"
  },
  "/images/sticker14@2x.webp": {
    "type": "image/webp",
    "etag": "\"cca-gbSd8TrrZv2U91SLhF4T/cgL7hc\"",
    "mtime": "2023-09-04T17:56:52.924Z",
    "size": 3274,
    "path": "../../.output/public/images/sticker14@2x.webp"
  },
  "/images/sticker15@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"b17-vLK2GjPQziUR2cM/ADB7EG2Evec\"",
    "mtime": "2023-09-04T17:56:52.915Z",
    "size": 2839,
    "path": "../../.output/public/images/sticker15@1x.jpg"
  },
  "/images/sticker15@1x.webp": {
    "type": "image/webp",
    "etag": "\"458-7M4PH1lMN7LmpY2CRR+MpmrnqpY\"",
    "mtime": "2023-09-04T17:56:52.916Z",
    "size": 1112,
    "path": "../../.output/public/images/sticker15@1x.webp"
  },
  "/images/sticker15@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"1592-VaW8foRkc7/g620Um4PCK2F9umM\"",
    "mtime": "2023-09-04T17:56:52.916Z",
    "size": 5522,
    "path": "../../.output/public/images/sticker15@2x.jpg"
  },
  "/images/sticker15@2x.webp": {
    "type": "image/webp",
    "etag": "\"a26-fev/Esb6/zFvCcE9LkRqBbFhiJc\"",
    "mtime": "2023-09-04T17:56:52.917Z",
    "size": 2598,
    "path": "../../.output/public/images/sticker15@2x.webp"
  },
  "/images/sticker16@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"b02-BImfjMqwZr9OOJgB5f7JVmRxpV0\"",
    "mtime": "2023-09-04T17:56:52.917Z",
    "size": 2818,
    "path": "../../.output/public/images/sticker16@1x.jpg"
  },
  "/images/sticker16@1x.webp": {
    "type": "image/webp",
    "etag": "\"578-0A+HaGWjP9O2fizEu6PxBYUCecs\"",
    "mtime": "2023-09-04T17:56:52.917Z",
    "size": 1400,
    "path": "../../.output/public/images/sticker16@1x.webp"
  },
  "/images/sticker16@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"1623-YA4MkPPApQ9hfrXQR86T1grblMQ\"",
    "mtime": "2023-09-04T17:56:52.917Z",
    "size": 5667,
    "path": "../../.output/public/images/sticker16@2x.jpg"
  },
  "/images/sticker16@2x.webp": {
    "type": "image/webp",
    "etag": "\"cfe-HK4I3lhWTkgX1ZReudsdANclWO4\"",
    "mtime": "2023-09-04T17:56:52.917Z",
    "size": 3326,
    "path": "../../.output/public/images/sticker16@2x.webp"
  },
  "/images/sticker17@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"1021-f7WKqdaiPtSrmRADaTRbUjxV2Co\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 4129,
    "path": "../../.output/public/images/sticker17@1x.jpg"
  },
  "/images/sticker17@1x.webp": {
    "type": "image/webp",
    "etag": "\"3ca-rnbillshZCBudrinikiYSb4q5T8\"",
    "mtime": "2023-09-04T17:56:52.917Z",
    "size": 970,
    "path": "../../.output/public/images/sticker17@1x.webp"
  },
  "/images/sticker17@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"2046-qauFGU3o+2igNc5twdb7THn350A\"",
    "mtime": "2023-09-04T17:56:52.917Z",
    "size": 8262,
    "path": "../../.output/public/images/sticker17@2x.jpg"
  },
  "/images/sticker17@2x.webp": {
    "type": "image/webp",
    "etag": "\"8f0-jnLvqJHvkKWNDvt7DyhLHqBupkE\"",
    "mtime": "2023-09-04T17:56:52.917Z",
    "size": 2288,
    "path": "../../.output/public/images/sticker17@2x.webp"
  },
  "/images/sticker18@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"c87-+GsvZxxFQDdb30DJs4rtRwk4oaA\"",
    "mtime": "2023-09-04T17:56:52.917Z",
    "size": 3207,
    "path": "../../.output/public/images/sticker18@1x.jpg"
  },
  "/images/sticker18@1x.webp": {
    "type": "image/webp",
    "etag": "\"462-1MA4viBMlFAo6l+fCTlgmhl++7Y\"",
    "mtime": "2023-09-04T17:56:52.917Z",
    "size": 1122,
    "path": "../../.output/public/images/sticker18@1x.webp"
  },
  "/images/sticker18@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a67-s/5A+EZKnRrtJAbvMO9QNbxQRZI\"",
    "mtime": "2023-09-04T17:56:52.917Z",
    "size": 6759,
    "path": "../../.output/public/images/sticker18@2x.jpg"
  },
  "/images/sticker18@2x.webp": {
    "type": "image/webp",
    "etag": "\"956-rlsMtuywZOMD29IewTS1l1yR8W0\"",
    "mtime": "2023-09-04T17:56:52.918Z",
    "size": 2390,
    "path": "../../.output/public/images/sticker18@2x.webp"
  },
  "/images/sticker19@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"2262-1MD6xDoldeQDV62zIzrlcGVOSpQ\"",
    "mtime": "2023-09-04T17:56:52.918Z",
    "size": 8802,
    "path": "../../.output/public/images/sticker19@1x.jpg"
  },
  "/images/sticker19@1x.webp": {
    "type": "image/webp",
    "etag": "\"82a-dEMOaOBldBBjG8XOBN+pDLSK190\"",
    "mtime": "2023-09-04T17:56:52.918Z",
    "size": 2090,
    "path": "../../.output/public/images/sticker19@1x.webp"
  },
  "/images/sticker19@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"518a-oOCykgJsPHuf31NSDliP+KYVAYU\"",
    "mtime": "2023-09-04T17:56:52.917Z",
    "size": 20874,
    "path": "../../.output/public/images/sticker19@2x.jpg"
  },
  "/images/sticker19@2x.webp": {
    "type": "image/webp",
    "etag": "\"10c8-NNZU0Y2EbukCgHaIKWmg0voJQco\"",
    "mtime": "2023-09-04T17:56:52.917Z",
    "size": 4296,
    "path": "../../.output/public/images/sticker19@2x.webp"
  },
  "/images/sticker1@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c7a-dvQCXMLv72RiZ18of5J8A5oxH5Y\"",
    "mtime": "2023-09-04T17:56:52.919Z",
    "size": 7290,
    "path": "../../.output/public/images/sticker1@1x.jpg"
  },
  "/images/sticker1@1x.webp": {
    "type": "image/webp",
    "etag": "\"93c-qGTEqhLew8g2Vt6RyZO2dDy+4XI\"",
    "mtime": "2023-09-04T17:56:52.918Z",
    "size": 2364,
    "path": "../../.output/public/images/sticker1@1x.webp"
  },
  "/images/sticker1@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"5ebe-fYms5QMN3fMGLUyT1aBm2Mig6bY\"",
    "mtime": "2023-09-04T17:56:52.918Z",
    "size": 24254,
    "path": "../../.output/public/images/sticker1@2x.jpg"
  },
  "/images/sticker1@2x.webp": {
    "type": "image/webp",
    "etag": "\"1bfc-STUkLzz2AWhrPY3Ma3Bpt3lxtJc\"",
    "mtime": "2023-09-04T17:56:52.918Z",
    "size": 7164,
    "path": "../../.output/public/images/sticker1@2x.webp"
  },
  "/images/sticker2@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"2016-xttaon0jqN60SpZIZ1RmXcCnHDw\"",
    "mtime": "2023-09-04T17:56:52.918Z",
    "size": 8214,
    "path": "../../.output/public/images/sticker2@1x.jpg"
  },
  "/images/sticker2@1x.webp": {
    "type": "image/webp",
    "etag": "\"760-UbGQyZU1UzedPvl/xSvC4so8VVs\"",
    "mtime": "2023-09-04T17:56:52.918Z",
    "size": 1888,
    "path": "../../.output/public/images/sticker2@1x.webp"
  },
  "/images/sticker2@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"6e89-c+j6YZqlcG8Kf6nDMMe/2qIT4bA\"",
    "mtime": "2023-09-04T17:56:52.919Z",
    "size": 28297,
    "path": "../../.output/public/images/sticker2@2x.jpg"
  },
  "/images/sticker2@2x.webp": {
    "type": "image/webp",
    "etag": "\"1834-QB4yGu4pFowfkmElwkbxA/omvTc\"",
    "mtime": "2023-09-04T17:56:52.918Z",
    "size": 6196,
    "path": "../../.output/public/images/sticker2@2x.webp"
  },
  "/images/sticker3@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"25ac-Hvp6V/ugk0Y5KbukYzvk9n8CSDM\"",
    "mtime": "2023-09-04T17:56:52.918Z",
    "size": 9644,
    "path": "../../.output/public/images/sticker3@1x.jpg"
  },
  "/images/sticker3@1x.webp": {
    "type": "image/webp",
    "etag": "\"c0a-khAgndpYa/y8P6OX3gFQ3QWs7Kw\"",
    "mtime": "2023-09-04T17:56:52.919Z",
    "size": 3082,
    "path": "../../.output/public/images/sticker3@1x.webp"
  },
  "/images/sticker3@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"8903-sKlklHvgpcBFqNheJGO2+ySA/9s\"",
    "mtime": "2023-09-04T17:56:52.919Z",
    "size": 35075,
    "path": "../../.output/public/images/sticker3@2x.jpg"
  },
  "/images/sticker3@2x.webp": {
    "type": "image/webp",
    "etag": "\"291e-Q53IYYH+9B471nFDmCDd4I/jH/c\"",
    "mtime": "2023-09-04T17:56:52.919Z",
    "size": 10526,
    "path": "../../.output/public/images/sticker3@2x.webp"
  },
  "/images/sticker4@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"9e3-BTfTvrxlzAKvAKR7ERwLOq3l6oc\"",
    "mtime": "2023-09-04T17:56:52.919Z",
    "size": 2531,
    "path": "../../.output/public/images/sticker4@1x.jpg"
  },
  "/images/sticker4@1x.webp": {
    "type": "image/webp",
    "etag": "\"440-PQ5rwHs61qcRePsineFKkmHd9qQ\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 1088,
    "path": "../../.output/public/images/sticker4@1x.webp"
  },
  "/images/sticker4@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"1802-gBVTM204I6POGnLUzsCjBHD24Yw\"",
    "mtime": "2023-09-04T17:56:52.919Z",
    "size": 6146,
    "path": "../../.output/public/images/sticker4@2x.jpg"
  },
  "/images/sticker4@2x.webp": {
    "type": "image/webp",
    "etag": "\"b3c-FYuRBnthan2ZlkZFP8K9XDpfk1Q\"",
    "mtime": "2023-09-04T17:56:52.919Z",
    "size": 2876,
    "path": "../../.output/public/images/sticker4@2x.webp"
  },
  "/images/sticker5@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d1a-jy2jPArL/JwcbaxmsjUj8ZhmnEU\"",
    "mtime": "2023-09-04T17:56:52.919Z",
    "size": 7450,
    "path": "../../.output/public/images/sticker5@1x.jpg"
  },
  "/images/sticker5@1x.webp": {
    "type": "image/webp",
    "etag": "\"714-H5+hZ9WU3QX1iIVCGAmTFDzwQmE\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 1812,
    "path": "../../.output/public/images/sticker5@1x.webp"
  },
  "/images/sticker5@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"56ef-buP8C2/X9+0yZ+01WxF3zOciwnc\"",
    "mtime": "2023-09-04T17:56:52.919Z",
    "size": 22255,
    "path": "../../.output/public/images/sticker5@2x.jpg"
  },
  "/images/sticker5@2x.webp": {
    "type": "image/webp",
    "etag": "\"1264-9fzVRXlC+Rz+Vdw6KXDPcSuj5Nw\"",
    "mtime": "2023-09-04T17:56:52.919Z",
    "size": 4708,
    "path": "../../.output/public/images/sticker5@2x.webp"
  },
  "/images/sticker6@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"4003-Zq329UKliRc3v7mE1XhKnZb16dA\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 16387,
    "path": "../../.output/public/images/sticker6@1x.jpg"
  },
  "/images/sticker6@1x.webp": {
    "type": "image/webp",
    "etag": "\"13a6-kbN35n0pVoX75fC80beWmQpB9TM\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 5030,
    "path": "../../.output/public/images/sticker6@1x.webp"
  },
  "/images/sticker6@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"cc57-/2nGdo4EmRRg+NAknz0xSUWWVR0\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 52311,
    "path": "../../.output/public/images/sticker6@2x.jpg"
  },
  "/images/sticker6@2x.webp": {
    "type": "image/webp",
    "etag": "\"3f70-KA/6rSwgSeKBYzAhbu8Dtr0GfRk\"",
    "mtime": "2023-09-04T17:56:52.920Z",
    "size": 16240,
    "path": "../../.output/public/images/sticker6@2x.webp"
  },
  "/images/sticker7@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d55-iwgI94p9kbbPpNgPrPqPyWttITI\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 7509,
    "path": "../../.output/public/images/sticker7@1x.jpg"
  },
  "/images/sticker7@1x.webp": {
    "type": "image/webp",
    "etag": "\"6cc-sa2hopZTXiMCIg3MLYOQMYIl7do\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 1740,
    "path": "../../.output/public/images/sticker7@1x.webp"
  },
  "/images/sticker7@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"511c-0w8+jhte/Mf930EC2iyiSZu3qf8\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 20764,
    "path": "../../.output/public/images/sticker7@2x.jpg"
  },
  "/images/sticker7@2x.webp": {
    "type": "image/webp",
    "etag": "\"f7c-8yT3rfY6wCUwI9jRy5hhA+23O7s\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 3964,
    "path": "../../.output/public/images/sticker7@2x.webp"
  },
  "/images/sticker8@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b65-K5GpWHdfUQtvrN7130XRRNv3vb8\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 7013,
    "path": "../../.output/public/images/sticker8@1x.jpg"
  },
  "/images/sticker8@1x.webp": {
    "type": "image/webp",
    "etag": "\"91a-ImqNXr65uRt3xll9Ok3v9y4pWq0\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 2330,
    "path": "../../.output/public/images/sticker8@1x.webp"
  },
  "/images/sticker8@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"563f-MUlxwnxjCqSCgC1NrHMx79FZYnU\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 22079,
    "path": "../../.output/public/images/sticker8@2x.jpg"
  },
  "/images/sticker8@2x.webp": {
    "type": "image/webp",
    "etag": "\"1778-qXgmMZrK4ZyxbS7K9hh0XNVEeOs\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 6008,
    "path": "../../.output/public/images/sticker8@2x.webp"
  },
  "/images/sticker9@1x.jpg": {
    "type": "image/jpeg",
    "etag": "\"2360-Y/4ho0O+XxTk9Hp3d+LPnqhuqnk\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 9056,
    "path": "../../.output/public/images/sticker9@1x.jpg"
  },
  "/images/sticker9@1x.webp": {
    "type": "image/webp",
    "etag": "\"d0e-Z8DCP63zHB9aUqJBHTnqhfSZxJ4\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 3342,
    "path": "../../.output/public/images/sticker9@1x.webp"
  },
  "/images/sticker9@2x.jpg": {
    "type": "image/jpeg",
    "etag": "\"7b4a-GIa1ESFKAn6xAx6yCRNVck7fhMs\"",
    "mtime": "2023-09-04T17:56:52.921Z",
    "size": 31562,
    "path": "../../.output/public/images/sticker9@2x.jpg"
  },
  "/images/sticker9@2x.webp": {
    "type": "image/webp",
    "etag": "\"2796-phxxeTZtaT47j+tbtwdQZPAgvF8\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 10134,
    "path": "../../.output/public/images/sticker9@2x.webp"
  },
  "/images/sprite/generator.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"14-6ioExQOgvUcNhxVRgvQLDSDYWM4\"",
    "mtime": "2023-09-04T17:56:52.899Z",
    "size": 20,
    "path": "../../.output/public/images/sprite/generator.txt"
  },
  "/images/sprite/sprite.svg": {
    "type": "image/svg+xml",
    "etag": "\"7eb3-q8IIIw7RF4ae1p6xLthe3Ot0lA8\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 32435,
    "path": "../../.output/public/images/sprite/sprite.svg"
  },
  "/images/sprite/src/arrow-back.svg": {
    "type": "image/svg+xml",
    "etag": "\"12b-Vf1H4trgLwSFNcN9ZEC7nPsztqQ\"",
    "mtime": "2023-09-04T17:56:52.925Z",
    "size": 299,
    "path": "../../.output/public/images/sprite/src/arrow-back.svg"
  },
  "/images/sprite/src/burger.svg": {
    "type": "image/svg+xml",
    "etag": "\"171-WjDDAdhDC3oJQcbw5eguuDPJcJ4\"",
    "mtime": "2023-09-04T17:56:52.899Z",
    "size": 369,
    "path": "../../.output/public/images/sprite/src/burger.svg"
  },
  "/images/sprite/src/button-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"156-6cNEBaJpa8gI6bUCDEDtaf9P4JQ\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 342,
    "path": "../../.output/public/images/sprite/src/button-arrow.svg"
  },
  "/images/sprite/src/calendar.svg": {
    "type": "image/svg+xml",
    "etag": "\"2bd-EyHRyQMLALZ35oSYNh3RuavG76Y\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 701,
    "path": "../../.output/public/images/sprite/src/calendar.svg"
  },
  "/images/sprite/src/chevron-right.svg": {
    "type": "image/svg+xml",
    "etag": "\"d8-z42Y5GQmk9oTD+BGVlh7ZTaOyTg\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 216,
    "path": "../../.output/public/images/sprite/src/chevron-right.svg"
  },
  "/images/sprite/src/clock.svg": {
    "type": "image/svg+xml",
    "etag": "\"3af-kaOhjZdalDNzHowhZTQI2TV3uIY\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 943,
    "path": "../../.output/public/images/sprite/src/clock.svg"
  },
  "/images/sprite/src/close.svg": {
    "type": "image/svg+xml",
    "etag": "\"15d-Frd/4Kz21rsmES6Lu6Xft8Adh7w\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 349,
    "path": "../../.output/public/images/sprite/src/close.svg"
  },
  "/images/sprite/src/dashes.svg": {
    "type": "image/svg+xml",
    "etag": "\"1b87-qMTXQQ4jhLegAH9mz47GN1MRGXs\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 7047,
    "path": "../../.output/public/images/sprite/src/dashes.svg"
  },
  "/images/sprite/src/dropdown-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"f6-OnpB036HKULviAGqeIvNapxFBUI\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 246,
    "path": "../../.output/public/images/sprite/src/dropdown-arrow.svg"
  },
  "/images/sprite/src/envelope.svg": {
    "type": "image/svg+xml",
    "etag": "\"35a-egzhefmfrTPU+5/IeeCkLdZfUBg\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 858,
    "path": "../../.output/public/images/sprite/src/envelope.svg"
  },
  "/images/sprite/src/female.svg": {
    "type": "image/svg+xml",
    "etag": "\"24a-QMGpRzvwxfaCRSfK5KEZexE+vYo\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 586,
    "path": "../../.output/public/images/sprite/src/female.svg"
  },
  "/images/sprite/src/google.svg": {
    "type": "image/svg+xml",
    "etag": "\"41f-CYu+J57YntFWc1ql7c2HTOnbotE\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 1055,
    "path": "../../.output/public/images/sprite/src/google.svg"
  },
  "/images/sprite/src/info-thin.svg": {
    "type": "image/svg+xml",
    "etag": "\"23f-utC63slrxxmPOcLPFS4SbfDTHpk\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 575,
    "path": "../../.output/public/images/sprite/src/info-thin.svg"
  },
  "/images/sprite/src/info.svg": {
    "type": "image/svg+xml",
    "etag": "\"2c2-A+LvE9IFoQ5euT8wHpNZTwOOLHM\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 706,
    "path": "../../.output/public/images/sprite/src/info.svg"
  },
  "/images/sprite/src/lightning.svg": {
    "type": "image/svg+xml",
    "etag": "\"f0-onJyqlFiJe9RoKv0SBzQaY9eWT4\"",
    "mtime": "2023-09-04T17:56:52.922Z",
    "size": 240,
    "path": "../../.output/public/images/sprite/src/lightning.svg"
  },
  "/images/sprite/src/male.svg": {
    "type": "image/svg+xml",
    "etag": "\"254-Ypgw0OdzE3YtvSmmjGAjMinP7QY\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 596,
    "path": "../../.output/public/images/sprite/src/male.svg"
  },
  "/images/sprite/src/map-marker.svg": {
    "type": "image/svg+xml",
    "etag": "\"3cc-HpJh50WTjPAVIAn9jlWMiAAJ7Lo\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 972,
    "path": "../../.output/public/images/sprite/src/map-marker.svg"
  },
  "/images/sprite/src/pencil.svg": {
    "type": "image/svg+xml",
    "etag": "\"41d-Nio9LF+6wvpKSGiMBEBJxqDocH0\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 1053,
    "path": "../../.output/public/images/sprite/src/pencil.svg"
  },
  "/images/sprite/src/phone.svg": {
    "type": "image/svg+xml",
    "etag": "\"670-8ZBRm7PJTdGLDK+PRSBTQDFZCkE\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 1648,
    "path": "../../.output/public/images/sprite/src/phone.svg"
  },
  "/images/sprite/src/plus.svg": {
    "type": "image/svg+xml",
    "etag": "\"113-1YWLXcxFDNWzADufoObwJ8pr0ng\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 275,
    "path": "../../.output/public/images/sprite/src/plus.svg"
  },
  "/images/sprite/src/refresh.svg": {
    "type": "image/svg+xml",
    "etag": "\"3f0-mIPWo2J+CFDxJc/WpwRrOdBrYCg\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 1008,
    "path": "../../.output/public/images/sprite/src/refresh.svg"
  },
  "/images/sprite/src/slider-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"126-Dvsmjf+7ajGu79VWmCMby6FW8Zc\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 294,
    "path": "../../.output/public/images/sprite/src/slider-arrow.svg"
  },
  "/images/sprite/src/star.svg": {
    "type": "image/svg+xml",
    "etag": "\"511-wvit6pTGA/9fZvAPnOrLtplc/Fo\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 1297,
    "path": "../../.output/public/images/sprite/src/star.svg"
  },
  "/images/sprite/src/steps-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"1e7-n7g7RVhumE9HCMQsMD9zAj45lBE\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 487,
    "path": "../../.output/public/images/sprite/src/steps-arrow.svg"
  },
  "/images/sprite/src/success.svg": {
    "type": "image/svg+xml",
    "etag": "\"1c6-AJbweeSNWbSf4874G2fsEcyKbVI\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 454,
    "path": "../../.output/public/images/sprite/src/success.svg"
  },
  "/images/sprite/src/target.svg": {
    "type": "image/svg+xml",
    "etag": "\"4a9-vY4sPKc2t96tPWBR3Hy3vdCTdlU\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 1193,
    "path": "../../.output/public/images/sprite/src/target.svg"
  },
  "/images/sprite/src/thumbs-up.svg": {
    "type": "image/svg+xml",
    "etag": "\"38d-LN2/8uoGddUsmFreZd0fS0D8XWM\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 909,
    "path": "../../.output/public/images/sprite/src/thumbs-up.svg"
  },
  "/images/sprite/src/user-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"327-scA86f+chEHlMsJ21Tc0o6jb2Uo\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 807,
    "path": "../../.output/public/images/sprite/src/user-icon.svg"
  },
  "/images/sprite/src/waves.svg": {
    "type": "image/svg+xml",
    "etag": "\"13b1-ZwO3FzqpMwxY6+OKMuxYFG8QHPY\"",
    "mtime": "2023-09-04T17:56:52.924Z",
    "size": 5041,
    "path": "../../.output/public/images/sprite/src/waves.svg"
  },
  "/images/sprite/src/yandex.svg": {
    "type": "image/svg+xml",
    "etag": "\"456-49OSkfLR0qa7+qXPyFR+d4MxINI\"",
    "mtime": "2023-09-04T17:56:52.923Z",
    "size": 1110,
    "path": "../../.output/public/images/sprite/src/yandex.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/assets":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_z9or0C = () => import('../renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_z9or0C, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (...args) => {
    return _localFetch(...args).then(
      (response) => normalizeFetchResponse(response)
    );
  };
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, useStorage as b, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
