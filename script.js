const fortunes = [
  "🦚 Krishn hid your worries… now go look for your happiness ✨",
  "🍬 You were chosen today for extra sweetness 💗",
  "🎶 A flute played somewhere… and your luck improved 🍀",
  "🤍 You are held, even in silence 🌙",
  "🌸 Peace is coming to sit beside you 🕊️",
  "⏳ You don’t have to rush, Krishn isn’t rushing you 💫",
  "💗 Someone finds comfort in just knowing you exist 🧸",
  "💌 You are part of someone’s happy thought 💗"
];

function openCookie() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const randomFortune = fortunes[randomIndex];

  document.getElementById("fortune").innerText = randomFortune;
}

function copyFortune() {
  const text = document.getElementById("fortune").innerText;

  if (!text || text === "Reveal your Fate...") return;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector(".copy");
    const original = btn.innerText;
    btn.innerText = "copied!";
    setTimeout(() => btn.innerText = original, 1000);
  }).catch(err => {
    console.error("Copy failed:", err);
  });
}
