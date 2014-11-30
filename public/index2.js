  
chrome.webRequest.onBeforeRequest.addListener(function (details){
    console.log("a");
}, {urls: ["http://*/*", "https://*/*"]});
