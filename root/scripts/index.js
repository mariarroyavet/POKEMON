const btnMode = document.querySelector(".btnMode");
const colorBack = document.body;

btnMode.addEventListener("click", function () {
    colorBack.classList.toggle("dark");

    if (colorBack.classList.contains("dark")){
        btnMode.textContent ="Light Mode";
    } else {btnMode.textContent = "Dark Mode"}
});

