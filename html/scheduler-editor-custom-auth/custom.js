export class CustomIdentityRequestWrapper {
  accessToken;
  domain;

  constructor(accessToken, domain) {
    // Initialize the class
    this.accessToken = accessToken;
    this.domain = domain;
  }
  async request(args) {
    try {
      const response = await fetch(`${this.domain}/grants/me/${args.path}`, {
        method: args.method,
        body: JSON.stringify(args.body),
        headers: {
          ...args.headers,
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      // Check if the response is not okay (e.g., 404, 500)
      if (!response.ok) {
        console.error(`Error: ${response.status} ${response.statusText}`);
        return { error: `Error: ${response.status} ${response.statusText}` };
      }

      // Parse the response
      const data = await response.json();
      return [data, null];
    } catch (error) {
      console.error('Fetch error:', error);
      return { error: "Error" };
    }
  }

  /**
   * This method returns the current user's information.
   */

  async currentUser() {
    // IMPLEMENT: Get the logged in user's ID token and return the user information
    return {
      id: 'idToken.sub',
      email: 'user_email@gmail.com',
      name: 'User Name',
      provider: 'google',
    };
  }

  /**
   * This method sets the default authentication arguments to use when authenticating the user.
   */
  async setDefaultAuthArgs(authArgs) {
    // Set the default authentication arguments
    return authArgs;
  };

  /**
   * This method returns the URL to redirect the user to for authentication.
   */
  async authenticationUrl() {
    // IMPLEMENT: Return the URL to redirect the user to for authentication
    return 'https://example.com/auth';
  }
} 