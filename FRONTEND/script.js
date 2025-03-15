// Assume this is the fetched data from your MongoDB
/*
const quizData = [
  {
    "_id": "6731b6a0a34d511638ef2331",
    "type": "multiple",
    "difficulty": "hard",
    "category": "Geography",
    "question": "What is the name of the Canadian national anthem?",
    "correct_answer": "O Canada",
    "incorrect_answers": [
      "O Red Maple",
      "Leaf-Spangled Banner",
      "March of the Puck Drop"
    ]
  },
  {
    "_id": "6731b582540e2c0e53a67553",
    "type": "multiple",
    "difficulty": "hard",
    "category": "Mythology",
    "question": "Which Norse God has a horse named Sleipnir?",
    "correct_answer": "Odin",
    "incorrect_answers": [
      "Thor",
      "Frigg",
      "Balder"
    ]
  },
  {
    "_id": "6731b582540e2c0e53a67544",
    "type": "multiple",
    "difficulty": "hard",
    "category": "Science &amp; Nature",
    "question": "A comet&#039;s gaseous envelope (which creates the tail) is called what?",
    "correct_answer": "The coma",
    "incorrect_answers": [
      "The wake",
      "The backwash",
      "The ablative"
    ]
  },
  {
    "_id": "672dff300a4b75aa76089957",
    "type": "multiple",
    "difficulty": "medium",
    "category": "Entertainment: Board Games",
    "question": "How many points is the Z tile worth in Scrabble?",
    "correct_answer": "10",
    "incorrect_answers": [
      "8",
      "5",
      "6"
    ]
  },
  {
    "_id": "672f4510134190f9e5f8b351",
    "type": "multiple",
    "difficulty": "medium",
    "category": "History",
    "question": "In what year did the First World War end?",
    "correct_answer": "1918",
    "incorrect_answers": [
      "1914",
      "1916",
      "1912"
    ]
  },
  {
    "_id": "6731b582540e2c0e53a67540",
    "type": "multiple",
    "difficulty": "medium",
    "category": "Animals",
    "question": "What is the fastest animal?",
    "correct_answer": "Peregrine Falcon",
    "incorrect_answers": [
      "Golden Eagle",
      "Cheetah",
      "Horsefly"
    ]
  },
  {
    "_id": "6731b679a34d511638ef2309",
    "type": "multiple",
    "difficulty": "hard",
    "category": "Entertainment: Video Games",
    "question": "Prior to his appearance in Super Smash Bros. Ultimate, What was King K. Rool&#039;s last appearance in any game?",
    "correct_answer": "Mario Super Sluggers",
    "incorrect_answers": [
      "Donkey Kong 64",
      "Donkey Kong Country 3",
      "Donkey Kong: King Of Swing"
    ]
  },
  {
    "_id": "6731b679a34d511638ef2311",
    "type": "multiple",
    "difficulty": "medium",
    "category": "Entertainment: Video Games",
    "question": "What song is played during the ending credits of Guitar Hero: World Tour?",
    "correct_answer": "Dream Theater - Pull Me Under",
    "incorrect_answers": [
      "King Crimson - 21st Century Schizoid Man",
      "Dragonforce - Through The Fire &amp; The Flames",
      "Lynyrd Skynyrd - Free Bird"
    ]
  },
  {
    "_id": "672e0d9cd3d435852911646c",
    "type": "multiple",
    "difficulty": "easy",
    "category": "Science: Mathematics",
    "question": "What prime number comes next after 19?",
    "correct_answer": "23",
    "incorrect_answers": [
      "25",
      "21",
      "27"
    ]
  },
  {
    "_id": "672e0d9cd3d4358529116458",
    "type": "multiple",
    "difficulty": "hard",
    "category": "Entertainment: Music",
    "question": "Who wrote the song &quot;You Know You Like It&quot;?",
    "correct_answer": "AlunaGeorge",
    "incorrect_answers": [
      "DJ Snake",
      "Steve Aoki",
      "Major Lazer"
    ]
  },
  {
    "_id": "6731b679a34d511638ef2303",
    "type": "multiple",
    "difficulty": "medium",
    "category": "Geography",
    "question": "The Japanese district Akihabara is also known by what nickname?",
    "correct_answer": "Electric Town",
    "incorrect_answers": [
      "Moon Walk River",
      "Otaku Central ",
      "Big Eyes"
    ]
  },
  {
    "_id": "672e0d9cd3d435852911645c",
    "type": "boolean",
    "difficulty": "easy",
    "category": "Entertainment: Books",
    "question": "&quot;Green Eggs and Ham&quot; consists of only 50 different words.",
    "correct_answer": "True",
    "incorrect_answers": [
      "False"
    ]
  },
  {
    "_id": "672e00a357bd5194af1125d0",
    "type": "multiple",
    "difficulty": "easy",
    "category": "Entertainment: Video Games",
    "question": "In Minecraft, which two items must be combined to craft a torch?",
    "correct_answer": "Stick and Coal",
    "incorrect_answers": [
      "Stick and Fire",
      "Wood and Coal",
      "Wood and Fire"
    ]
  },
  {
    "_id": "6731b6a0a34d511638ef2326",
    "type": "multiple",
    "difficulty": "hard",
    "category": "History",
    "question": "The Battle of Hastings was fought in which year?",
    "correct_answer": "1066",
    "incorrect_answers": [
      "911",
      "1204",
      "1420"
    ]
  },
  {
    "_id": "672e00a357bd5194af1125cf",
    "type": "multiple",
    "difficulty": "hard",
    "category": "Entertainment: Video Games",
    "question": "How many copies of the notorious E.T. game for the Atari 2600 did Atari end up selling?",
    "correct_answer": "1.5 Million",
    "incorrect_answers": [
      "1 Million",
      "250 Thousand",
      "Less than 250 Thousand"
    ]
  },
  {
    "_id": "6731b582540e2c0e53a6753d",
    "type": "multiple",
    "difficulty": "easy",
    "category": "Entertainment: Comics",
    "question": "This Marvel superhero is often called &quot;The man without fear&quot;.",
    "correct_answer": "Daredevil",
    "incorrect_answers": [
      "Thor",
      "Wolverine",
      "Hulk"
    ]
  },
  {
    "_id": "672f4510134190f9e5f8b348",
    "type": "multiple",
    "difficulty": "hard",
    "category": "Entertainment: Comics",
    "question": "In the &quot;Archie&quot; comics, who was Jughead&#039;s first girlfriend?",
    "correct_answer": "Joani",
    "incorrect_answers": [
      "Ethel",
      "Debbi",
      "Margret"
    ]
  },
  {
    "_id": "672f4510134190f9e5f8b33c",
    "type": "multiple",
    "difficulty": "hard",
    "category": "History",
    "question": "When was the SS or Schutzstaffel established?",
    "correct_answer": "April 4th, 1925",
    "incorrect_answers": [
      "September 1st, 1941",
      "March 8th, 1935",
      "February 21st, 1926"
    ]
  },
  {
    "_id": "672f4510134190f9e5f8b34f",
    "type": "multiple",
    "difficulty": "easy",
    "category": "General Knowledge",
    "question": "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
    "correct_answer": "Plum",
    "incorrect_answers": [
      "Apple",
      "Peach",
      "Pear"
    ]
  },
  {
    "_id": "672e00a357bd5194af1125c1",
    "type": "multiple",
    "difficulty": "hard",
    "category": "Entertainment: Music",
    "question": "Which Elton John hit starts with the line &quot;When are you gonna come down&quot;?",
    "correct_answer": "Goodbye Yellow Brick Road",
    "incorrect_answers": [
      "Rocket Man",
      "Bennie and the Jets",
      "Crocodile Rock"
    ]
  }
]
*/

