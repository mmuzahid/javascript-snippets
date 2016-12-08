/* @summary    A JavaScript Library Modify URL
* @version     1.0.0
* @file        modify-url.js
* @created     05-DEC-2016
* @author      MD. MUZAHIDUL ISLAM
* @contact     CV.MUZAHID@GMAIL.COM  
*/
var scheme;
var user;
var password;
var host;
var port;
var path;
var query;
var fragment; 

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
 *	Upadate value of a key in QueryString
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

/**
 *	Process a URL and parse all part of it
 *
 */
function processURL(url) {
	//fragment
	var partArray = url.split("#");
	fragment = partArray[1];
	part = partArray[0];			
	//query
	partArray = part.split("?");
	query = partArray[1];
	part = partArray[0];
	//scheme
	scheme = part.substring(0, part.indexOf(":"));
	part = part.substring(part.indexOf(":") + 1);
	if (part.startsWith("//")) {
		part = part.substring(2);
	}
	//path
	if (part.indexOf("/") != -1) {
		path = part.substring(part.indexOf("/"));
		part = part.substring(0, part.indexOf("/"));
	}
	//user & password
	if (part.indexOf("@") != -1) {
		partArray = part.split("@");
		user = partArray[0].split(":")[0];
		password = partArray[0].split(":")[1];
		part = partArray[1];
	}
	//host and port
	host = part.split(":")[0];
	port = part.split(":")[1];
	
	/* console.log("scheme: " + scheme);
	console.log("user: " + user);
	console.log("password: " + password);
	console.log("host: " + host);
	console.log("port: " + port);
	console.log("path: " + path);
	console.log("query: " + query);
	console.log("fragment: " + fragment); */
}
