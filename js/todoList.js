const memberName = document.getElementsByClassName("memberName");
const logoutBtn = document.getElementsByClassName("logoutBtn");
const insert = document.getElementsByClassName("insert");
const insertBtn = document.getElementsByClassName("insertBtn");
const n = localStorage.length;

// 페이지가 로드되면 저장된 값들을 화면에 출력
for (let i = 0; i < n; i++ ) {
    const loc = localStorage.getItem(localStorage.key(i));
    const member = JSON.parse(loc);

    if ( member.memberIm.login === "on" ) {
        memberName[0].innerText = member.memberIm.name;
        let listLen = member.memberIm.todoList.length;

        for ( let i = 0; i < listLen; i++ ) {
            const listWrap = document.getElementsByClassName("list-wrap");
            const li = document.createElement("li");
            const span1 = document.createElement("span");
            const span2 = document.createElement("span");
            const labelE = document.createElement("label");
            const inputE = document.createElement("input");
            const imgE1 = document.createElement("img");
            const imgE2 = document.createElement("img");

            listWrap[0].appendChild(li);
            li.appendChild(span1);
            li.appendChild(span2);

            span1.appendChild(inputE);
            span1.appendChild(labelE);
            
            inputE.setAttribute('id', `listLi${i}`);
            inputE.type = 'checkbox';

            labelE.setAttribute('for', `listLi${i}`);
            labelE.setAttribute('class', `label${i}`);
            labelE.style.userSelect = "none";
            labelE.innerText = member.memberIm.todoList[i];
            
            span2.appendChild(imgE1);
            span2.appendChild(imgE2);

            imgE1.src = "./edit.png";
            imgE2.src = "./garbage.png";
            imgE1.setAttribute("class", "editImg");
            imgE2.setAttribute("class", "removeImg");
            imgE1.style.userSelect = "none";
            imgE2.style.userSelect = "none";
        }
        break;
    };
};

// 추가 버튼 클릭 시 입력한 내용을 저장 및 추가
insertBtn[0].addEventListener('click', () => {
    const listWrap = document.getElementsByClassName("list-wrap");
    const li = document.createElement("li");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const labelE = document.createElement("label");
    const inputE = document.createElement("input");
    const imgE1 = document.createElement("img");
    const imgE2 = document.createElement("img");

    for (let i = 0; i < n; i++ ) {
        const loc = localStorage.getItem(localStorage.key(i));
        const member = JSON.parse(loc);
        const idCheck = member.memberIm.id;
        
        if ( member.memberIm.login === "on" ) {
            if ( insert[0].value !== "" ) {
                listWrap[0].appendChild(li);
                li.appendChild(span1);
                li.appendChild(span2);

                span1.appendChild(inputE);
                span1.appendChild(labelE);
                
                inputE.type = 'checkbox';
    
                labelE.style.userSelect = "none";
                labelE.innerText = insert[0].value;
                
                span2.appendChild(imgE1);
                span2.appendChild(imgE2);

                imgE1.src = "./edit.png";
                imgE2.src = "./garbage.png";

                imgE1.style.userSelect = "none";
                imgE2.style.userSelect = "none";
            }
            member.memberIm.todoList.push(insert[0].value);
            const memberS = JSON.stringify(member)
            localStorage.setItem(idCheck, memberS);
            location.reload();
            break;
        };
    };

    insert[0].value = "";
});

// const listLi = document.getElementsByClassName("listLi");
// const labelC = document.querySelector("label");

// for ( let i = 0; i < listLi.length; i++ ) {
//     listLi[i].checked === "true" ? labelC.style.textDecoration = "underline" : false;
// }




// 목록에 수정 버튼 클릭 시 해당 목록 수정
const editImg = document.querySelectorAll(".editImg");

editImg.forEach((e, i) => {
    e.addEventListener('click', () => {
        const inputChange = document.getElementById(`listLi${i}`);
        const labelChange = document.getElementsByClassName(`label${i}`);
        let text = labelChange[0].innerText;
        inputChange.type = "text";
        inputChange.value = text;
        labelChange[0].innerText = "";
    });
});

// 목록에 삭제 버튼 클릭 시 해당 목록 삭제
const removeImg = document.querySelectorAll(".removeImg");

removeImg.forEach((e, idx) => {
    e.addEventListener('click', () => {
        const removeLi = document.querySelectorAll("li");
        for (let i = 0; i < n; i++ ) {
            const loc = localStorage.getItem(localStorage.key(i));
            const member = JSON.parse(loc);
            const idCheck = member.memberIm.id;
            if ( member.memberIm.login === "on" ) {
                removeLi[idx].remove();
                member.memberIm.todoList.splice(idx, 1);
                const memberS = JSON.stringify(member)
                localStorage.setItem(idCheck, memberS);
                location.reload();
                break;
            };
        };
    })
});

// 로그아웃 버튼 클릭시 로그아웃하고 로그인 페이지로 이동
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