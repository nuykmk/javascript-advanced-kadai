const btn = document.getElementById("btn");
const txt = document.getElementById("text");

btn.addEventListener("click", () => {
  setTimeout(() => {
    txt.textContent = "ボタンをクリックしました";
  }, 2000);
});
