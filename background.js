function fix_tabs(){
    chrome.tabs.query({}, function(tabs){
        var num_fixed = 0
        for (tab of tabs){
            if (tab.url.startsWith("chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html")){
                const idx = tab.url.indexOf("uri=")
                if (idx > 0){
                    const substr = tab.url.slice(idx + 4);
                    console.log(substr);
                    num_fixed += 1;
                    chrome.tabs.update(tab.id, {"url": substr})
                }
            }
        }
        alert("Scanned: " + tabs.length + ", Fixed: " + num_fixed)
    })
}

chrome.browserAction.onClicked.addListener(function(tab) {
fix_tabs();
})

chrome.runtime.onInstalled.addListener(function() {
    console.log("Installed");
    // fix_tabs();
  });