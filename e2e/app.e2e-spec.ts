import { WestlandWerwingPage } from './app.po';

describe('westland-werwing App', () => {
  let page: WestlandWerwingPage;

  beforeEach(() => {
    page = new WestlandWerwingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