let quizes={};
let totalQuestions = null;
let startTime;

document.querySelector('#submitQ').addEventListener('click' , (e)=>{
      submitQuiz();
      // Record the start time in milliseconds
      
})


// const loadingContainer = document.getElementById('loading-container');
// const quizContainer = document.getElementById('quiz-container');
// loadingContainer.style.display = 'none';  // Hide the loading bar
// quizContainer.style.display = 'block'; 

// populateQuiz(quizData);





fetchQuizData();
//==============================================================

function updateLoadingBar(progress) {
    const loadingBar = document.getElementById('loading-bar');
    loadingBar.style.width = progress + '%';
}

// Function to fetch quiz data from API
async function fetchQuizData() {
    const loadingContainer = document.getElementById('loading-container');
    const quizContainer = document.getElementById('quiz-container');
    document.querySelector(".row2").style.display = 'none';

    try {
         // Show loading bar before making the fetch request
         loadingContainer.style.display = 'block';
         quizContainer.style.display = 'none';  // Hide quiz until it's loaded
 
         // Simulate loading by filling the bar gradually (optional, can be adjusted based on fetch time)
         let progress = 0;
         const loadingInterval = setInterval(() => {
             if (progress < 70) {
                 progress += 10;
                 updateLoadingBar(progress);
             }
         }, 500);

        const response = await fetch('https://quiz-two-inky.vercel.app/api/questions');  // Fetch data from your API
        // const response = await fetch('http://localhost:3000/api/questions');
        console.log(response);
        
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const quizData = await response.json();  // Parse the JSON response

        // Clear the loading interval once data is fetched
        clearInterval(loadingInterval);
        progress = 100;  // Complete the loading bar
        updateLoadingBar(progress);

        populateQuiz(quizData);  // Call the function to populate the quiz
        quizes = quizData;

        // Hide the loading bar and show the quiz after data is loaded
        setTimeout(() => {
            loadingContainer.style.display = 'none';  // Hide the loading bar
            quizContainer.style.display = 'block';    // Show the quiz
            document.querySelector(".row2").style.display = 'flex';
        }, 500);

    } catch (error) {
        console.error('Error fetching quiz data:', error);
    }
}

