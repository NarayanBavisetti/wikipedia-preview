import { Homepage } from "../pageObject/HomePage";
import { ArticelPage } from "../pageObject/articlePage";

const homepage = new Homepage();
const articlePage = new ArticelPage();

describe("Wikimedia arabic page test", function () {
  before(function () {
    cy.getHomePage("/articles/arabic.html");
  });

  it("checking the header", () => {
    // cy.getHomePage("/articles/english.html");
    articlePage.getHeader().should("have.text", "Wikipedia Preview demo");
    articlePage
      .getHeader()
      .should("be.visible")
      .should("have.css", "font-size", "32px");
    articlePage.getHeaderLink().should("have.attr", "href", "../index.html");
  });
  it("cheching the title", () => {
    articlePage.getTitle().should("have.text", "أم كلثوم (مطربة)");
  });
  it("cheching the cover image", () => {
    articlePage.getCover().should("be.visible");
  });
  it("Checking the body", () => {
    articlePage.getPara1().should("have.css", "font-size", "16px");
    articlePage.getPara2().should("have.css", "font-size", "16px");
  });

  // it("cheching the popups القاهرة", () => {
  //   articlePage.getSpan1B().should("have.text", "القاهرة");
  //   articlePage.getSpan1B().trigger("mouseenter");
  //   cy.popUpBoxHeaderImg().should("be.visible");
  //   cy.popUpBoxCloseBtn().should("be.visible");
  //   cy.contains("مواصلة القراءة").click();
  //   cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
  //   cy.popUpBoxFooterImg2().scrollIntoView().should("be.visible");
  //   cy.popUpBoxFooterImg3().scrollIntoView().should("be.visible");
  //   cy.contains("اقرأ المزيد عن ويكيبيديا").should("be.visible");
  //   cy.popUpBoxFoooterLink().should(
  //     "have.attr",
  //     "href",
  //     "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9?wprov=wppw1"
  //   );
  //   cy.popUpBoxCloseBtn().click();
  // });
  it("cheching the popups مصر", () => {
    articlePage.getSpan1C().should("have.text", "مصر");
    articlePage.getSpan1C().trigger("mouseenter");
    cy.popUpBoxHeaderImg().should("be.visible");
    cy.popUpBoxCloseBtn().should("be.visible");
    cy.contains("مواصلة القراءة").click();
    cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg2().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg3().scrollIntoView().should("be.visible");
    cy.contains("اقرأ المزيد عن ويكيبيديا").should("be.visible");
    cy.popUpBoxFoooterLink().should(
      "have.attr",
      "href",
      "https://ar.wikipedia.org/wiki/%D9%85%D8%B5%D8%B1?wprov=wppw1"
    );
    cy.popUpBoxCloseBtn().click();
  });
  it("cheching the popups محمد_عبد_الوهاب", () => {
    articlePage.getSpan2().should("have.text", "محمد_عبد_الوهاب");
    articlePage.getSpan2().trigger("mouseenter");
    cy.popUpBoxHeaderImg().should("be.visible");
    cy.popUpBoxCloseBtn().should("be.visible");
    cy.contains("مواصلة القراءة").click();
    cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg2().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg3().scrollIntoView().should("be.visible");
    cy.contains("اقرأ المزيد عن ويكيبيديا").should("be.visible");
    cy.popUpBoxFoooterLink().should(
      "have.attr",
      "href",
      "https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D9%85%D8%AF_%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%88%D9%87%D8%A7%D8%A8?wprov=wppw1"
    );
    cy.popUpBoxCloseBtn().click();
  });
  it("cheching the footer", () => {
    articlePage
      .getFooter()
      .contains("أم كلثوم (مطربة)")
      .should(
        "have.attr",
        "href",
        "https://ar.m.wikipedia.org/wiki/%D8%A3%D9%85_%D9%83%D9%84%D8%AB%D9%88%D9%85_(%D9%85%D8%B7%D8%B1%D8%A8%D8%A9)"
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
//--- /api/rest_v1/page/summary/مصر?wprov=wppw1
