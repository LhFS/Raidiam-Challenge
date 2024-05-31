const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    env: {
      validAuthTokenAuthorised: 'eyJhbGciOiAibm9uZSIsInR5cCI6ICJKV1QifQ==.eyJzY29wZSI6ICJhY2NvdW50cyBjb25zZW50OnVybjpiYW5rOmU2NzNmNWRkLTk0MjYtNDFmMC1hZjE2LWUxMDc4OTA1NDVkMSIsImNsaWVudDEifQ==.',
      validAuthTokenRejected: 'eyJhbGciOiAibm9uZSIsInR5cCI6ICJKV1QifQ==.eyJzY29wZSI6ICJhY2NvdW50cyBjb25zZW50OnVybjpiYW5rOjdiNGQ0MThmLTlmNTAtNGRlNi04YjY5LTRmOGViYjAwYWY2NyIsImNsaWVudF9pZCI6ImNsaWVudDEifQ==.',
      invalidAuthToken: 'eyJhbGciOiAibm9uZSIsInR5cCI6ICJKV1QifQ==.eyJzY29wZSI6ICJhY2NvdW50cyBjb25zZW50OnVybjpiYW5rOmU2NzNmNWRkLTk0MjYtNDFmMC1hZjE2LWUxMDc4OTA1NDVkMSIsImNsaWVudDEifQ==.',
      validAccountId: '87caf37b-f70f-440c-bacd-3b9399ca5d74'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      runMode: 2,
      openMode: 0,
    }
  }
});
