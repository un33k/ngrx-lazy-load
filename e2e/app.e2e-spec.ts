import { NgrxLazyLoadPage } from './app.po';

describe('ngrx-lazy-load App', () => {
  let page: NgrxLazyLoadPage;

  beforeEach(() => {
    page = new NgrxLazyLoadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
