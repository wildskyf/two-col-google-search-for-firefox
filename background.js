browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  if (!/.*google.com.*/.test(tab.url)) return;
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
