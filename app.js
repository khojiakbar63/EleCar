
// Call from HTML
const menuIcon = $('.menu-icon')
const sideSanel = $('.side-panel')
const closeIcon = $('.close-icon')
const topHeader = $('.top-header')
const header = $('header')
const cards = $('#cards')
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
});

// CAROUSEL

carList.forEach(car => {
    const cardContent = ` <h4 class="car-brand">${car.brand}</h4>
                        <p class="car-model">${car.model}</p>
                        <img class="car-img" src="${car.img}" alt="brand1">
                        <div class="car-km">
                            <div><img src="./images/speedometer.svg" alt="">3.7Sec</div>
                            <div><img src="./images/line-up.svg" alt="line-up">356lm/h</div>
                        </div>
                        <span class="car-type"><img src="./images/line-up.svg" alt="line-up"> Electric</span>
                        <h3 class="car-price">${car.price}</h3>
                        <div class="bag-wrapper"><img src="./images/bag.svg" alt="bag"></div>`

    const card = createElement('div', 'card', cardContent)
    cards.append(card)
})