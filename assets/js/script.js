import {openPageNotLoggedIn, openPageLogged} from './loadPage.js';

$(document).ready(() => {
    const location = window.location.pathname.replace(/^.*\//g, '');
    if (location) {
        if (location == 'login' || location == 'register') {
            return openPageNotLoggedIn(location);
        }
        openPageLogged(location);
    }
    openPageNotLoggedIn('login');
});