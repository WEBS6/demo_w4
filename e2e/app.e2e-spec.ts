import { DemoW1Page } from './app.po';

describe('demo-w1 App', () => {
  let page: DemoW1Page;

  beforeEach(() => {
    page = new DemoW1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
