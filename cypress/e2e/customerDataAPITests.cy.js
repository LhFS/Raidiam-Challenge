describe('Customer Data API Tests', () => {
    const accountsEndpoint = '/test/api/accounts/v1/accounts';
    const accountInfoEndpoint = (accountId) => `/test/api/accounts/v1/accounts/${accountId}`;
  
    const tokens = {
      validAuthTokenAuthorised: Cypress.env('validAuthTokenAuthorised'),
      validAuthTokenRejected: Cypress.env('validAuthTokenRejected'),
      invalidAuthToken: Cypress.env('invalidAuthToken'),
      emptyAuthToken: ''
    };
  
    it('Get accounts list should return successful result', () => {
      cy.request({
        method: 'GET',
        url: accountsEndpoint,
        headers: {
          'Authorization': `Bearer ${tokens.validAuthTokenAuthorised}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
    });
  
    it('Get accounts list should return 403 Forbidden when the JWT does not have a valid payload', () => {
      cy.request({
        method: 'GET',
        url: accountsEndpoint,
        headers: {
          'Authorization': `Bearer ${tokens.invalidAuthToken}`
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(403);
      });
    });
  
    it('Get accounts list should return 403 Forbidden when the authorization status is REJECTED', () => {
      cy.request({
        method: 'GET',
        url: accountsEndpoint,
        headers: {
          'Authorization': `Bearer ${tokens.validAuthTokenRejected}`
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(403);
      });
    });
  
    it('Get accounts list should return 401 Unauthorized when the JWT is an invalid format', () => {
      cy.request({
        method: 'GET',
        url: accountsEndpoint,
        headers: {
          'Authorization': 'Bearer invalid_token'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });
  
    it('Get accounts list should return 401 Unauthorized when the authorization token is empty', () => {
      cy.request({
        method: 'GET',
        url: accountsEndpoint,
        headers: {
          'Authorization': `Bearer ${tokens.emptyAuthToken}`
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });
  
    it('Get account information should return successful result', () => {
      const accountId = Cypress.env('validAccountId');
      cy.request({
        method: 'GET',
        url: accountInfoEndpoint(accountId),
        headers: {
          'Authorization': `Bearer ${tokens.validAuthTokenAuthorised}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('Get account information should return 403 Forbidden when the JWT does not have a valid payload', () => {
      const accountId = Cypress.env('validAccountId');
      cy.request({
        method: 'GET',
        url: accountInfoEndpoint(accountId),
        headers: {
          'Authorization': `Bearer ${tokens.invalidAuthToken}`
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(403);
      });
    });
  
    it('Get account information should return 403 Forbidden when the authorization status is REJECTED', () => {
      const accountId = Cypress.env('validAccountId');
      cy.request({
        method: 'GET',
        url: accountInfoEndpoint(accountId),
        headers: {
          'Authorization': `Bearer ${tokens.validAuthTokenRejected}`
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(403);
      });
    });
  
    it('Get account information should return 401 Unauthorized when the JWT is an invalid format', () => {
      const accountId = Cypress.env('validAccountId');
      cy.request({
        method: 'GET',
        url: accountInfoEndpoint(accountId),
        headers: {
          'Authorization': 'Bearer invalid_token'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });
  
    it('Get account information should return 401 Unauthorized when the authorization token is empty', () => {
      const accountId = Cypress.env('validAccountId');
      cy.request({
        method: 'GET',
        url: accountInfoEndpoint(accountId),
        headers: {
          'Authorization': `Bearer ${tokens.emptyAuthToken}`
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });
  
    it('Get account information should return 404 Not Found with invalid account id', () => {
      const invalidAccountId = 'invalid-account-id';
      cy.request({
        method: 'GET',
        url: accountInfoEndpoint(invalidAccountId),
        headers: {
          'Authorization': `Bearer ${tokens.validAuthTokenAuthorised}`
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });
  