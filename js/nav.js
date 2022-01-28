const arrow = document.querySelector(".arrow");
const linkList = document.querySelector(".link-list");
const List = document.querySelectorAll(".link-list ul li");

function toggleList() {
    linkList.classList.toggle("active");
    arrow.classList.toggle("up");
}

List.forEach(list=>{
    list.addEventListener("click",toggleList);
});

arrow.addEventListener("click",toggleList);