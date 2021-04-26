Window.prototype.$l = function (elSelector) {
  if (!(typeof elSelector === "string")) {
    throw new Error("type error: argurment must be a string");
  }
  let $elementList = document.querySelectorAll(elSelector);
  let newAr = Array.from($elementList);

  return newAr;
};
