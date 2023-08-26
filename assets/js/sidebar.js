/* Expander menu code */
const showMenu = (toggleId, navbarId, bodyId) =>
{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId);

    if(toggle && navbar)
    {
        toggle.addEventListener('click',()=>{
            navbar.classList.toggle('expander')
            bodypadding.classList.toggle('body-pd');
        });
    }
}
showMenu('nav-toggle','navbar','body-pd');

/* hear the show menu function will take  3 parameters TODO: first one is navbar toggel button id TODO: second one is navbar it self TODO: thired one is body because when user will toggel the menu it will reduce opacity     FIXME: the main of this function is nothing but it will Expend our navbvar*/