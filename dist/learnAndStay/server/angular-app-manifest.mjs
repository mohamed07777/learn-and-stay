
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8102, hash: 'f60b2dd596d209180fcaf0f3d029d91bfd3f99c5302438471fcf7e77ccb3c5c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: 'c94bf5c95d7b2a6d49f6a4f2ab0439c1efecfc0ae686c7309ea2651124691c62', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 40485, hash: 'df6d68a564a428b0f45a8edc82882fd7e1ce0fc47310ddfe45d66fcd220d6cb6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-G76F6VJ7.css': {size: 241198, hash: 'cvaKKcKCwVQ', text: () => import('./assets-chunks/styles-G76F6VJ7_css.mjs').then(m => m.default)}
  },
};
