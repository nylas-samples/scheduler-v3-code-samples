# Nylas Scheduler editor example using custom authentication

This repository provides a simple example of how to integrate the Nylas Scheduler Editor and Scheduling components in a React application. The example demonstrates how to use the `@nylas/react` library to manage scheduling functionalities, using custom authentication with a `CustomIdentityRequestWrapper` class.

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

You can set your Nylas access token and domain directly in the code or use environment variables. For this example, replace 'YOUR_ACCESS_TOKEN' with your actual access token in the App.tsx file.


### Project Structure

  - **App.tsx:** The main application file that sets up routing and integrates Nylas components.
  - **custom.ts:** Contains the CustomIdentityRequestWrapper class, which handles custom API requests and authentication.

### App.tsx Overview

This file contains the main application logic and routing setup using react-router-dom.

  **Key Components and Logic**

  - **NylasSchedulerEditor:** This component is used to set up and configure scheduling.
  - **NylasScheduling:** This component displays the scheduling interface for users to book appointments.
  - **CustomIdentityRequestWrapper:** A custom class for handling authentication and API requests.

  **Routing**

  - **/meet:** Displays the NylasScheduling component. Users can view and book available time slots.
  - **/custom-auth/scheduler-editor:** Displays the NylasSchedulerEditor component, allowing configuration and preview of scheduling settings.

### custom.ts Overview

This file defines the CustomIdentityRequestWrapper class, which provides methods for handling API requests and user authentication.

  **Key Methods**

  - **request:** Sends a request to the Nylas API with appropriate headers and authentication.
  - **currentUser:** Returns user information.
  - **setDefaultAuthArgs:** Sets default authentication arguments.
  - **authenticationUrl:** Returns authentication URL.

### How to Run

  1.	Start the development server:
  ```sh
    npm run dev
  ```
  2.	Open your browser and navigate to http://localhost:3000/custom-auth/scheduler-editor.

### License

This project is licensed under the MIT [License](https://github.com/nylas-samples/scheduler-v3-code-samples/blob/main/LICENSE) - see the LICENSE file for details.
