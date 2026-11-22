# Online-Learning-platform-G24-
---
# 1. Project Information
**Project name: Online Learning Platform**

This server-side application is an online learning platform designed for students and teachers.

### Students can:
- Complete online assignments.
- Check their course grades.
- View student’s personal information.

### Teachers can:
- Create: Add new students or courses.
- Read: View students' grades. View teacher’s personal information.
- Update: Update students' grades.
- Delete: Remove students or courses.

# 2. Group Information
## Group Introduction
Group No.: G24

### Students' Names & SIDs:
Student 1: 13879375  
Student 2: 13879418  
Student 3: 13875966  
Student 4: 13880847  
Student 5: 13879800  

## Workload Division
**Member 1:** Database  
Set up and manage the database for this server-side application.  
**Member 2:** Login and Logout  
Develop the login and logout functions for students and teachers.  
**Member 3:** UI Design  
Design the EJS pages and user interface.  
**Member 4:** RESTful API  
Develop the RESTful API for Create, Read, Update, and Delete operations.  
**Member 5:** README.md  
Write and organize the README.md.  


# 3. Project File Introduction
### UI Folder
The `UI` folder contains the files for the user interface and the web server.
## server.js
`server.js` is the main server file of the application.  The main functions include:
- Setting EJS as the view engine and pointing Express to the `view` folder.
- Using middleware to parse form data.
- Serving static files from the `public` folder.
- Defining routes for all EJS pages.
- Starting the server on port 3000 by default.

## package.json
`package.json` contains the project name, description, start script, and dependencies.

#### Dependencies:
- `ejs`: `^3.1.10`
- `express`: `^4.21.1`

## view Folder

The `view` folder contains the EJS files for different user interface pages.

EJS files included:
- `login.ejs` - Login page.
- `student.ejs` - Student page.
- `teacher.ejs` - Teacher page.
- `assignment.ejs` - Assignment page.
- `Adds.ejs` - Page for adding information.
- `Grades.ejs` - Page for viewing grade information.
- `Update.ejs` - Page for updating information.
- `Delete.ejs` - Page for deleting information.


# 4. Operation guides
wait for testing
