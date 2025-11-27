module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/config/app-config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>SITE_URL
]);
const API_URL = 'http://localhost:1337';
const ALL_POST_URL = `${API_URL}/api/posts?populate=*`;
const SITE_NAME = 'Luciano Machado';
const SITE_URL = '';
const PAGE_SIZE = 10;
}),
"[project]/src/app/data/posts/fetch-helper.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAPI",
    ()=>fetchAPI,
    "getStrapiURL",
    ()=>getStrapiURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$app$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/app-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qs/lib/index.js [app-rsc] (ecmascript)");
;
;
function getStrapiURL(path = '') {
    return `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$app$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_URL"]}${path}`;
}
async function fetchAPI(path, urlParamsObject = {}, options = {}) {
    try {
        // 1. Transforma o objeto JSON na string de query do Strapi
        const queryString = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].stringify(urlParamsObject, {
            encodeValuesOnly: true
        });
        // 2. Monta a URL completa: /api/posts?populate=*&...
        const requestUrl = getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`);
        // 3. Faz o fetch nativo
        const response = await fetch(requestUrl, {
            ...options
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Please check if Strapi is running.`);
    }
}
}),
"[project]/src/app/data/posts/count-all-posts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countAllPosts",
    ()=>countAllPosts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$posts$2f$fetch$2d$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/posts/fetch-helper.ts [app-rsc] (ecmascript)");
;
const countAllPosts = async ()=>{
    const urlParams = {
        pagination: {
            pageSize: 1
        },
        fields: [
            'id'
        ]
    };
    try {
        const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$posts$2f$fetch$2d$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAPI"])('/posts', urlParams);
        return json.meta.pagination.total;
    } catch (e) {
        return 0;
    }
};
}),
"[project]/src/app/data/posts/get-post-by-slug.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPostBySlug",
    ()=>getPostBySlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$posts$2f$fetch$2d$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/posts/fetch-helper.ts [app-rsc] (ecmascript)");
;
const getPostBySlug = async (slug)=>{
    const urlParams = {
        // 👇 AQUI ESTÁ O SEGREDO: FILTRO
        filters: {
            slug: {
                $eq: slug
            }
        },
        // Precisamos popular para pegar imagem e texto
        populate: {
            cover: {
                fields: [
                    'url',
                    'alternativeText',
                    'width',
                    'height'
                ]
            },
            category: {
                populate: true
            },
            author: true
        }
    };
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$posts$2f$fetch$2d$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAPI"])('/posts', urlParams);
    // O Strapi sempre retorna um array quando usamos filters.
    // Se o array tiver itens, pegamos o primeiro ([0]). Senão, retornamos null.
    const posts = json.data;
    return posts.length > 0 ? posts[0] : null;
};
}),
"[project]/src/app/post/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$app$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/app-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$posts$2f$count$2d$all$2d$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/posts/count-all-posts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$posts$2f$get$2d$post$2d$by$2d$slug$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/posts/get-post-by-slug.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function PostPage({ params }) {
    // 1. Busca o post pelo slug da URL
    const post = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$posts$2f$get$2d$post$2d$by$2d$slug$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPostBySlug"])(params.slug);
    // 2. Se não achou nada, manda para página 404
    if (!post) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // 3. Renderiza o Post
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: post.title
            }, void 0, false, {
                fileName: "[project]/src/app/post/[slug]/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            post.cover?.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: post.cover.url,
                width: 800,
                height: 400,
                alt: post.title
            }, void 0, false, {
                fileName: "[project]/src/app/post/[slug]/page.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                children: post.content
            }, void 0, false, {
                fileName: "[project]/src/app/post/[slug]/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/post/[slug]/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
async function generateStaticParams() {
    // 1. Pega o total absoluto
    const totalPosts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$posts$2f$count$2d$all$2d$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countAllPosts"])();
    // 2. Define quantos posts você quer mostrar por página
    const postsPerPage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$app$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAGE_SIZE"];
    // 3. Calcula o número de páginas
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    // 4. Se não tiver posts, retorna vazio para não dar erro
    if (totalPages === 0) return [];
    // 5. Cria o array de caminhos: [{ pageNumber: '1' }, { pageNumber: '2' }...]
    const paths = Array.from({
        length: totalPages
    }, (_, i)=>({
            pageNumber: String(i + 1)
        }));
    return paths;
}
}),
"[project]/src/app/post/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/post/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f2ec3ac1._.js.map