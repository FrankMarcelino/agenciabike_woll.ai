const translationsNavBar = {
  pt: {
    produto: "Produto",
    solucoes: "Solução",
    diferenciais: "Diferenciais",
    cases: "Cases",
    empresa: "Empresa",
    contato: "Contato",
    login: "Login",
    cadastreSe: "Cadastre-se",
  },
  en: {
    produto: "Product",
    solucoes: "Solution",
    diferenciais: "Key advantages",
    cases: "Use Cases",
    empresa: "Company",
    contato: "Contact",
    login: "Login",
    cadastreSe: "Register",
  },
};

const translationsHeader1 = {
  pt: {
    inteligenciaArtificial: "Inteligência Artificial",
    simplesEacessivel: "simples e acessível para o",
    seuNegocio: "seu negócio",
    impactandoVidas:
      "Já estamos transformando milhares de empresas e impactando positivamente a vida de muitas pessoas.",
    milhao: "milhão",
    conversasTrocadas: "de conversas já trocadas",
    mil: "mil",
    estabelecimentosConectados: "estabelecimentos conectados",
    aumento: "Aumento",
    taxasConversao: "taxas de conversão",
    automacao: "automação",
  },
  en: {
    inteligenciaArtificial: "Artificial Intelligence",
    simplesEacessivel: "simple and accessible for",
    seuNegocio: "your business",
    impactandoVidas:
      "We are already transforming thousands of companies and positively impacting many lives.",
    milhao: "million",
    conversasTrocadas: "conversations exchanged",
    mil: "thousand",
    estabelecimentosConectados: "connected establishments",
    aumento: "Increase",
    taxasConversao: "conversion rates",
    automacao: "automation",
  },
};

const translationsHeader2 = {
  pt: {
    testeGratis: "Teste Gratis",
    wollAI: "Woll AI",
    maisTempoFamilia: "mais tempo com a família",
    maisRenda: "mais renda",
    saibaMais: "Saiba Mais",
  },
  en: {
    testeGratis: "Free Trial",
    wollAI: "Woll AI",
    maisTempoFamilia: "20% more time with your family",
    maisRenda: "30% more earnings",
    saibaMais: "Learn more",
  },
};

const translationsHeader3 = {
  pt: {
    possuiPetshopHeader3:
      "Possui um Petshop e quer automatizar parte do seu atendimento?",
    cadastreAquiHeader3:
      "Cadastre-se aqui e entre na lista dos primeiros que irão testar um Agente de IA gratuitamente.",
    cadastreSeHeader3: "Cadastre-se",
  },
  en: {
    possuiPetshopHeader3:
      "Do you own a petshop and want to automate part of your service?",
    cadastreAquiHeader3:
      "Register here and be on the list of the first to test an AI Agent for free.",
    cadastreSeHeader3: "Register",
  },
};

const translationsHeader4 = {
  pt: {
    temFloriculturaHeader4:
      "Tem uma floricultura e quer aumentar as suas vendas?",
    cadastreAquiHeader4:
      "Cadastre-se aqui e entre na lista dos primeiros que irão testar um Agente de IA gratuitamente.",
    cadastreSeHeader4: "Cadastre-se",
  },
  en: {
    temFloriculturaHeader4:
      "Are you a flower shop and want to increase your sales?",
    cadastreAquiHeader4:
      "Register here and be on the list of the first to test an AI Agent for free.",
    cadastreSeHeader4: "Register",
  },
};

const translationsProduto = {
  pt: {
    produtoTitulo: "Produto",
    produtoDescricao:
      "Nós oferecemos Agent AI as a Service para profissionais e SMBs, de uma forma simples e acessível.",
    produtoSaibaMais: "Saiba mais",
  },
  en: {
    produtoTitulo: "Product",
    produtoDescricao:
      "We offer Agent AI as a Service for professionals and SMBs in a simple and affordable way.",
    produtoSaibaMais: "Learn more",
  },
};

$(document).ready(function () {
  $("#language-selector").on("change", function () {
    const selectedLanguage = $(this).val();
    console.log("Idioma selecionado:", selectedLanguage); // Log para verificação
    updateTranslations(selectedLanguage);
  });

  function updateTranslations(lang) {
    updateLanguageSection(translationsNavBar, lang);
    updateLanguageSection(translationsHeader1, lang);
    updateLanguageSection(translationsHeader2, lang);
    updateLanguageSection(translationsHeader3, lang);
    updateLanguageSection(translationsHeader4, lang);
    updateLanguageSection(translationsProduto, lang);
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
