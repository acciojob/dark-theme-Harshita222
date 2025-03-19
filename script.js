//your code here

const btn= document.getElementById("swap")
const app = document.getElementById("app")
btn.addEventListener("click", function swapTheme() {
    app.classList.toggle("day");
    app.classList.toggle("night");
    btn.classList.toggle("button_day");
    btn.classList.toggle("button_night");
});
