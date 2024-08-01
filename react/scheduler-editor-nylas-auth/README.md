# Nylas Scheduler editor example using nylas authentication

This repository provides a simple example of how to integrate the Nylas Scheduler Editor and Scheduling components in a React application. The example demonstrates how to use the `@nylas/react` library to manage scheduling functionalities, using nylas authentication with `@nylas/idenity` package and `NylasIdentityRequestWrapper`.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- **Node.js** (v12 or later)
- **npm** or **yarn** for package management
- **Nylas API Access Token**: You need an access token from Nylas. You can obtain this by signing up for a Nylas account and creating an application.

### Installation

1. **Download the repository as a ZIP file:**

   - Go to the repository's GitHub page.
   - Click the "Code" button.
   - Select "Download ZIP".

2. **Extract the ZIP file:**

   Extract the contents of the downloaded ZIP file to a directory of your choice.

3. **Navigate to the extracted directory:**
  ```sh
    cd path-to-extracted-directory
  ```

4. **Install dependencies**
  ```sh
    npm install
  ```
  or
  ```sh
    yarn install
  ```

5. **Set up variables**
You can set your Nylas application client id directly in the code or use environment variables. For this example, replace '<YOUR_NYLAS_APP_CLIENT_ID>' with your actual Nylas application client id in the App.tsx file.


# Project Structure

This project demonstrates the integration of Nylas components, including the Scheduler Editor and Scheduling components, along with custom authentication using Nylas Identity and Login components. The application is built with React and uses `react-router-dom` for routing.

### `/src/components/App.tsx`

This is the main component of the application, responsible for setting up routes and integrating Nylas components.

- **Dependencies**: 
  - `react-router-dom` for routing.
  - `@nylas/react` for Nylas Scheduler Editor and Scheduling components.
  - `@nylas/login-component` for the login UI.
  - `@nylas/identity` for managing Nylas identity and sessions.

- **Main Functionality**:
  - Extracts the `config_id` from the URL query string.
  - Configures Nylas components, including custom authentication and identity management.

### Routing Structure

	•	**/meet:** Displays the NylasScheduling component, allowing users to view and book available time slots.
	•	**/login:** Displays the LoginComp component, which handles the login process using Nylas’ OAuth flow.
	•	**/nylas-auth/scheduler-editor:** Displays the NylasSchedulerEditor component, allowing users to configure and preview scheduling settings.

### Configuration Details

	•	**clientId:** Your Nylas application client ID.
	•	**configId:** Extracted from the URL, used to load specific scheduling configurations.
	•	**componentSettings:** Contains settings for authentication scopes and other configurations.
	•	**identitySettings:** Specifies settings for Nylas identity management, including clientId, redirectUri, domain, hosted, and accessType.

### How to Run
  1.	Start the development server:
  ```sh
    npm run dev
  ```
  2.	Open your browser and navigate to http://localhost:3000/login.

### License

This project is licensed under the MIT [License](https://github.com/nylas-samples/scheduler-v3-code-samples/blob/main/LICENSE) - see the LICENSE file for details.
