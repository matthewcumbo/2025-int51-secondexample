// DOM = Document Object Model

function changeTitleColor(){
    let pageTitle = document.getElementById("pageTitle");
    console.log(pageTitle);
    console.log(pageTitle.classList);

    document.getElementById("pageTitle").classList.remove("red");
    document.getElementById("pageTitle").classList.add("blue");   
}

function changeParagraphsToBold(){
    document.getElementById("paragraph1").classList.add("bold");
    document.getElementById("paragraph2").classList.add("bold");
}

function changeContent(){
    document.getElementById("paragraph2").innerHTML = "This content has been changed via JS.";
}