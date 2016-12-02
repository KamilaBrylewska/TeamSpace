document.onload = loadTriggers();
function loadTriggers() {
    console.log("DOM wczytany");
    
    var popUp = document.getElementById("create-popup");
    var sendButton = document.getElementById("send");
    var cancels = document.getElementsByClassName("delete");
    var adds = document.getElementsByClassName("add");
    for (i = 0; i < cancels.length - 1; i++) {
        cancels[i].style.color = "red";
    }
    NoteHelper.hidePopUp();
    cancels[cancels.length - 1].addEventListener("click", function () { NoteHelper.hidePopUp(); });
    adds[0].addEventListener("click", function () { NoteHelper.showPopUp(); });
    sendButton.addEventListener("click", function () { NoteHelper.collectForm(popUp.id); } );

}