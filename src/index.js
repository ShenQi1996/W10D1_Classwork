// const DOMNodeCollection = require("./dom_node_collection");
import DOMNodeCollection from "./dom_node_collection";

Window.prototype.$l = function (elSelector) {
  if (typeof elSelector === "string") {
    let $elementList = document.querySelectorAll(elSelector);
    let newAr = Array.from($elementList);
    return new DOMNodeCollection(newAr);
  }
  if (elSelector instanceof HTMLElement) {
    return new DOMNodeCollection([elSelector]);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let $lis = window.$l("li");
});
