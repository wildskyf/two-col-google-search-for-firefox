browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  if (
    !/https:\/\/.*startpage.com\/do\/search/.test(tab.url) && // for startpage
    !/.*google.com.*\/search/.test(tab.url) ||
    /.*google.com.*\/search\?.*tbm=lcl/.test(tab.url)  // embeded shops
  ) {
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
