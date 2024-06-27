// Custom selector function
function $(selector) {
    return document.querySelector(selector);
}

//Create Element Function
function createElement(tagName, classList, content) {
    const tag = document.createElement(tagName);
    tag.setAttribute('class', classList)
    tag.innerHTML = content
    return tag;
}