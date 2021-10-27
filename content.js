const init = () => {
  const getURL = (url) => chrome.runtime.getURL(url);
  const addCss = (url) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    const elems = document.getElementsByTagName('head');
    elems.length && elems[0].appendChild(link);
  };
  const addScript = (url) => {
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
  };
  addCss( getURL('injected.css') );
  addScript( getURL('injected.js') );
};
init();

chrome.runtime.onMessage.addListener( (data, sender, sendResponse) => {
  const { id } = data || {};
  if (id === 'actionclick') {
    sendResponse({ ok: true });
    return true;
  }
});
