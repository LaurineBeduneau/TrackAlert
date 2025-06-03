# TrackAlert

Project in progress ...

## Overview

Public Transport Control Alert is a mobile application designed to help users report and view the presence of public transport controllers in real-time. Similar to Waze, but for public transport, the app allows users to signal and get notified when controllers are nearby, ensuring a smoother commute.

## Features

- 🚍 Report Controllers in Real-Time: Users can signal the presence of controllers at specific locations.
- 📍 View Controllers on the Map: Interactive map displaying all reported controller locations in real-time.
- 🔔 Receive Notifications: Get push notifications when controllers are reported near your location.
- 🛡️ User Authentication: Secure sign-up and login system for managing users and their reports.
- 💬 Community-based Reporting: Engage with other users by rating and confirming reports.

## Tech Stack

Front-End

- Framework: React Native
- Language: JavaScript (or TypeScript)
- Maps & Location: Google Maps API (or Mapbox)
- Push Notifications: Firebase Cloud Messaging (FCM)

Back-End

- Framework: Node.js with Express.js
- Real-time Functionality: Socket.io for real-time updates on controllers' reports
- Database: MongoDB (NoSQL) or PostgreSQL (SQL)
- Authentication: JSON Web Tokens (JWT)
- Push Notifications: Firebase Cloud Messaging (FCM)

## Installation & Setup

Front-End (React Native)

Clone the repository:

```
git clone https://github.com/yourusername/control-alert-app.git
```

Navigate to the project directory:

```
cd control-alert-app/frontend
```

Install dependencies:

```
npm install
```

Run the app (for iOS and Android emulators):

```
    npx react-native run-ios    # For iOS
    npx react-native run-android # For Android
```

Back-End (Node.js/Express)

Navigate to the backend folder:

```
cd control-alert-app/backend
```

Install dependencies:

```
npm install
```

Create a .env file at the root of the backend directory and configure environment variables (example below):

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/controlalert
JWT_SECRET=your_jwt_secret_key
```

Start the server:

```
    npm run start
```

## Database Setup

- If you're using MongoDB, make sure you have MongoDB running locally or use a cloud-hosted MongoDB instance (e.g., MongoDB Atlas).
- If you're using PostgreSQL, install and configure your database. Update the .env file with the correct connection string.

## API Endpoints

Method	Endpoint	Description
POST	/api/users/signup	Register a new user
POST	/api/users/login	Login user and return JWT token
POST	/api/reports	Report a controller's presence
GET	/api/reports	Get all reports in real-time

## Real-Time Functionality

- Socket.io is used to handle real-time reporting and updates.
- Once a controller is reported, all connected users will receive updates about the new report.

## Push Notifications

- Firebase Cloud Messaging (FCM) is integrated to send notifications when a new controller report is nearby.
- Make sure you configure Firebase and obtain your Firebase server key.

## Future Features

- ⭐ User Reliability Rating: Measure users’ reliability based on the accuracy of their reports.
- 📊 Analytics: Provide statistical data on control zones, high-risk areas, and more.
- 🏅 Gamification: Reward users for reliable reports and community engagement.

## Contributing

If you’d like to contribute to this project, feel free to submit a pull request or open an issue. We appreciate your feedback and suggestions!

## Contact

For any questions or support, please reach out to Laurine at laurinebeduneau@gmail.com.
