fetch("https://la-enforcer-server.onrender.com/scores")
  .then(res => res.json())
  .then(data => {

    let text = "";

    data.forEach((s, i) => {

      const rank = String(i + 1).padEnd(3, " ");
      const name = String(s.playerName).padEnd(15, " ");
      const score = String(s.score).padStart(6, " ");
      const date = String(s.date).padEnd(12, " ");
      const version = `game version : ${s.gameVersion}`;

      text += `${rank}${name}${score}  ${date}  ${version}\n`;
    });

    document.getElementById("output").textContent = text;
  })
  .catch(err => {
    document.getElementById("output").textContent = "Erreur connexion serveur";
    console.error(err);
  });
