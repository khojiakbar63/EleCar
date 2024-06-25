// Custom selector function
function $(selector) {
    return document.querySelector(selector);
}


const menuIcon = $('.menu-icon')
const sideSanel = $('.side-panel')
const closeIcon = $('.close-icon')


// EVENTS
menuIcon.addEventListener('click', () => {
    sideSanel.classList.toggle('none')
});
closeIcon.addEventListener('click', () => {
    sideSanel.classList.toggle('none');
})