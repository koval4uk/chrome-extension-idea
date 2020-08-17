/**
 * https://developer.chrome.com/extensions/devtools
 * The chrome.devtools.* API modules are available
 * only to the pages loaded within the DevTools window.
 */
chrome.devtools.network.onRequestFinished.addListener(request => {
  let searchString = "/java/session";
  if ( request.request.url.endsWith(searchString)) {
    request.getContent((body) => {
      console.log("intercept body = " + body);
      sendRequest(body);
    });
  }
});

const url = "http://127.0.0.1:63350/api.keymapSwitcher";
// const url = "https://webhook.site/046cccae-578c-4776-ae45-1aa382c45dbd";

function sendRequest(body) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body)
  }).then(res => {
    console.log("Request complete! response: ", res);
  });
}