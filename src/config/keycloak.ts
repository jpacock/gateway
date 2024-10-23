import Keycloak, { KeycloakConfig, KeycloakInitOptions } from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
};

const keycloak = new Keycloak(keycloakConfig);

export const initKeycloak = (onAuthenticatedCallback: () => void) => {
  const initOptions: KeycloakInitOptions = {
    onLoad: 'check-sso',
    enableLogging: true,
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256'
  };
  
  keycloak.init(initOptions).then(authenticated => {
    if (authenticated) {
      console.log('User is authenticated');
    } else {
      console.log('User is not authenticated');
    }
    onAuthenticatedCallback();
  }).catch(error => {
    console.error('Keycloak initialization failed', error);
  });

  keycloak.onAuthSuccess = () => {
    console.log('Authentication successful');
  };

  keycloak.onAuthError = (errorData) => {
    console.error('Authentication error', errorData);
  };

  keycloak.onAuthRefreshSuccess = () => {
    console.log('Token refreshed successfully');
  };

  keycloak.onAuthRefreshError = () => {
    console.error('Token refresh error');

  };

  keycloak.onTokenExpired = () => {
    console.warn('Token expired');
    keycloak.updateToken(30).then(refreshed => {
      if (refreshed) {
        console.log('Token refreshed successfully');
      } else {
        console.warn('Token not refreshed, user needs to reauthenticate');
      }
    }).catch(error => {
      console.error('Failed to refresh token', error);
    });
  };
};

export default keycloak;