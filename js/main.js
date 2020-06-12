var myNav = document.getElementById('navbar'),
    icon = document.querySelector('.my-container'),
    myColor = document.querySelectorAll('.color-change'),
    list;

/* this is  the custom attribute name  which value is to be changed */
const changeMe = "--main-color";
/* setting the color from the localStorage  by retrieving */

document.documentElement.style.setProperty(changeMe, localStorage.getItem("colorStored"));


/*  getting value of  */
list = document.querySelectorAll('[data-color]');
console.log(list.length);

for (var i = 0; i < list.length; ++i) {
    list[i].addEventListener("click", function(e) {
        // store attribute value in localStorage
        localStorage.setItem("colorStored", e.target.getAttribute('data-color'));
        console.log("attribute value " + e.target.getAttribute('data-color'));

        // change color based on the attribute value.
        document.documentElement.style.setProperty(changeMe, e.target.getAttribute('data-color'));
        console.log("My local storage value " + localStorage.getItem("colorStored"));

    }, false);
}

/* side icon */
document.getElementById('color-toggler').addEventListener('click', function() {
    document.getElementById('color-container').classList.toggle('show');
});


/* make navbar responsive and change to x icon */
function myFunction() {
    document.querySelector(".navbar-not-responsive").classList.toggle('responsive');
    document.querySelector('.my-container').classList.toggle('my-button');
}

/* if the screen height is below 550 and you click on the bar icon the navbar will get background if it was transparent */
myNav.addEventListener('click', function() {
    if (document.body.scrollTop < 550 && document.documentElement.scrollTop < 550) {
        if (myNav.className === "nav-transparent" || myNav.className === "nav-colored");
        myNav.classList.add('nav-colored');
    }
});

/* if the screen height is below 550 and you hover over the bar icon the navbar will get background if it was transparent */
myNav.addEventListener('mousemove', function() {
    if (document.body.scrollTop < 550 && document.documentElement.scrollTop < 550) {
        myNav.classList.remove('nav-transparent');
        myNav.classList.add('nav-colored');
    }
});

/* if the screen height is below 550 and you hover out,  the navbar will get back to transparent */
myNav.addEventListener('mouseout', function() {
    if (document.body.scrollTop < 550 && document.documentElement.scrollTop < 550) {
        myNav.classList.remove('nav-colored');
        myNav.classList.add('nav-transparent');

    }
});


/* if scrolling add the background color to the navbar */
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};