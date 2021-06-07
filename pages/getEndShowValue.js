var inputNode  = document.querySelector("input[type='text']");

var outputNode = document.querySelector("#output");

function getContent( ){
  outputNode.innerHTML = inputNode.value;
}

getContent();