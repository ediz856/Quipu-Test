import { expect } from 'chai';

describe('Add to Cart Test', () => {
  it('should add a product to the cart', async () => {
    await browser.url('http://www.automationpractice.pl/index.php');
    
    // Perform search to find a product
    const searchField = await $('#search_query_top');
    const searchButton = await $('button[name="submit_search"]');
    await searchField.setValue('dress');
    await searchButton.click();

    // Add the first product from the search results to the cart
    const firstProduct = await $('.product_list .product-container');
    const addToCartButton = await firstProduct.$('.ajax_add_to_cart_button');
    await addToCartButton.click();

    // Wait for the modal to confirm addition to cart and verify it
    const modal = await $('.layer_cart_product');
    await modal.waitForDisplayed();
    const confirmationMessage = await modal.$('h2');
    expect(await confirmationMessage.getText()).to.contain('Product successfully added to your shopping cart');
    
    // Close the modal and verify the product is in the cart
    const closeModal = await $('.cross');
    await closeModal.click();
    const cartButton = await $('.shopping_cart');
    await cartButton.click();

    const cartSummary = await $('#cart_summary');
    expect(await cartSummary.isDisplayed()).to.be.true;
  });
});