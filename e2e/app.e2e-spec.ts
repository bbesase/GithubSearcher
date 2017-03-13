import { GithubSearcherPage } from './app.po';

describe('github-searcher App', function() {
  let page: GithubSearcherPage;

  beforeEach(() => {
    page = new GithubSearcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
