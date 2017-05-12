import { PostACommnentPage } from './app.po';

describe('post-a-commnent App', () => {
  let page: PostACommnentPage;

  beforeEach(() => {
    page = new PostACommnentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
