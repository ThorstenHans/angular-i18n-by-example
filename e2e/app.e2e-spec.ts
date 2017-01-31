import { HelpdeskPage } from './app.po';

describe('helpdesk App', function() {
  let page: HelpdeskPage;

  beforeEach(() => {
    page = new HelpdeskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
