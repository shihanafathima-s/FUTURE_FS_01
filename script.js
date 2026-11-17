
/* =========================================
   SHIHANA FATHIMA S - PERSONAL PORTFOLIO
   JavaScript
========================================= */


/* 1. WELCOME MESSAGE */

console.log("Welcome to Shihana Fathima's Portfolio!");

console.log("AI/ML | NLP | Deep Learning | Generative AI");


/* 2. MOBILE NAVIGATION */

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

const navigationItems = document.querySelectorAll(".nav-links a");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close mobile menu after clicking a navigation link

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* 3. TYPING ANIMATION */

const typingElement = document.getElementById("typing-text");

const interests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Deep Learning",
    "Generative AI",
    "Computer Vision"
];

let interestIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentInterest = interests[interestIndex];

    if (!deleting) {

        typingElement.textContent =
            currentInterest.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentInterest.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentInterest.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            interestIndex =
                (interestIndex + 1) % interests.length;

        }

    }

    const speed = deleting ? 45 : 85;

    setTimeout(typeEffect, speed);

}


typeEffect();


/* 4. SCROLL REVEAL ANIMATION */

// Select elements to animate

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-content, " +
    ".education-card, " +
    ".skill-card, " +
    ".project-card, " +
    ".research-card, " +
    ".certification-card, " +
    ".achievement-card, " +
    ".contact-content"
);


// Add reveal class

revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


// Observe elements while scrolling

const revealObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


// Start observing elements

revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* 5. ACTIVE NAVIGATION HIGHLIGHT */

const pageSections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navigationItems.forEach(function (link) {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + currentId) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        rootMargin: "-25% 0px -60% 0px"
    }

);


pageSections.forEach(function (section) {

    sectionObserver.observe(section);

});


/* 6. AUTOMATIC COPYRIGHT YEAR */

const currentYear = new Date().getFullYear();

const copyrightElement = document.getElementById("copyright");

copyrightElement.textContent =
    "© " + currentYear +
    " Shihana Fathima S. All Rights Reserved.";


/* 7. PROFILE IMAGE ERROR HANDLING */

const profileImage = document.querySelector(".hero-image img");

profileImage.addEventListener("error", function () {

    console.error(
        "Profile image not found. Please check assets/profile.jpg"
    );

});


/* 8. RESUME LINK CHECK */

const resumeLinks = document.querySelectorAll(
    'a[href="assets/resume.pdf"]'
);

console.log(
    "Resume links available:",
    resumeLinks.length
);

