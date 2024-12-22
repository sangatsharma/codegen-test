// import { test, expect } from "@playwright/test";

// test("Login using auth token in headers", async ({ page, context }) => {
//   // Your auth token
//   const authToken =
//     "Basic eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..mcHPjmWPQvnP-z7H.CiUjjPvBWA-dcHxxGc-2293y5gwqg_lPqORQ_RV7eqUbuGZknB-cY03ELVRU4SZAu2lNIrWZ1LH1MAeRv2-jDfi-Q42VD5bM9Y9KD_HPhqok2YWRV-Ti8EwptIFJ0vIFqIx7lc78NwtucQ74KzXnJRPzL4kWP3JpENtmcewafqRODSbljRG-RXgrz7uhfjNLN-LVACR3ho9p6bCj7bl4DzNfzBlyRn7lJslnHs2G-cjQX8xa-DNQx3bp7kVjMayUMWsBH5B7RufB5ToHWVsCyL5Y9nbqL9mbMrF7Fl2Fb21W67o8sWtEZ0kSClZ-MYexQPK6XnCgOkXUUHQrq9nyg85VpJvPr_dPt4FckmqydMge2fridQWSZXilJwRMfw7sL9ZyjxO2avX2gR6ZYGkQpnUmR1Wdp4TTBkyoWhMlF4CkUAJXmlqptss1VSEj6CkCoELI52kgeCDAHtWoOoVs6eQzSGVKeq6aXwUnokwd4uKlAU6tyL1wWU8zm2LzveVrG6cfA-Il8J08dTUzSh1ywPbpi2eY2kYfXEBNT-awGBynJ9SdKpsGU2LuEGj09nlThjzQPCvj2Rni1bMkkh_-bMAVOyv-V6iTc9zrq3wW32_ldPBXCGBCXOXi0BvfthPDR39PaVo-_5ng-lsoJnwebi_AnGl4tSfvOdf0CnVLOJg5FIPTZ1jUzuFBGnfYFOhBCLlsRDzHgyXzahEjDGn2Qx-M_qT7CbpBp3-Vumnhwb_ibEFOYRL3qAABK91qWDPiUVf2BRUaz-Xti63VYiSQY6nAe6_uER7LTJzbjPJZQYVnH8-g95ibiksboEcpiAp1ttWlfCN2ShixyLFil4caI6zRZ5WgxeqmSZUbaNfNeVqwok67rf372gmxOP8I5FheZJkGX5nZZ_COFgAE3vAyduDRpY0uh7qG80j6ZA__UUA-TwO46Ac0IPmMU0w-PAtJuS_gi1Zc6QlOHAa2elSrwXZ7czYcLQEPi9Wxvcyx-EKZ8e_PEwPFRsz0WUm_7JuxBHGKErHCCy77sPED_FRv5aY_JYopOwR7PndGOdFVZa7vtiOsjEZNCW2CBl97h5oDU5kJOUD5X9EKVxXbY5BveDrlzQbrDbOBbQCGDu_HutvGZA.G1sVFdKLqgYR5OwRsW9UGw";

//   // Intercept all requests and add the Authorization header
//   await page.route(
//     "https://web.restroxapp.com/en/auth/login",
//     (route, request) => {
//       const headers = {
//         ...request.headers(),
//         Authorization: authToken,
//       };
//       console.log(`Request to: ${request.url()}`); // Log the request URL
//       console.log(`Headers:`, headers); // Log the headers
//       route.continue({ headers });
//     }
//   );

//   // Log all responses for debugging
//   page.on("response", async (response) => {
//     console.log(`Response URL: ${response.url()}`);
//     console.log(`Status: ${response.status()}`);
//     console.log(`Headers:`, response.headers());
//   });

//   // Navigate to the site
//   await page.goto("https://web.restroxapp.com/en/restrox");

//   // Verify login success by checking for a specific element
//   await expect(page.locator("text=Sangat Sharma")).toBeVisible({
//     timeout: 10000,
//   });
// });
