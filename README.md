# VW Passat Club

This is a VW Passat Club web application. The aim of the project is to provide a platform for discussions and events related to VW Passat cars.

## Technologies

The front-end of the project is based on React. The back-end depends on a REST API built with Express server.

## Getting started 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing 

- Install dependencies

```
npm install
```

- Navigate to 'REST API VW-CLub' folder and run the REST API. 
This will run the express server locally on port 9999.

```
cd ./REST API VW-Club
```

```
npm start
```

- Navigate back to the vw-club folder and run the web server locally.

```
cd ../
```

```
npm start
```

```
open localhost:3000
```

## Functionalities 

### Public part (available for unauthenticated users)

- Home page for unauthenticated user;
- Register new user;
- Login;

### Privet part (available for authenticated users)

- Home page for authenticated user;
- Forum page;
- Create new posts in the forum;
- Post details;
- Comment post;
- Like post if not author of it;
- Delete post if author of it;
- Profile page;
- Edit user profile;
- Logout;
