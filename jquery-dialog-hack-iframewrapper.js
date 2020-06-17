/**
* This is a jquery-dialog hack to show html content inside an iframe
*/

let modalProperties = {autoOpen: true, width: 900, height: 600, modal: true, title: 'Modal Title'};
let modalHtmlContent = '<div>My Content First div</div><div>My Content Second div</div>';

// create wrapper iframe
let wrapperIframe = $('<iframe src="" frameborder="0" style="width: 100%; height: 100%;"></iframe>');

// create jquery dialog by a 'div' with 'iframe' appended
$("<div></div>").append(wrapperIframe).dialog(modalProperties);

// insert html content to iframe 'body'
let wrapperIframeDocument = wrapperIframe[0].contentDocument;
let wrapperIframeBody = $('body', wrapperIframeDocument);
wrapperIframeBody.html(modalHtmlContent);
