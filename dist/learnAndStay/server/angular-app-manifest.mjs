
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
    'index.csr.html': {size: 8102, hash: '8902caf0f01f98b8cb7e7664addde6e27acc7e57ee8e351592bf4644e35e5f00', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: 'ecadc03a4809bc1fd26004b3e3141298b747ae383a11235c56cc34d4b188f508', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 42622, hash: '119c8307a302e6ab368f54de3a5cdac01ba68e24041886921934f18f5f066cbc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-G76F6VJ7.css': {size: 241198, hash: 'cvaKKcKCwVQ', text: () => import('./assets-chunks/styles-G76F6VJ7_css.mjs').then(m => m.default)}
  },
};
