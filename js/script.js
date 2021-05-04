// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarNav')
// const bsCollapse = new bootstrap.Collapse(menuToggle)
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// }}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('navbarSupportedContent').addEventListener('click', function () {
        var el = document.getElementById('navbarSupportedContent')
        el.classList.remove("show");
    });

    var links = document.getElementsByTagName("a");

    //Browse the previously created array
    Array.prototype.forEach.call(links, function (elem, index) {
        //Get the hyperlink target and if it refers to an id go inside condition
        var elemAttr = elem.getAttribute("href");
        if (elemAttr && elemAttr.includes("#")) {
            //Replace the regular action with a scrolling to target on click
            elem.addEventListener("click", function (ev) {
                ev.preventDefault();
                //Scroll to the target element using replace() and regex to find the href's target id
                document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                });
            });
        }
    });

    AOS.init({
        easing: 'ease-in-out',
        mirror: true,
        duration: 600
    });

    var hash = window.location.hash;

    if (hash && document.getElementById(hash.slice(1))) {
        var $this = $(hash);
        $('html, body').animate({
            scrollTop: $this.offset().top - $("a[href='" + hash + "']").data('offset')
        }, 400, 'swing', function () {
            window.history.pushState ? window.history.pushState(null, null, hash) : window.location.hash = hash;
        });
    }
});
