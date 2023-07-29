const btnMode = document.querySelector(".btnMode");
const body = document.querySelector("body");

// Check if theme is already set in local storage
const theme = localStorage.getItem("theme");
if (theme) {
  body.classList.add(theme);
  if (theme === "darkMode") {
    btnMode.textContent = "Light Mode";
  } else {
    btnMode.textContent = "Dark Mode";
  }
}

btnMode.addEventListener("click", function () {
    body.classList.toggle("darkMode");

    if (body.classList.contains("darkMode")){
        btnMode.textContent ="Light Mode";
        // Store the theme in local storage
        localStorage.setItem("theme", "darkMode");
    } else {btnMode.textContent = "Dark Mode"
        // Store the theme in local storage
        localStorage.setItem("theme", "lightMode");}
});

