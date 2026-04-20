const output = document.getElementById("output");
const status = document.getElementById("status");

const cached = localStorage.getItem("scores");


// On cache la dernière ligne, le prompt
const promptLine = document.getElementById("prompt-line");
promptLine.style.display = "none";

// 1. Cache immédiat
if (cached) {
  displayScores(JSON.parse(cached));
  status.textContent = "Checking for new scores...";
} else {
  status.textContent = "Connecting to server...";
}

// 2. Fetch
fetch("https://la-enforcer-server.onrender.com/scores")
  .then(res => res.json())
  .then(data => {
    localStorage.setItem("scores", JSON.stringify(data));
    displayScores(data);
    status.textContent = "Scores updated";
    showPrompt();
  })
  .catch(err => {
    if (!cached) {
      output.textContent = "Connection error";
      status.textContent = "Failed to connect";
      showPrompt();
    } else {
      status.textContent = "Server unavailable (using cache)";
      showPrompt();
    }
    console.error(err);
  });

// affichage
function displayScores(data) {
  let text = "";

  data.forEach((s, i) => {
    const rank = String(i + 1).padEnd(3, " ");
    const name = String(s.playerName).padEnd(15, " ");
    const score = String(s.score).padStart(6, " ");
    const date = String(s.date).padEnd(12, " ");
    const version = `game version : ${s.gameVersion}`;

    text += `${rank}${name}${score}  ${date}  ${version}\n`;
  });

  output.textContent = text;
}

function showPrompt() {
  promptLine.style.display = "block";
}
