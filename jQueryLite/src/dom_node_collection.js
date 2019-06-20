
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
      this.elements[i].innerHTML = str;
    }
  }
}

module.exports = DOMNodeCollection;