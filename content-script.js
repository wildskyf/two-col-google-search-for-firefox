browser.runtime.onMessage.addListener( msg => {
  if (msg == 'switch-two-col') {
    document.querySelector('body').classList.toggle('no-two-col');
  }
});
