// import { NylasSessions } from 'https://cdn.jsdelivr.net/npm/test-pooja-identity@0.0.1/dist/nylas-identity.es.js';
import { NylasSessions } from "./nylas-identity.es";
const config = {
   clientId: '<YOUR_NYLAS_APP_CLIENT_ID>', // Replace with your Nylas client ID from the previous section
   redirectUri: `${window.location.origin}/login`,
   domain: 'https://api.us.nylas.com/v3', // or 'https://api.eu.nylas.com/v3' for EU data center
   hosted: false,
   accessType: "offline",
 };
const identity = new NylasSessions(config);

async function checkLoggedIn() {
  const loggedIn = await identity.isLoggedIn();
  return loggedIn;
}

export { identity, checkLoggedIn };