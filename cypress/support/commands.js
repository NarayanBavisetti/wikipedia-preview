import { ArticelPage } from "../integration/pageObject/articlePage";
import { Homepage } from "../integration/pageObject/HomePage";
const homepage = new Homepage();
const articlePage  = new ArticelPage();

Cypress.Commands.add("openingArticle", (articleName) => {
  cy.get("div.title").each(($el, index, $list) => {
    if ($el.text().includes(articleName)) {
      cy.get("div.title").eq(index);
      cy.getHomePage("/");
      // cy.go('back')
    }
  });
});
Cypress.Commands.add("getHomePage", (page) => {
  return cy.visit("http://localhost:8080" + page);
});
Cypress.Commands.add("bodyTitle", (articleName) => {
  cy.get("div.title").each(($el, index, $list) => {
    if ($el.text().includes(articleName)) {
      cy.get("div.title").eq(index).get("div.para").eq(index);
      // cy.go('back')
    }
  });
});
Cypress.Commands.add("openingApopups2", (popupName) => {
  cy.get("span.wmf-wp-with-preview").each(($el, index, $list) => {
    if ($el.text().includes(popupName)) {
      // cy.get('span.wmf-wp-with-preview').eq(index).trigger('mouseover')
      // cy.get('span.wmf-wp-with-preview').eq(index).invoke('show')
      cy.get("span.wmf-wp-with-preview").eq(index).click({ force: true });
      cy.wait(2000);
      cy.popUpBox().should("be.visible");
      cy.popUpBoxHeaderImg().should("be.visible");
      cy.popUpBoxCloseBtn().should("be.visible");
      // <span class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readmore">Lanjutkan Membaca</span>
      cy.contains("Lanjutkan Membaca").click();
      cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
      cy.wait(2000);
      cy.popUpBoxFooterImg2().should("be.visible");
      cy.popUpBoxCloseBtn().should("be.visible");
      // <a href="https://id.wikipedia.org/wiki/Pulau_Lombok?wprov=wppw1" class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readonwiki" target="_blank"></a>
      cy.contains("Baca lebih lanjut tentang Wikipedia").should("be.visible");
      cy.popUpBoxCloseBtn().click();
      // cy.contains('Read more on Wikipedia').invoke('removeAttr','target').click()
      // homepage.getHomePage('/articles/english.html');
      // cy.go(-1)
      //  articlePage .getCloseButton('wikipediapreview-header-closebtn').click()
    }
  });
});
Cypress.Commands.add("openingApopups", (popupName) => {
  cy.get("span.wmf-wp-with-preview").each(($el, index, $list) => {
    if ($el.text().includes(popupName)) {
      // cy.get('span.wmf-wp-with-preview').eq(index).trigger('mouseover')
      // cy.get('span.wmf-wp-with-preview').eq(index).invoke('show')
      // cy.get("span.wmf-wp-with-preview").eq(index).click({ force: true });
      cy.get("span.wmf-wp-with-preview").eq(index).trigger("mouseenter");
      cy.wait(2000);
      cy.popUpBox().should("be.visible");
      cy.popUpBoxHeaderImg().should("be.visible");
      cy.popUpBoxCloseBtn().should("be.visible");
      cy.contains("Continue Reading").click();
      cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
      cy.wait(2000);
      cy.popUpBoxFooterImg2().should("be.visible");
      // cy.popUpBoxFooterImg3().should("be.visible");
      cy.popUpBoxCloseBtn().should("be.visible");
      cy.contains("Read more on Wikipedia").should("be.visible");
      cy.popUpBoxCloseBtn().click();
      // cy.contains('Read more on Wikipedia').invoke('removeAttr','target').click()
      // homepage.getHomePage('/articles/english.html');
      // cy.go(-1)
      //  articlePage .getCloseButton('wikipediapreview-header-closebtn').click()
    }
  });
});


Cypress.Commands.add("bodyTitle", () => {
  cy.get("body> div.container > div.listview > div.item > a ");
});
Cypress.Commands.add("bodySubTitle", () => {
  cy.get("body> div.container > div.listview > div.item > a ");
});
Cypress.Commands.add("bodyLink", () => {
  cy.get("body> div.container > div.listview > div.item > a ");
});

Cypress.Commands.add("bodyImage", () => {
  cy.get("body > div.container > div.cover", { timeout: 10000 });
});

Cypress.Commands.add("popUpBox", () => {
  cy.get("body > div.wp-popup", { timeout: 10000 });
});

Cypress.Commands.add("popUpBoxHeaderImg", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-image",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxHeader", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-wordmark wikipediapreview-header-wordmark-with-image wikipediapreview-header-wordmark-id", { timeout: 10000 }
  );
});

Cypress.Commands.add("popUpBoxFooterImg1", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)",
    { timeout: 10000 }
  );
});

Cypress.Commands.add("popUpBoxFooterImg2", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)",
    { timeout: 10000 }
  );
});

Cypress.Commands.add("popUpBoxFooterImg3", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(3)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg4", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(4)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg5", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(5)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg6", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(6)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg7", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(7)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg8", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(8)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg9", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(9)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg10", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(10)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg11", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(11)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg12", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(12)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg13", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(13)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg14", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(14)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg15", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(15)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg16", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(16)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg17", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(17)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg18", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(18)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg19", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(19)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg20", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(20)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg21", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(21)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg22", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(22)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg23", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(23)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg24", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(24)",
    { timeout: 10000 }
  );
});
Cypress.Commands.add("popUpBoxFooterImg25", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(25)",
    { timeout: 10000 }
  );
});


Cypress.Commands.add("popUpBoxCloseBtn", () => {
  cy.get(
    "body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-closebtn"
  );
});
Cypress.Commands.add("popUpBoxFoooterLink", () => {
  cy.get(
    "body > div.wp-popup > div.wikipediapreview > div.wikipediapreview-footer  > a",
    { timeout: 10000 }
  );
});
