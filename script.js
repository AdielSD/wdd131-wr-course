// Array of tips
const tips = [
    "Take deep breaths and count to 10.",
    "Write down your thoughts to organize them.",
    "Step away from the situation for a while.",
    "Talk to someone you trust.",
    "Focus on what you can control."
];

// DOM Elements
const form = document.getElementById('overthink-form');
const resultsList = document.getElementById('results-list');
const tipDisplay = document.getElementById('tip');

// Retrieve previous results from localStorage
let overthinkData = JSON.parse(localStorage.getItem('overthinkData')) || [];

// Function to render results
function renderResults() {
    resultsList.innerHTML = '';
    overthinkData.forEach((entry, index) => {
        const li = document.createElement('li');
        li.textContent = `Situation: ${entry.situation} | Anxiety Level: ${entry.intensity} | Result: ${entry.result}`;
        resultsList.appendChild(li);
    });
}

// Function to simulate overthinking
function simulateOverthink(situation, intensity) {
    let result;
    if (intensity <= 3) {
        result = "Calm and rational response.";
    } else if (intensity <= 7) {
        result = "Some overthinking, minor anxiety.";
    } else {
        result = "High overthinking! Need a break!";
    }
    return result;
}

// Display random tip
function displayTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipDisplay.textContent = tips[randomIndex];
}

// Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const situation = document.getElementById('situation').value;
    const intensity = parseInt(document.getElementById('intensity').value);

    const result = simulateOverthink(situation, intensity);

    const entry = { situation, intensity, result };
    overthinkData.push(entry);

    // Save to localStorage
    localStorage.setItem('overthinkData', JSON.stringify(overthinkData));

    // Render
    renderResults();
    displayTip();

    form.reset();
});

// Initial render
renderResults();
displayTip();
