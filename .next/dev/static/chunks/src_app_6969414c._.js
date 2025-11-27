(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/config/app-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_POST_URL",
    ()=>ALL_POST_URL,
    "API_URL",
    ()=>API_URL,
    "PAGE_SIZE",
    ()=>PAGE_SIZE,
    "SITE_NAME",
    ()=>SITE_NAME,
    "SITE_URL",
    ()=>SITE_URL,
    "SITE_URL_LOCAL",
    ()=>SITE_URL_LOCAL
]);
const API_URL = 'http://localhost:1337';
const ALL_POST_URL = `${API_URL}/api/posts?populate=*`;
const SITE_NAME = 'Luciano Machado';
const SITE_URL = '';
const SITE_URL_LOCAL = 'http://localhost:3000';
const PAGE_SIZE = 10;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Comments/comments.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "component": "comments-module__2FOlXG__component",
});
}),
"[project]/src/app/components/Comments/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "Comments",
    ()=>Comments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/app-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/Comments/comments.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Comments = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "3671333dc3ab69d49915fd49a7501991e823149ab57f2730ad5744e2f53d8ca0") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3671333dc3ab69d49915fd49a7501991e823149ab57f2730ad5744e2f53d8ca0";
    }
    const { slug, title } = t0;
    let t1;
    if ($[1] !== slug) {
        t1 = [
            slug
        ];
        $[1] = slug;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_temp2, t1);
    const t2 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_URL_LOCAL"]}/post/${slug}`;
    let t3;
    if ($[3] !== slug || $[4] !== t2 || $[5] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "cusdis_thread",
                "data-host": "https://cusdis.com",
                "data-app-id": "d5aaf2c6-7e3d-40c7-9515-7c6d89018a89",
                "data-page-id": slug,
                "data-page-url": t2,
                "data-page-title": title,
                "data-theme": "auto"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Comments/index.tsx",
                lineNumber: 36,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/Comments/index.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = slug;
        $[4] = t2;
        $[5] = title;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
};
_s(Comments, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Comments;
function _temp() {
    if (window.CUSDIS) {
        window.CUSDIS.initial();
        return;
    }
    const script = document.createElement("script");
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
}
function _temp2() {
    const loadCusdis = _temp;
    loadCusdis();
}
var _c;
__turbopack_context__.k.register(_c, "Comments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_6969414c._.js.map