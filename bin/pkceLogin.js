#!/usr/bin/env node
"use strict";

const chalk = require("chalk");
const dotenv = require("dotenv");
const result = dotenv.config({ path: '/Users/robertluo/github/hello-cli/.env' });
if (result.error) {
  throw result.error;
}
const authClient = require("../src/authClient");

// read in settings
console.log(process.cwd())

const config = {
  oktaOrgUrl: process.env.OKTA_ORG_URL,
  clientId: process.env.OKTA_CLIENT_ID,
  scopes: process.env.OKTA_SCOPES,
  serverPort: process.env.OKTA_REDIRECT_PORT
};

console.log(config)

const main = async () => {
  try {
    const auth = authClient(config);
    const { token, userInfo } = await auth.executeAuthFlow();
    console.log(token, userInfo);
    console.log(chalk.bold("You have successfully authenticated your CLI application!"));
  } catch (err) {
    console.log(chalk.red(err));
  }
};

main();