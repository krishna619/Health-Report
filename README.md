# Health Report

Health Report is a web application designed to help individuals track and manage their health-related information.

## Features

- **User Registration and Authentication**: Users can create an account and securely log in to the application using their credentials. This ensures that each user's data is private and accessible only to them. Logging in is required to generate health reports and access personalized features.

- **Login Functionality**: The application includes a robust login system that verifies the user's identity and grants access to their personalized health information. Without logging in, users will not be able to generate health reports or access certain features of the application.

- **Download Reports in PDF Format**: Health reports generated within the application can be downloaded in PDF format using the PDFKit library. This allows users to save and share their reports with healthcare professionals or keep a digital copy for their records.

- **User Schema**: The application uses a user schema to store user information securely. This schema contains relevant fields such as username, password (hashed for security), email, and any additional user-specific data necessary for the application's functionality.

## Usage

1. Clone the repository:

```bash
git clone https://github.com/krishna619/Health-Report.git
```

2. Install the required dependencies:

```bash
cd Health-Report
npm install
```

3. Set up the database connection by configuring the `.env` file with your database credentials. Replace `<YOUR CONNECTION_STRING>` with the connection string for your database.

4. Start the application:

```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000` to access the Health Report application.

**Note**: Please ensure that you have Node.js and MongoDB installed on your system before running the application.

## Configuration

Create a `.env` file in the root directory of the project and provide the following configuration:

```
# Database Configuration
CONNECTION_STRING=<YOUR CONNECTION_STRING>

# Access Token Secret
ACCESS_TOKEN_SECRET=<YOUR ACCESS_TOKEN_SECRET>
```
Replace `<YOUR CONNECTION_STRING>` with the connection string for your database.

Replace `<YOUR ACCESS_TOKEN_SECRET>` with a secure secret key used for signing and verifying access tokens.

Remember to keep the `.env` file secure and avoid committing it to version control to protect sensitive information.

## Contributing

Contributions to Health Report are welcome! If you find any bugs or would like to suggest new features, please create a new issue or submit a pull request.

Before contributing, please review the [Contributing Guidelines](CONTRIBUTING.md) for more information.


## Acknowledgements

- [PDFKit](https://github.com/foliojs/pdfkit): A JavaScript PDF generation library used for generating and downloading health reports in PDF format.

- [Express](https://expressjs.com/): A fast and minimalist web application framework for Node.js.

- [Mongoose](https://mongoosejs.com/): An object modeling tool for MongoDB and Node.js, used for interacting with the database and defining the user schema.
