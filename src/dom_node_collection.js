class DOMNodeCollection {
  constructor(htmlArr) {
    this.htmlElements = htmlArr;
  }

  html(str) {
    if (!str) {
      let firstNode = this.htmlElements[0];
      return firstNode.innerHTML;
    }
    for (let node of this.htmlElements) {
      node.innerHTML = str;
    }
  }

  empty() {
    for (let node of this.htmlElements) {
      node.innerHTML = "";
    }
  }

  append(arg) {
    if (typeof arg === "string") {
      for (let node of this.htmlElements) {
        let ihtml = node.innerHTML;
        node.innerHTML = ihtml + arg;
      }
    }
    if (arg instanceof DOMNodeCollection) {
      for (let argNode of arg.htmlElements) {
        for (let node of this.htmlElements) {
          debugger;
          node.appendChild(argNode);
        }
      }
    }
    if (arg instanceof HTMLElement) {
      arg = window.$l(arg);
      this.append(arg);
    }
  }
}

module.exports = DOMNodeCollection;
