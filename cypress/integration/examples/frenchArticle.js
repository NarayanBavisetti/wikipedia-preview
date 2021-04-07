import { Homepage } from "../pageObject/HomePage";
import { ArticelPage } from "../pageObject/articlePage";

const homepage = new Homepage();
const articlePage = new ArticelPage();

describe("Wikimedia french page test", function () {
  before(function () {
    cy.getHomePage("/articles/french.html");
  });

  it("check the header", () => {
    // cy.getHomePage("/articles/english.html");
    articlePage.getHeader().should("have.text", "Wikipedia Preview demo");
    articlePage
      .getHeader()
      .should("be.visible")
      .should("have.css", "font-size", "32px");
    articlePage.getHeaderLink().should("have.attr", "href", "../index.html");
  });
  it("check the title", () => {
    articlePage
      .getTitle()
      .should("have.text", "Conseil de sécurité des Nations unies");
  });
  it("check the cover image", () => {
    articlePage.getCover().should("be.visible");
  });
  it("Check the body", () => {
    articlePage.getPara1().should("have.css", "font-size", "16px");
    articlePage.getPara2().should("have.css", "font-size", "16px");
  });

  it("check the popup résolutions", () => {
    articlePage.getSpan2().should("have.text", "résolutions");
    articlePage.getSpan2().trigger("mouseenter");
    cy.popUpBoxHeaderImg().should("be.visible");
    cy.popUpBoxCloseBtn().should("be.visible");
    cy.contains("Continuer à lire").click();
    cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg2().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg3().scrollIntoView().should("be.visible");
    cy.contains("Lire davantage sur Wikipédia").should("be.visible");
    cy.popUpBoxFoooterLink().should(
      "have.attr",
      "href",
      "https://fr.wikipedia.org/wiki/Conseil_de_s%C3%A9curit%C3%A9_des_Nations_unies?wprov=wppw1"
    );
    cy.popUpBoxCloseBtn().click();
  });
  it("check the popup droit de veto", () => {
    articlePage.getSpan3().should("have.text", "droit de veto");
    articlePage.getSpan3().trigger("mouseenter");
    cy.popUpBoxCloseBtn().should("be.visible");
    cy.contains("Lire davantage sur Wikipédia").should("be.visible");
    cy.popUpBoxFoooterLink().should(
      "have.attr",
      "href",
      "https://fr.wikipedia.org/wiki/Veto?wprov=wppw1"
    );
    cy.popUpBoxCloseBtn().click();
  });
  it("check the footer", () => {
    articlePage
      .getFooter()
      .contains("Conseil de sécurité des Nations unies")
      .should(
        "have.attr",
        "href",
        "https://fr.m.wikipedia.org/wiki/Conseil_de_s%C3%A9curit%C3%A9_des_Nations_unies"
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
