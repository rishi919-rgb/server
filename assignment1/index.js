console.log("test");
const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json());


const students = [
    {
        id: 1,
        name: "Rishikesh Singh",
        branch: "CSE",
        semester: 8,
        cgpa: 9.3
    },
    {
        id: 2,
        name: "Swaraj",
        branch: "IT",
        semester: 7,
        cgpa: 8.9
    },
    {
        id: 3,
        name: "Chirag Prajapat",
        branch: "ECE",
        semester: 6,
        cgpa: 8.4
    },
    {
        id: 4,
        name: "Sumit Kumar",
        branch: "CSE",
        semester: 8,
        cgpa: 9.1
    },
    {
        id: 5,
        name: "Ankit",
        branch: "IT",
        semester: 5,
        cgpa: 7.8
    },
    {
        id: 6,
        name: "Raushan",
        branch: "CSE",
        semester: 6,
        cgpa: 8.7
    },
    {
        id: 7,
        name: "Hanuman",
        branch: "ECE",
        semester: 7,
        cgpa: 8.2
    },
    {
        id: 8,
        name: "Dashrat",
        branch: "AI",
        semester: 4,
        cgpa: 8.8
    },
    {
        id: 9,
        name: "Kamlesh",
        branch: "Data Science",
        semester: 5,
        cgpa: 8.0
    },
    {
        id: 10,
        name: "Jonty",
        branch: "CSE",
        semester: 6,
        cgpa: 7.9
    }
];

app.get("/students", (req, res) => {
    res.status(200).json(students);
});




app.get("/students/topper", (req, res) => {

    let max = 0;
    let topper = null;
    for (let i = 0; i < students.length; i++) {
        if (students[i].cgpa > max) {
            max = students[i].cgpa;
            topper = students[i];
        }
    }
    res.status(200).json(topper);
});

app.get("/students/average", (req, res) => {

    let total = 0;
    for (let i = 0; i < students.length; i++) {
       total+=students[i].cgpa;
    }
    total= total/students.length;
    res.status(200).json(total);
});


app.get("/students/count", (req, res) => {
    res.status(200).json({Count : students.length});
});

app.get("/students/:id", (req, res) => {
    const userId = Number(req.params.id);
    const user = students.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(user);
});

app.get("/students/branch/:branchName",(req,res)=>{
    const val = req.params.branchName;
    const data = students.filter(student=>student.branch.toLowerCase()==val.toLowerCase()) 

    if(data.length===0){
        res.status(404).json({
            msg:"data not found"
        })
    }

    res.status(200).json({
        msg:"data found",
        data :data
    })
})


app.listen(3000, () => {
    console.log("Server started on port 3000");
});
