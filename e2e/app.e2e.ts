import { NgConfTwitterPage } from './app.po';

describe('ng-conf-twitter App', function() {
  let page: NgConfTwitterPage;

  beforeEach(() => {
    page = new NgConfTwitterPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-conf-twitter works!');
  });
});
