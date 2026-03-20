const fortunes = [
  "🦚 Krishn hid your worries… now go look for your happiness ✨",
  "🍬 You were chosen today for extra sweetness 💗",
  "🎶 A flute played somewhere… and your luck improved 🍀",
  "🤍 You are held, even in silence 🌙",
  "🌸 Peace is coming to sit beside you 🕊️",
  "⏳ You don’t have to rush, Krishn isn’t rushing you 💫",
  "💗 Someone finds comfort in just knowing you exist 🧸",
  "💌 You are part of someone’s happy thought 💗",
];

const button = document.getElementById("cookie-btn");
const fortuneText = document.getElementById("fortune");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  fortuneText.textContent = fortunes[randomIndex];
});