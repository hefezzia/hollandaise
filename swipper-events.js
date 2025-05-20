
document.addEventListener('DOMContentLoaded', () => {
const swiperContainer = document.querySelector('.swiper init-swiper');
const configScript = document.querySelector('.swiper-config');

if (swiperContainer && configScript) {
    const config = JSON.parse(configScript.textContent);
    new Swiper(swiperContainer, config);
}
});
