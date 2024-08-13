////////// 이름 입력 이벤트 //////////
const nameInput = document.getElementById("name");

nameInput.addEventListener('focusout', () => {
    const reg = /^[가-힣]{2,6}$/;
    const spanName = document.getElementsByClassName("spanName");
    const emptyName = document.getElementsByClassName("emptyName");
    const errName = document.getElementsByClassName("errName");

    if ( reg.test(nameInput.value) ) {
        nameInput.style.borderColor = "rgb(96, 220, 98)";
        nameInput.style.color = "rgb(96, 220, 98)";
        spanName[0].style.color = "rgb(96, 220, 98)";
        errName[0].style.display = "none";
        emptyName[0].style.display = "none";
        nameBool = true;
    } else if ( nameInput.value === "" ) {
        nameInput.style.borderColor = "rgb(233, 9, 9)";
        nameInput.style.color = "rgb(233, 9, 9)";
        spanName[0].style.color = "rgb(233, 9, 9)";
        emptyName[0].style.display = "block";
        errName[0].style.display = "none";
        nameBool = false
    } else {
        nameInput.style.borderColor = "rgb(233, 9, 9)";
        nameInput.style.color = "rgb(233, 9, 9)";
        spanName[0].style.color = "rgb(233, 9, 9)";
        errName[0].style.display = "block";
        emptyName[0].style.display = "none";
    }
});

////////// id 입력 이벤트 ///////////
const idInput = document.getElementById("id");

idInput.addEventListener('focusout', () => {
    const reg = /^[A-Za-z0-9]{4,19}$/;
    const spanId = document.getElementsByClassName("spanId");
    const emptyId = document.getElementsByClassName("emptyId");
    const errId = document.getElementsByClassName("errId");
    const n = localStorage.length;

    if ( reg.test(idInput.value) ) {
        idInput.style.borderColor = "rgb(96, 220, 98)";
        idInput.style.color = "rgb(96, 220, 98)";
        spanId[0].style.color = "rgb(96, 220, 98)";
        errId[0].style.display = "none";
        emptyId[0].style.display = "none";
        idBool = true;
        for ( let i = 0; i < n; i++ ) {
            if ( localStorage.key(i) === idInput.value ) {
                idInput.style.borderColor = "rgb(233, 9, 9)";
                idInput.style.color = "rgb(233, 9, 9)";
                spanId[0].style.color = "rgb(233, 9, 9)";
                idBool = false;
                break;
            }
        }
        
    } else if ( idInput.value === "" ) {
        idInput.style.borderColor = "rgb(233, 9, 9)";
        idInput.style.color = "rgb(233, 9, 9)";
        spanId[0].style.color = "rgb(233, 9, 9)";
        emptyId[0].style.display = "block";
        errId[0].style.display = "none";
        idBool = false;
    } else {
        idInput.style.borderColor = "rgb(233, 9, 9)";
        idInput.style.color = "rgb(233, 9, 9)";
        spanId[0].style.color = "rgb(233, 9, 9)";
        errId[0].style.display = "block";
        emptyId[0].style.display = "none";
    }
});

////////// 비밀번호 입력 이벤트 //////////
const pwInput = document.getElementById("pw");

pwInput.addEventListener('focusout', () => {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    const spanPw = document.getElementsByClassName("spanPw");
    const emptyPw = document.getElementsByClassName("emptyPw");
    const errPw = document.getElementsByClassName("errPw");

    if ( reg.test(pwInput.value) ) {
        pwInput.style.borderColor = "rgb(96, 220, 98)";
        pwInput.style.color = "rgb(96, 220, 98)";
        spanPw[0].style.color = "rgb(96, 220, 98)";
        errPw[0].style.display = "none";
        emptyPw[0].style.display = "none";
        pwBool = true;
    } else if ( pwInput.value === "" ) {
        pwInput.style.borderColor = "rgb(233, 9, 9)";
        pwInput.style.color = "rgb(233, 9, 9)";
        spanPw[0].style.color = "rgb(233, 9, 9)";
        emptyPw[0].style.display = "block";
        errPw[0].style.display = "none";
        pwBool = false;
    } else {
        pwInput.style.borderColor = "rgb(233, 9, 9)";
        pwInput.style.color = "rgb(233, 9, 9)";
        spanPw[0].style.color = "rgb(233, 9, 9)";
        errPw[0].style.display = "block";
        emptyPw[0].style.display = "none";
    }
});

////////// 비밀번호 확인 이벤트 //////////
const pwCheckInput = document.getElementById("pwCheck");

pwCheckInput.addEventListener('focusout', () => {
    const spanPwCheck = document.getElementsByClassName("spanPwCheck");
    const errPwCheck = document.getElementsByClassName("errPwCheck");
    const emptyPwCheck = document.getElementsByClassName("emptyPwCheck");

    if ( pwInput.value !== "" && pwInput.value === pwCheckInput.value ) {
        pwCheckInput.style.borderColor = "rgb(96, 220, 98)";
        pwCheckInput.style.color = "rgb(96, 220, 98)";
        spanPwCheck[0].style.color = "rgb(96, 220, 98)";
        errPwCheck[0].style.display = "none";
        emptyPwCheck[0].style.display = "none";
        pwCheckBool = true;
    } else if ( pwInput.value === "" && pwCheckInput.value === "" ) {
        pwCheckInput.style.borderColor = "rgb(233, 9, 9)";
        pwCheckInput.style.color = "rgb(233, 9, 9)";
        spanPwCheck[0].style.color = "rgb(233, 9, 9)";
        emptyPwCheck[0].style.display = "block";
        errPwCheck[0].style.display = "none";
        pwCheckBool = false;
    } else {
        pwCheckInput.style.borderColor = "rgb(233, 9, 9)";
        pwCheckInput.style.color = "rgb(233, 9, 9)";
        spanPwCheck[0].style.color = "rgb(233, 9, 9)";
        errPwCheck[0].style.display = "block";
        emptyPwCheck[0].style.display = "none";
    }
});

////////// 확인 버튼 클릭 시 로컬 스토리지에 저장 ////////// 
const inputs = document.getElementsByClassName("inputs");
const checkBtn = document.getElementsByClassName("checkBtn");
let submitBool = false;
checkBtn[0].addEventListener('click', () => {
    for ( let i = 0; i < inputs.length; i++ ) {
        if ( inputs[i].style.color !== "rgb(96, 220, 98)" ) {
            inputs[i].focus();
            submitBool = false;
            break;
        } else {
            submitBool = true;
        }
    };

    if ( submitBool === true ) {
        const key = idInput.value;
        let impormation = {
            memberIm: {
                "id" :idInput.value,
                "name": nameInput.value,
                "password": pwInput.value
            }
        };
        let values = JSON.stringify(impormation);
        
        localStorage.setItem(key, values);
        location.href = "jmSuccess.html";

    }
});


