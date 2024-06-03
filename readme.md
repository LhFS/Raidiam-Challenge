# Raidiam Assessment

This project is designed to test the Customer Data API using Cypress. It includes various test cases to ensure the API endpoints are functioning correctly. The tests are written in JavaScript and are intended to be run using Cypress. Additionally, the project is configured to run tests in a CI/CD pipeline using GitHub Actions.

The Github Actions will not work at this moment, because in order to make it work we need to setup a job to run the API server.

## Prerequisites

Before you can run the tests, you need to set up and run the Customer Data API server locally. Follow these steps:

1. **Clone the following repository**:
   ```sh
   git clone https://bitbucket.org/thiagohcn/customer-data-api-java/src/master/

   ```
2. **Access the repository link**
   ```sh
   Follow the instructions in the API repository to run the server locally. Ensure the server is running on http://localhost:8080.
   ```

## Project structure

- cypress.config.js: Configuration file for Cypress.
- cypress/e2e/api_tests_spec.js: Contains the test cases for the API.
- .github/workflows/cypress.yml: GitHub Actions workflow file to run the tests in a CI/CD pipeline.

## How to run the tests

1. **Install dependencies**:
   ```sh
    npm install
   ```
2. **Run cypress tests**:
   ```sh
   npx cypress open
   This will open the Cypress Test Runner. You can then select the test file api_tests_spec.js to run the tests.

- Alternatively, to run the tests in headless mode, use:
  ```sh
   npx cypress run
  ```

## Test Cases

The following scenarios are tested:

Get accounts list:

- Should return a successful result.
- Should return 403 Forbidden when the JWT does not have a valid payload.
- Should return 403 Forbidden when the authorization status is REJECTED.
- Should return 401 Unauthorized when the JWT is in an invalid format.
- Should return 401 Unauthorized when the authorization token is empty.

Get account information:

- Should return a successful result.
- Should return 403 Forbidden when the JWT does not have a valid payload.
- Should return 403 Forbidden when the authorization status is REJECTED.
- Should return 401 Unauthorized when the JWT is in an invalid format.
- Should return 401 Unauthorized when the authorization token is empty.
- Should return 404 Not Found with an invalid account id.

## CI/CD Pipeline

The CI/CD pipeline is configured using GitHub Actions. The workflow file is located at .github/workflows/cypress.yml.

## Current limitations

Currently, it is not possible to run a successful pipeline because the API server needs to be running before the tests can be executed. This requires setting up a job to start the server and configure all necessary settings before running the tests.
