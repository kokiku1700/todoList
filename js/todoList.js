const memberName = document.getElementsByClassName("memberName");
const logoutBtn = document.getElementsByClassName("logoutBtn");
const insert = document.getElementsByClassName("insert");
const insertBtn = document.getElementsByClassName("insertBtn");
const n = localStorage.length;

for (let i = 0; i < n; i++ ) {
    const loc = localStorage.getItem(localStorage.key(i));
    const member = JSON.parse(loc);
    if ( member.memberIm.login === "on" ) {
        memberName[0].innerText = member.memberIm.name;
        break;
    };
};



insertBtn[0].addEventListener('click', () => {
    const listWrap = document.getElementsByClassName("list-wrap");
    const li = document.createElement("li");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const labelE = document.createElement("label");
    const inputE = document.createElement("input");
    const imgE1 = document.createElement("img");
    const imgE2 = document.createElement("img");

    if ( insert[0].value !== "" ) {
        listWrap[0].appendChild(li);
        li.appendChild(span1);
        li.appendChild(span2);

        span1.appendChild(inputE);
        span1.appendChild(labelE);
        
        inputE.setAttribute('id', 'listLi');
        inputE.type = 'checkbox';

        labelE.setAttribute('for', 'listLi');
        labelE.style.userSelect = "none";
        labelE.innerText = insert[0].value;
        
        span2.appendChild(imgE1);
        span2.appendChild(imgE2);

        imgE1.src = "./edit.png";
        imgE2.src = "./garbage.png";
    }

    

    insert[0].value = "";
});

const listLi = document.getElementsByClassName("listLi");
const labelC = document.querySelector("label");

for ( let i = 0; i < listLi.length; i++ ) {
    listLi[i].checked === "true" ? labelC.style.textDecoration = "underline" : false;
}

logoutBtn[0].addEventListener('click', () => {
    for (let i = 0; i < n; i++ ) {
        const loc = localStorage.getItem(localStorage.key(i));
        const member = JSON.parse(loc);
        const idCheck = member.memberIm.id;

        if ( member.memberIm.login === "on" ) {
            member.memberIm.login = "off";
            const memberS = JSON.stringify(member)
            localStorage.setItem(idCheck, memberS);
            break;
        };
    };
    location.replace("login.html");
});