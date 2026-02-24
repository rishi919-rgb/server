🛒 E-Commerce Product API

In-Memory REST API built with Express.js

📌 Project Overview

This project is a RESTful API built using Express.js that manages product data for an e-commerce platform.

Data is stored in-memory (no database).

Implements required GET, POST, and PUT routes.

Uses proper HTTP status codes.

Follows REST principles.

Deployed on Render.

🚀 Live Deployment

🔗 Render Deployment Link:
https://ecommerce-api-tfrl.onrender.com

🛠 Tech Stack

Node.js

Express.js

CORS

In-memory JSON array

📂 Product Structure

Each product follows this structure:

{
  id: 1,
  name: "Wireless Mouse",
  category: "Electronics",
  price: 799,
  stock: 25,
  rating: 4.3
}
📌 Available Routes
✅ GET Routes (3)
1️⃣ GET /products

Returns all products.

✔️ Status: 200
Example:
GET /products
Response:
[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 799,
    "stock": 25,
    "rating": 4.3
  }
]
2️⃣ GET /products/:id

Returns product by ID.

✔️ Status:

200 → If found

404 → If not found

Example:
GET /products/3
Response (Success):
{
  "id": 3,
  "name": "Laptop Stand",
  "category": "Accessories",
  "price": 999,
  "stock": 30,
  "rating": 4.2
}
Response (Not Found):
{
  "message": "Product not found"
}
3️⃣ GET /products/category/:categoryName

Returns products filtered by category.

✔️ Status:

200 → If found

404 → If no products in category

Example:
GET /products/category/Electronics
Response:
{
  "msg": "data found",
  "data": [
    {
      "id": 1,
      "name": "Wireless Mouse",
      "category": "Electronics",
      "price": 799,
      "stock": 25,
      "rating": 4.3
    }
  ]
}
✅ POST Route (1)
4️⃣ POST /products

Adds a new product.

✔️ Status: 201
Request Body:
{
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 2999,
  "stock": 20,
  "rating": 4.6
}
Response:
{
  "message": "Product Added",
  "product": {
    "id": 6,
    "name": "Bluetooth Speaker",
    "category": "Electronics",
    "price": 2999,
    "stock": 20,
    "rating": 4.6
  }
}
✅ PUT Routes (3)
5️⃣ PUT /products/:id

Replaces entire product except ID.

✔️ Status:

200 → Success

404 → If not found

Example:
PUT /products/2
Request Body:
{
  "name": "Updated Shoes",
  "category": "Footwear",
  "price": 2999,
  "stock": 45,
  "rating": 4.7
}
6️⃣ PUT /products/:id/stock

Updates only stock field.

✔️ Status:

200 → Success

404 → If not found

Example:
PUT /products/2/stock
Request Body:
{
  "stock": 60
}
7️⃣ PUT /products/:id/price

Updates only price field.

✔️ Status:

200 → Success

404 → If not found

Example:
PUT /products/3/price
Request Body:
{
  "price": 1299
}
▶️ How To Run Locally

Clone the repository

git clone <your-github-repo-link>

Navigate to project folder

cd ecommerce-api

Install dependencies

npm install

Start server

node index.js

Server will run on:

http://localhost:3000
📬 Postman Documentation

Include your Postman documentation link here:

<Your Postman Documentation Link>
⚙️ Key Concepts Implemented

Express routing

Route parameters (req.params)

Request body handling (req.body)

In-memory data manipulation

Array methods: find(), findIndex(), filter()

Proper HTTP status codes (200, 201, 404)

CORS middleware

RESTful API design

📌 Notes

No database used (in-memory only)

No authentication

No validation library

Data resets when server restarts

👨‍💻 Author

Rishikesh Singh
Semester 2 – Assignment 2
E-Commerce Product API  
