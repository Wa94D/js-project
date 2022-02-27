console.log("This is a modern to do list ");
showNotes();

// if user adds a note , we will add it to local storage

let addbtn = document.getElementById("addTask");
addbtn.addEventListener("click", function(e){

 let addtxt= document.getElementById("addTxt");
let notes = localStorage.getItem("notes");
if(notes== null){
    notesobj = [ ]
}else{
    notesobj = JSON.parse(notes)
}
notesobj.push(addtxt.value);
localStorage.setItem("notes", JSON.stringify(notesobj));
addtxt.value = "";

showNotes();
});


// function to show notes

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes== null){
        notesobj = [ ]
    }else{
        notesobj = JSON.parse(notes)
    }
   
    let html = "";
    notesobj.forEach(function(element , index){
        html += `
        <div class="noteCard card m-3" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note${index + 1 }</h5>
          <p class="card-text">${element}</p>
          <a id="${index}" onclick="deleteNote(this.id)" class="btn btn-2">Delete Note</a>
        </div>
      </div>  `   
    
    });
    let notesElm = document.getElementById("notes");
    if(notesobj.length != 0){
        notesElm.innerHTML =html;
    }else{
        notesElm.innerHTML =`'<h6 class="dynamic">nothing to show up here <a>please write above to make notes</a> </h6>"'`;
    }
}

// function for deeting notes
function deleteNote(index){

    let notes = localStorage.getItem("notes");
if(notes== null){
    notesobj = [ ]
}else{
    notesobj = JSON.parse(notes)
}
notesobj.splice(index , 1);
localStorage.setItem("notes", JSON.stringify(notesobj));
showNotes();
}
let search = document.getElementById("srch");
search.addEventListener ( "input" , function () {
    let inputValue = search.value.toLowerCase(); 

    let notecard = document.getElementsByClassName("noteCard");
    Array.from(notecard).forEach(function (element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputValue)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
   
    });
});


// navbar js

let navbar = document.getElementById('nav1');
window.onscroll = ()=>{
    if(window.scrollY > 10){
        navbar.classList.add("scrolled");
        console.log("navbar scrolled");
    }else{
        navbar.classList.remove("scrolled");
        console.log("navbar scrolled 2");
    }
}
