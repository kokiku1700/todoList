const memberName = document.getElementsByClassName("memberName");
const n = localStorage.length;

for (let i = 0; i < n; i++ ) {
    const loc = localStorage.getItem(localStorage.key(i));
    const member = JSON.parse(loc);
    if ( member.memberIm.login === "on" ) {
        memberName[0].innerText = `${member.memberIm.name}님의 투두리스트`;
        break;
    };
};