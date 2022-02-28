SocialBook - Facebook inspired social media site
============

This is a social media site inspired by Facebook's design. It was created as my first "big" project and includes only some of the functionality of Facebook.
Frontend was created using React and Redux. Backend is running Node.js with Express, using MongoDB.

## Features
- Log-in system using JWT -token authentication with a hashed password
- Registeration page to create
- Friends and friend requests
- Posting on your own wall or your friends' walls
- Accepting or denying friend requests
- Only seeing your own and friends' posts on the home wall
- Ability to like and comment on posts
- Private messaging with friends (as of right now, not in real time)

## To-do
- Mobile friendly interface not finished
- Bug fixes

User's home page
![User Home Preview](https://imgur.com/a/B2w9TBC)
Post
![Post Preview](https://imgur.com/a/iGCNc10)


Live demo available at https://floating-caverns-87698.herokuapp.com/ using example data fetched from Mongo's cloud database. The demo version doesn't save or edit data in the database for security reasons.


## Setup
Clone this repo to your desktop and run `npm install` to install all the dependencies.

---

## Usage
After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run  `npm start` to start the application. You will then be able to access it at localhost:3000

If you want to run the project from your computer, you need to run the backend at the same time as the front end using a port of your choice. The default port address is localhost:5000

---
