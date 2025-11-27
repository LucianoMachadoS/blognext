module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/config/app-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/components/Comments/comments.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "component": "comments-module__2FOlXG__component",
});
}),
"[project]/src/app/components/Comments/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "Comments",
    ()=>Comments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$app$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/app-config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/Comments/comments.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const Comments = ({ slug, title })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 1. Função para carregar o script do Cusdis
        const loadCusdis = ()=>{
            // Se o objeto CUSDIS já existir (usuário navegou entre páginas), força o reinício
            if (window.CUSDIS) {
                window.CUSDIS.initial();
                return;
            }
            // Se não existir, cria a tag script e injeta no head
            const script = document.createElement('script');
            script.src = 'https://cusdis.com/js/cusdis.es.js';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        };
        loadCusdis();
    // Cleanup opcional: geralmente não precisa remover o script,
    // pois ele pode ser reusado em outros posts
    }, [
        slug
    ]); // Roda toda vez que o slug mudar (troca de post)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].component,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "cusdis_thread",
            "data-host": "https://cusdis.com",
            "data-app-id": "d5aaf2c6-7e3d-40c7-9515-7c6d89018a89",
            "data-page-id": slug,
            "data-page-url": `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$app$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_URL_LOCAL"]}/post/${slug}`,
            "data-page-title": title,
            "data-theme": "auto"
        }, void 0, false, {
            fileName: "[project]/src/app/components/Comments/index.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/components/Comments/index.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e301b1f6._.js.map