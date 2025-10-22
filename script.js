document.addEventListener("DOMContentLoaded", function () {
  const typingElements = document.querySelectorAll(".typing-text");

  typingElements.forEach(el => {
    const text = el.getAttribute("data-text");
    let index = 0;

    function type() {
      if (index < text.length) {
        el.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }

    type();
  });
});
