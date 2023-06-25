# aselgql
A GraphQL repository for ASEL

This repository contains graphql module for ASEL website.

Pre-Requisites:
- NodeJS version: v18.16.1
- NPM version: v9.5.1

Install the nodejs from the following url:

[NodeJS Download](https://nodejs.org/en/download)
Either you can install it in your system or you can download it and add nodejs unzipped path to your system properties (for windows users).

## Steps to run the project:
- Install nodejs from above step.
- Install typescript and yarn globally using the following command:
    ```
    npm install -g typescript yarn
    ```
    Please note that the 'g' in above command represents global installation of typescript.

    ```
    node --version
    yarn --version
    ```
    The above commands should not fail, which will ensure that the nodejs has been installed and yarn is ready.
- Checkout the project using git command:
    ```
    git clone https://github.com/vaalu/aselgql.git
    ```
- Run the following command to initialize the project:
    ```
    yarn
    ```
    After running yarn, just run the following command:
    ```
    yarn build
    ```
    After the command finishes without errors, run the following command:
    ```
    yarn start
    ```
    - The grapqhl server will start and will run in the following url:
    ```
    http://localhost:4000/graphql
    ```
    - You will be able to view the ui and the in the query window, you can apply following query:
    ```
    {
      services
    }
    ```
    Which should give the following result:
    ```
    {
        "data": {
            "services": [
            "meetups",
            "humanitarian assistances",
            "trusts"
            ]
        }
    }
```