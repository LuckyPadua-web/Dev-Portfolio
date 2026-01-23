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

  // Floating contact button smooth scroll
  const floatingContact = document.querySelector(".floating-contact");
  if (floatingContact) {
    floatingContact.addEventListener("click", function (e) {
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
  }

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
    ".project-card, .skill-card, .about-box, .contact-card",
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

// ===== TESTIMONIALS SLIDER =====
document.addEventListener("DOMContentLoaded", function () {
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.querySelector(".testimonial-nav.prev");
  const nextBtn = document.querySelector(".testimonial-nav.next");
  const dotsContainer = document.querySelector(".testimonial-dots");

  let currentIndex = 0;
  const totalCards = testimonialCards.length;

  // Create dots
  for (let i = 0; i < totalCards; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".testimonial-dots .dot");

  function updateSlider() {
    testimonialCards.forEach((card, index) => {
      card.classList.remove("active", "prev");
      if (index === currentIndex) {
        card.classList.add("active");
      } else if (index < currentIndex) {
        card.classList.add("prev");
      }
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateSlider();
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
  }

  // Event listeners
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Auto-slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  // Touch/Swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  const testimonialContainer = document.querySelector(
    ".testimonials-container",
  );

  testimonialContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  testimonialContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextSlide(); // Swipe left
    if (touchEndX > touchStartX + 50) prevSlide(); // Swipe right
  }
});

// ===== PROOF OF CONVERSATION MODAL =====
document.addEventListener("DOMContentLoaded", function () {
  // Create modal element
  const modal = document.createElement("div");
  modal.className = "proof-modal";
  modal.innerHTML = `
    <div class="proof-modal-content">
      <button class="proof-modal-close" aria-label="Close modal">
        <i class="fas fa-times"></i>
      </button>
      <img src="" alt="Conversation proof" />
    </div>
  `;
  document.body.appendChild(modal);

  const proofItems = document.querySelectorAll(".proof-item");
  const modalImg = modal.querySelector("img");
  const closeBtn = modal.querySelector(".proof-modal-close");

  // Open modal on click
  proofItems.forEach((item) => {
    item.addEventListener("click", function () {
      const imgSrc = this.querySelector("img").src;
      const imgAlt = this.querySelector("img").alt;
      modalImg.src = imgSrc;
      modalImg.alt = imgAlt;
      modal.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    });
  });

  // Close modal
  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  }

  closeBtn.addEventListener("click", closeModal);

  // Close on background click
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});
