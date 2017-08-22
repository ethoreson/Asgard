import { AsgardPage } from './app.po';

describe('asgard App', () => {
  let page: AsgardPage;

  beforeEach(() => {
    page = new AsgardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
