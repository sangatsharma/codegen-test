import {
  generateReactQueryComponents,
  generateSchemaTypes,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
import { Context } from "@openapi-codegen/typescript/lib/generators/types";
import dotenv from "dotenv";
dotenv.config({path: "../../.env"});

console.log(process.env.NEXT_PUBLIC_API_URL);
console.log(process.env.API_AUTH_TOKEN);
export default defineConfig({
  api: {
    from: {
      source: "url",
      url: process.env.NEXT_PUBLIC_API_URL as string,
      headers: {
        Authorization: `Basic ${process.env.API_AUTH_TOKEN}`,
      },
    },
    outputDir: "../../api",
    to: async (context: Context) => {
      await generateSchemaTypes(context, {
        filenamePrefix: "api",
      });
      // Generate React Query components
      await generateReactQueryComponents(context, {
        filenamePrefix: "api",
        schemasFiles: {
          requestBodies: "apiRequestBodies.ts",
          schemas: "apiSchemas.ts",
          parameters: "apiParameters.ts",
          responses: "apiResponses.ts",
        },
      });
    },
  },
});
