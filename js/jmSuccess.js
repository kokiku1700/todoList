const welcomeUser = document.getElementsByClassName("welcomeUser");
const n = localStorage.length - 1;
const loc = localStorage.getItem(localStorage.key(n));
const memberName = JSON.parse(loc);

welcomeUser[0].innerText = `${memberName.memberIm.name}님, 가입을 환영합니다.`;