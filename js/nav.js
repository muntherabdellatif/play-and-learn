const arrowIcon = document.querySelector(".arrow");
const paidIcon =document.querySelector(".paid");
const linkList = document.querySelector(".link-list");
const paidList = document.querySelector(".paid-list");
const linkListItems = document.querySelectorAll(".link-list ul li");
const PaidListItems = document.querySelectorAll(".paid-list ul li");
const gamesBoxes = document.querySelectorAll('.link-section .box-container .box');

// link list

function toggleList() {
    linkList.classList.toggle("active");
    arrowIcon.classList.toggle("up");
    paidIcon.classList.toggle("hidden");
}

linkListItems.forEach(list=>{
    list.addEventListener("click",toggleList);
});

arrowIcon.addEventListener("click",toggleList);

// paid list

function filterBy (event) {
    let filterBy = "";
    paidListText= event.textContent;
    if (paidListText === "Free Games") {
        filterBy ="free";
    } else if (paidListText === "Paid Games") {
        filterBy ="paid";
    } else {
        filterBy ="all";
    }
    filter(filterBy);
}

function filter(filterBy) {
    gamesBoxes.forEach (box=>{
        if (filterBy !== "all") {
            if (box.dataset.paid === filterBy) {
                box.classList.remove("hidden");
            }else {
                box.classList.add("hidden");
            }
        }else {
            box.classList.remove("hidden");
        }
    });
}

function togglePaidList() {
    paidList.classList.toggle("active");
    arrowIcon.classList.toggle("hidden");
    if (arrowIcon.classList.contains("hidden")) {
        paidIcon.querySelector("i").classList.replace("fa-dollar-sign", "fa-arrow-up");
    } else {
        paidIcon.querySelector("i").classList.replace("fa-arrow-up", "fa-dollar-sign");
    }
}

PaidListItems.forEach(list=>{
    list.addEventListener("click",()=>{
        togglePaidList();
        filterBy(list);
    });
});

paidIcon.addEventListener("click",togglePaidList);