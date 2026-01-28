# Project Title

## Table of Contents
1. [Overview](#overview)   
2. [Problem](#problem)  
   
   1. [Questions and Answers](#questions-and-answers)   
   2. [Step by Step Plan](#step-by-step-plan)  
3. [Build Steps](#build-steps)  
4. [Troubleshooting](#troubleshooting)  
   1. [Problems](#problems)  
   2. [Solutions](#solutions)  
5. [Reflection](#reflection)  
6. [References](#references)  
   1. [Programs Used](#programs-used)  
   2. [Websites Used](#websites-used)  

---

## Overview
You are a junior backend developer at “Productivity Inc.,” a startup building a new suite of productivity tools. Your first major assignment is to build the entire backend for their flagship product, TaskMaster. This API will be the engine that powers the entire application, handling user accounts, project management, and individual tasks.

## Problem
This is a capstone project designed to synthesize the skills you have learned across multiple modules. You will plan and execute the development of a real-world, secure, and functional RESTful API from the ground up. Success will require careful planning, clean code, and a solid understanding of authentication and authorization principles
---
### Questions and Answers
1. When should I use populate?
    - populate  tells mongoose  to replace the objectId with hte actual document from the referenced collection . 
    - this makes it easier for the frontend  because it stops you from making extra api calls . it also improves readablity and reduces extra queries.

2.  When should i use .create() or .save() for mongoose 
    - If you want to do extra task or manipulate or populate the information you should use save  

## Step by Step Plan
1. Plan the project 
2.  Make the the folders and place them all in the src folder
3. make and initalize the server.js file 
    - npm i express mongoose bcrypt jsonwebtoken dotenv
    - npm i nodemon -D
4.  Upload Secret information to the Env file and  then upload the needed files to the github ignore
5. Initalize the progect with git hub 
6. create the user model and the project Model
7. create the task model 
8. Authenticate a user or make a user
9. use the Crud where crud is needed 
10. Create the task route and the  curd process for that 
11. test 
---

## Troubleshooting


### Problems


1.  I couldn;t get the Post register to work 
2.  I was looking through my code and realized req.body isnt working right 
3.  Routing issues 

### Solutions
Explain how you solved each problem.

1.  Turns out the problem was with the function I made for startServer() it was reading the code somewhere else or something so i moved the function to the main code. 
2.  in req.body  I separated the words by a comma not a period. 
3.  I remade all the routing and check the code again for typos. 

---

## Reflection
Reflect on what you learned, what worked well, and what you would do differently.  
Include lessons about problem solving and debugging.

---

## References

### Programs Used

- VS Code  
- Node.js 
- Mongoose
- bcrypt 
- helmet   
- Thunder Client   

### Websites Used

- MDN  
- Stack Overflow  
- W3Schools  
















