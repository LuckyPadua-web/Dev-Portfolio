document.addEventListener("DOMContentLoaded", function () {
  // Typing animation
  const typingElements = document.querySelectorAll(".typing-text");

  typingElements.forEach((el) => {
    const text = el.getAttribute("data-text");
    let index = 0;
    el.textContent = ""; // Clear initial text

    function type() {
      if (index < text.length) {
        el.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }

    // Start typing after a small delay
    setTimeout(type, 500);
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Button smooth scroll
  const buttons = document.querySelectorAll('.btn[href^="#"]');

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector("header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.style.boxShadow = "none";
    } else {
      header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.5)";
    }

    lastScroll = currentScroll;
  });

  // Fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all project cards and skill cards
  const cards = document.querySelectorAll(
    ".project-card, .skill-card, .about-box, .contact-card"
  );
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

  // Create mobile accordion for project cards
  function initProjectAccordion() {
    const isMobile = window.innerWidth <= 768;
    const projectCards = document.querySelectorAll(".projects .project-card");

    projectCards.forEach((card) => {
      const header = card.querySelector("h3");
      if (!header) return;

      // If a .project-body already exists, leave it; otherwise create and move content
      let body = card.querySelector(".project-body");
      if (!body) {
        body = document.createElement("div");
        body.className = "project-body";

        // Move all siblings after header into the body
        let sibling = header.nextElementSibling;
        while (sibling) {
          const next = sibling.nextElementSibling;
          body.appendChild(sibling);
          sibling = next;
        }

        card.appendChild(body);
      }

      // Remove old event listeners by cloning the header
      const newHeader = header.cloneNode(true);
      header.parentNode.replaceChild(newHeader, header);

      // Reset any inline styles/classes when not mobile
      if (!isMobile) {
        card.classList.remove("expanded");
        body.style.maxHeight = null;
        newHeader.style.cursor = "default";
        return;
      }

      // Ensure collapsed initial state on mobile
      card.classList.remove("expanded");
      body.style.maxHeight = "0px";

      // Add click toggle on header for mobile
      newHeader.style.cursor = "pointer";
      newHeader.addEventListener("click", function (e) {
        e.stopPropagation();
        const expanded = card.classList.toggle("expanded");
        if (expanded) {
          // set explicit maxHeight for smooth transition
          body.style.maxHeight = body.scrollHeight + "px";
        } else {
          body.style.maxHeight = "0px";
        }
      });
    });
  }

  // Debounced resize handler to reinitialize accordion
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      initProjectAccordion();
    }, 150);
  });

  // Initialize on load
  initProjectAccordion();

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Toggle icon between bars and times
      const icon = menuToggle.querySelector("i");
      if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // Close menu when clicking on a link
    const navLinkItems = document.querySelectorAll(".nav-links a");
    navLinkItems.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      });
    });
  }
});
