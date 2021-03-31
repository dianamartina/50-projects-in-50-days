const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style= "transition-delay: ${idx * 50}ms">${letter}</span>`
    )
    .join("");

  console.log(label.innerHTML);
});

//descompun fiecare label intr-un array de litere, pe care il parcurg cu map si apoi il retransform in text
