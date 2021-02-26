chrome.browserAction.onClicked.addListener(function (activeTab) {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    let newURL = tabs[0].url;
    let index = tabs[0].index;
    chrome.tabs.create({ url: newURL, index: index + 1});
  });
});
