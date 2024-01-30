// load page
// let’s write this initial page-load function inside of its own module 
// and then import and call it inside of index.js.

import pageLoad from './pageLoad.js'
import createRestaurantHomePage from './restaurant.js';
import createMenuPage from './menu.js'
import createContactPage from './contact.js';

pageLoad();

// function that will clear the html

function clear_html() {
    const content = document.querySelector('#content');

    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}

// create references to buttons from html
const home_btn = document.querySelector('#home-button');
const menu_btn = document.querySelector('#menu-button');
const contact_btn = document.querySelector('#contact-button');

//create event listeners for those buttons
home_btn.addEventListener('click', function () {
    clear_html();
    createRestaurantHomePage();
})
menu_btn.addEventListener('click', function () {
    clear_html();
    createMenuPage();
})
contact_btn.addEventListener('click', function () {
    clear_html();
    createContactPage();
})
