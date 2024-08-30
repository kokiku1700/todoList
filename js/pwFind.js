const pwFind = document.getElementById("pwFind");
const checkBtn = document.getElementsByClassName("checkBtn");
const pwFindBefore = document.getElementsByClassName("pwFindBefore");
const pwFindAfter = document.getElementsByClassName("pwFindAfter");
const pwList = document.getElementsByClassName("pwList");
const n = localStorage.length;
let pw = ""

checkBtn[0].addEventListener("click", () => {
    for (let i = 0; i < n; i++ ) {
        const loc = localStorage.getItem(localStorage.key(i));
        const memberId = JSON.parse(loc);
        if ( pwFind.value === memberId.memberIm.id ) {
            pw = memberId.memberIm.password;
        }
    }

    if ( pw ) {
        pwFindAfter[0].style.display = "block";
        pwFindBefore[0].style.display = "none";

        const li = document.createElement("li");
        li.innerText = pw;
        pwList[0].appendChild(li);
    } else {
        location.replace("nonExistentPw.html");
    }
});
