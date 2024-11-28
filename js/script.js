document.addEventListener("DOMContentLoaded", () => {
  const leftArrow = document.querySelector(".carousel-left");
  const rightArrow = document.querySelector(".carousel-right");
  const indicators = document.querySelectorAll(".carousel-headers span");
  const headers = document.querySelectorAll(".container-header");

  let currentIndex = 0;

  function updateCarousel(index) {
    headers.forEach((header, i) => {
      header.classList.toggle("active", i === index);
    });

    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel(index);
    });
  });

  leftArrow.addEventListener("click", () => {
    console.log("ok esquerda");
    currentIndex = currentIndex > 0 ? currentIndex - 1 : headers.length - 1;
    updateCarousel(currentIndex);
  });

  rightArrow.addEventListener("click", () => {
    console.log("ok direita");
    currentIndex = currentIndex < headers.length - 1 ? currentIndex + 1 : 0;
    updateCarousel(currentIndex);
  });

  updateCarousel(0); // Initialize the first slide as active
});
