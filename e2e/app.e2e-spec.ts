import { AlanAppPage } from './app.po';

describe('alan-app App', function() {
  let page: AlanAppPage;

  beforeEach(() => {
    page = new AlanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
