## Precrastinator

A full-stack app to boost productivity by enabling users to create a list of tasks that they can finish in pomodoro intervals. It's built using the MVC architecture with auth implemented for user creation and personalization.

**Link to project:** http://not-ready-yet.com/

![work in progress](https://imgs.search.brave.com/0RYP9WzwBl9VF-w1mu4xTPEzxYpL7zDurgWDsO506bs/rs:fit:900:819:1/g:ce/aHR0cHM6Ly93d3cu/YWxsd29yc2hpcC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMDYvYmlnc3Rv/Y2stV29yay1Jbi1Q/cm9ncmVzcy1Db25j/ZXB0LTczNTY5MDkx/LmpwZw)

> Feel free to click on that lovely star and fork your own copy 😀


## Objectives

- To help people study in an efficient and ordered manner.
- To allow people to create tasks that they can later go back to and finish.
- To enable people to hyperfocus and increase their productivity.



## Who is this for? 

- It's for students, autodidacts, teachers, and anyone who wants to stop procrastinating. Yes, this includes you.

## How It's Made:

Here's where you can go to town on how you actually built this thing. Write as much as you can here, it's totally fine if it's not too much just make sure you write *something*. If you don't have too much experience on your resume working on the front end that's totally fine. This is where you can really show off your passion and make up for that ten fold.

## Packages/Dependencies used 

The main ones are Node.js, Passport.js, Express, and MongoDB.


# Install all the dependencies or node packages used for development via terminal

`npm install` 

afterward:

`npm start` 


## Things to add

- Create a `.env` file in the config folder and add the following as `key = value` 
  - PORT = 2121 (can be any port) 
  - DB_STRING = `your database URI` 
 
 Have fun testing and improving it! 😎


## Optimizations

- We decided on a custom CSS solution, though we now realize that using a framework such as Materialize would have been much more efficient and easily replicable.
- The app requires user creation in order to make task lists, so something we could have done was use localStorage to keep a temporary session in case the user did not want to create an account.