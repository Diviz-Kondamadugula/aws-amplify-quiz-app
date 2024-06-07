# Quiz Application using AWS Amplify and Cognito (with CI/CD)

This repository contains a Quiz application built with AWS Amplify and Cognito for authentication. It also demonstrates setting up a CI/CD pipeline for automated deployment.

## Overview

### 1. Setting Up AWS Amplify and Cognito

AWS Amplify is a powerful toolchain that helps you build scalable web and mobile applications. In this project, it is used to manage the backend services, including authentication with AWS Cognito.

**Steps:**

1. **Amplify CLI Installation:** Install the Amplify CLI globally on your system to interact with AWS services.
2. **Amplify Configuration:** Configure Amplify to connect to your AWS account.
3. **Initialize Amplify in the Project:** Set up Amplify in your React application, which creates necessary configurations and resources.
4. **Add Authentication:** Use Amplify to add authentication capabilities to your application via AWS Cognito.
5. **Push Changes to the Cloud:** Deploy your Amplify project to AWS, setting up the backend resources.

### 2. Creating the React Application

React is a popular JavaScript library for building user interfaces. Here, it is used to create the quiz interface.

**Steps:**

1. **Create React App:** Initialize a new React application using Create React App.
2. **Install Dependencies:** Add required dependencies like `aws-amplify` for interacting with Amplify services and `axios` for making HTTP requests.

### 3. Building the Application

The application consists of several key components:

- **App.js:** The main application file. It sets up Amplify, handles authentication, and renders the Quiz component.
- **Quiz.js:** This component handles displaying the quiz questions and answers. It fetches quiz data using Axios (a promise-based HTTP client).

### 4. Authentication with AWS Cognito

Cognito is a user authentication service that handles user sign-up, sign-in, and access control. By adding authentication to your Amplify project, you ensure that only authenticated users can access the quiz.

### 5. Continuous Integration and Continuous Deployment (CI/CD)

CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. In this project, CI/CD is configured to automatically deploy changes to AWS when the code is pushed to the main branch.

**Automated Deployment:**

- The actions install dependencies, configure Amplify, and deploy the project to AWS.

## How It Works

### Authentication

- **User Sign-Up/Sign-In:** Users sign up or sign in through the application. Amplify handles this process with Cognito, which manages the user pool and authentication flow.
- **Session Management:** Once authenticated, the user session is maintained, and the authenticated user can access the quiz.

### Fetching Quiz Data

- **API Call:** The Quiz component uses Axios to fetch quiz data from a specified API endpoint. This can be a mock API or a real backend service.
- **Display Questions:** The fetched questions and answers are displayed on the screen. Each question has multiple choice answers, which users can select.

### Continuous Deployment

- **Code Push:** When code is pushed to the main branch, the configured CI/CD pipeline triggers automatically.
- **Build and Deploy:** The pipeline installs dependencies, builds the project, and deploys it to AWS Amplify, ensuring the latest version of the app is live.
