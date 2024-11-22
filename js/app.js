// //crm
// $(document).ready(function () {
//   function activateButton(buttonId, imageId) {
//     // Remove a classe ativa de todos os botões e imagens
//     $(".crm-buttons button").removeClass("active");
//     $(".crm-images img").removeClass("active").hide();
//     // Adiciona a classe ativa ao botão e imagem correspondentes
//     $(buttonId).addClass("active");
//     $(imageId).addClass("active").show();
//   }
//   // Inicialmente ativa o botão CRM e mostra a imagem correspondente
//   activateButton("#crm-button", "#crm-image");
//   // Adiciona eventos de clique aos botões
//   $("#crm-button").click(function () {
//     activateButton("#crm-button", "#crm-image");
//   });
//   $("#gestor-button").click(function () {
//     activateButton("#gestor-button", "#gestor-image");
//   });
//   $("#contact-button").click(function () {
//     activateButton("#contact-button", "#contact-image");
//   });
// });

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

        // Adiciona classes para animar a saída da imagem atual
        activeImage.classList.remove("active");
        activeImage.classList.add("slide-out-left");

        // Adiciona classes para animar a entrada da nova imagem
        newImage.classList.add("slide-in-left", "active");

        // Remove as classes de animação após a transição
        setTimeout(() => {
          activeImage.classList.remove("slide-out-left");
          newImage.classList.remove("slide-in-left");
        }, 500); // Tempo deve coincidir com a duração da transição
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
