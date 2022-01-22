// color theme =================================================================

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");

// change the theme on load acourdning local storge
if (window.localStorage.theme) {
  currentTheme = window.localStorage.theme;
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  } else if (currentTheme === "light") {
    toggleSwitch.checked = false;
  }
}

// toggle
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    window.localStorage.theme = "dark";
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    window.localStorage.theme = "light";
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  }
}

toggleSwitch.addEventListener("change", switchTheme);

// card section =================================================================

const boxContainer = document.querySelector(".box-container");

function createBox(elementHTMLText) {
  // removing old elements
  boxContainer.innerHTML = "";
  // adding elements to the page description
  boxContainer.insertAdjacentHTML("afterbegin", elementHTMLText);
  document.querySelectorAll(".box").forEach (box=>{
    box.addEventListener("mouseover",()=>{
      let boxNumber =box.dataset.id ;
      let text = allGames[boxNumber].description ;
      document.querySelectorAll(".description")[boxNumber].innerHTML=  `<p>${text}</p>`;
    });
  })

  document.querySelectorAll(".box").forEach (box=>{
    box.addEventListener("mouseout",()=>{
      let boxNumber =box.dataset.id ;
      let boxDescription = allGames[boxNumber].description ;
      if (boxDescription.length>100){
        boxDescription = boxDescription.slice(0,100)+"...";
      }
      document.querySelectorAll(".description")[boxNumber].innerHTML= `<p>${boxDescription}</p>`;
    });
  })
}

function createElement(allGames) {
    let elementText = '';
    let counter = 0;
    allGames.forEach ((game)=>{

      let disc = game.description;
      // let text =(disc.split(" ").toString());
      if (disc.length>100){
        disc = disc.slice(0,100)+"...";
      }
      elementText += `
        <div class="box" data-id=${counter}>
            <div class="color">
                <a href="${game.link}" target="_blank">
                    <p>Play</p>
                </a>
            </div>
            <div class="img">
                <img src="${game.img}" alt="">
            </div>
            <div class="box-text">
                <div class="header">
                    <h3>${game.name}</h3>
                </div>
                <div class="description">
                    <p>${disc}</p>
                </div>
            </div>
        </div>
        `;
        counter++ ;
    });
  return elementText;
}

createBox(createElement(allGames));
