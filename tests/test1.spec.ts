import { test, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../../codegen-test/.auth/user.json");
test.describe("Login Functionality with OTP", () => {
  const baseUrl = "https://web.restroxapp.com";
  const validUsername = "+977 980 6102971";

  test("Login with OTP prompt", async ({ page }) => {
    await page.goto(`${baseUrl}/en/auth/login`);

    // await page.fill('input[name="phone"]', validUsername);
    // await page.click('button[type="submit"]');

    // const otpInput = page.locator('input[data-input-otp="true"]');
    // await otpInput.waitFor();
    // console.log("Waiting for OTP input...");

    await page.waitForTimeout(8000);

    await expect(page).toHaveURL(`${baseUrl}/en/restrox`);
    // await page.context().storageState({ path: authFile });
    await page.getByRole("heading", { name: "Sangat Sharma" }).dblclick();
    await page.click(
      'button[aria-haspopup="dialog"][aria-controls="radix-:R39cfiqfja:"]'
    );

    await page
      .getByRole("button", { name: "Testing Free Role: SuperAdmin" })
      .click();
    await page.getByRole("button", { name: "Yes, Switch Restaurant" }).click();
    await page.waitForTimeout(8000);
    await page.locator("body").press("Escape");
    await page.getByRole("button", { name: "Menu" }).click();
    await page.getByRole("link", { name: "Dishes" }).click();
    await page.waitForTimeout(2000);
    await page.click('a[href="dish-setup/add-dish"]');
    await page.waitForTimeout(2000);
    await page
      .locator("button")
      .filter({ hasText: "Select dish type" })
      .click();
    await page.getByText("Veg", { exact: true }).click();
    await page.getByPlaceholder("Enter Dish Name").click();
    await page.getByPlaceholder("Enter Dish Name").fill("Veg Momoss1");
    await page.getByRole("img", { name: "Veg Momo" }).click();
    await page.locator("button").filter({ hasText: "Select Sub-Menu" }).click();
    await page.getByRole("option", { name: "Food Menu" }).click();
    await page.locator("button").filter({ hasText: "Select Category" }).click();
    await page.getByText("Breakfast").click();
    await page.locator('input[name="variants\\.0\\.price"]').click();
    await page.locator('input[name="variants\\.0\\.price"]').fill("120");
    await page.getByRole("button", { name: "Save Dish" }).click();
  });
});
