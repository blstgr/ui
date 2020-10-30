window.onload = function () {


    // animate nav underline
    const navItems = document.querySelectorAll('.nav-link');

    navItems.forEach(
        element => element.addEventListener('click', event => {
            navItems.forEach(element => element.classList.remove('active'));
            element.classList.add('active');
        })
    );







}