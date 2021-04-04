import {openPageNotLoggedIn} from './loadPage.js';

$(document).ready(() => {
    const date = new Date;
    $('#yearNow').text(date.getFullYear());
    const location = window.location.pathname.substring(1);
    if (location) {
        if (location == 'login' || location == 'register') {
            return openPageNotLoggedIn(location);
        }
    }
    openPageNotLoggedIn('login');
});