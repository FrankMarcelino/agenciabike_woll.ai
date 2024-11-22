// animação solucoes
// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".btn--solucoes");
//   const sections = {
//     "container-cards-industria": document.querySelector(
//       ".container-cards-industria"
//     ),
//     "container-cards-segmento": document.querySelector(
//       ".container-cards-segmento"
//     ),
//   };

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const targetClass = button.getAttribute("data-target");
//       const activeButton = document.querySelector(".btn--solucoes.active");
//       const activeSection = document.querySelector(
//         ".section-cards > div.active"
//       );

//       if (activeButton !== button) {
//         activeButton.classList.remove("active");
//         button.classList.add("active");

//         activeSection.classList.remove("active");
//         activeSection.classList.add("exit");

//         sections[targetClass].classList.add("active");

//         setTimeout(() => {
//           activeSection.classList.remove("exit");
//         }, 500); // Tempo deve coincidir com a duração da transição
//       }
//     });
//   });

//   const carouselButtons = document.querySelectorAll(".carousel-button");
//   carouselButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       console.log("click");
//       const direction = button.getAttribute("data-direction");
//       const carouselTrack = button
//         .closest(".cards-carousel")
//         .querySelector(".carousel-track");
//       const cardWidth =
//         carouselTrack.querySelector(".card-container").offsetWidth;
//       const currentTransform = parseInt(
//         carouselTrack.style.transform
//           .replace("translateX(", "")
//           .replace("px)", "") || 0
//       );

//       let newTransform = currentTransform;
//       if (direction === "left") {
//         console.log("left");
//         newTransform = Math.min(currentTransform + cardWidth, 0);
//       } else if (direction === "right") {
//         newTransform = Math.max(
//           currentTransform - cardWidth,
//           -(
//             carouselTrack.scrollWidth -
//             carouselTrack.parentElement.offsetWidth +
//             cardWidth
//           )
//         );
//       }

//       carouselTrack.style.transform = `translateX(${newTransform}px)`;
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn--solucoes");
  const sections = {
    "container-cards-industria": document.querySelector(
      ".container-cards-industria"
    ),
    "container-cards-segmento": document.querySelector(
      ".container-cards-segmento"
    ),
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetClass = button.getAttribute("data-target");
      const activeButton = document.querySelector(".btn--solucoes.active");
      const activeSection = document.querySelector(
        ".section-cards > div.active"
      );

      if (activeButton !== button) {
        activeButton.classList.remove("active");
        button.classList.add("active");

        activeSection.classList.remove("active");
        activeSection.classList.add("exit");

        sections[targetClass].classList.add("active");

        setTimeout(() => {
          activeSection.classList.remove("exit");
        }, 500); // Tempo deve coincidir com a duração da transição
      }
    });
  });

  const carouselButtons = document.querySelectorAll(".carousel-button");
  carouselButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.getAttribute("data-direction");
      const carouselTrack = button
        .closest(".cards-carousel")
        .querySelector(".carousel-track");
      const cardWidth =
        carouselTrack.querySelector(".card-container").offsetWidth;
      const visibleCards = 1; // Número de cards visíveis por vez
      const totalCards = carouselTrack.children.length;
      const maxTranslateX = -(totalCards - visibleCards) * (cardWidth + 20); // 20px é a margem entre os cards

      const currentTransform = parseInt(
        carouselTrack.style.transform
          .replace("translateX(", "")
          .replace("px)", "") || 0
      );

      let newTransform = currentTransform;
      if (direction === "left") {
        newTransform = Math.min(currentTransform + (cardWidth + 20), 0);
      } else if (direction === "right") {
        newTransform = Math.max(
          currentTransform - (cardWidth + 20),
          maxTranslateX
        );
      }

      carouselTrack.style.transform = `translateX(${newTransform}px)`;
    });
  });
});

//crm carrousel
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".crm-button");
  const images = document.querySelectorAll(".crm-images img");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const activeButton = document.querySelector(".crm-button.active");
      const activeImage = document.querySelector(".crm-images img.active");
      const newImage = images[index];
      if (activeButton !== button) {
        // Remove a classe ativa do botão atual
        activeButton.classList.remove("active");
        button.classList.add("active");
        // Adiciona classes para animar a saída da imagem atual e a entrada da nova imagem
        activeImage.classList.remove("active");
        activeImage.classList.add("exit");
        newImage.classList.add("active");
        // Remove as classes de animação depois da transição
        setTimeout(() => {
          activeImage.classList.remove("exit");
        }, 500);
        // Tempo deve coincidir com a duração da transição
      }
    });
  });
});

// diferenciais acordion

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// hero carrousel

document.addEventListener("DOMContentLoaded", () => {
  const leftArrow = document.querySelector(".carousel-left");
  const rightArrow = document.querySelector(".carousel-right");
  const indicators = document.querySelectorAll(".carousel-indicators span");
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
    currentIndex = currentIndex > 0 ? currentIndex - 1 : headers.length - 1;
    updateCarousel(currentIndex);
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = currentIndex < headers.length - 1 ? currentIndex + 1 : 0;
    updateCarousel(currentIndex);
  });

  updateCarousel(0); // Initialize the first slide as active
});
