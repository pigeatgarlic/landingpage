let reload = false;
caches.keys().then(function(names) {
    for (let name of names)
    caches.delete(name);
    });

let namesCache = [
  '/style.css?__WB_REVISION__=34741ec84f2c05e353fbe59ad370fc66',
  '/serviceWorker.js?__WB_REVISION__=7ae89bc5caf2de9b7e82b4afc0ae2574',
  '/script.js?__WB_REVISION__=de7598e75e867ada699e97f190ca890a',
  '/registerSW.js?__WB_REVISION__=402b66900e731ca748771b6fc5e7a068',
  '/react-pwa.js?__WB_REVISION__=d731b04b8242aabb5ec68c3e9fe1bd84',
  '/manifest.webmanifest?__WB_REVISION__=d8801b9a9a617c0234933675774554fe',
  '/index.html?__WB_REVISION__=6c5cb1d6c7845a7fa2cde5cd3e09a71f',
  '/google5c2eff7d87cfc5e5.html?__WB_REVISION__=225b1ad0896ac46918f0740ac7d0146a',
  '/dycalendar.css?__WB_REVISION__=c3f95b0d457fc09e1fb5cb8d40082771',
  '/console.js?__WB_REVISION__=6271abe80422cf62499c5c1f2bb9b0e8',
  '/assets/index.c80a2c45.js',
  '/assets/index.c5eeb39d.css',
  '/404.html?__WB_REVISION__=df3927e02639de450c74d101c021d6af'
]
async function reload_page(){
    reload = await caches.has(namesCache[5])
    if(reload)
    location.reload()
}
reload_page()
for (let name of namesCache){
    caches.delete(name);
  }