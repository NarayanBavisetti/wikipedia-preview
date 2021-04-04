import { Homepage } from "../../pageObject/HomePage";
import { ArticelPage } from "../../pageObject/articlePage";

const homepage = new Homepage();
const articlePage = new ArticelPage();

describe("Wikimedia bahasa page test", function () {
  beforeEach(() => {
    cy.viewport("iphone-xr");
    cy.getHomePage("/articles/bahasaIndonesia.html");
  });
  it("check the header", () => {
    // cy.getHomePage("/articles/english.html");
    articlePage.getHeader().should("have.text", "Wikipedia Preview demo");
    articlePage
      .getHeader()
      .should("be.visible")
      .should("have.css", "font-size", "18px");
    articlePage.getHeaderLink().should("have.attr", "href", "../index.html");
  });
  it("check the title", () => {
    articlePage.getTitle().should("have.text", "Gili Trawangan");
  });
  it("check the cover image", () => {
    articlePage.getCover().should("be.visible");
  });
  it("Check the body", () => {
    articlePage.getPara1().should("have.css", "font-size", "16px");
    articlePage.getPara2().should("have.css", "font-size", "16px");
  });

  it("check the popups Lombok", () => {
    articlePage.getSpan1A().should("have.text", "Lombok");
    articlePage
      .getSpan1A()
      .should(
        "have.attr",
        "href",
        "https://id.wikipedia.org/wiki/Pulau_Lombok"
      );
    articlePage.getSpan1A().trigger("mouseenter");
    cy.wait(2000);
    cy.popUpBoxHeaderImg().should("be.visible");
    cy.popUpBoxCloseBtn().should("be.visible");
    cy.contains("Lanjutkan Membaca").click();
    cy.wait(2000);
    cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg2().should("be.visible");
    cy.popUpBoxFooterImg3().should("be.visible");
    cy.contains("Baca lebih lanjut tentang Wikipedia").should("be.visible");
    cy.popUpBoxFoooterLink().should(
      "have.attr",
      "href",
      "https://id.wikipedia.org/wiki/Pulau_Lombok?wprov=wppw1"
    );
    cy.popUpBoxCloseBtn().click();
  });
  it("check the popup Gili Meno", () => {
    articlePage.getSpan2().should("have.text", "Gili Meno");
    articlePage.getSpan2().click({ force: true });
    cy.wait(2000);
    cy.popUpBoxHeaderImg().should("be.visible");
    cy.popUpBoxCloseBtn().should("be.visible");
    cy.contains("Lanjutkan Membaca").click();
    cy.wait(2000);
    cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg2().should("be.visible");
    cy.popUpBoxFooterImg3().should("be.visible");
    cy.contains("Baca lebih lanjut tentang Wikipedia").should("be.visible");
    cy.popUpBoxFoooterLink().should(
      "have.attr",
      "href",
      "https://id.wikipedia.org/wiki/Gili_Meno?wprov=wppw1"
    );
    cy.popUpBoxCloseBtn().click();
  });

  it("check the footer", () => {
    articlePage
      .getFooter()
      //   <a href="" target="_blank" data-wp-title="Gili_Trawangan" data-wp-lang="id"></a>
      .contains("Gili Trawangan")
      .trigger("mouseenter")

      .should(
        "have.attr",
        "href",
        "https://id.m.wikipedia.org/wiki/Gili_Trawangan"
      );
    cy.wait(2000);
    cy.popUpBoxHeaderImg().should("be.visible");
    cy.popUpBoxCloseBtn().should("be.visible");
    //   cy.popUpBoxHeader()
    cy.contains("Lanjutkan Membaca").click();
    cy.popUpBoxFooterImg1().scrollIntoView().should("be.visible");
    cy.popUpBoxFooterImg2().should("be.visible");
    cy.popUpBoxFooterImg3().should("be.visible");
    cy.contains("Baca lebih lanjut tentang Wikipedia").should("be.visible");
    cy.popUpBoxFoooterLink().should(
      "have.attr",
      "href",
      "https://id.wikipedia.org/wiki/Gili_Trawangan?wprov=wppw1"
    );
    cy.popUpBoxCloseBtn().click();
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
