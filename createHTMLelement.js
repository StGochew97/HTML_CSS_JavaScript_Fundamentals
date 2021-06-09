

// get the body as element object
var bodyNode = document.body;

// create header element
var headerNode = document.createElement("header");

// attach the header to the body
bodyNode.appendChild(headerNode);

// create div element with text content
var divNode = document.createElement("div");
divNode.textContent = "This header is  created by JS!!!";

// insert the div into header:
headerNode.appendChild(divNode);

