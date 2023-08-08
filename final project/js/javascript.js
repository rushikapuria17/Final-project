$(document).ready(function() {
    // Load the header into each page
    $("#header").load("header.html", function() {
        // This callback function will execute after the header is loaded.
        // You can perform additional tasks here if needed.
    });

    // Load the footer into each page
    $("#footer").load("footer.html", function() {
        // This callback function will execute after the footer is loaded.
        // You can perform additional tasks here if needed.
    });
});

// Selecting the burger menu and navigation elements
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navlist = document.querySelector('.nav-list');
const rightnav = document.querySelector('.rightnav');

// Adding a click event listener to the burger menu
burger.addEventListener('click', () => {
    // Toggling classes to handle responsive navigation
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});
