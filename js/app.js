$(document).ready(function () {
  function activateButton(buttonId, imageId) {
    // Remove a classe ativa de todos os botões e imagens
    $(".crm-buttons button").removeClass("active");
    $(".crm-images img").removeClass("active").hide();
    // Adiciona a classe ativa ao botão e imagem correspondentes
    $(buttonId).addClass("active");
    $(imageId).addClass("active").show();
  }
  // Inicialmente ativa o botão CRM e mostra a imagem correspondente
  activateButton("#crm-button", "#crm-image");
  // Adiciona eventos de clique aos botões
  $("#crm-button").click(function () {
    activateButton("#crm-button", "#crm-image");
  });
  $("#gestor-button").click(function () {
    activateButton("#gestor-button", "#gestor-image");
  });
  $("#contact-button").click(function () {
    activateButton("#contact-button", "#contact-image");
  });
});
