// Bunny GIF links (local)
const bunnyGIFs = [
    "images/bunny1.gif",
    "images/bunny2.gif",
    "images/bunny3.gif",
    "images/bunny4.gif",
    "images/bunny5.gif",
    "images/bunny6.gif",
    "images/bunny7.gif",
    "images/bunny8.gif"
];

// Preload GIFs for faster display
bunnyGIFs.forEach(src => {
    const img = new Image();
    img.src = src;
});




// Questions array
const questions = [
    "Describe a recent situation that made you anxious.",
    "On a scale of 1-10, how much did you overthink it?",
    "How would you ideally like to handle this situation?",
    "Do you think your reaction was realistic?",
    "What could calm you down next time?"
];

// Bunny reactions
const bunnyReactions = [
    "Hmm… let’s see!",
    "Oh no, not again 😅",
    "You're doing great!",
    "Take a deep breath 🐰",
    "Hopping to the next thought!"
];

// DOM elements
const questionSection = document.getElementById('question-section');
const questionTitle = document.getElementById('question-title');
const userInput = document.getElementById('user-input');
const nextBtn = document.getElementById('next-btn');
const resultsSection = document.getElementById('results-section');
const resultsList = document.getElementById('results-list');
const restartBtn = document.getElementById('restart-btn');
const bunny = document.getElementById('bunny');
const speechBubble = document.getElementById('speech-bubble');
const progressBar = document.getElementById('progress-bar');



let currentQuestion = 0;
let answers = [];

// Initialize first question
questionTitle.textContent = `Question 1: ${questions[0]}`;

// Function to update progress bar
function updateProgress() {
    const progress = ((currentQuestion) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Function to make bunny hop and update speech bubble
function bunnyReact() {
    // Pick a random reaction text
    const randomText = bunnyReactions[Math.floor(Math.random() * bunnyReactions.length)];
    speechBubble.textContent = randomText;

    // Pick a random GIF
    const randomGIF = bunnyGIFs[Math.floor(Math.random() * bunnyGIFs.length)];
    bunny.src = randomGIF;
}
// Function to show next question
function nextQuestion() {
    const answer = userInput.value.trim();
    if(answer === "") return;

    answers.push(answer);
    currentQuestion++;

    if(currentQuestion < questions.length) {
        // Update question text to next question
        questionTitle.textContent = `Question ${currentQuestion + 1}: ${questions[currentQuestion]}`;
        userInput.value = "";
        bunnyReact();
        updateProgress();
    } else {
        showResults();
    }
}

// Function to display results
function showResults() {
    questionSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    updateProgress();

    resultsList.innerHTML = "";
    answers.forEach((ans, index) => {
        const li = document.createElement('li');
        li.textContent = `Q${index + 1}: ${questions[index]} | Your Answer: ${ans}`;
        resultsList.appendChild(li);
    });

    // Save answers to localStorage
    localStorage.setItem('overthinkData', JSON.stringify(answers));
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);

restartBtn.addEventListener('click', () => {
    currentQuestion = 0;
    answers = [];
    questionSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    questionTitle.textContent = `Question 1: ${questions[0]}`;
    userInput.value = "";
    updateProgress();
    speechBubble.textContent = "Hi! Let's start overthinking together!";
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission / page reload
        nextQuestion();      // Call the same function as the Next button
    }
});

// year in footer
    const currentyear = new Date().getFullYear();
    
    const lastModified = document.lastModified;
    
    document.getElementById ('currentyear').textContent = currentyear;
    
    document.getElementById('lastModified').textContent = "Last modification: " + document.lastModified;