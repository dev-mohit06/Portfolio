/*=============== SCROLL REVEAL ANIMATION ===============*/
const load_complete = () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        // reset: true
    });

    sr.reveal('.section__subtitle', { delay: 2600 });
    sr.reveal('.section__title', { delay: 2800 });
    sr.reveal('.about__img', { delay: 2900, origin: 'right' });
    sr.reveal('.about__box', { interval: 400, delay: 2900, origin: 'left' })
    sr.reveal('.about__description, .button', { delay: 2600, origin: 'bottom' })
    sr.reveal('.cartoon',{delay: 2900,origin:'bottom'})
}