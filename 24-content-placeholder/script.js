const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 1500);

function getData() {
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1587502536263-5dda37cd33f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  alt="" />`;
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptatibus!";
  profile_img.innerHTML = `<img
  src="https://randomuser.me/portraits/men/45.jpg" alt="">`;
  name.innerHTML = " John Doe";
  date.inner = "Oct 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated_bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated_bg_text"));
}
