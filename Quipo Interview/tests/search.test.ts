import { expect } from 'chai';

describe('Search Test', () => {
  it('should display results for a valid search keyword', async () => {
    await browser.url('http://www.automationpractice.pl/index.php');
    
    // Perform search
    const searchField = await $('#search_query_top');
    const searchButton = await $('button[name="submit_search"]');
    await searchField.setValue('dress');
    await searchButton.click();

    // Verify that search results are displayed
    const productList = await $('.product_list');
    expect(await productList.isDisplayed()).to.be.true;
    
    const products = await productList.$$('.product-container');
    expect(products.length).to.be.greaterThan(0);
  });
});