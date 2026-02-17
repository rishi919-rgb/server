console.log("test");
const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());

const userss = [

    {
        "att": '80',
        "uid": 108551,
        "total_sub": 14,
        "bonus": '20',
        "name": 'Rishi'
    },
    {
        "att": '90',
        "uid": 108554,
        "total_sub": 14,
        "bonus": '20',
        "name": 'chirag'
    },
    {
        "att": '70',
        "uid": 108552,
        "total_sub": 14,
        "bonus": '20',
        "name": 'ishi'
    }]






app.get("/user/:id", (req, res) => {
    const userId = Number(req.params.id);
    const user = userss.find(u => u.uid === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});




app.post("/user", (req, res) => {
    const newUser = {
        uid: req.body.uid,
        name: req.body.name,
        bonus: req.body.bonus
    };

    userss.push(newUser);

    res.status(201).json({
        message: "User created",
        user: newUser
    });
});







app.put("/users/:id", (req, res) => {
    const userId = Number(req.params.id);
    const index = userss.findIndex(u => u.uid === userId);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    userss[index] = {
        uid: userId,
        name: req.body.name,
        bonus: req.body.bonus,
        att: req.body.att,

    };

    res.status(200).json({
        message: "User replaced",
        user: userss[index]
    });
});

app.patch("/use/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = userss.find(u => u.uid === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (req.body.name) user.name = req.body.name;
  if (req.body.bonus) user.bonus = req.body.bonus;

  res.status(200).json({
    message: "User updated",
    user
  });
});


app.delete("/stud/:id", (req, res) => {
    const userId = Number(req.params.id);
    const index = userss.findIndex(u => u.uid === userId);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    userss.splice(index, 1);

    res.status(204).end();
});





app.use(express.json());
app.listen(3000, () => {
    console.log("Server started on port 3000");
});