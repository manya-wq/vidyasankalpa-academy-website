document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  const syncNav = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
  };
  syncNav();
  window.addEventListener('scroll', syncNav, {passive:true});

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const open = menuBtn.classList.toggle('open');
      navLinks.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('nav-open', open);
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menuBtn.classList.remove('open');
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }));
  }

  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const target = a.getAttribute('href')?.split('#')[0] || '';
    if (target === current || (current === '' && target === 'index.html')) {
      a.classList.add('active');
      a.setAttribute('aria-current','page');
    }
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in'); revealObserver.unobserve(entry.target); } });
  }, {threshold:.14, rootMargin:'0px 0px -40px'});
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  document.querySelectorAll('[data-social]').forEach(link => {
    link.addEventListener('click', e => {
      const url = link.dataset.social?.trim();
      if (!url) {
        e.preventDefault();
        const msg = document.querySelector('#social-note');
        if (msg) { msg.textContent = 'Official social profile link will be added when provided by the academy.'; }
      }
    });
  });

  document.querySelectorAll('[data-faq-button]').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (!item) return;
      const answer = item.querySelector('.faq-a');
      const open = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
      if (answer) answer.style.height = open ? `${answer.scrollHeight}px` : '0px';
    });
  });

  document.querySelectorAll('form[data-counselling-form]').forEach(form => {
    const message = form.querySelector('.form-message');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get('name') || '').trim();
      const phone = String(fd.get('phone') || '').replace(/\D/g, '');
      const studentClass = String(fd.get('studentClass') || '').trim();
      const program = String(fd.get('program') || '').trim();
      if (!name || phone.length < 10 || !studentClass || !program) {
        if (message) message.textContent = 'Please complete the required fields with a valid phone number.';
        return;
      }
      const text = [
        'Hello Vidyasankalpa Academy, I would like to enquire about counselling.',
        `Name: ${name}`,
        `Phone: ${fd.get('phone') || ''}`,
        `Student/Class: ${studentClass}`,
        `Interested Program: ${program}`,
        `Preferred Contact Time: ${fd.get('time') || 'Any time'}`,
        `Message: ${fd.get('message') || '—'}`
      ].join('\n');
      const url = `https://wa.me/918123441586?text=${encodeURIComponent(text)}`;
      if (message) message.textContent = 'Opening WhatsApp with your enquiry…';
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
});

/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const backToTop =
        document.querySelector(".back-to-top");

    if (!backToTop) {
        return;
    }


    const toggleBackToTop = () => {

        const scrollPosition = window.scrollY;
        const documentHeight =
            document.documentElement.scrollHeight;

        const viewportHeight =
            window.innerHeight;

        /*
         * Show once the user has travelled
         * roughly two-thirds of the page.
         */

        const showAt =
            Math.max(
                500,
                (documentHeight - viewportHeight) * 0.65
            );

        backToTop.classList.toggle(
            "is-visible",
            scrollPosition >= showAt
        );

    };


    window.addEventListener(
        "scroll",
        toggleBackToTop,
        { passive: true }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    toggleBackToTop();

});
/* =========================================================
   BACK TO TOP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const backToTop =
        document.querySelector(".back-to-top");

    if (!backToTop) {
        return;
    }


    const updateBackToTop = () => {

        const scrollY = window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight;

        const viewportHeight =
            window.innerHeight;

        const maximumScroll =
            pageHeight - viewportHeight;

        const showPoint =
            Math.max(
                500,
                maximumScroll * 0.62
            );


        backToTop.classList.toggle(
            "is-visible",
            scrollY >= showPoint
        );

    };


    window.addEventListener(
        "scroll",
        updateBackToTop,
        {
            passive: true
        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    updateBackToTop();

});