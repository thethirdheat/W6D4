
class DOMNodeCollection {
  constructor(array) {
    this.elements = [...array];
  }

  html(str){
    if(str){
      for(let i =0;i< this.elements.length;i++){
        this.elements[i].innerHTML = str;
      }
    }else{
      return this.elements[0].innerHTML ;
    }
  }

  empty() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML = "";
    }
  }
  append(arg){
    for (let i = 0; i < this.elements.length; i++) {
      if (typeof (arg) === 'string') {
        this.elements[i].innerHTML = this.elements[i].innerHTML.concat(arg);
      } else if (arg instanceof HTMLElement) {
        this.elements[i].innerHTML = this.elements[i].innerHTML
          .concat(arg.outerHTML.split('><')
            .join(`>${arg.innerHTML}<`)
          );
      } else if (arg instanceof NodeList) {
        arg.forEach(el => {
          this.elements[i].innerHTML = this.elements[i].innerHTML
            .concat(el.outerHTML.split('><')
              .join(`>${el.innerHTML}<`)
            );
        });
      }
    }
  }

  attr(attributeName, attributeValue) {
    if(!attributeValue) {
      this.elements[0].getAttribute(attributeName);
    } else {
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].setAttribute(attributeName, attributeValue);
      }
    }
  }

  addClass(className) {
    for (let i = 0; i < this.elements.length; i++) {
      if (!this.elements[i].getAttribute('class').includes(className)) {
        this.elements[i].setAttribute('class', `${this.elements[i].getAttribute('class')} ${className}`);
      }
    }
  }

  removeClass(className) {
    for (let i = 0; i < this.elements.length; i++) {
      let classes = this.elements[i].getAttribute('class').split(' ');
      classes = classes.filter((el) => el !== className)
      this.elements[i].setAttribute('class', classes.join(' '));
    }
  }

  

  index(n) {
    return this.elements[n];
  }
}

module.exports = DOMNodeCollection;