// card section =================================================================
const sectionsContainer = document.querySelector(".sections-container");
const list = document.querySelector(".list");

function createBoxText (sectionType) {
  let BoxText ="";
  allGames.forEach((game , index)=>{
    if (game.category.includes(sectionType)){
      BoxText += `
      <div class="box" data-id=${index}>
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
                  <p>${game.description}</p>
              </div>
          </div>
      </div>
      ` ;
    }
  });
  return (BoxText);
}

function createSectionsText( sectionType ,index ) {
  if (index%2 === 0) {
    color="section-color-1" ;
  }else {
    color="section-color-2" ;
  }
  let sectionText = `
  <div class="section ${color}" id="${sectionType}">
    <div class="main-header">
      <h2>${sectionType}</h2>
    </div>
    <div class="link-section">
        <div class="box-container">
          ${createBoxText(sectionType)}
        </div>
    </div>
  </div>
  `;
  return (sectionText);
}

function createPage () {
  sectionsContainer.innerHTML = "";
  let pageText = "" ;
  types.forEach ((type , index)=>{
    pageText += createSectionsText(type,index) ;
  });
  sectionsContainer.insertAdjacentHTML("afterbegin", pageText);
}

createPage();

// list item

function createList() {
  let listText = "";
  list.innerHTML = "";
  types.forEach(li=>{
    listText += `
      <li><a href="#${li}">${li}</a></li>
    `;
  });
  list.insertAdjacentHTML("afterbegin", listText);
}

createList();