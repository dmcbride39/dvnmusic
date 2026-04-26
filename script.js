const tracks = [
  { title: "Neon Drift", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://picsum.photos/300" },
  // Add more tracks here
];

const grid = document.getElementById('music-grid');
const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');

tracks.forEach(track => {
  const card = document.createElement('div');
  card.className = 'track-card';
  card.innerHTML = `
    <img src="${track.cover}" alt="${track.title}">
    <h3>${track.title}</h3>
  `;
  card.onclick = () => {
    audio.src = track.src;
    audio.play();
    songTitle.textContent = track.title;
  };
  grid.appendChild(card);
});
