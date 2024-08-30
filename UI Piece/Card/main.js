const Clarck = document.querySelector(".card");
const Shaka = Clarck.nextElementSibling;
console.log(Clarck);
console.log(Shaka);

// console.log(Clarck.children[1])
// console.log(Clarck.children[1].children[0])
// console.log(Clarck.children[1].children[0].children)
// const nick = Clarck.children[1].children[0].children[0].textContent

//Padre
// const padre = Clarck.parentElement;
// console.log(padre);
// console.log(Clarck.classList.contains('card'))




//*FUNCIONES 

function Activo() {
  console.log(this.getAttribute("nick"));
}

function handleMouseEnter() {
  console.log(this.getAttribute("nick"));
  Shaka.style.border = "3px solid black";
}
function handleMouseOut() {
    console.log(this.getAttribute("nick"));
    Shaka.style.border = "none";
    
}

function handleMouseUP() {
    console.log(this)
}




//*EVentos

Clarck.addEventListener("mouseenter", handleMouseEnter);
Clarck.addEventListener("mouseout", handleMouseOut);
Clarck.addEventListener("click", Activo);
Shaka.addEventListener("mouseup", handleMouseUP)



 
