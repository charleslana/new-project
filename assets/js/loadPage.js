export const openPageNotLoggedIn = (page) => {
    $('main').html(`
    <div class="lds-ring mt-5 mx-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    `);
    $('main').load('not-logged-in.html', (response, status, xhr) => {
        if (status == 'error') {
            return alert('error');
        }
        const date = new Date;
        $('#yearNow').text(date.getFullYear());
        loadPage(page);
        $('.page-not-logged-in').on('click', function(event) {
            const page = $(this).attr('href').substring(1);
            const location = window.location.pathname.substring(1);
            if (location != page) {
                loadPage(page);
            }
            event.preventDefault();
        });
    });
}

const loadPage = (page) => {
    if (page == 'logout') {
        openPageNotLoggedIn('login');
        return false;
    }
    $('#content').html(`
    <div class="lds-ring mt-5 mx-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    `);
    $('#content').load(`pages/${page}.html`, (response, status, xhr) => {
        if (status == 'error') {
            $('#content').html(`
            <div class="row">
                <div class="col-md-12 mt-5 text-center">
                    <h1>Oops!</h1>
                    <h2>404 Not found</h2>
                    <p>Sorry, this page not found.</p>
                    <button type="button" class="btn btn-primary btn-lg" id="btnClick">Ir para á Home</button>
                </div>
            </div>
            `);
            $('#btnClick').on('click', () => {
                loadPage('login');
            });
            return false;
        }
        window.history.pushState('', '', `/${page}`);
        setColorIconPage(`#page${page.capitalize()}`);
        $('#notFound').on('click', () => {
            loadPage('error');
        });
        $('#formRegister').submit((event) => {
            openPageLogged('home');
            event.preventDefault();
        });
    });
}

const setColorIconPage = (location) => {
    $('.page-not-logged-in, .page-logged').removeClass('text-white').addClass('text-muted');
    $(location).removeClass('text-muted').addClass('text-white');
}

export const openPageLogged = (page) => {
    $('main').html(`
    <div class="lds-ring mt-5 mx-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    `);
    $('main').load('logged.html', (response, status, xhr) => {
        if (status == 'error') {
            return alert('error');
        }
        loadPage(page);
        $('.page-logged, .link-logged').on('click', function(event) {
            const page = $(this).attr('href').substring(1);
            const location = window.location.pathname.substring(1);
            if (location != page) {
                loadPage(page);
            }
            event.preventDefault();
        });
    });
}