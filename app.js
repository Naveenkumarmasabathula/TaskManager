
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let add = document.querySelector("#add");
let body = document.querySelector("body");
let listdiv = document.getElementById("listarea");

let listcount = 0;

// let inpchk = document.querySelector("input:checked");
// console.dir(inpchk);

body.classList.add("bg-dark");
body.classList.add("text-white");


add.addEventListener("click", addTask);

inp.addEventListener("keydown",function(event){
  console.dir(event);
  if(event.code =="Enter"){
    addTask();
    this.autofocus;
  }
});
checkList();

function checkList(){
  if (listcount == 0) {
    listdiv.innerHTML = "OOPS! your list is empty:(";
    // listdiv.innerHTML=("oops!");
  }
  else{
    listdiv.innerHTML ="";
  }
}


function addTask() {
    if (inp.value != "") {
        // alert("WOW YOU GOT SOMETHING NEW TO DO");
        let div = document.createElement("div");
        let li = document.createElement("li");
        let img = document.createElement("img");

        let label = document.createElement("label");
        let input = document.createElement("input");

        //   ul.style.listStyleType = "disc";
        // div.className = "item";
        div.innerHTML = inp.value;
        inp.value = "";

        img.src = "images/del.png";
        img.alt = "Delete";

        input.type = "checkbox";
        // input.id = "check";
        console.dir(label);

        ul.appendChild(li);
        li.appendChild(img);
        li.appendChild(input);//ty ch
        li.appendChild(div);
        listcount++;
    }else{
        alert("enter valid task");
    }
    checkList();
    
}



ul.addEventListener('click', function(event) {
  // Toggle the checkbox state
  if (event.target.nodeName == "IMG") {
    console.dir(event.target.nextSibling);
    let input = event.target.nextSibling;
    input.checked = !input.checked;
    if (input.checked) {
      event.target.parentElement.children[0].classList.remove("unstrike");
      event.target.parentElement.children[0].classList.add("strike");
      event.target.parentElement.children[2].classList.remove("unstrike");
      event.target.parentElement.children[2].classList.add("strike");
      listcount--;
    }else{
      event.target.parentElement.children[0].classList.remove("strike");
      event.target.parentElement.children[0].classList.add("unstrike");
      event.target.parentElement.children[2].classList.remove("strike");
      event.target.parentElement.children[2].classList.add("unstrike");
      listcount++;
    }
    checkList();
  }
});

ul.addEventListener("click", function(event) {
  if (event.target.nodeName == "IMG") {
    // console.dir(event.target.parentElement);
    // event.target.parentElement.remove();
    event.target.parentElement.children[2].classList.add("strike");
    
  }
});

// let delBtns = document.querySelectorAll(".delete");

// for (delBtn of delBtns) {
//     delBtn.addEventListener("click",function(){
//         console.log("hi");
//         let par = this.parentElement;
        
//         par.remove();
//     });
// }