// Function to generate quiz HTML dynamically
function populateQuiz(quizData) {
     totalQuestions = quizData.length;
    const quizContainer = document.getElementById('quiz-container');
    quizData.forEach((item, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.id =item._id;
        questionContainer.classList.add('questin-container');
        // questionContainer.classList.add('wrong-questin-container');
        
        // Question section
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        // // Create circle based on difficulty
        // const circle = document.createElement('span');
        // circle.classList.add('difficulty-circle');
        // circle.classList.add(item.difficulty); // Add class based on difficulty

        questionDiv.innerHTML = `<div class="difficulty-circle ${item.difficulty}"></div><span>${index + 1}] </span> <span>${decodeHtmlEntities(item.question)}</span>`;
        
        // Option container
        const optionContainer = document.createElement('div');
        optionContainer.classList.add('option-container');
        
        const ul = document.createElement('ul');
        
        // Create options
        const options = item.options;
        
        options.forEach((option, i) => {
            const li = document.createElement('li');            
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index + 1}`;
            input.id = `option${index + 1}_${i + 1}`;
            input.value = option;
                                    
            const label = document.createElement('label');
            label.setAttribute('for', `option${index + 1}_${i + 1}`);
            label.textContent = decodeHtmlEntities(option);
            // if(i==2) label.classList.add('right-ans');
            
            li.appendChild(input);
            li.appendChild(label);
            ul.appendChild(li);
        });
        
        optionContainer.appendChild(ul);
        
        // Append question and options to the main container
        questionContainer.appendChild(questionDiv);
        questionContainer.appendChild(optionContainer);
        quizContainer.appendChild(questionContainer);

        startTime = Date.now();
    });
}

function decodeHtmlEntities(text) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}

function showResult(score, total, endTime) {
  const percentageElement = document.getElementById("percentage");
  const circularProgress = document.querySelector(".circular-progress");
  // const analysisSection = document.querySelector(".analysis");
  // const resultContainer = document.querySelector(".result-container");
  document.querySelector(".results").style.display = "block";
  
  // Calculate percentage score
  const percentage = Math.round((score / total) * 100);
  const wrongAnswers = total - score;
  
  // Set the CSS variable for the conic gradient
  circularProgress.style.setProperty("--percentage", percentage * 3.6); // Convert to degrees

  // console.log('timeee',endTime, startTime);
  
  const totalTime = endTime - startTime; // Total time in milliseconds
  const minutes = Math.floor(totalTime / 60000); // Convert to minutes
  const seconds = Math.floor((totalTime % 60000) / 1000); // Remainder in seconds

   // Update analysis section with data
   document.getElementById("total-questions").textContent = `${total}`;
   document.getElementById("correct-questions").textContent = `${score}`;
   document.getElementById("wrong-questions").textContent = `${wrongAnswers}`;
   document.getElementById("time-taken").textContent = `${minutes} minutes ${seconds} seconds`;

  // Animate the score percentage display
  let displayPercentage = 0;
  const interval = setInterval(() => {
      if (displayPercentage < percentage) {
          displayPercentage++;
          percentageElement.textContent = `${displayPercentage}%`;
      } else {
          clearInterval(interval);
      }
  }, 20);
}



async function submitQuiz() {
  const endTime = Date.now();
    let score = 0;
    const quizContainer = document.getElementById('quiz-container');
    const userResponses = [];
    let qqq =[];

    // Fetch the correct answers from the server    https://quiz-two-inky.vercel.app/
    const response = await fetch('https://quiz-two-inky.vercel.app/api/answers');
    // const response = await fetch('http://localhost/api/answers');
    const correctAnswers = await response.json();    
    // console.dir(quizContainer.querySelectorAll('.questin-container'));
    console.dir(correctAnswers);

    // Iterate over each question container to get selected answers    
    quizContainer.querySelectorAll('.questin-container').forEach((questionContainer) => {
        const questionId = questionContainer.id;
        const selectedOption = questionContainer.querySelector('input[type="radio"]:checked');
        // console.log('questionId',questionId);
        qqq.push(selectedOption.value); 
        let isQuestionRight = false;

        correctAnswers.forEach(AnsObj => {
            if(questionId==AnsObj._id && selectedOption.value==AnsObj.correct_answer){
                score+=1;    
                isQuestionRight = true;            
            }
        })

        if(isQuestionRight) {
          selectedOption.parentElement.classList.add("right-ans");
          questionContainer.classList.add("right-questin-container");
        }
        else{
          selectedOption.parentElement.classList.add("wrong-ans");
          let ansOfThisQuestion = (correctAnswers.find(ele => ele._id == questionId)).correct_answer;
          // console.log("(correctAnswers.find(ele => ele._id == questionId))",(correctAnswers.find(ele => ele._id == questionId)));
          const inputs = questionContainer.querySelectorAll("input");
          
          inputs.forEach(input => {
              if (input.value == ansOfThisQuestion) {
                  (input.parentElement).classList.add("right-ans"); // Highlight the correct answer
              }
          });
          questionContainer.classList.add("wrong-questin-container");

        }

    });
    // console.log('selected optionn',qqq);
        
    // alert(`Your score is: ${score} / ${correctAnswers.length}`);
    showResult(score, totalQuestions, endTime);
}

// Call the function to populate quiz

// console.log("runned");

