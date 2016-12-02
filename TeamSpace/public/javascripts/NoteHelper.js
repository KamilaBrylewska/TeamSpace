var Note = function () {
    this.title = "Title";
    this.content = "content";
    this.author = "GalAnonim";
}

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
    collectForm: function (ContenerId) {
        var i;
        var values = [];
        var contener = document.getElementById(ContenerId).childNodes;
        for (i = 0; i < contener.length; i++) {
            if (contener[i].nodeName == "INPUT" || contener[i].nodeName == "TEXTAREA") {
                
                //contener[i].innerHtml;
                console.log(contener[i].value);
                values.push(contener[i].value);
            }
          
        }
        return values;
    },
    ArrayToNote: function (arrayOfData) {
        NoteHelper.collectForm();
        var Notes = new Note();
        Notes.title = arrayOfData[0];
        Notes.content = arrayOfData[1];
        Notes.author = arrayOfData[2];
        return Notes;

    }
}

