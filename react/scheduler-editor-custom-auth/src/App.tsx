import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NylasSchedulerEditor, NylasScheduling } from "@nylas/react";
import { CustomIdentityRequestWrapper } from './custom';
import "./App.css";

function App() {
  const accessToken = 'YOUR_ACCESS_TOKEN';
  const domain ='https://api.us.nylas.com/v3'; // or 'https://api.eu.nylas.com/v3' for EU data center

  // Get the configuration ID from the URL query string
  const urlParams = new URLSearchParams(window.location.search);
  const configId = urlParams.get("config_id") || "";

  const nylasApiRequest = new CustomIdentityRequestWrapper(accessToken, domain);

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
        <Route path="/custom-auth/scheduler-editor" element={
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