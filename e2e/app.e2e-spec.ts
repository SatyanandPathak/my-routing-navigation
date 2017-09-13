import { MyRoutingNavigationPage } from './app.po';

describe('my-routing-navigation App', () => {
  let page: MyRoutingNavigationPage;

  beforeEach(() => {
    page = new MyRoutingNavigationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
