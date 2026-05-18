// @ts-check
import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


test.skip('ok',({page}) =>{
 
})

test ('test1',async({page})=>{
  test.setTimeout(10);
  test.step('check if 2 is eq to 3',()=>{
    test.fail();
    expect(2).toBe(3);     //false =>fail
  })
 test.step('check if 2 is eq to 2', () => {
    // test.fail();
    expect(2).toBe(2);
  })
   test.step('check if 5 is eq to 5', () => {
    // test.fail();
    expect(5).toBe(5);
   })
})

test.fixme('test', async ({ page }) => {
  // test.setTimeout(1000);
  await page.goto('https://www.amazon.com/');
    await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.goto('https://www.amazon.com/s?k=game&crid=3S8S6IVCUAN9I&sprefix=%2Caps%2C376&ref=nb_sb_noss');
  await page.locator('.a-link-normal').first().click();
  await page.getByRole('button', { name: 'Snort Funny – The Oinkrediblle' }).click();
 
  
});