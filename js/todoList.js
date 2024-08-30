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
            const imgE3 = document.createElement("img");
            const imgE4 = document.createElement("img");

            listWrap[0].appendChild(li);
            li.appendChild(span1);
            li.appendChild(span2);

            span1.appendChild(inputE);
            span1.appendChild(labelE);
            
            inputE.setAttribute('id', `listLi${i}`);
            inputE.setAttribute('class', 'editInput');
            inputE.type = 'checkbox';

            if ( member.memberIm.todoList[i].bool === true ) {
                inputE.setAttribute("checked", "true");
                labelE.style.textDecoration = "line-through";
                labelE.style.color = "#aaa";
            } else {
                labelE.style.textDecoration = "none";
                labelE.style.color = "rgb(223, 119, 119)";
            }

            labelE.setAttribute('for', `listLi${i}`);
            labelE.setAttribute('class', `label${i}`);
            labelE.style.userSelect = "none";
            labelE.innerText = member.memberIm.todoList[i].list;
            
            span2.appendChild(imgE1);
            span2.appendChild(imgE2);
            span2.appendChild(imgE3);
            span2.appendChild(imgE4);

            imgE1.src = "./edit.png";
            imgE2.src = "./garbage.png";
            imgE3.src = "./ok.png";
            imgE4.src = "./cancel.png";
            imgE1.setAttribute("class", "editImg");
            imgE2.setAttribute("class", "removeImg");
            imgE3.setAttribute("class", "okImg");
            imgE4.setAttribute("class", "cancelImg");
            imgE1.style.userSelect = "none";
            imgE2.style.userSelect = "none";
            imgE3.style.userSelect = "none";
            imgE4.style.userSelect = "none";

            imgE3.style.display = "none";
            imgE4.style.display = "none";
        }
        break;
    };
};

// 추가 버튼 클릭 시 입력한 내용을 저장 및 추가
insertBtn[0].addEventListener('click', () => {
    if ( insert[0].value !== "" ) {
        for (let i = 0; i < n; i++ ) {
            const loc = localStorage.getItem(localStorage.key(i));
            const member = JSON.parse(loc);
            const idCheck = member.memberIm.id;
            const todoKey = insert[0].value;
            const tList = {
                "list": todoKey,
                "bool": false
            }
            if ( member.memberIm.login === "on" ) {
                member.memberIm.todoList.push(tList);
                const memberS = JSON.stringify(member)
                localStorage.setItem(idCheck, memberS);
                location.reload();
                break;
            };
        };
    }
    insert[0].value = "";
});

// 체크박스 클릭시 선 긋고 클자색 변경
const editInput = document.querySelectorAll(".editInput");

editInput.forEach((e, i) => {
    e.addEventListener("click", () => {
        const labelC = document.getElementsByClassName(`label${i}`);
        
        for (let j = 0; j < n; j++ ) {
            const loc = localStorage.getItem(localStorage.key(j));
            const member = JSON.parse(loc);
            const idCheck = member.memberIm.id;

            if ( member.memberIm.login === "on" ) {
                member.memberIm.todoList[i].bool = !member.memberIm.todoList[i].bool
                const memberS = JSON.stringify(member)
                localStorage.setItem(idCheck, memberS);
                break;
            };
        };
        if ( e.checked === true ) {
            labelC[0].style.textDecoration = "line-through";
            labelC[0].style.color = "#aaa";
        } else {
            labelC[0].style.textDecoration = "none";
            labelC[0].style.color = "rgb(223, 119, 119)";
        }
    });
});

// 목록에 수정 버튼 클릭 시 해당 목록 수정
const editImg = document.querySelectorAll(".editImg");
const okImg = document.querySelectorAll(".okImg");
const cancelImg = document.querySelectorAll(".cancelImg");

editImg.forEach((e, i) => {
    e.addEventListener('click', () => {
        const inputChange = document.getElementById(`listLi${i}`);
        const labelChange = document.getElementsByClassName(`label${i}`);
        let text = labelChange[0].innerText;

        e.style.display = "none";
        removeImg[i].style.display = "none";
        okImg[i].style.display = "inline";
        cancelImg[i].style.display = "inline";
        
        inputChange.type = "text";
        inputChange.setAttribute("autocomplete", "off");
        inputChange.focus();
        inputChange.value = text;
        labelChange[0].innerText = "";
        
        // 수정 버튼을 누른 후 바뀌는 ok 버튼을 클릭 시 수정 완료
        okImg[i].addEventListener('click', () => {
            text = inputChange.value;
            labelChange[0].innerText = text;

            inputChange.type = "checkbox";
            e.style.display = "inline";
            removeImg[i].style.display = "inline";
            okImg[i].style.display = "none";
            cancelImg[i].style.display = "none";

            for (let j = 0; j < n; j++ ) {
                const loc = localStorage.getItem(localStorage.key(j));
                const member = JSON.parse(loc);
                const idCheck = member.memberIm.id;
                
                if ( member.memberIm.login === "on" ) {
                    member.memberIm.todoList[i].list = text;
                    const memberS = JSON.stringify(member)
                    localStorage.setItem(idCheck, memberS);
                    break;
                };
            };
        });

        // 수정 버튼을 누른 후 바뀌는 cancel 버튼을 클릭 시 
        // 바뀌지 않고 원래 값으로 
        cancelImg[i].addEventListener('click', () => {
            labelChange[0].innerText = text;

            inputChange.type = "checkbox";
            e.style.display = "inline";
            removeImg[i].style.display = "inline";
            okImg[i].style.display = "none";
            cancelImg[i].style.display = "none";
        })
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