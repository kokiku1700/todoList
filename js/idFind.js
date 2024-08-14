const idFind = document.getElementById("idFind");
const checkBtn = document.getElementsByClassName("checkBtn");
const idFindBefore = document.getElementsByClassName("idFindBefore");
const idFindAfter = document.getElementsByClassName("idFindAfter");
const idList = document.getElementsByClassName("idList");
const n = localStorage.length;
let idArr = [];
let nameBool = false;

checkBtn[0].addEventListener("click", () => {
    for (let i = 0; i < n; i++ ) {
        const loc = localStorage.getItem(localStorage.key(i));
        const memberName = JSON.parse(loc);
        if ( idFind.value === memberName.memberIm.name ) {
            idArr.push(memberName.memberIm.id);
            nameBool = true;
        }
    }

    if ( nameBool === true ) {
        idFindAfter[0].style.display = "block";
        idFindBefore[0].style.display = "none";

        const li = document.createElement("li");
        idArr.forEach(e => {
            li.innerText = e;
            idList[0].appendChild(li);
        })
    }
});
