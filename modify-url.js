/* @summary    A JavaScript Library Modify URL
* @version     1.0.0
* @file        modify-url.js
* @created     12-DEC-2016
* @author      MD. MUZAHIDUL ISLAM
* @contact     CV.MUZAHID@GMAIL.COM  
*/
/**
 *	Upadate QueryString by given key and value
 *
 */
function updateQueryString(url, key, value) {
	var arr =  url.split("#");
	var url = arr[0];
	var fragmentId = arr[1];
	var updatedQS = "";
	if (url.indexOf("?") == -1) {
		updatedQS = encodeURIComponent(key) + "=" + encodeURIComponent(value);
	}
	else {
		updatedQS = updateValueForKey(url.substring(url.indexOf("?") + 1), key, value);	
	}
	url = url.substring(0, url.indexOf("?")) + "?" + updatedQS;
	if (typeof fragmentId !== 'undefined') {
		url = url + "#" + fragmentId;
	}
	return url;
}

/**
 *	Upadate value of key
 *
 */
function updateValueForKey(queryStrings, key, value) {
	var oldQueryStrings = queryStrings.split("&");
	var newQueryStrings = new Array();
	var isNewKey = true;
	for (var i in oldQueryStrings) {
		var currItem = oldQueryStrings[i];
		var arrKeyValue = currItem.split("=");
		var currKey = arrKeyValue[0];
		var currValue = arrKeyValue[1];
		if (key == currKey) {
			currItem = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			isNewKey = false;
		}
		newQueryStrings.push(currItem);
	}
	if (isNewKey) {
		newQueryStrings.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
	}
	return newQueryStrings.join("&");
}	
