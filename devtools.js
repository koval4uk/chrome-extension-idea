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
      console.log("intercept body = " + body);
      sendRequest();
    });
  }
});

function sendRequest() {
  // todo add jQuery for post request
  let xhr = new XMLHttpRequest();
// todo server https://webhook.site/#!/046cccae-578c-4776-ae45-1aa382c45dbd/0b788c0f-ec16-4cd4-9280-5c17de0fbfcf/1
  xhr.open('GET', 'https://webhook.site/046cccae-578c-4776-ae45-1aa382c45dbd', false);

  try {
    xhr.send();
    if (xhr.status !== 200) {
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      console.log(xhr.response);
    }
  }
  catch (err) { // для отлова ошибок используем конструкцию try...catch вместо onerror
    console.log("Запрос не удался");
  }
}