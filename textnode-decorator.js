/* @summary    A JavaScript Library To decorate Text Node 
* @version     1.0.0
* @file        textnode-decorator.js
* @created     07-FEB-2018
* @author      MD. MUZAHIDUL ISLAM
* @contact     CV.MUZAHID@GMAIL.COM  
*/

/**
* decorate given text node by using callback function 
* e.g. code sample to convert all 'GitHub' word to <strong>GitHub</strong> call function as decorateChildTextNode(document, boldGitHubText);
*/
function decorateTextNode(textNode, decoratorFunc) {
	if (textNode == undefined || textNode.nodeType != document.TEXT_NODE) {
		return;
	}
	
	var decoratedContent = decoratorFunc(textNode.textContent);	
	if (textNode.textContent != decoratedContent) {
		var d = document.createElement('div');
		d.innerHTML = decoratedContent;
		var newNodes = d.childNodes;
		while (newNodes.length > 0) {
			textNode.parentElement.insertBefore(newNodes[0], textNode);
		}
		
		textNode.parentElement.removeChild(textNode);
	}
}

/**
* decorate all child text node by using callback function 
* e.g. code sample to convert all 'GitHub' word to <strong>GitHub</strong>: decorateChildTextNode(document, boldGitHubText);
*/
function decorateChildTextNode(parentElement, decoratorFunc) {
	if (parentElement == undefined || parentElement.nodeType == document.COMMENT_NODE || parentElement.nodeName == 'A') {
		return;
	}
	
	var childElements = parentElement.childNodes;
	for (var  i = 0; i < childElements.length; i++) {
		if (childElements[i].nodeType == document.TEXT_NODE) {
			decorateTextNode(childElements[i], decoratorFunc);
		} else {
			decorateChildTextNode(childElements[i], decoratorFunc);
		}
	}
}

/** This is a sample callback function to convert 'GitHub' text word to <strong>GitHub</strong>*/
function boldGitHubText(textNodeContent) {
	var lines = textNodeContent.split('\n');
	var decoratedLines = [];

	for (var l = 0; l < lines.length; l++) {
		var wordArr = lines[l].split(' ');
		var decoratedWords = [];
		for (var w = 0; w < wordArr.length; w++) {
			var word = wordArr[w];
			if (word.toLowerCase() == 'GitHub') {
				decoratedWords.push('<strong>' + word + '</strong>');
			} else {
				decoratedWords.push(word);
			}
		}		
		decoratedLines.push(decoratedWords.join(' '));
	}	
	return decoratedLines.join('\n');
}
