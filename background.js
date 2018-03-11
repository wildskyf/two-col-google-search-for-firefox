browser.tabs.onUpdated.addListener( (id, changeInfo, tab) => {
  var isStartPage = url => /https:\/\/.*startpage.com\/do\/search/.test(url);
  var isGSearch = url => /.*google.*\/search/.test(tab.url)
  var isEmbededShop = url => /.*google.*\/search\?.*tbm=lcl/.test(url);

  if (tab.status !== "complete") return;

  if ( (!isStartPage(tab.url) && !isGSearch(tab.url)) || isEmbededShop(tab.url)) {
    browser.tabs.sendMessage(tab.id, 'cancel-two-col');
    return;
  }
  browser.pageAction.show(tab.id);
});

browser.pageAction.onClicked.addListener( tab => {
  browser.tabs.sendMessage(tab.id, 'switch-two-col')
});
