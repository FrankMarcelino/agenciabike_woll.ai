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

// animação solucoes
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

  // carrousel solucoes cards industria
  const carouselButtons = document.querySelectorAll(".carousel-button");

  carouselButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.getAttribute("data-direction");
      const containerSegmento =
        button.closest(".container-cards-segmento") ||
        button.closest(".container-cards-industria");
      const carouselTrack = containerSegmento.querySelector(".carousel-track");
      const cardWidth =
        carouselTrack.querySelector(".card-container").offsetWidth;
      const visibleCards = 3; // Número de cards visíveis por vez
      const totalCards = carouselTrack.children.length;
      const maxTranslateX = -(totalCards - visibleCards) * (cardWidth + 20); // 20px é a margem entre os cards

      const currentTransform = parseInt(
        carouselTrack.style.transform
          .replace("translateX(", "")
          .replace("px)", "") || 0
      );

      let newTransform = currentTransform;
      if (direction === "left") {
        newTransform = Math.min(
          currentTransform + (cardWidth + 20) * visibleCards,
          0
        );
      } else if (direction === "right") {
        newTransform = Math.max(
          currentTransform - (cardWidth + 20) * visibleCards,
          maxTranslateX
        );
      }

      carouselTrack.style.transform = `translateX(${newTransform}px)`;
    });
  });
});

// diferenciais acordion
let lastActiveItem = null;

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    if (lastActiveItem && lastActiveItem !== item) {
      lastActiveItem.classList.remove("active");
    }
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      lastActiveItem = item;
    } else {
      lastActiveItem = null;
    }
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

// animacao das imagens da empresa

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".img-empresa");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  function startImageLoop() {
    setInterval(() => {
      showImage(currentIndex);
      currentIndex = (currentIndex + 1) % images.length; // Incrementa o índice e reseta ao atingir o total de imagens
    }, 1500); // Troca a cada 1 segundo
  }

  startImageLoop(); // Inicia o loop
});

//animacao impacto

document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".impacto-word .letter");
  const words = document.querySelectorAll(".impacto-list .word");
  let index = 0;

  function showNextLetterAndWord() {
    if (index < letters.length) {
      letters[index].classList.add("cp3");
      words[index].classList.add("show-word");
      index++;
      setTimeout(showNextLetterAndWord, 1000); // Muda a cada 1 segundo
    }
  }

  showNextLetterAndWord(); // Inicia a animação
});

// carrousel cases de sucesso
document.addEventListener("DOMContentLoaded", () => {
  const leftArrow = document.querySelector(".carousel-left-cases");
  const rightArrow = document.querySelector(".carousel-right-cases");
  const indicators = document.querySelectorAll(".carousel-cases span");
  const slides = document.querySelectorAll(
    ".case-sucesso-section .slide-cases"
  );

  let currentIndex = 0;

  function updateCarousel(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
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
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    updateCarousel(currentIndex);
  });

  rightArrow.addEventListener("click", () => {
    console.log("ok direita");
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    updateCarousel(currentIndex);
  });

  updateCarousel(currentIndex); // Inicializa com o primeiro slide ativo
});

//menu mobile
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".btn-menu-mobile");
  const menu = document.querySelector(".menu-mobile");
  const menuItems = document.querySelectorAll(".menu-mobile a");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});

// botão linguagem

// jquery traducao

$(document).ready(function () {
  $("#language-icon").on("click", function () {
    $("#language-selector-header").toggleClass("active");
  });
  $(
    "#language-selector-header, #language-selector-mobile, #language-selector-footer"
  ).on("change", function () {
    const selectedLanguage = $(this).val();
    $(
      "#language-selector-header, #language-selector-mobile, #language-selector-footer"
    ).val(selectedLanguage);
    updateTranslations(selectedLanguage);
  });

  function updateTranslations(lang) {
    updateLanguageSection(translationsNavBar, lang);
    updateLanguageSection(translationsHeader1, lang);
    updateLanguageSection(translationsHeader2, lang);
    updateLanguageSection(translationsHeader3, lang);
    updateLanguageSection(translationsHeaderFloricultura, lang);
    updateLanguageSection(translationsProduto, lang);
    updateLanguageSection(translationsSolution, lang);
    updateLanguageSection(translationsDiferenciais, lang);
    updateLanguageSection(translationsCase1, lang);
    updateLanguageSection(translationsIntegration, lang);
    updateLanguageSection(translationsCrm, lang);
    updateLanguageSection(translationsEmpresa, lang);
    updateLanguageSection(translationsManifesto, lang);
  }

  function updateLanguageSection(translations, lang) {
    $("[data-translate]").each(function () {
      const key = $(this).data("translate");
      console.log("Chave encontrada:", key); // Log para verificação
      if (translations[lang][key]) {
        console.log("Tradução aplicada para:", key); // Log para verificação
        $(this).text(translations[lang][key]);
      }
    });
  }

  // Define o idioma padrão para Português
  updateTranslations("pt");
});
