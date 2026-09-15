/* =========================================================
   VIDYASANKALPA ACADEMY
   HOMEPAGE INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  document.documentElement.classList.add("home-motion-ready");


  /* =======================================================
     SCROLL REVEALS
  ====================================================== */

  const revealElements = document.querySelectorAll(".home-reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("home-visible");

          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("home-visible");
    });

  }


  /* =======================================================
     METHODOLOGY INTERACTION
  ====================================================== */

  const methodSteps =
    document.querySelectorAll(".home-method-step");

  const methodImage =
    document.getElementById("homeMethodImage");

  const methodLabel =
    document.getElementById("homeMethodLabel");

  const methodTitle =
    document.getElementById("homeMethodTitle");

  const methodDescription =
    document.getElementById("homeMethodDescription");


  if (
    methodSteps.length &&
    methodImage &&
    methodLabel &&
    methodTitle &&
    methodDescription
  ) {

    const methodData = {

      learn: {
        label: "LEARN",
        title: "Understanding comes first.",
        description:
          "Build the idea properly before looking for speed or shortcuts.",
        image: "assets/images/classroom.webp",
        alt: "Vidyasankalpa Academy classroom"
      },

      practice: {
        label: "PRACTICE",
        title: "Turn knowledge into ability.",
        description:
          "Use deliberate practice to make concepts easier to recall and apply.",
        image: "assets/images/library.webp",
        alt: "Vidyasankalpa Academy library"
      },

      test: {
        label: "TEST",
        title: "Measure what you actually know.",
        description:
          "Regular testing reveals recall, speed and application under pressure.",
        image: "assets/images/classroom.webp",
        alt: "Vidyasankalpa Academy classroom"
      },

      analyse: {
        label: "ANALYSE",
        title: "Find the real gap.",
        description:
          "Review performance honestly and identify what needs attention.",
        image: "assets/images/chamber.webp",
        alt: "Vidyasankalpa Academy chamber"
      },

      improve: {
        label: "IMPROVE",
        title: "Return with a better strategy.",
        description:
          "Work deliberately on weak areas instead of repeating the same mistakes.",
        image: "assets/images/reception.webp",
        alt: "Vidyasankalpa Academy reception"
      },

      revise: {
        label: "REVISE",
        title: "Keep important ideas active.",
        description:
          "Planned repetition helps students retain what they have already learned.",
        image: "assets/images/library.webp",
        alt: "Vidyasankalpa Academy library"
      }

    };


    methodSteps.forEach((step) => {

      step.addEventListener("click", () => {

        const key = step.dataset.method;
        const data = methodData[key];

        if (!data) {
          return;
        }


        methodSteps.forEach((item) => {
          item.classList.toggle(
            "is-active",
            item === step
          );
        });


        methodImage.style.opacity = "0";


        window.setTimeout(() => {

          methodImage.src = data.image;
          methodImage.alt = data.alt;

          methodLabel.textContent = data.label;
          methodTitle.textContent = data.title;
          methodDescription.textContent = data.description;

          methodImage.style.opacity = "1";

        }, 170);

      });

    });

  }


  /* =======================================================
     HERO IMAGE — VERY SUBTLE DESKTOP MOVEMENT
  ====================================================== */

  const heroImage =
    document.querySelector(".home-hero-photo img");

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  if (
    heroImage &&
    !reducedMotion &&
    window.innerWidth > 900
  ) {

    let ticking = false;


    const updateHeroImage = () => {

      const hero =
        document.querySelector(".home-hero-refined");

      if (!hero) {
        ticking = false;
        return;
      }


      const rect = hero.getBoundingClientRect();


      if (
        rect.bottom < 0 ||
        rect.top > window.innerHeight
      ) {
        ticking = false;
        return;
      }


      const progress =
        Math.max(
          -1,
          Math.min(
            1,
            -rect.top / window.innerHeight
          )
        );


      heroImage.style.transform =
        `scale(1.02) translateY(${progress * 10}px)`;


      ticking = false;

    };


    window.addEventListener(
      "scroll",
      () => {

        if (ticking) {
          return;
        }

        ticking = true;

        window.requestAnimationFrame(
          updateHeroImage
        );

      },
      {
        passive: true
      }
    );

  }

});