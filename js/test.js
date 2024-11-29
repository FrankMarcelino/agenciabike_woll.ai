//crm carrousel
// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".crm-button");
//   const images = document.querySelectorAll(".crm-images img");
//   buttons.forEach((button, index) => {
//     button.addEventListener("click", () => {
//       const activeButton = document.querySelector(".crm-button.active");
//       const activeImage = document.querySelector(".crm-images img.active");
//       const newImage = images[index];
//       if (activeButton !== button) {
//         // Remove a classe ativa do botão atual
//         activeButton.classList.remove("active");
//         button.classList.add("active");
//         // Adiciona classes para animar a saída da imagem atual e a entrada da nova imagem
//         activeImage.classList.remove("active");
//         activeImage.classList.add("exit");
//         newImage.classList.add("active");
//         // Remove as classes de animação depois da transição
//         setTimeout(() => {
//           activeImage.classList.remove("exit");
//         }, 500);
//         // Tempo deve coincidir com a duração da transição
//       }
//     });
//   });
// });

// diferenciais acordion

// document.querySelectorAll(".faq-item").forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("active");
//   });
// });

// hero carrousel

// animacao das imagens da empres

// document.addEventListener("DOMContentLoaded", () => {
//   const images = document.querySelectorAll(".img-empresa");
//   let currentIndex = 0;

//   function showImage(index) {
//     images.forEach((img, i) => {
//       img.classList.toggle("active", i === index);
//     });
//   }

//   function startImageLoop() {
//     setInterval(() => {
//       showImage(currentIndex);
//       currentIndex = (currentIndex + 1) % images.length; // Incrementa o índice e reseta ao atingir o total de imagens
//     }, 1500); // Troca a cada 1 segundo
//   }

//   startImageLoop(); // Inicia o loop
// });

//animacao impacto

// document.addEventListener("DOMContentLoaded", () => {
//   const letters = document.querySelectorAll(".impacto-word .letter");
//   const words = document.querySelectorAll(".impacto-list .word");
//   let index = 0;

//   function showNextLetterAndWord() {
//     if (index < letters.length) {
//       letters[index].classList.add("cp3");
//       words[index].classList.add("show-word");
//       index++;
//       setTimeout(showNextLetterAndWord, 1000); // Muda a cada 1 segundo
//     }
//   }

//   showNextLetterAndWord(); // Inicia a animação
// });
