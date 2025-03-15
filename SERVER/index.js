import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from 'cors'; // Import cors
dotenv.config();

console.log("MongoDB URI: ", process.env.QuizzDB_URI); // Log to verify URI

// const Quiz = process.env.Quiz_URI;
// const quizDB = process.env.quizDB_URI;
const quizDB = process.env.QuizzDB_URI;

if (!quizDB) {
  console.error("MongoDB URI is missing in environment variables.");
  process.exit(1);  // Exit the process if URI is not found
}
// origin: ["https://vikas-quiz-rqt4.vercel.app"],   qwer

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors(
  {
    origin: ["https://quiz-xzrm.vercel.app", "https://quiz-xzrm-vikas-projects-76139431.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
  }
)); // Enable CORS for all routes

// Connect to MongoDB
mongoose.connect(quizDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log("Database Connected");
    // insertInitialData(); // Insert initial data on server start

})
.catch((error) => {
    console.error("Database connection error:", error);
});

// Define the quiz schema
const quizSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['multiple', 'boolean'],
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true
  },
  category: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  correct_answer: {
    type: String,
    required: true
  },
  incorrect_answers: {
    type: [String],
    validate: {
      validator: function(value) {
        return Array.isArray(value) && value.length > 0;
      },
      message: 'There must be at least one incorrect answer.'
    },
    required: true
  }
});
// Create the model
const Quiz = mongoose.model('Quiz', quizSchema, 'Science_Computers');

let aquizAns = [];
// Route to fetch 15 random quiz questions
app.get('/api/questions', async (req, res) => {
    try {
      const quizzes = await Quiz.aggregate([{ $sample: { size: 10 } }]);
      const questionsWithoutAnswers = quizzes.map(({ _id, question, correct_answer, incorrect_answers, type, difficulty, category }) => ({
            _id,
            question,
            options: [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5), 
            type,
            difficulty,
            category
        }));
        // console.log(questionsWithoutAnswers);        
        aquizAns = quizzes.map(({ _id, correct_answer }) => ({ _id, correct_answer }));
      // aquizAns = [{"a" : 2} , {"b" : 5}]
       res.status(200).json(questionsWithoutAnswers);
      // res.status(200).json(quizzes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching random quizzes' });
    }
});

app.get('/', async (req, res) => {
  res.send("Hello")
});

app.get('/api/answers', async (req, res) => {
  res.status(200).json(aquizAns);
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

