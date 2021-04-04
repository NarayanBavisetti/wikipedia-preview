import { Homepage } from "../pageObject/HomePage";
import { ArticelPage } from "../pageObject/articlePage";

const homepage = new Homepage();
const articlePage = new ArticelPage();

describe("Wikimedia hindi page test", function () {
  before(function () {
    cy.getHomePage("/articles/hindi.html");
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
      .should("have.text", "विस्तार से जानिये कालिंजर दुर्ग के बारे में");
  });
  it("check the cover image", () => {
    articlePage.getCover().should("be.visible");
  });
  it("Check the body", () => {
    articlePage.getPara1().should("have.css", "font-size", "16px");
    articlePage.getPara2().should("have.css", "font-size", "16px");
    articlePage.getPara3().should("have.css", "font-size", "16px");
    articlePage.getPara4().should("have.css", "font-size", "16px");
  });

  it("check the popup मन्दिर", () => {
    articlePage.getSpan1().should("have.text", "मन्दिर");
    articlePage.getSpan1().trigger("mouseenter");
    cy.popUpBoxHeaderImg().should("be.visible");
    cy.popUpBoxCloseBtn().should("be.visible");
    cy.contains("पढ़ना जारी रखें").click();
    cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
    cy.contains("विकिपीडिया पर अधिक पढ़ें").should("be.visible");
    cy.popUpBoxFoooterLink().should(
      "have.attr",
      "href",
      "https://hi.wikipedia.org/wiki/%E0%A4%AE%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A4%BF%E0%A4%B0?wprov=wppw1"
    );
    cy.popUpBoxCloseBtn().click();
  });
  it("check the popup हुमांयू", () => {
    articlePage.getSpan2().should("have.text", "हुमांयू");
    articlePage.getSpan2().trigger("mouseenter");
    cy.popUpBoxHeaderImg().should("be.visible");
    cy.popUpBoxCloseBtn().should("be.visible");
    cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
    cy.contains("विकिपीडिया पर अधिक पढ़ें").should("be.visible");
    cy.popUpBoxFoooterLink().should(
      "have.attr",
      "href",
      "https://hi.wikipedia.org/wiki/%E0%A4%B9%E0%A5%81%E0%A4%AE%E0%A4%BE%E0%A4%AF%E0%A5%82%E0%A4%81?wprov=wppw1"
    );
    cy.popUpBoxCloseBtn().click();
  });
  it("check the popup अंकगणितीय", () => {
    articlePage.getSpan4().should("have.text", "अंकगणितीय");
    articlePage.getSpan4().trigger("mouseenter");
    cy.popUpBoxHeaderImg().should("be.visible");
    cy.popUpBoxCloseBtn().should("be.visible");
    cy.contains("पढ़ना जारी रखें").click();
    cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg2().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg3().scrollIntoView().should("be.visible");
    cy.contains("विकिपीडिया पर अधिक पढ़ें").should("be.visible");
    cy.popUpBoxFoooterLink().should(
      "have.attr",
      "href",
      "https://hi.wikipedia.org/wiki/%E0%A4%85%E0%A4%82%E0%A4%95%E0%A4%97%E0%A4%A3%E0%A4%BF%E0%A4%A4?wprov=wppw1"
    );
    cy.popUpBoxCloseBtn().click();
  });
  it("check the footer", () => {
    articlePage
      .getFooter()
      .contains("कालिंजर")
      .trigger("mouseenter")
      .should(
        "have.attr",
        "href",
        "https://hi.m.wikipedia.org/wiki/%E0%A4%95%E0%A4%BE%E0%A4%B2%E0%A4%BF%E0%A4%82%E0%A4%9C%E0%A4%B0_%E0%A4%A6%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%97"
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
