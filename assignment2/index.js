console.log("test");
const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json());


const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];

app.get("/products", (req, res) => {
    res.status(200).json(products);
});



app.get("/products/:id", (req, res) => {
    const userId = Number(req.params.id);
    const user = products.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(user);
});



app.get("/products/category/:categoryName", (req, res) => {

 const val = req.params.categoryName;
    const data = products.filter(product=>product.category.toLowerCase()==val.toLowerCase()) 

    if(data.length===0){
       return res.status(404).json({
            msg:"data not found"
        })
    }

    res.status(200).json({
        msg:"data found",
        data :data
    })
});

let nextId = products.length+1;

app.post("/products", (req, res) => {
    const prod = {
        id: nextId++,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating
    };

    products.push(prod);

    res.status(201).json({
        message: "Product Added",
        product: prod
    });
});

app.put("/products/:id", (req, res) => {
    const productId = Number(req.params.id);
    const index = products.findIndex(p => p.id === productId);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products[index] = {
        id: productId,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating
    };

    res.status(200).json({
        message: "Product replaced",
        product: products[index]
    });
});

app.put("/products/:id/stock", (req, res) => {
    const productId = Number(req.params.id);
    const index = products.findIndex(p => p.id === productId);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products[index].stock = req.body.stock;

    res.status(200).json({
        message: "Stock updated",
        product: products[index]
    });
});


app.put("/products/:id/price", (req, res) => {
    const productId = Number(req.params.id);
    const index = products.findIndex(p => p.id === productId);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products[index].price = req.body.price;

    res.status(200).json({
        message: "Price updated",
        product: products[index]
    });
});


app.listen(3000, () => {
    console.log("Server started on port 3000");
});
