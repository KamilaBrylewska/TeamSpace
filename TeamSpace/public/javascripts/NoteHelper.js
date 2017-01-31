
var NoteHelper = {
    numberOfNotes: 0,
    createNote: function () {
        
    },
    showPopUp: function () {
        var popUp = document.getElementById("create-popup");
        popUp.style.display = "block";
        NoteHelper.removeClass("size-none", popUp);
    },
    hidePopUp: function () {
        var popUp = document.getElementById("create-popup");
        popUp.style.display = "none";
        NoteHelper.addClass("size-none", popUp);
        //window.setTimeout(function () { NoteHelper.displayNone(popUp) }, 1000);
    },
    addClass: function (className, element) {
        
        var nodes = element.childNodes;
        
        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].classList) {
                nodes[i].classList.add(className);
            }
            else {
                //nodes[i].style.display = "none";
            }
        }
        element.classList.add(className);
    },
    removeClass: function (className, element) {
        
        var nodes = element.childNodes;
        
        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].classList) {
                nodes[i].classList.remove(className);
            }
            else {
                //nodes[i].style.display = "block";
            }
            
        }
        element.classList.remove(className);
    },
    displayNone: function (element) {
        element.style.display = "none";
    },

}

