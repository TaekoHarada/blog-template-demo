document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const toggleButton = document.createElement("button");
  toggleButton.innerText = "Menu";
  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  document.body.insertBefore(toggleButton, nav);
});
