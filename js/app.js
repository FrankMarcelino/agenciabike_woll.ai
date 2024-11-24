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
// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".carousel-nav");
//   const headers = {
//     "header-1": document.querySelector(".header-1"),
//     "header-2": document.querySelector(".header-2"),
//   };
//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const targetClass = button.getAttribute("data-target");
//       const activeButton = document.querySelector(".carousel-nav.active");
//       const activeHeader = document.querySelector(".container-header.active");
//       if (activeButton !== button) {
//         activeButton.classList.remove("active");
//         button.classList.add("active");
//         activeHeader.classList.remove("active");
//         activeHeader.classList.add("exit");
//         headers[targetClass].classList.add("active");
//         setTimeout(() => {
//           activeHeader.classList.remove("exit");
//         }, 500);
//         // Tempo deve coincidir com a duração da transição
//         // Atualiza o indicador
//         const indicator = document.querySelector(".carousel-indicator");
//         const slideIndex = Array.from(buttons).indexOf(button) + 1;
//         indicator.textContent = `Slide ${slideIndex} de ${buttons.length}`;
//       }
//     });
//   });
//   // Inicializa o primeiro botão e indicador como ativo
//   buttons[0].classList.add("active");
//   const indicator = document.querySelector(".carousel-indicator");
//   indicator.textContent = `Slide 1 de ${buttons.length}`;
// });

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".carousel-nav");
  const headers = {
    "header-1": document.querySelector(".header-1"),
    "header-2": document.querySelector(".header-2"),
    "header-3": document.querySelector(".header-3"),
    "header-4": document.querySelector(".header-4"),
  };
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetClass = button.getAttribute("data-target");
      const activeButton = document.querySelector(".carousel-nav.active");
      const activeHeader = document.querySelector(".container-header.active");
      if (activeButton !== button) {
        activeButton.classList.remove("active");
        button.classList.add("active");
        activeHeader.classList.remove("active");
        headers[targetClass].classList.add("active");
        // Atualiza o indicador
        const indicator = document.querySelector(".carousel-indicator");
        const slideIndex = Array.from(buttons).indexOf(button) + 1;
        indicator.textContent = `Slide ${slideIndex} de ${buttons.length}`;
      }
    });
  });
  // Inicializa o primeiro botão e indicador como ativo
  buttons[0].classList.add("active");
  const indicator = document.querySelector(".carousel-indicator");
  indicator.textContent = `Slide 1 de ${buttons.length}`;
});
