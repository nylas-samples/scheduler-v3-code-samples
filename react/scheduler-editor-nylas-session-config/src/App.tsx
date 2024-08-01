import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NylasSchedulerEditor, NylasScheduling } from "@nylas/react";
import "./App.css";

function App() {
  // Get the configuration ID from the URL query string
  const urlParams = new URLSearchParams(window.location.search);
  const clientId = '<YOUR_NYLAS_APP_CLIENT_ID>'; // Replace with your Nylas client ID from the previous section
  const configId = urlParams.get("config_id") || "";

  const identitySettings = {
    clientId: clientId,
    redirectUri: `${window.location.origin}/scheduler-editor`,
    domain: 'https://api.us.nylas.com/v3', // or 'https://api.eu.nylas.com/v3' for EU data center
    hosted: true,
    accessType: 'offline',
  };
  
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
        <Route path="/scheduler-editor" element={
          <div>
            <NylasSchedulerEditor
              schedulerPreviewLink={`${window.location.origin}/meet?config_id={config.id}`}
              nylasSessionsConfig={identitySettings}
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