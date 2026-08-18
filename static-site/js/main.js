/**
 * STAYEST static site — vanilla JavaScript behaviour.
 * Replaces the React interactivity of the original build:
 *  1. Sticky header scrolled state
 *  2. Mobile navigation drawer
 *  3. Scroll-triggered reveal animations
 *  4. Contact / enquiry form handling (opens a pre-filled email)
 *  5. Active navigation link highlighting
 */
(function () {
  "use strict";

  /* 1. Sticky header --------------------------------------------------- */
  var header = document.querySelector("header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* 2. Mobile navigation ----------------------------------------------- */
  var drawer = document.getElementById("mobile-nav");
  var openBtn = document.querySelector('[aria-label="Open menu"]');
  var openNav = function () {
    if (drawer) {
      drawer.hidden = false;
      document.body.style.overflow = "hidden";
    }
  };
  var closeNav = function () {
    if (drawer) {
      drawer.hidden = true;
      document.body.style.overflow = "";
    }
  };
  if (openBtn) openBtn.addEventListener("click", openNav);
  document.querySelectorAll("[data-close-nav]").forEach(function (el) {
    el.addEventListener("click", closeNav);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  /* 3. Scroll reveal ----------------------------------------------------- */
  var revealTargets = document.querySelectorAll("[data-reveal]");
  if (revealTargets.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-60px" }
    );
    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  /* 4. Enquiry form ------------------------------------------------------ */
  var EMAIL = "stayestltd@gmail.com";
  document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var lines = [];
      data.forEach(function (value, key) {
        if (String(value).trim()) lines.push(key + ": " + value);
      });
      var body = encodeURIComponent(lines.join("\n"));
      var subject = encodeURIComponent("Property enquiry via stayest.co.uk");
      window.location.href =
        "mailto:" + EMAIL + "?subject=" + subject + "&body=" + body;

      var status = form.querySelector(".form-status");
      if (!status) {
        status = document.createElement("p");
        status.className = "form-status";
        form.appendChild(status);
      }
      status.textContent =
        "Opening your email app so you can send this enquiry to " + EMAIL + ".";
    });
  });

  /* 5. Active nav link --------------------------------------------------- */
  var page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("header a[href], .mobile-nav__links a").forEach(function (a) {
    var href = (a.getAttribute("href") || "").split("/").pop();
    if (href && href === page) a.setAttribute("aria-current", "page");
  });
})();
