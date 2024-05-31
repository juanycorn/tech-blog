# Tech Blog

Tech Blog is a Content Management System (CMS) style blog site where developers can publish articles, blog posts, and share their thoughts and opinions on various technical topics.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Screenshots](#screenshots)

## Description

Tech Blog provides a platform for developers to create, publish, and manage their blog posts. It follows the Model-View-Controller (MVC) architectural pattern and utilizes technologies such as Handlebars.js for templating, Sequelize as the ORM for database interaction, and express-session for authentication.

## Features

- User authentication: Users can sign up, sign in, and log out securely.
- Create and publish blog posts: Authenticated users can create new blog posts and publish them.
- View and comment on posts: Users can view existing blog posts and leave comments on them.
- Dashboard: Authenticated users have access to a dashboard where they can manage their own blog posts.

## Installation

To run the Tech Blog application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Set up the database by running the appropriate database migration commands (e.g., `npx sequelize db:migrate`).
5. Create a `.env` file based on the `.env.example` template and set your environment variables.
6. Start the server by running `npm start`.
7. Access the application in your web browser at `http://localhost:3000`.

## Usage

Once the application is running, you can access the homepage to view existing blog posts or sign up/in to create new posts, comment on existing ones, and manage your posts through the dashboard.

## Contributing

Contributions are welcome! If you'd like to contribute to the Tech Blog project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new pull request.

## Screenshots
