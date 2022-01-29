// color theme =================================================================
const toggleIcon = document.getElementById("toggle-icon");
const icon = document.getElementById("sun-moon");

let darkMode = 0 ; 

// change the theme on load accourdining to  local storage
if (window.localStorage.theme) {
  currentTheme = window.localStorage.theme;
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    icon.classList.replace("fa-sun", "fa-moon");
  }else {
    icon.classList.replace("fa-moon", "fa-sun");
  }
}

// toggle
function switchTheme(event) {
  darkMode = !darkMode ;
  if (!darkMode) {
    document.documentElement.setAttribute("data-theme", "dark");
    window.localStorage.theme = "dark";
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    window.localStorage.theme = "light";
    icon.classList.replace("fa-moon", "fa-sun");
  }
}

toggleIcon.addEventListener("click", switchTheme);