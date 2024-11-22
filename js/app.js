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
