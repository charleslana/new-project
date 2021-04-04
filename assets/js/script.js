import {loadPageNotLoggedIn, setColorIconPage} from './loadPage.js';

$(document).ready(() => {
    const date = new Date;
    $('#yearNow').text(date.getFullYear());
    const location = window.location.pathname.substring(1);
    if (location) {
        loadPageNotLoggedIn(location);
    }
    loadPageNotLoggedIn('login');
});

$('.page-not-logged-in').on('click', function(event) {
    const page = $(this).attr('href').substring(1);
    const location = window.location.pathname.substring(1);
    if (location != page) {
        loadPageNotLoggedIn(page);
        setColorIconPage(this);
    }
    event.preventDefault();
});