const test = "all is working";
let headerActive = true
console.log(test)

const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#search-bar').classList.toggle('header__search-container--active')
    document.querySelector('#header').classList.add('header--active');
    headerActive = true
})


const closeSearchBtn = document.querySelector('#close-search-btn');
closeSearchBtn.addEventListener('click', (e) => {    
    document.querySelector('#search-bar').classList.remove('header__search-container--active')
})

const scrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    
    const scrollPos = window.scrollY;

    if(scrollPos > 50){
        document.querySelector('#header').classList.add('header--active');
    }
    else{
        document.querySelector('#header').classList.remove('header--active');
    }
    
})

if(scrollPos > 50){
    document.querySelector('#header').classList.add('header--active');
}
else{
    document.querySelector('#header').classList.remove('header--active');
}


const hamburgerBtn = document.querySelector('#hamburger-btn');
const closeNavBtn = document.querySelector('#close-nav-btn');
const condensedNav = document.querySelector('.condensed-nav');
hamburgerBtn.addEventListener('click', () => {
    condensedNav.classList.add('condensed-nav--active');
    hamburgerBtn.style.display = "none";
    closeNavBtn.style.display = "block";
    document.querySelector('body').style.overflow = "hidden";
})
closeNavBtn.addEventListener('click', () => {   
    condensedNav.classList.remove('condensed-nav--active');
    hamburgerBtn.style.display = "block";
    closeNavBtn.style.display = "none"
    document.querySelector('body').style.overflow = "unset";

})
