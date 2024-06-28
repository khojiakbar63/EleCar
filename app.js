
// Call from HTML
const menuIcon = $('.menu-icon')
const sideSanel = $('.side-panel')
const closeIcon = $('.close-icon')
const topHeader = $('.top-header')
const header = $('header')
const list =  $('#list')
const cards = $('#cards')
const cards2 = $('#cards2')
const allBtn = $('#all-btn')
const luxuryMiniCards = $('.luxury-mini-cards')
const inputPassword = $('#input-password')
const showEye  = $('#show-eye')
const select = $('#select')
const listItem = $$('.list-item a')
const introTitle = $('.intro-title')
const aboutTitle = $('.about-title')
const chooseTitle = $('.choose-title')
const featureTitle = $('.feature-title')
const luxuryTitle = $('.luxury-title')
// Offer title
const offerTitle = $('.left-title')
const formTitle = $('.form-title')
const formDesc = $('.form-desc')
const selectMode = $('#modes')

// Modes

const intro = $('#intro')
const about = $('#about')
const choose = $('#choose')
const feature = $('#feature')
const luxury = $('#luxury')
const offer = $('#offer')
const logos = $('#logos')
const form = $('#form')
const footer = $('footer')
const footerA = $$('footer li a')
const footerH3 = $('footer  h3')
const loaderWrapper = $('.loader-wrapper')
// Loader
window.addEventListener('load', () =>{
    loaderWrapper.classList.add('none')
})
// EVENTS
menuIcon.addEventListener('click', () => {
    sideSanel.classList.toggle('none')
});
closeIcon.addEventListener('click', () => {
    sideSanel.classList.toggle('none');
})
// Top header shrink
window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        topHeader.classList.add('none')
        header.classList.add('top-0')
    }else{
        topHeader.classList.remove('none')
        header.classList.remove('top-0')

    }
});
// All btn logo display
allBtn.addEventListener('click', () => {
    if(!luxuryMiniCards.classList.contains('none')) {
        luxuryMiniCards.classList.add('none')
    }else{
        luxuryMiniCards.classList.remove('none')
    }
})
// CAROUSEL
// Card content 1
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
// Card content 2
carList2.forEach(car => {
    const cardContent2 = `
                        <h4 class="car-brand">${car.brand}</h4>
                        <p class="car-model">${car.model}</p>
                        <img class="car-img" src="${car.img}" alt="brand1">
                        <h3 class="car-price">${car.price}</h3>
                        <div class="bag-wrapper"><img src="./images/bag.svg" alt="bag"></div>`
    const card = createElement('div', 'card', cardContent2)
    cards2.append(card)
})
// Form eye
showEye.addEventListener('click', () => {
    if(inputPassword.type === 'password') {
        inputPassword.type = 'text';
        showEye.innerHTML = `<i class='bx bx-low-vision' style='color:#d5d5d5'  ></i>`
    }else {
        inputPassword.type = 'password';
        showEye.innerHTML = `<i class='bx bx-show' style='color:#e3dada'></i>`
    }
})

// Select language
select.addEventListener('change', (e) => {
    listItem[0].textContent = languages[e.target.value].home,
    listItem[1].textContent = languages[e.target.value].about,
    listItem[2].textContent = languages[e.target.value].popular,
    listItem[3].textContent = languages[e.target.value].feature,
    introTitle.textContent = languages[e.target.value].introTitle,
    aboutTitle.textContent = languages[e.target.value].aboutTitle,
    chooseTitle.textContent = languages[e.target.value].chooseTitle,
    featureTitle.textContent = languages[e.target.value].featureTitle,
    luxuryTitle.textContent = languages[e.target.value].luxuryTitle,
    offerTitle.textContent = languages[e.target.value].offerTitle,
    formTitle.textContent = languages[e.target.value].formTitle,
    formDesc.textContent = languages[e.target.value].formDesc
})

// Modes
selectMode.addEventListener('change', (e) => {
    header.style.backgroundColor = modes[e.target.value].backgroundColor,
    header.style.color = modes[e.target.value].color,
    list.backgroundColor = modes[e.target.value].backgroundColor,
    list.color = modes[e.target.value].color
    intro.style.backgroundColor = modes[e.target.value].backgroundColor
    intro.style.color = modes[e.target.value].color
    about.style.backgroundColor = modes[e.target.value].backgroundColor
    about.style.color = modes[e.target.value].color
    choose.style.backgroundColor = modes[e.target.value].backgroundColor
    choose.style.color = modes[e.target.value].color
    feature.style.backgroundColor = modes[e.target.value].backgroundColor
    feature.style.color = modes[e.target.value].color
    luxury.style.backgroundColor = modes[e.target.value].backgroundColor
    luxury.style.color = modes[e.target.value].color
    offer.style.backgroundColor = modes[e.target.value].backgroundColor
    offer.style.color = modes[e.target.value].color
    logos.style.backgroundColor = modes[e.target.value].backgroundColor
    logos.style.color = modes[e.target.value].color
    form.style.backgroundColor = modes[e.target.value].backgroundColor
    form.style.color = modes[e.target.value].color
    footer.style.backgroundColor = modes[e.target.value].backgroundColor
    footer.style.color = modes[e.target.value].color

    aboutTitle.style.backgroundColor = modes[e.target.value].backgroundColor
    aboutTitle.style.color = modes[e.target.value].color

    featureTitle.style.backgroundColor = modes[e.target.value].backgroundColor
    featureTitle.style.color = modes[e.target.value].color

    luxuryTitle.style.backgroundColor = modes[e.target.value].backgroundColor
    luxuryTitle.style.color = modes[e.target.value].color
    footerA.style.backgroundColor = modes[e.target.value].backgroundColor
    footerH3.style.color = modes[e.target.value].color

})





















