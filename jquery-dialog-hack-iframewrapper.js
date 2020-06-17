/**
* This is a jquery-dialog hack to show html content inside an iframe
*/
let modalHtmlContent = '<div>My Content First div</div><div>My Content Second div</div>';
let wrapperIframe = $('<iframe src="" frameborder="0" style="width: 100%; height: 100%;"></iframe>');

// create jquery dialog with iframe
$("<div></div>").append(wrapperIframe).dialog({
  autoOpen: false,
  width: 900,
  height: 600,
  autoOpen: true,
  modal: true,
  title: 'My Modal Title'
});

// insert html content to iframe body
let wrapperIframeDocument = wrapperIframe[0].contentDocument;
let wrapperIframeBody = $('body', wrapperIframeDocument);
wrapperIframeBody.html(modalHtmlContent);
