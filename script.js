
window.addEventListener("load", () => {
  const bar = document.getElementById("announcement-bar");

  // Slide down after 1s
  setTimeout(() => {
    bar.style.top = "0";
  }, 1000);

  // Slide back up after 10s (optional)
  setTimeout(() => {
    bar.style.top = "-60px";
  }, 10000);
});
