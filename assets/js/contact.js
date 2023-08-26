const load_complete = () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
    })

    sr.reveal('.section__subtitle',{delay : 2900})
    sr.reveal('.section__title', {delay: 3100})
    sr.reveal('.contact__content', {delay: 3400})
}

const validate = () => {
    let email = document.getElementById('mail').value;
    let text = document.getElementById('text');
    // let form = document.getElementById('form');
    // let pattern = /^[^ ]+@[^ ]+\.[a-zA-Z1-9]{2,3,2}$/
    let pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email.match(pattern)) {
        // console.log("Valid");
        text.innerHTML = "Valid Email"
        text.style.cssText = "background-color: #e7f6d5; color: #689f38;";
        return true;
    }   
    else {
        text.innerHTML = "Invalid Email"
        text.style.cssText = "background-color: #ffdde0; color: #d32f2f";
        return false;
    }
}
const done = () =>{
    let store = validate();

    if(store == true)
    {
        document.getElementById('form').submit();
        alert("Form Submitted");
    }
    else
    {
        alert("From Not Submitted");
    }
}