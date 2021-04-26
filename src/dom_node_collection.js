class DOMNodeCollection {
  constructor(htmlArr) {
    this.htmlElements = htmlArr;
  }

  html(str){
    if(!str) return this.htmlElements[0];
    
  }

  empty(){

  }

  append(){

  }

}

module.exports = DOMNodeCollection;