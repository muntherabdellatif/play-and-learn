const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');

// change the theme on load acourdning local storge 
if (window.localStorage.theme) {
    currentTheme=window.localStorage.theme;
    document.documentElement.setAttribute('data-theme',currentTheme);
    if (currentTheme==="dark") {
        toggleSwitch.checked = true ;
    }else if (currentTheme==="light") {
        toggleSwitch.checked =false ;
    }
}

// toggle
function switchTheme (event) {
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        window.localStorage.theme = "dark";
        toggleIcon.children[0].textContent ='Dark Mode';
        toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme','light');
        window.localStorage.theme = "light";
        toggleIcon.children[0].textContent ='Light Mode';
        toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    }
}

toggleSwitch.addEventListener('change',switchTheme);