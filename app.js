const hero = document.getElementById('hero');
for (let i = 0; i < 50; i++) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.top = Math.random() * window.innerHeight + 'px';
  sparkle.style.setProperty('--x', (Math.random() * 400 - 200) + 'px');
  sparkle.style.setProperty('--y', (Math.random() * 400 - 200) + 'px');
  hero.appendChild(sparkle);
}

// Hide hero after 4.5s
setTimeout(() => {
  hero.classList.add('hidden');
  document.getElementById('surprise').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: "smooth" });
}, 4500);

// Floating music notes 🎵
function createNote() {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerText = ["🎵", "🎶", "🎼"][Math.floor(Math.random() * 3)];
  note.style.left = Math.random() * 100 + "px";
  document.getElementById("music-notes").appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 4000);
}
document.getElementById('play-music').addEventListener('click', function() {
  document.getElementById('bg-music').play();
});

// Generate notes every 800ms

setInterval(createNote, 800);
