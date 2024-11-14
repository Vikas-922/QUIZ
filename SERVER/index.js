import express from "express";
import fetchRecords from "./fetchRecords.js";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
// app.use(express.static("public"));
app.use(express.json());

app.use(cors(
    {
      origin: ["http://127.0.0.1:5500"],
      methods: ["POST", "GET"],
      credentials: true
  }
  )); // Enable CORS for all routes abc

let correctAnswers = [];
//sdsd
console.log('a');

app.get("/api/questions", async (req, res) => {
    try {
        const { questions, answers } = await fetchRecords();
        correctAnswers = answers;  
        res.status(200).json(questions);  
    } catch (error) {
        res.status(500).json({ message: 'Error fetching random quizzes' });
    }
});

// Define a route to get the correct answers after submission
app.get("/api/answers", (req, res) => {
    res.status(200).json(correctAnswers);  
});

app.get('/', async (req, res) => {
    res.send("Hello")
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
