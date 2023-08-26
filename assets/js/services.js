const load_complete = () => {
    /*=============== SCROLL REVEAL ANIMATION ===============*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        // reset: true
    });

    sr.reveal('.section__subtitle', { delay: 2800 });
    sr.reveal('.section__title', { delay: 3000 });
    sr.reveal('.skills__content', { delay: 2800, origin: 'right' });
    sr.reveal('.accordion__container', { interval: 400, delay: 2200, origin: 'left' })
    // sr.reveal('.accordion__header', { delay: 300, interval: 300, origin: 'bottom' })

    /*=============== ACCORDION ===============*/
    const accordionItems = document.querySelectorAll('.accordion__item')

    accordionItems.forEach((item) => {
        const accordionHeader = item.querySelector('.accordion__header')

        accordionHeader.addEventListener('click', () => {

            const openItem = document.querySelector('.accordion-open')

            toggleItem(item)

            if (openItem && openItem !== item) {
                toggleItem(openItem)
            }
        })
    })

    const toggleItem = (item) => {
        const accordionContent = item.querySelector('.accordion__content')

        if (item.classList.contains('accordion-open')) {
            accordionContent.removeAttribute('style')
            item.classList.remove('accordion-open')
        } else {
            accordionContent.style.height = accordionContent.scrollHeight + 'px'
            item.classList.add('accordion-open')
        }
    }
}