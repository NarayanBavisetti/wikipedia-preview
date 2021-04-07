import { Homepage } from "../../pageObject/HomePage";
import { ArticelPage } from "../../pageObject/articlePage";

const homepage = new Homepage();
const articlePage = new ArticelPage();

describe("Wikimedia spanish page test", function () {
  beforeEach(() => {
    cy.viewport("iphone-xr");
    cy.getHomePage("/articles/spanish.html");
  });

  it("checkthe header", () => {
    // cy.getHomePage("/articles/english.html");
    articlePage.getHeader().should("have.text", "Wikipedia Preview demo");
    articlePage
      .getHeader()
      .should("be.visible")
      .should("have.css", "font-size", "18px");
    articlePage.getHeaderLink().should("have.attr", "href", "../index.html");
  });
  it("check the title", () => {
    articlePage.getTitle().should("have.text", "Nikola Tesla");
  });
  it("check the cover image", () => {
    articlePage.getCover().should("be.visible");
  });
  it("Check the body", () => {
    articlePage.getPara1().should("have.css", "font-size", "16px");
    articlePage.getPara2().should("have.css", "font-size", "16px");
    articlePage.getPara3().should("have.css", "font-size", "16px");
  });

  it("check the popup motor de corriente alterna", () => {
    articlePage.getSpan1().should("have.text", "motor de corriente alterna");
    articlePage.getSpan1().click({ force: true });
    cy.popUpBoxHeaderImg().should("be.visible");
    cy.popUpBoxCloseBtn().should("be.visible");
    cy.contains("Continuar leyendo").click();
    cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg2().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg3().scrollIntoView().should("be.visible");
    cy.contains("Leer más en Wikipedia").should("be.visible");
    cy.popUpBoxFoooterLink().should(
      "have.attr",
      "href",
      "https://es.wikipedia.org/wiki/Motor_de_corriente_alterna?wprov=wppw1"
    );
    cy.popUpBoxCloseBtn().click();
  });

  it("check the popup  Edison", () => {
    articlePage.getSpan2().should("have.text", "Edison");
    articlePage.getSpan2().click({ force: true });
    cy.popUpBoxHeaderImg().should("be.visible");
    cy.popUpBoxCloseBtn().should("be.visible");
    cy.contains("Continuar leyendo").click();
    cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg2().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg3().scrollIntoView().should("be.visible");
    cy.contains("Leer más en Wikipedia").should("be.visible");
    cy.popUpBoxFoooterLink().should(
      "have.attr",
      "href",
      "https://es.wikipedia.org/wiki/Thomas_Alva_Edison?wprov=wppw1"
    );
    cy.popUpBoxCloseBtn().click();
  });

  it("check the popup Smiljan", () => {
    articlePage.getSpan3().should("have.text", "Smiljan");
    articlePage.getSpan3().click({ force: true });
    cy.popUpBoxHeaderImg().should("be.visible");
    cy.popUpBoxCloseBtn().should("be.visible");
    cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg2().scrollIntoView().should("be.visible");
    cy.contains("Leer más en Wikipedia").should("be.visible");
    cy.popUpBoxFoooterLink().should(
      "have.attr",
      "href",
      "https://es.wikipedia.org/wiki/Smiljan?wprov=wppw1"
    );
    cy.popUpBoxCloseBtn().click();
  });

  it("check the footer", () => {
    articlePage
      .getFooter()
      .contains("Nikola Tesla")
      .should(
        "have.attr",
        "href",
        "https://es.m.wikipedia.org/wiki/Nikola_Tesla"
      );
    articlePage
      .getFooter()
      .contains("View Source")
      .should(
        "have.attr",
        "href",
        "https://github.com/wikimedia/wikipedia-preview"
      );
  });
});
