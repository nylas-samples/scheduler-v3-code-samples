# Nylas Scheduler editor example using custom authentication

This repository provides a simple example of how to integrate the Nylas Scheduler Editor and Scheduling components in a React application. The example demonstrates how to use the `@nylas/react` library to manage scheduling functionalities, using custom authentication with a `CustomIdentityRequestWrapper` class.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- **Node.js** (v12 or later)
- **npm** or **yarn** for package management
- **Nylas API Access Token**: You need an access token from Nylas. Refer to the [docs](https://developer.nylas.com/docs/v3/auth/hosted-oauth-accesstoken/#make-authorization-request). **Note:** The access token should be generated from the same origin where the components are integrated.

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

### Generating the access token
0. Pre-requisite:
Set the callback uri in the dashboard to: (Javascript)
url - https://127.0.0.1:3000/scheduler-editor
origin - https://127.0.0.1:3000
(Assuming they want to host the scheduler editor on localhost:3000)

1. Get the code:
https://api.eu.nylas.com/v3/connect/auth?client_id=<client_id>&redirect_uri=https://127.0.0.1:3000/scheduler-editor&access_type=offline&response_type=code&options=rotate_refresh_token&provider=google

2. Exchange the code for token
curl -X POST https://api.eu.nylas.com/v3/connect/token \
-H "Content-Type: application/json" \
-H "Origin: https://127.0.0.1:3000" \
-d '{
  "code": "<code_from_above>",
  "client_id": "<client_id>",
  "client_secret": "<client_secret>",
  "redirect_uri": "https://127.0.0.1:3000/scheduler-editor",
  "grant_type": "authorization_code"
}'

3. Use the access token from above in the component (Redirect to http://localhost:3000/scheduler-editor. Note that you need to redirect to localhost, not https://127.0.0.1:3000)

4. Ensure that your CustomIdentityRequestWrapper has a function `currentUser` that returns the same email as that of the access token 

### License

This project is licensed under the MIT [License](https://github.com/nylas-samples/scheduler-v3-code-samples/blob/main/LICENSE) - see the LICENSE file for details.
