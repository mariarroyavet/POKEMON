const btnMode = document.querySelector(".btnMode");
const body = document.querySelector("body");

btnMode.addEventListener("click", function () {
    body.classList.toggle("darkMode");

    if (body.classList.contains("darkMode")){
        btnMode.textContent ="Light Mode";
    } else {btnMode.textContent = "Dark Mode"}
});

