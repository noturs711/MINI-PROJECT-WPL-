// document.addEventListener("DOMContentLoaded", function() {
//     const header = document.querySelector("header");
//     const menuIcon = document.getElementById("menu-icon");
//     const navbar = document.querySelector(".navbar");
    const loginLink = document.getElementById('login-link');
    const loginFormContainer = document.getElementById('login-form');
    const registerLink = document.getElementById('register-link');
    const registerFormContainer = document.getElementById('register-form');

//     // Toggle sticky header on scroll
//     window.addEventListener("scroll", function() {
//         header.classList.toggle("sticky", window.scrollY > 0);
//     });

//     // Toggle mobile menu
//     menuIcon.addEventListener("click", function() {
//         navbar.classList.toggle("active");
//     });

//  Show and hide login form
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginFormContainer.style.display = 'flex';
        registerFormContainer.style.display = 'none';
    });

    loginFormContainer.addEventListener('click', function(event) {
        if (event.target === loginFormContainer) {
            loginFormContainer.style.display = 'none';
        }
    });

    // Show and hide registration form
    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginFormContainer.style.display = 'none';
        registerFormContainer.style.display = 'flex';
    });
    

    registerFormContainer.addEventListener('click', function(event) {
        if (event.target === registerFormContainer) {
            registerFormContainer.style.display = 'none';}
    });
