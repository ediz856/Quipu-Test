import { expect } from 'chai';

describe('Login Test', () => {
  it('should log in with valid credentials', async () => {
    await browser.url('http://www.automationpractice.pl/index.php');
    
    // Navigate to login page
    const loginButton = await $('a.login');
    await loginButton.click();

    // Enter login credentials
    const emailField = await $('#email');
    const passwordField = await $('#passwd');
    await emailField.setValue('testuser@example.com');
    await passwordField.setValue('TestPassword123');

    // Submit login form
    const submitButton = await $('#SubmitLogin');
    await submitButton.click();

    // Assert login was successful by checking if the logout button is visible
    const logoutButton = await $('.logout');
    expect(await logoutButton.isDisplayed()).to.be.true;
  });
});