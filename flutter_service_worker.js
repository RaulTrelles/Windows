'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"index.html": "397d4d9d21fc9138d12f1d636c9995a8",
"/": "397d4d9d21fc9138d12f1d636c9995a8",
"main.dart.js": "f11e3fbd3d5c0fe0ab5632fad34934b4",
"manifest.json": "ba1190b295ca47a3c63ea649483771ba",
"version.json": "711679ff19b309634bd50dfb162108cb",
"assets/AssetManifest.bin": "1cbd5d8940d238c7c67efa033e4ebf4b",
"assets/AssetManifest.bin.json": "5eba2e214b0e41cd9da20327b5079dfe",
"assets/AssetManifest.json": "ae678c3e44ab12e11812f6ef08dbf3d8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "0a8d05c8b1869580511ed2082285c3f6",
"assets/assets/about_me_icon.png": "b57ee0d8721f4c19522b5b05be89a32f",
"assets/assets/portfolio_apps_icon.png": "faf1ab2dd0b6268534e8119afb5784cf",
"assets/assets/portfolio_data_icon.png": "3138c3cf0647bb142f6d747ad3c028d1",
"assets/assets/portfolio_web_icon.png": "f28272546c8dcde1b28ae6e157598f20",
"assets/assets/windows_background.jpg": "a66ca699527690ff6cbe7d2399cd2e39",
"assets/assets/windows_icon.png": "8bed1d3e7ab6daa237ef823dba25cf5a",
"assets/fonts/MaterialIcons-Regular.otf": "ba4fb93f18494e93badef5148b1b2216",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "8a572ae466f8ffa33eea461d623dc9e3",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"portalwindows/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"portalwindows/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"portalwindows/index.html": "d38e93ccab650ac1da68b259aac349f0",
"portalwindows/main.dart.js": "f11e3fbd3d5c0fe0ab5632fad34934b4",
"portalwindows/manifest.json": "ba1190b295ca47a3c63ea649483771ba",
"portalwindows/README.md": "d633492f2110f8b30e77479afe9f140c",
"portalwindows/version.json": "711679ff19b309634bd50dfb162108cb",
"portalwindows/.git/COMMIT_EDITMSG": "fe7d5a278ae8d752c0efa270b782bb8e",
"portalwindows/.git/config": "fe14828f638a8d2d91bbc8b7b1b86116",
"portalwindows/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"portalwindows/.git/FETCH_HEAD": "5175c2fde09452318f43e82a11237818",
"portalwindows/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"portalwindows/.git/index": "8776e1aaab80ae4b7a5436d5abe5d2ef",
"portalwindows/.git/packed-refs": "3b582050508f901358fa191e38fea463",
"portalwindows/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"portalwindows/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"portalwindows/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"portalwindows/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"portalwindows/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"portalwindows/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"portalwindows/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"portalwindows/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"portalwindows/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"portalwindows/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"portalwindows/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"portalwindows/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"portalwindows/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"portalwindows/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"portalwindows/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"portalwindows/.git/logs/HEAD": "94d3e799d34161bf00a751e4f8f29b01",
"portalwindows/.git/logs/refs/heads/main": "94d3e799d34161bf00a751e4f8f29b01",
"portalwindows/.git/logs/refs/remotes/origin/HEAD": "0881db14b73a80a28f1d98be6dc594e6",
"portalwindows/.git/logs/refs/remotes/origin/main": "b294377d92f17f05c72f8670a104c6c5",
"portalwindows/.git/objects/02/d6325f9e0de87ca54aa11aaaf90a4c0c850545": "059b14a69eb661b2c9e0d1f050023cb4",
"portalwindows/.git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
"portalwindows/.git/objects/14/9847681c6bd4f4fa10bda43a9337afc102b11f": "9c41c58937965a1f5f4b57ad15d60086",
"portalwindows/.git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
"portalwindows/.git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
"portalwindows/.git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
"portalwindows/.git/objects/1f/b17bcae3067d63ea28ed44b9f8488440ff11d3": "74812442d4c6e7e8f4937a83bbabd0de",
"portalwindows/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"portalwindows/.git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
"portalwindows/.git/objects/26/0d76aca7c9f4a82129cabc2c909fc7b2111c78": "168dc0f116bc800137e7ce0e5a2139fd",
"portalwindows/.git/objects/2a/89697de57e4e2a5e68a0dd9ff69435b6fe54c9": "03ab0d56306e9ad28c96786b3a4e19c0",
"portalwindows/.git/objects/3b/f0baaf9d399ac6ae7ca15964b1ca369359d0c6": "3aaa2b90dac81c3ab8b8a8e031cab95e",
"portalwindows/.git/objects/41/3759fe8d8548e4610025cd56133bde5850e9c4": "edb5f013c9c34602e60d7acb5c5470eb",
"portalwindows/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"portalwindows/.git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
"portalwindows/.git/objects/4e/e824e5f7394517f1660d5d66be932fa1b23a40": "93cd3a70ca7d4906bd3d4a433f57abd2",
"portalwindows/.git/objects/53/320e8e8744decb6b2dfc67a412c13444944ae9": "d18f0c86936340c9c9f92396abf288d2",
"portalwindows/.git/objects/58/082686af8513a0818d6397008209a77090b5e6": "13703f62e8c5f92ea13a68f3103dc118",
"portalwindows/.git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
"portalwindows/.git/objects/5c/f10808c9f96fa5c3ceecb2c8c7e48b3cbc829f": "d1c4376e0ff81875da24db14105e1f6b",
"portalwindows/.git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
"portalwindows/.git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
"portalwindows/.git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
"portalwindows/.git/objects/7d/cc52f935e9d78b50c36a696b61679153b3f532": "9a9aa92c0155913e36e14a1e7c46987c",
"portalwindows/.git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
"portalwindows/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"portalwindows/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"portalwindows/.git/objects/8b/f5bc38eab054fbe0cd6353ca09a95c3a76965e": "a534a7ddf4028fd198745b4d4f6e57ca",
"portalwindows/.git/objects/8e/6a790a9583f9b093ecc1036b4eb63f3e068477": "7c4f1bf33e802ea333e69caa77a6f3d7",
"portalwindows/.git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
"portalwindows/.git/objects/9c/09fb4b2cd24005e1593c7e05b97cb602b67258": "e7cfa742761ca029bb72183015646108",
"portalwindows/.git/objects/af/0af018e8caa3258d3ea08dcd870a3a5d579d7c": "d3c1ed86c225eb5addf0b2f545d5f8cd",
"portalwindows/.git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
"portalwindows/.git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
"portalwindows/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"portalwindows/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"portalwindows/.git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
"portalwindows/.git/objects/ba/a0d3188776537fb389c899d3fcecb57debad04": "e307e785927693e32586d95b832fd360",
"portalwindows/.git/objects/c1/b0c0c894895d55fc87b4eb59e486b48da78aba": "29441ed950a674b453f420a1a0d75d5f",
"portalwindows/.git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
"portalwindows/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"portalwindows/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"portalwindows/.git/objects/d7/47ebe98f356bd7aef89dc4a323a0b914964d72": "768fd99e4c5cec68b0328a30d7b5aa3a",
"portalwindows/.git/objects/d8/cd686eb9d9f30a1363d62a3b0aa1697f8ea356": "5116cfca0411f2e3a38f4a50abd3bd21",
"portalwindows/.git/objects/e3/b15f1a8121e69fc8692c562f7815c3dc1a3aa4": "931237703669794d893f71a313fbc115",
"portalwindows/.git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
"portalwindows/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"portalwindows/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"portalwindows/.git/objects/pack/pack-7e3ba72aad321dc2df823a6aa5722343a1c7c044.idx": "54aefb80c6ef386d1a2e47085b85ed7e",
"portalwindows/.git/objects/pack/pack-7e3ba72aad321dc2df823a6aa5722343a1c7c044.pack": "0bb2fdf2f6ab2effed6af53be7e5ccab",
"portalwindows/.git/objects/pack/pack-7e3ba72aad321dc2df823a6aa5722343a1c7c044.rev": "f762eb1a63bfdf42b07d45d32c6e89b5",
"portalwindows/.git/refs/heads/main": "a6433943ae45f68b5cd97b1a7fff1af5",
"portalwindows/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"portalwindows/.git/refs/remotes/origin/main": "a6433943ae45f68b5cd97b1a7fff1af5",
"portalwindows/assets/AssetManifest.bin": "1cbd5d8940d238c7c67efa033e4ebf4b",
"portalwindows/assets/AssetManifest.bin.json": "5eba2e214b0e41cd9da20327b5079dfe",
"portalwindows/assets/AssetManifest.json": "ae678c3e44ab12e11812f6ef08dbf3d8",
"portalwindows/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"portalwindows/assets/NOTICES": "0a8d05c8b1869580511ed2082285c3f6",
"portalwindows/assets/assets/about_me_icon.png": "b57ee0d8721f4c19522b5b05be89a32f",
"portalwindows/assets/assets/portfolio_apps_icon.png": "faf1ab2dd0b6268534e8119afb5784cf",
"portalwindows/assets/assets/portfolio_data_icon.png": "3138c3cf0647bb142f6d747ad3c028d1",
"portalwindows/assets/assets/portfolio_web_icon.png": "f28272546c8dcde1b28ae6e157598f20",
"portalwindows/assets/assets/windows_background.jpg": "a66ca699527690ff6cbe7d2399cd2e39",
"portalwindows/assets/assets/windows_icon.png": "8bed1d3e7ab6daa237ef823dba25cf5a",
"portalwindows/assets/fonts/MaterialIcons-Regular.otf": "ba4fb93f18494e93badef5148b1b2216",
"portalwindows/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"portalwindows/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"portalwindows/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"portalwindows/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"portalwindows/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"portalwindows/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"portalwindows/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"portalwindows/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"portalwindows/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"portalwindows/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"portalwindows/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"portalwindows/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"portalwindows/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"portalwindows/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"portalwindows/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"portalwindows/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
