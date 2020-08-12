debugger;

var a = 0;

let elementById = document.getElementById('do-count');
elementById.onclick = count;

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

function count() {

/*  // chrome.storage.local.get("descriptionElement1", function (data) {
  //   let test = data.descriptionElement1;
  //   if (typeof test == "undefined") {
  //     a += 999;
  //   } else if (test == null) {
  //     console.log("NULL");
  //   } else {
  //     a += -999;
  //     console.log("Get from content.js = " + test);
  //   }
  // });*/

  a++;
  document.getElementById('demo').textContent = a;
  // sendRequest();
}


// function scrapeThePage() {
//   // Keep this function isolated - it can only call methods you set up in content scripts
//   return document.documentElement.outerHTML;
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//   elementById.addEventListener('click', async () => {
//     chrome.tabs.query({active: true, lastFocusedWindow: true}, function (tabs) {
//       const scriptToExec = `(${scrapeThePage})()`;
//       chrome.tabs.executeScript(null, {code: scriptToExec},
//                                 function (results) { console.log(results); });
//     });
//
//
//   });
// });

