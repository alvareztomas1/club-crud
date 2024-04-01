<h1 align="center">Club CRUD App</h1>


### About the project

React application with an API server in the backend, enabling users to perform operations such as creating, viewing additional information, updating, and deleting football teams from England.
The server follows Restful API principles with the HTTP requests `GET`, `POST`, `PUT` and `DELETE`.

The backend server has being built with `Express`, using a JSON file as database and the frontend with `React` to render the web interface.

## Technologies used

- **React create app**: Create React App is a command-line tool (CLI) to set up and scaffold the React.js project.
- **Cypress**: Cypress is a modern end-to-end testing framework built for the modern web. It enables developers to write automated tests for web applications.
- **Express**: It provides a set of features for building web, including routing, middleware, and HTTP utilities.
- **Nodemon**: Nodemon is a utility that monitors for changes in the application and automatically restarts the server.
- **Cors**: (Cross-Origin Resource Sharing) is used to allow communication between two servers running on different ports simultaneously. 
- **Multer**: Multer is a middleware for handling multipart/form-data, used for uploading files in Node.js applications.
- **Eslint**: It helps maintain code quality and consistency across a project.

## HTTP Methods

| Type    | URL                                   | Description                                       |
|---------|---------------------------------------|---------------------------------------------------|
| `GET`   | localhost:8080/inf/:teamName/:id      | Obtains a specific team register                 |
| `GET`   | localhost:8080/teams                  | Obtains all teams register                        |
| `GET`   | localhost:8080/restore-database       | Restores all team registers with the original data|
| `POST`  | localhost:8080/add-team               | Creates a new team register                       |
| `PUT`   | localhost:8080/edit/:teamName/:id     | Edits a specific team register                    |
| `DELETE`| localhost:8080/delete/:teamId         | Deletes a specific team register                  |

### How to run the project

`npm install` to install all dependencies used in the project

`npm start` in the backend to run the API and in the frontend to run the app.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.





