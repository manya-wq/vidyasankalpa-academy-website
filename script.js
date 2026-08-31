/* =========================================================
   VIDYASANKALPA ACADEMY
   COMMON JAVASCRIPT
   Works for index.html and about.html
   ========================================================= */

/*hamburger*/
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const menuOverlay = document.getElementById("menuOverlay");

    if (!menuToggle || !navLinks) {
        console.log("Hamburger elements not found");
        return;
    }

    menuToggle.addEventListener("click", function () {

        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");

        if (menuOverlay) {
            menuOverlay.classList.toggle("active");
        }

    });

});
/* =========================================================
   2. SCROLL REVEAL ANIMATION
   Works on Home + About page
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

}


/* =========================================================
   3. BACK TO TOP BUTTON
   ========================================================= */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================================================
   4. NAVBAR SCROLL EFFECT
   ========================================================= */

const header =
    document.querySelector(".header");


if (header) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}


/* =========================================================
   5. SMOOTH SCROLL FOR INTERNAL LINKS
   ========================================================= */

const internalLinks =
    document.querySelectorAll('a[href^="#"]');


internalLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");


        if (
            targetId &&
            targetId !== "#"
        ) {

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }

    });

});


/* =========================================================
   6. ACTIVE NAVBAR LINK
   Automatically highlights current page
   ========================================================= */

const currentPage =
    window.location.pathname.split("/").pop();


const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");


    if (
        linkPage === currentPage ||
        (
            currentPage === "" &&
            linkPage === "index.html"
        )
    ) {

        link.classList.add("active");

    }

});


/* =========================================================
   7. BUTTON RIPPLE EFFECT
   ========================================================= */

const buttons =
    document.querySelectorAll(
        ".gold-button, .outline-button, .nav-cta"
    );


buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.add("button-click");


        setTimeout(function () {

            button.classList.remove("button-click");

        }, 300);

    });

});


/* =========================================================
   8. IMAGE LOAD EFFECT
   ========================================================= */

const images =
    document.querySelectorAll("img");


images.forEach(function (image) {

    image.addEventListener("load", function () {

        image.classList.add("loaded");

    });

});


/* =========================================================
   9. FOOTER YEAR
   ========================================================= */
    const yearElement =
    document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}





/* =========================================================
   10. CONSOLE MESSAGE
   ========================================================= */

console.log(
    "Vidyasankalpa Academy website loaded successfully."
);