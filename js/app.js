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
        // Remover a classe ativa do botão atual
        activeButton.classList.remove("active");
        button.classList.add("active");

        // Remover a classe ativa da seção atual e adicionar a classe de saída
        activeSection.classList.remove("active");
        activeSection.classList.add("exit");

        // Adicionar a classe ativa à nova seção
        sections[targetClass].classList.add("active");

        // Remover a classe de saída da seção após a transição
        setTimeout(() => {
          activeSection.classList.remove("exit");
        }, 500); // Tempo deve coincidir com a duração da transição
      }
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
