// Custom selector function
function $(selector) {
    return document.querySelector(selector);
}

// Call from HTML
const menuIcon = $('.menu-icon')
const sideSanel = $('.side-panel')
const closeIcon = $('.close-icon')
const topHeader = $('.top-header')
const header = $('header')
// EVENTS
menuIcon.addEventListener('click', () => {
    sideSanel.classList.toggle('none')
});
closeIcon.addEventListener('click', () => {
    sideSanel.classList.toggle('none');
})
window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        topHeader.classList.add('none')
        header.classList.add('top-0')
    }else{
        topHeader.classList.remove('none')
        header.classList.remove('top-0')

    }
})