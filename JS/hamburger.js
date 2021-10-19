const hamburger = document.querySelector('.hamburger')
const nav_div = document.querySelector('.nav-div');

// Add Event For Click

hamburger.addEventListener('click', () => {
    nav_div.classList.toggle('nav-div-toggle');
})