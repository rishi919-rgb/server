🎓 Student CGPA API (Using In-Memory JSON Database)
📌 Project Title

Student CGPA REST API – Express.js (In-Memory JSON Database)

🎯 Objective

The objective of this project is to build a RESTful API using Express.js that manages student academic performance records stored in an in-memory JSON array.

This application:

Uses only GET routes (as required)

Implements both static and dynamic routes

Follows REST principles

Returns proper HTTP status codes

Uses no external database (data stored in a JSON array)

🛠️ Technologies Used

Node.js

Express.js

CORS Middleware

In-Memory JSON Array

📚 Implemented Routes
🔹 Static GET Routes
1️⃣ GET /students

Returns all students.

Status Code: 200

Returns full JSON array

2️⃣ GET /students/topper

Returns the student with the highest CGPA.

Status Code: 200

Returns one student object

Returns 404 if no students exist

Core Concept: Array iteration & comparison logic

3️⃣ GET /students/average

Returns average CGPA of all students.

Response Format:

{
  "averageCGPA": 8.31
}

Core Concept: Aggregation logic & data transformation

4️⃣ GET /students/count

Returns total number of students.

Response Format:

{
  "totalStudents": 10
}

Core Concept: Basic array operations

🔹 Dynamic GET Routes
5️⃣ GET /students/:id

Returns student by ID.

Example:

GET /students/3

If student exists → returns student object

If not → returns 404 with error message

Core Concept:
Route parameters (req.params) & proper error handling

6️⃣ GET /students/branch/:branchName

Returns all students from a specific branch.

Example:

GET /students/branch/CSE

Returns array of matching students

Returns 404 if none found

Case-insensitive filtering implemented

Core Concept:
Filtering, clean route design, case handling

🌐 Live Deployed API

🔗 Render Deployment Link:
https://server-3-ayl5.onrender.com/

📬 Postman API Documentation

🔗 Postman Documentation Link:
https://documenter.getpostman.com/view/50841033/2sBXcEmgp7

This documentation includes:

All route details

Sample requests

Sample responses

Status codes

Endpoint testing examples

🌍 Sample API URLs

Base URL:

https://server-3-ayl5.onrender.com

Examples:

All Students
https://server-3-ayl5.onrender.com/students

Topper
https://server-3-ayl5.onrender.com/students/topper

Average CGPA
https://server-3-ayl5.onrender.com/students/average

Student Count
https://server-3-ayl5.onrender.com/students/count

Student by ID
https://server-3-ayl5.onrender.com/students/5

Students by Branch
https://server-3-ayl5.onrender.com/students/branch/CSE

📂 Sample Student Data Structure

Each student record follows this format:

{
  "id": 1,
  "name": "Aarav Sharma",
  "branch": "CSE",
  "semester": 8,
  "cgpa": 9.3
}

Minimum 10 records are stored in the in-memory JSON array.

▶️ Steps to Run Locally

1️⃣ Clone the repository:

git clone <your-github-repo-link>

2️⃣ Navigate to the project directory:

cd project-folder-name

3️⃣ Install dependencies:

npm install

4️⃣ Start the server:

node index.js

OR (if using nodemon):

npx nodemon index.js

5️⃣ Open in browser or Postman:

http://localhost:3000/students
✅ Technical Requirements Fulfilled

✔ Express framework used
✔ express.json() middleware implemented
✔ CORS middleware used
✔ Proper middleware order maintained
✔ Proper HTTP status codes returned
✔ 4 static + 2 dynamic GET routes implemented
✔ No external database used
✔ Clean RESTful API design
✔ Deployed on Render
✔ Postman documentation provided