export const openPageNotLoggedIn = (page) => {
    $('main').html(showLoading());
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
    $('[data-bs-toggle="tooltip"]').tooltip("hide");
    if (page == 'logout') {
        const modalOptions = document.getElementById('modalOptions');
        const modal = bootstrap.Modal.getInstance(modalOptions);
        modal.hide();
        openPageNotLoggedIn('login');
        return false;
    }
    $('#content').html(showLoading());
    $('#content').load(`pages/${page}.html`, (response, status, xhr) => {
        if (status == 'error') {
            $('#content').html(`
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mt-5 text-center">
                        <h1>Oops!</h1>
                        <h2>404 Not found</h2>
                        <p>Sorry, this page not found.</p>
                        <button type="button" class="btn btn-primary btn-lg" id="btnClick">Voltar anteriormente</button>
                    </div>
                </div>
            </div>
            `);
            $('#btnClick').on('click', () => {
                window.history.back();
                const location = window.location.pathname.substring(1);
                loadPage(location);
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
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });
    });
}

const setColorIconPage = (location) => {
    $('.page-not-logged-in, .page-logged').removeClass('text-white').addClass('text-muted');
    $(location).removeClass('text-muted').addClass('text-white');
}

const showLoading = () => {
    return `
    <div class="container">
        <div class="mt-5 d-flex justify-content-center">
            <div class="spinner-border spinner-border-lg" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
    `;
}

export const openPageLogged = (page) => {
    $('main').html(showLoading());
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