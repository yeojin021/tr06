$(function () {
    $('.main_visual .main_visual_slide').slick({
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
    });
    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual .main_visual_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual .main_visual_slide').slick('slickNext')
    });

})

$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }

    })
})

$(function () {
    const MMS = new Swiper('.main_news_slide', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: '.main_news .page',
            clickable: true,
        },
        navigation: {
            nextEl: '.main_news .next',
            prevEl: '.main_news .prev',
        },

    });

    const MSS = new Swiper('.main_slo_slide', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: '.main_slo .page',
            clickable: true,
        },
        navigation: {
            nextEl: '.main_slo .next',
            prevEl: '.main_slo .prev',
        },

    });

    const MIS = new Swiper('.main_menu_slide', {
        loop: true,
        slidesPerView: 6,
        spaceBetween: 80,
        autoplay: {
            delat: 0,
            disableOnInteraction: false,
        },

        speed: 8000,


    });


})

$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 })
    });
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop(); console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });
});