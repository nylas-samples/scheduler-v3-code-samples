import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NylasSchedulerEditor, NylasScheduling } from "@nylas/react";
import LoginComp from '@nylas/login-component';
import "./App.css";
import { NylasSessions } from '@nylas/identity';
import { NylasIdentityRequestWrapper } from '@nylas/react';

function App() {
  // Get the configuration ID from the URL query string
  const urlParams = new URLSearchParams(window.location.search);
  const clientId = '<YOUR_NYLAS_APP_CLIENT_ID>'; // Replace with your Nylas client ID from the previous section
  const configId = urlParams.get("config_id") || "";
  const componentSettings = {
    // Adjust the scopes as needed
    authSettings: {
      scopes: {
        google: [
          'openid',
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/contacts',
          'https://www.googleapis.com/auth/calendar',
          'https://www.googleapis.com/auth/directory.readonly',
        ],
        microsoft: ['Calendars.ReadWrite', 'Mail.ReadWrite', 'Contacts.ReadWrite', 'User.Read', 'offline_access'],
      },
    },
  };
  const identitySettings = {
    clientId: clientId,
    redirectUri: `${window.location.origin}/nylas-auth/scheduler-editor`,
    domain: 'https://api.us.nylas.com/v3', // or 'https://api.eu.nylas.com/v3' for EU data center
    hosted: true,
    accessType: 'offline',
  };
  const identity = new NylasSessions(identitySettings);
  const nylasApiRequest = new NylasIdentityRequestWrapper(identity);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/meet" element={
          <div>
            <a href="/scheduler-editor" className="button">View Scheduler Editor</a>
            <NylasScheduling
              configurationId={configId}
              schedulerApiUrl="https://api.us.nylas.com" // or 'https://api.eu.nylas.com' for EU data center
            />
          </div>
        } />
        <Route path="/login" element={
          <div>
            <LoginComp
              clientId={clientId}
              redirectUri={`${window.location.origin}/nylas-auth/scheduler-editor`}
              config={componentSettings}
              identity={identity} popup={false} hosted={false} />
          </div>
        } />
        <Route path="/nylas-auth/scheduler-editor" element={
          <div>
            <NylasSchedulerEditor
              schedulerPreviewLink={`${window.location.origin}/meet?config_id={config.id}`}
              nylasApiRequest={nylasApiRequest}
              defaultSchedulerConfigState={{
                selectedConfiguration: {
                  requires_session_auth: false, // Creates a public configuration which doesn't require a session
                }
              }}
            />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;     