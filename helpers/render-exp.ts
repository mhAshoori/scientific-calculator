const mathjs = require("mathjs");

const stringToHTML = function (str: any) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  return doc.body.innerHTML;
};

export { stringToHTML };
