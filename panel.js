console.log("zx12qw");

chrome.devtools.network.onRequestFinished.addListener(request => {
  let searchString = "/java/session";
  if ( request.request.url.endsWith(searchString)) {
    request.getContent((body) => {
      chrome.runtime.sendMessage({greeting: "hello", body: body}, function(response) {
        console.log("Request end with " + searchString + "body = " + body + " response = " + response.farewell);
      });
    });
  }

});


