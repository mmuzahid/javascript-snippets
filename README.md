WebTools
==========
## Trying to add some library to help Web development 

- **modify-url.js** : A library to modify URL.

  - *Create an object from URL string:*
  
    ``var modifiedUrl = new ModifiedUrl("https://www.google.com:80/search?q=javascripts&ie=utf-8#q=js");``
  
  - *Accsess different part of URL as bellow:*
  
    ``console.log(modifiedUrl.path);`` will print ``/search`` as path value
    
    ``modifiedUrl.host`` will return ``www.google.com`` as host value

- **textnode-decorator.js** : Decorate plain text node by some callback function to change its content.
  - Sample code: 
  
    ``decorateChildTextNode(document, funcNewNodeHTML);`` 
    
      Above code will replace each text node of document by given callback function's output. 
