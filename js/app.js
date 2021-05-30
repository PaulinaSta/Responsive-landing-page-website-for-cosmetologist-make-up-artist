const navSlide = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuItem = document.querySelectorAll('.menu__item');

    burger.addEventListener('click', () => {
        menu.classList.toggle('menu--show');
        burger.classList.toggle('burger__line--active');
    });
}


const menuLinkClick = () => {
    $('.menu__link').on('click', function () {
        const goToSection = '[data-section=' + $(this).attr('id') + ']';

        $('body, html').animate({
            scrollTop: $(goToSection).offset().top
        }, 1000);

        $('.menu').toggleClass('menu--show');

        $('.burger').toggleClass('burger__line--active');
    });
}


const bannerButtonClick = () => {
    $('.banner, .button__link, .offer-content__link').on('click', function () {
        const goToSection = '[data-section=' + $(this).attr('id') + ']';
        $('body, html').animate({
            scrollTop: $(goToSection).offset().top
        }, 1000);
    });
}


const scrollToTop = () => {
    $('.to-top').on('click', function () {
        $('body, html').animate({
            scrollTop: $('.section--home').offset().top
        }, 1000);
    });
}


const scrollAnimations = () => {
    $(window).on('scroll', function () {
        const scrollValue = $(window).scrollTop();
        const distanceAbout = $('.section--about').offset().top - 250;
        const distancePortfolio = $('.section--portfolio').offset().top - 250;
        const distanceOffer = $('.section--offer').offset().top - 250;
        const distanceContact = $('.section--contact').offset().top - 250;

        // navLinkActive
        if (scrollValue < distanceAbout) {
            $('.menu__underscore').not('.menu__underscore--1').removeClass('menu__underscore--active');
            $('.menu__underscore--1').addClass('menu__underscore--active');
        } else if (scrollValue < distancePortfolio) {
            $('.menu__underscore').not('.menu__underscore--2').removeClass('menu__underscore--active');
            $('.menu__underscore--2').addClass('menu__underscore--active');
        } else if (scrollValue < distanceOffer) {
            $('.menu__underscore').not('.menu__underscore--3').removeClass('menu__underscore--active');
            $('.menu__underscore--3').addClass('menu__underscore--active');
        } else if (scrollValue < distanceContact) {
            $('.menu__underscore').not('.menu__underscore--4').removeClass('menu__underscore--active');
            $('.menu__underscore--4').addClass('menu__underscore--active');
        } else {
            $('.menu__underscore').not('.menu__underscore--5').removeClass('menu__underscore--active');
            $('.menu__underscore--5').addClass('menu__underscore--active');
        }

        // toTopShow
        if (scrollValue > distanceAbout / 2) {
            $('.to-top').addClass('to-top--show');
        }
        if (scrollValue < distanceAbout / 2) {
            $('.to-top').removeClass('to-top--show');
        }
    })
}


const portfolioSlide = () => {
    $('.js-portfolio-content__arrow--right, .portfolio-dots__dot--dot2').on('click', function () {
        $('.portfolio-content__items--karuzela').addClass('portfolio-content__items--karuzela--active');
        $('.portfolio-dots__dot--dot1, .portfolio-dots__dot--dot2').not('.portfolio-dots__dot--dot2').removeClass('portfolio-dots__dot--active');
        $('.portfolio-dots__dot--dot2').addClass('portfolio-dots__dot--active');
    });
    $('.js-portfolio-content__arrow--left, .portfolio-dots__dot--dot1').on('click', function () {
        $('.portfolio-content__items--karuzela').removeClass('portfolio-content__items--karuzela--active');
        $('.portfolio-dots__dot--dot1, .portfolio-dots__dot--dot2').not('.portfolio-dots__dot--dot1').removeClass('portfolio-dots__dot--active');
        $('.portfolio-dots__dot--dot1').addClass('portfolio-dots__dot--active');
    });

}



const app = () => {
    navSlide();
    menuLinkClick();
    bannerButtonClick();
    scrollToTop();
    scrollAnimations();
    portfolioSlide();
}

app();



const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;

    track.style.transform = 'translateX(' + amountToMove + ')';

    console.log(amountToMove);
})