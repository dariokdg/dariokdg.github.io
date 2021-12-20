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