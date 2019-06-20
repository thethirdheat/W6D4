const DOMNodeCollection =  require('./dom_node_collection.js');

window.$l = function(arg) {
  if (typeof(arg) === 'string') {
    return this.document.querySelectorAll(arg);
  } else if (arg instanceof HTMLElement || arg instanceof NodeList) {
    return new DOMNodeCollection(arg);
  }
    
}

//var element = document.createElement(tagName[, options]);