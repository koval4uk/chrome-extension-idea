/**
 * https://stackoverflow.com/questions/29845765/chrome-extension-using-devtool-for-har-file-save
 * The chrome.devtools.* API modules
 * are available only to the pages loaded within the DevTools window.
 * Content scripts and other extension pages do not have these APIs.
 * Thus, the APIs are available only through the lifetime of the DevTools window.
 */
chrome.devtools.network.onRequestFinished.addListener(request => {
  let searchString = "/java/session";
  if ( request.request.url.endsWith(searchString)) {
    request.getContent((body) => {
      chrome.runtime.sendMessage({greeting: "hello", body: body}, function(response) {
        console.log("Request url = " + request.request.url + ", body = " + body + ", response = " + response.farewell);
      });
    });
  }
});
