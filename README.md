# VW Passat Club

This is a VW Passat Club web application. The aim of the project is to provide a platform for discussions and events related to VW Passat cars.

## Built with

* [React](https://reactjs.org/) - The web framework used;
* [Express](https://expressjs.com/) - The back-end framework used to built REST API;
* [Mongoose](https://mongoosejs.com/) - Object Data Modeling (ODM) library for MongoDB and Node.js;


## Getting started 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing 

- Install dependencies

```
npm install
```

- Install REST API dependencies 

```
cd REST API VW-Club
npm install
```

- Navigate back to the root folder "vw-club" and run the below command to start the Node server and the React app simultaneously

```
cd ../
npm run dev
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
