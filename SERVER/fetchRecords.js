// src/db/fetchRecords.js
import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config(); // Load environment variables from .env file

const uri = process.env.DB_URI; 

mongoose.connect(uri, {
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
  const Quiz = mongoose.model('Quiz', quizSchema, 'quizzes');

async function fetchRecords() {
    // const client = new MongoClient(uri);

    try {
        
        const records = await Quiz.aggregate([
            { $sample: { size: 3 } }  
        ]);
        // Separate answers and questions with properly mapped options and additional fields
        const questionsWithoutAnswers = records.map(({ _id, question, correct_answer, incorrect_answers, type, difficulty, category }) => ({
            _id,
            question,
            options: [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5), // Shuffle options for randomness
            type,
            difficulty,
            category
        }));
        // console.log(questionsWithoutAnswers);
        
        const answers = records.map(({ _id, correct_answer }) => ({ _id, correct_answer }));

        return { questions: questionsWithoutAnswers, answers };        
        
        // return records;
    } catch (error) {
        console.error("Error fetching records:", error);
    } 
}

export default fetchRecords;
