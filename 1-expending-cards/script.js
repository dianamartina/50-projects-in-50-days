const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  //
  panel.addEventListener("click", () => {
    // console.log(123);
    removectiveClasses();
    panel.classList.add("active");
  });
});

function removectiveClasses() {
  panels.forEach((panel) => panel.classList.remove("active"));
}
