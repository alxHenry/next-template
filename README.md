# next-template
Basic template for next.js applications using Typescript, Next.js, Auth0, Material UI, Eslint, and Prettier.

## Getting Started
To run the application, you'll need to add a file named `authConfig.ts` to the root. In the file should be your Auth0 project domain and client id. For example:
```
const config = {
  domain: "projectDomain",
  clientId: "clientId"
};

export default config;
```
