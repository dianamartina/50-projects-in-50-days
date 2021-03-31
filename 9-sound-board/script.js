const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs(); //oprim orice melodie rula

    document.getElementById(sound).play(); // se difizeaza melodia
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause(); // nu exista stop asa ca ne folosim de pause
    song.currentTime = 0; // il setam 0 pt a-l opri
  });
}
