const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

const helloBtn = document.getElementById("hello-btn");
const helloMessage = document.getElementById("hello-message");

if (helloBtn && helloMessage) {
  helloBtn.addEventListener("click", () => {
    helloMessage.textContent = "Thanks for visiting my website!";
  });
}
