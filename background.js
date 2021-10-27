chrome.action.onClicked.addListener( tab => {
  if (!tab.id)
    return;
  const tabId = tab.id;
  if (!tab.url || !/^(?:file|https?):/.test(tab.url))
    return;
  chrome.tabs.sendMessage(tabId, {id: 'actionclick'}, data => {
    chrome.runtime.lastError &&
    chrome.scripting.executeScript({
      target: {tabId},
      files: ['content.js'],
    });
  });
});
