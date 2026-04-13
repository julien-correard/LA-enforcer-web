const output = document.getElementById("output");

// 1. Afficher le cache immédiatement (si dispo)
const cached = localStorage.getItem("scores");

if (cached) {
  displayScores(JSON.parse(cached));
}

// 2. Toujours fetch en arrière-plan
fetch("https://la-enforcer-server.onrender.com/scores")
  .then(res => res.json())
  .then(data => {
    localStorage.setItem("scores", JSON.stringify(data));
    displayScores(data);
  })
  .catch(err => {
    // si pas de cache → message erreur
    if (!cached) {
      output.textContent = "Erreur connexion serveur";
    }
    console.error(err);
  });


// Fonction d'affichage (ton code existant propre)
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
