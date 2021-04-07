export class ArticelPage {
  getHeader() {
    return cy.get("body > a > div.header");
  }
  getHeaderLink() {
    return cy.get("body > a ");
  }
  getTitle() {
    return cy.get("body > div.container > div.title > p");
  }
  getCover() {
    return cy.get("body > div.container > div.cover");
  }
  getPara1() {
    return cy.get("body > div.container > div.content > p:nth-child(1)",
    { timeout: 10000 });
  }
  getPara2() {
    return cy.get("body > div.container > div.content > p:nth-child(2)",
    { timeout: 10000 });
  }
  getPara3() {
    return cy.get("body > div.container > div.content > p:nth-child(3)",
    { timeout: 10000 });
  }
  getPara4() {
    return cy.get("body > div.container > div.content > p:nth-child(4)",
    { timeout: 10000 });
  }
  getSpan1A(){
    return cy.get('body > div.container > div.content > p:nth-child(1) > a',
    { timeout: 10000 })
  }
  getSpan1B(){
    return cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)',
    { timeout: 10000 })
  }
  getSpan1C(){
    return cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(2)')
  }
  getSpan1(){
    return cy.get('body > div.container > div.content > p:nth-child(1) > span',
    { timeout: 10000 })
  }
  getSpan2(){
    return  cy.get('body > div.container > div.content > p:nth-child(2) > span',
    { timeout: 10000 })
  }
  getSpan3(){
    return  cy.get('body > div.container > div.content > p:nth-child(3) > span',
    { timeout: 10000 })
  }
  getSpan4(){
    return  cy.get('body > div.container > div.content > p:nth-child(4) > span',
    { timeout: 10000 })
  }
  getCloseButton(){
      return cy.get('body > div.wp-popup > div.wikipediapreview > div.wikipediapreview-header > div.wikipediapreview-header-closebtn')
  }
  getFooter() {
    return cy.get("body > div.footer > p ");
  }

}
