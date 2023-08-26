// Scroll revil animation
const load_complete = () =>
{
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.profile__border',{delay : 2900})
sr.reveal('.profile__name', {delay: 3100})
sr.reveal('.profile__profession', {delay: 3400})
sr.reveal('.profile__social', {delay: 3600})
sr.reveal('.profile__info-group', {interval: 300, delay: 3800})
sr.reveal('.profile__buttons', {interval: 400, delay: 4000})
sr.reveal('.filters', {delay: 4200})
}