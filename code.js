/* definimos constantes   */
const menu = document.querySelector(".menu");

let lineaTop = document.querySelector(".linea1")
let linea = document.querySelector(".linea2")
let lineaButtom = document.querySelector(".linea3")

/* evento click   */ 

menu.addEventListener('click', ()=>{
    lineaTop.classList.toggle('top');
    linea.classList.toggle('centro');
    lineaButtom.classList.toggle('buttom');
})