importScripts('/static/js/workbox-sw.prod.v2.1.3.js');/**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author 徐故成(guchengxu1988@163.com)
 */

/* globals WorkboxSW */

const workboxSW = new WorkboxSW({
    cacheId: 'lavas-cache',
    ignoreUrlParametersMatching: [/^utm_/],
    skipWaiting: true,
    clientsClaim: true
});

// Define precache injection point.
workboxSW.precache([
  {
    "url": "/index.html",
    "revision": "8d983195ad74764204510862b9cc1551"
  },
  {
    "url": "/static/css/index.90ee4e89.css"
  },
  {
    "url": "/static/fonts/MaterialIcons-Regular.012cf6a1.woff"
  },
  {
    "url": "/static/fonts/MaterialIcons-Regular.a37b0c01.ttf"
  },
  {
    "url": "/static/js/index.00d9119c.js"
  },
  {
    "url": "/static/js/manifest.7253881e.js"
  },
  {
    "url": "/static/js/vendor.a4f3a13f.js"
  },
  {
    "url": "/static/js/vue.c5db6194.js"
  },
  {
    "url": "/static/js/workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  }
]);
workboxSW.router.registerNavigationRoute('/index.html');


/**
 * example runningCache with api
 */
// workboxSW.router.registerRoute(/^https:\/\/lavas\.baidu\.com\/some\/api/,
//     workboxSW.strategies.networkFirst());


/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
// workboxSW.router.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
//     workboxSW.strategies.cacheFirst({
//         cacheName: 'lavas-cache-images',
//         cacheExpiration: {
//             maxEntries: 100,
//             maxAgeSeconds: 7 * 24 * 60 * 60
//         },
//         cacheableResponse: {
//             statuses: [0, 200]
//         }
//     })
// );
