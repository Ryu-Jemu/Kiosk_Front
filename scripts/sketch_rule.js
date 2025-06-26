document.addEventListener("DOMContentLoaded", () => {
    updateDateTime();
    setInterval(updateDateTime, 60000);
  
    const cards = document.querySelectorAll(".card");
    let current = 0;
    let autoSlideInterval = null;
    let resumeTimeout = null;
  
    function updateCardClasses(index) {
      cards.forEach((card, i) => {
        card.classList.remove("active", "left", "right");
        card.style.display = "none";
  
        if (i === index) {
          card.classList.add("active");
          card.style.display = "block";
        } else if (i === (index - 1 + cards.length) % cards.length) {
          card.classList.add("left");
          card.style.display = "block";
        } else if (i === (index + 1) % cards.length) {
          card.classList.add("right");
          card.style.display = "block";
        }
      });
    }
  
    function startAutoSlide() {
      stopAutoSlide();
      autoSlideInterval = setInterval(() => {
        current = (current + 1) % cards.length;
        updateCardClasses(current);
      }, 3000);
    }
  
    function stopAutoSlide() {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
    }
  
    function resetAutoSlideTimer() {
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(startAutoSlide, 5000);
    }
  
    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        if (index === current) return;
        stopAutoSlide();
        current = index;
        updateCardClasses(current);
        resetAutoSlideTimer();
      });
    });
  
    if (cards.length > 0) {
      updateCardClasses(current);
      startAutoSlide();
    }
  });
  
  function updateDateTime() {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")}`;
    const formattedTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const targetDate = new Date("2025-07-07T00:00:00");
    const diff = Math.ceil((targetDate - now) / (1000 * 60 * 60 * 24));
  
    const dateEl = document.getElementById("current-date");
    const timeEl = document.getElementById("current-time");
    const timerEl = document.getElementById("countdown-timer");
  
    if (dateEl && timeEl && timerEl) {
      dateEl.textContent = formattedDate;
      timeEl.textContent = formattedTime;
      timerEl.textContent = `D-${diff}`;
    }
  }