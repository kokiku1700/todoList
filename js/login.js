const loginId = document.getElementById("loginId");
const loginPw = document.getElementById("loginPw");
const loginBtn = document.getElementsByClassName("loginBtn");
const idPwErr = document.getElementsByClassName("idPwErr");
let loginBool = false;
const n = localStorage.length;

loginBtn[0].addEventListener('click', () => {
    for (let i = 0; i < n; i++ ) {
        const loc = localStorage.getItem(localStorage.key(i));
        const member = JSON.parse(loc);
        const idCheck = member.memberIm.id;
        const pwCheck = member.memberIm.password;
        if ( loginId.value === idCheck && loginPw.value === pwCheck ) {
            loginBool = true;
            member.memberIm.login = "on";
            const memberS = JSON.stringify(member)
            localStorage.setItem(idCheck, memberS);
            break;
        };
    };

    if ( loginBool ) {
        idPwErr[0].style.display = "none";
        location.href = "todoList.html";
    } else {
        idPwErr[0].style.display = "block";
    }
});


