// chrome.runtime.onMessage.addListener(function (request) {
//   alert(request)
// })
//rn it replaces
replaceText(document.body)

function replaceText(element){
  if (element.hasChildNodes()){
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    element.textContent = element.textContent.replace(/coronavirus/gi, 'lllllllll')
  }
}
