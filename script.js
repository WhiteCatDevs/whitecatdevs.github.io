const cat = document.getElementById("cat");

window.addEventListener("pointermove", (event) => {
  if (!cat) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 14;
  const y = (event.clientY / window.innerHeight - 0.5) * 10;
  cat.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener("pointerleave", () => {
  if (!cat) return;
  cat.style.transform = "translate(0px, 0px)";
});
