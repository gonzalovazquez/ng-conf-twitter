export class NgConfTwitterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-conf-twitter-app h1')).getText();
  }
}
