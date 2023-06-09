# Authentication App

This is an authentication app built using React and Express.js. It utilizes JWT token-based authentication and Passport for user authentication and authorization. Redux is used for state management in the React front-end, and a token verification middleware is implemented in the Express.js backend.

## Overview

This authentication app provides a secure user authentication and authorization system. It leverages the following technologies and features:

- React: The front-end of the app is built using React, a popular JavaScript library for building user interfaces.
- Express.js: The back-end of the app is developed using Express.js, a fast and minimalist web application framework for Node.js.
- JWT Token: JSON Web Tokens (JWT) are used for user authentication and authorization. They are generated upon successful login and sent to the client for subsequent requests.
- Passport: Passport is integrated into the app as an authentication middleware. It provides various authentication strategies, such as local authentication using username and password.
- Redux: Redux is employed for state management in the React front-end. It allows for centralized state management and seamless interaction between components.
- Token Verification Middleware: A custom middleware is implemented in the Express.js backend to verify the authenticity and validity of JWT tokens. It intercepts incoming requests and ensures that only valid tokens are accepted.
- User Registration: Users can create an account by providing their credentials, including username and password. The information is securely stored in the backend database.
- User Login: Registered users can log in with their credentials. Upon successful login, a JWT token is generated and sent back to the client for authorization in subsequent requests.
- Protected Routes: The app includes protected routes that can only be accessed by authenticated users with valid JWT tokens. Unauthorized access is restricted, ensuring the security of sensitive information.
- Error Handling: The app handles various error scenarios, such as invalid credentials, expired tokens, or unauthorized access, providing appropriate error messages to the user.
- Installation and Usage: The README file provides detailed instructions on how to clone the repository, install dependencies, configure environment variables, and start the development server. It also includes information on how to register a new user, log in, and explore the app's features.

## Installation and Usage

1. Clone the repository: `git clone https://github.com/muhammedamirt/user-authentication-app.git`
2. Install dependencies:
   - React (front-end): `cd client && npm install`
   - Express.js (back-end): `cd server && npm install`
3. Configure environment variables: Rename `.env.example` to `.env` and update the necessary values.
4. Start the development server:
   - React (front-end): `cd client && npm start`
   - Express.js (back-end): `cd server && npm start`
5. Access the app in your browser at `http://localhost:3000`.
6. Register a new user account or log in with existing credentials.
7. Explore the app's features and protected routes.
8. Log out to end the session.
## Set up the Backend environment variables:

The following environment variables need to be set in order for the backend to function properly:

- `PORT`: Specify the port on which your backend server will run.
- `MONGO_URL`: Set the URL of your MongoDB database.
- `JWT_SECRET`: Choose a secret key for signing and verifying JSON Web Tokens (JWTs) for authentication purposes.
- `BASE_URL_FRONT`: Provide the base URL of your frontend application.

You can set these environment variables using one of the following methods:

- Create a `.env` file in the root directory of your project and add the following lines:

  ```
  PORT=3000
  MONGO_URL=mongodb://localhost:27017/auth-app
  JWT_SECRET= mySecretKey
  BASE_URL_FRONT=http://localhost:3000
  ```

  Replace the values with your specific configurations.

- Use environment-specific configuration files and load them based on the current environment.

- Set the environment variables directly in your development or deployment environment using the appropriate method for your operating system or hosting platform.

Note: Make sure to add the `.env` file (if you choose to use one) to your `.gitignore` file to avoid committing sensitive information to your version control system.

5. [Add any additional setup or configuration steps if necessary.]

6. [Provide instructions on how to run the project, including any command-line arguments or configuration options.]

7. [Add any other relevant information, such as examples or important considerations.]

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature/bug fix.

3. Make your changes and commit them.

4. Push your changes to your forked repository.

5. Submit a pull request, describing your changes in detail.

## Set up the Frontend environment variables:

The following environment variables need to be set for the React frontend to interact with the backend:

- `REACT_APP_BASE_URL_BACKEND`: This variable represents the base URL of your backend server. Set the value of `REACT_APP_BASE_URL_BACKEND` to the URL where your backend is hosted or the local development server URL (e.g., http://localhost:8080).

- `REACT_APP_GOOGLE_CLIENT_ID` and `REACT_APP_GOOGLE_CLIENT_SECRET`: These variables are used for Google OAuth authentication. You need to obtain client credentials from the Google Developers Console and set the corresponding values for `REACT_APP_GOOGLE_CLIENT_ID` and `REACT_APP_GOOGLE_CLIENT_SECRET`.
## Contributing and License

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

This project is licensed under the MIT License.
