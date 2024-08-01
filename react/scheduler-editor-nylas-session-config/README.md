# Nylas Scheduler editor example using nylas session config

This repository provides a simple example of how to integrate the Nylas Scheduler Editor and Scheduling components in a React application. The example demonstrates how to use the `@nylas/react` library to manage scheduling functionalities, using `nylasSessionConfig` prop.

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

This project demonstrates the integration of Nylas components, specifically the Nylas Scheduler Editor and Scheduling components, using React and `react-router-dom` for routing. The application provides a simple interface for scheduling and editing scheduling configurations.

### `/src/App.tsx`

This is the main component of the application, responsible for setting up routes and integrating Nylas components. The App component handles the configuration and routing for the scheduling functionalities.

- **Dependencies**:

  - `react-router-dom` for client-side routing.
  - `@nylas/react` for Nylas Scheduler Editor and Scheduling components.

- **Main Functionality**:

  - Extracts the `config_id` from the URL query string.
  - Configures Nylas Scheduler Editor with `nylasSessionsConfig` prop.

### Routing Structure

  - **/meet:** Displays the NylasScheduling component, allowing users to view and book available time slots. It includes a button to navigate to the scheduler editor.
  - **/scheduler-editor:** Displays the NylasSchedulerEditor component, allowing users to configure and preview scheduling settings. The configuration includes identity settings for Nylas Sessions.

### How to Run

  1.	Start the development server:
  ```sh
    npm run dev
  ```
  2.	Open your browser and navigate to http://localhost:3000/scheduler-editor.

### License

This project is licensed under the MIT [License](https://github.com/nylas-samples/scheduler-v3-code-samples/blob/main/LICENSE) - see the LICENSE file for details.
