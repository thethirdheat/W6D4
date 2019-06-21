const DOMNodeCollection =  require('./dom_node_collection.js');

window.$l = function(arg) {
  if (typeof(arg) === 'string') {
    let output = this.document.querySelectorAll(arg);
    return new DOMNodeCollection(output);
  } else if (arg instanceof HTMLElement || arg instanceof NodeList) {
    return new DOMNodeCollection(arg);
  }
    
}

//var element = document.createElement(tagName[, options]);