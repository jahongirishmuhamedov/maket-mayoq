const ready = function (cb) {
    // Check if the `document` is loaded completely
    document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", function (e) {
            cb();
        })
        : cb();
};

// Usage
ready(function () {
    const elSiteHeaerToggler = document.querySelector('.site-header__toggler')
    const elSiteNav = document.querySelector('.site-nav')

    elSiteHeaerToggler.addEventListener('click', function () {
        elSiteNav.classList.toggle('site-nav--open')
    })

    elSiteNav.addEventListener('animation', function () {

    })
});