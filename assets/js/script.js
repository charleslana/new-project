import {openPageNotLoggedIn, openPageLogged} from './loadPage.js';

$(document).ready(() => {
    const location = window.location.pathname.substring(1);
    if (location) {
        if (location == 'login' || location == 'register') {
            return openPageNotLoggedIn(location);
        }
        openPageLogged(location);
    }
    openPageNotLoggedIn('login');
});

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}