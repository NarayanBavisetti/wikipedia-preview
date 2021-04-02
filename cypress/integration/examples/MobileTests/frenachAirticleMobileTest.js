import { Homepage } from "../../pageObject/HomePage";
import { AirticelPage } from "../../pageObject/airticlePage";

const homepage = new Homepage();
const airticlePage = new AirticelPage();

describe("Wikimedia french page test", function () {
  before(function () {
    cy.getHomePage("/articles/french.html");
  });
  beforeEach(() => {
    cy.viewport("iphone-xr");
    cy.getHomePage("/articles/french.html");
  });

  it("check the header", () => {
    // cy.getHomePage("/articles/english.html");
    airticlePage.getHeader().should("have.text", "Wikipedia Preview demo");
    airticlePage
      .getHeader()
      .should("be.visible")
      .should("have.css", "font-size", "18px");
    airticlePage.getHeaderLink().should("have.attr", "href", "../index.html");
  });
  it("check the title", () => {
    airticlePage
      .getTitle()
      .should("have.text", "Conseil de sécurité des Nations unies");
  });
  it("check the cover image", () => {
    airticlePage.getCover().should("be.visible");
  });
  it("Check the body", () => {
    airticlePage.getPara1().should("have.css", "font-size", "16px");
    airticlePage.getPara2().should("have.css", "font-size", "16px");
  });

  it("check the popup résolutions", () => {
    airticlePage.getSpan2().should("have.text", "résolutions");
    airticlePage.getSpan2().click({ force: true });
    cy.wait(2000);
    cy.popUpBoxHeaderImg().should("be.visible");
    cy.popUpBoxCloseBtn().should("be.visible");
    cy.contains("Continuer à lire").click();
    cy.wait(2000);
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
    airticlePage.getSpan3().should("have.text", "droit de veto");
    airticlePage.getSpan3().click({ force: true });
    cy.wait(2000);
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
    airticlePage
      .getFooter()
      .contains("Conseil de sécurité des Nations unies")
      .should(
        "have.attr",
        "href",
        "https://fr.m.wikipedia.org/wiki/Conseil_de_s%C3%A9curit%C3%A9_des_Nations_unies"
      );
    airticlePage
      .getFooter()
      .contains("View Source")
      .should(
        "have.attr",
        "href",
        "https://github.com/wikimedia/wikipedia-preview"
      );
  });
});
