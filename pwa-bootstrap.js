'use strict';

(async () => {

if(location.protocol === 'http:') {
  console.info("[INFO] The application is served over HTTP. PWA feature is not applicable.")
  return
}

//
// Register installation related event listeners
//
window.addEventListener("beforeinstallprompt", (event) => {
  console.info("[INFO] Calling beforeinstallprompt(event.platforms: %o) ...", event.platforms)

  event.userChoice.then((choice) => {
    // either "accepted" or "dismissed"
    console.info("[INFO] Default install prompt user choice: %s", choice.outcome)
  })
})

if('onappinstalled' in window) {
  window.addEventListener('appinstalled', () => {
    console.info("[INFO] Current app (url: %s) is being installed.", HREF_BASE + '/manifest.json')
  })
}

//
// Register service worker
//
if(navigator.serviceWorker) {
  navigator.serviceWorker.register(HREF_BASE + '/service-worker.js')
} else {
  console.info("[INFO] navigator.serviceWorker is not supported.")
}

})()
