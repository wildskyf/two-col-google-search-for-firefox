browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  if (!/.*google.com.*\/search/.test(tab.url) || /.*google.com.*\/search\?.*tbm=lcl/.test(tab.url)) {
    browser.tabs.sendMessage(
      tab.id, 'cancel-two-col'
    );
    return;
  }
  browser.pageAction.show(tab.id);
});

browser.pageAction.onClicked.addListener(tab => {
  browser.tabs.sendMessage(
    tab.id, 'switch-two-col'
  )
});
