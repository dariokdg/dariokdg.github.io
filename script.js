$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    })

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    })

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    let an = document.getElementById('an');
    let co = document.getElementById('co');
    let de = document.getElementById('de');
    let ma = document.getElementById('ma');

    $('.card-analysis').click(function() {
        $('.details-consulting').removeClass("active");
        $('.details-consulting').removeClass("visibleitem");
        $('.details-development').removeClass("active");
        $('.details-development').removeClass("visibleitem");
        $('.details-management').removeClass("active");
        $('.details-management').removeClass("visibleitem");

        if (an.classList.contains('active')) {
            an.classList.remove('visibleitem');
            setTimeout(function() {
                an.classList.remove('active');
            }, 305);
        } else {
            an.classList.add('active');
            setTimeout(function() {
                an.classList.add('visibleitem');
            }, 20);
        }

    })

    $('.card-consulting').click(function() {
        $('.details-analysis').removeClass("active");
        $('.details-analysis').removeClass("visibleitem");
        $('.details-development').removeClass("active");
        $('.details-development').removeClass("visibleitem");
        $('.details-management').removeClass("active");
        $('.details-management').removeClass("visibleitem");

        if (co.classList.contains('active')) {
            co.classList.remove('visibleitem');
            setTimeout(function() {
                co.classList.remove('active');
            }, 305);
        } else {
            co.classList.add('active');
            setTimeout(function() {
                co.classList.add('visibleitem');
            }, 20);
        }

    })

    $('.card-development').click(function() {
        $('.details-analysis').removeClass("active");
        $('.details-analysis').removeClass("visibleitem");
        $('.details-consulting').removeClass("active");
        $('.details-consulting').removeClass("visibleitem");
        $('.details-management').removeClass("active");
        $('.details-management').removeClass("visibleitem");

        if (de.classList.contains('active')) {
            de.classList.remove('visibleitem');
            setTimeout(function() {
                de.classList.remove('active');
            }, 305);
        } else {
            de.classList.add('active');
            setTimeout(function() {
                de.classList.add('visibleitem');
            }, 20);
        }

    })

    $('.card-management').click(function() {
        $('.details-analysis').removeClass("active");
        $('.details-analysis').removeClass("visibleitem");
        $('.details-consulting').removeClass("active");
        $('.details-consulting').removeClass("visibleitem");
        $('.details-development').removeClass("active");
        $('.details-development').removeClass("visibleitem");

        if (ma.classList.contains('active')) {
            ma.classList.remove('visibleitem');
            setTimeout(function() {
                ma.classList.remove('active');
            }, 305);
        } else {
            ma.classList.add('active');
            setTimeout(function() {
                ma.classList.add('visibleitem');
            }, 20);
        }

    })

    var typed = new Typed(".typing", {
        strings: [
            "> a software developer",
            "> an engineering manager",
            "> a scrum master",
            "> a senior project manager",
            "> doing this for fun!"
        ],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true
    });

    var typed = new Typed(".typing2", {
        strings: [
            "a software developer",
            "an engineering manager",
            "a scrum master",
            "a senior project manager",
            "doing this for fun!"
        ],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true
    });

    $('.ddgCarousel').owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            }
        }
    });

    $('.peopleCarousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

})