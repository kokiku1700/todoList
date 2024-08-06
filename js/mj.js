const nameInput = document.getElementById("name");

nameInput.addEventListener('focusout', () => {
    const reg = /^[가-힣]{2,6}$/;
    const spanName = document.getElementsByClassName("spanName");

    if ( reg.test(nameInput.value) ) {
        nameInput.style.borderColor = "rgb(96, 220, 98)";
        nameInput.style.color = "rgb(96, 220, 98)";
        spanName[0].style.color = "rgb(96, 220, 98)";
        console.log(nameInput.style.color)
    } 
});