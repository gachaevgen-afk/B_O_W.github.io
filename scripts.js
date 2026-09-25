document.addEventListener('DOMContentLoaded', function () {

    // === Слайдер Состав
    const teamSwiper = new Swiper('.teamSwiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '#customNextTeam',
            prevEl: '#customPrevTeam',
        },
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 24 },
            900: { slidesPerView: 3, spaceBetween: 28 },
            1200: { slidesPerView: 4, spaceBetween: 30 }
        },
        speed: 600,
    });

    // === Слайдер картинок
    const playSwiper = new Swiper('.playSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.play-pagination',
            clickable: true,
        },
        speed: 700,
        effect: 'fade',
        fadeEffect: { crossFade: true },
    });

    // === Плавная навигация
    const anchors = document.querySelectorAll('.nav-links a');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});