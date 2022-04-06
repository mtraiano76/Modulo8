/*let elH1 = document.querySelector("h1");

console.log(elH1);

let navBar = document.querySelector(".nav-bar");

console.log(navBar);

let losParrafos = document.querySelectorAll("p")
 for (const unParrafo of losParrafos) { /*asi hacemos que aparezcan todos los parrafos peros separados, no en una lista*/
    /* console.log(unParrafo);

 /*}

 let strong = document.querySelector(".parrafo-especial strong");/*pedimos el strong que esta dentro el selector class parrafo especial*/

 /*console.log(strong);*/

/*let titulo = document.querySelector ("h1");
titulo.innerHTML = "Soy un contenido nuevo desde JS"; /*CAMBIAMOS LA INFO DEL H1*/
/*console.log(titulo.innerHTML);*/

/*let titulo = document.querySelector ("h1");
titulo.innerHTML = titulo.innerHTML += " Soy un contenido nuevo desde JS"; /*agragamos LA INFO DEL H1*/
/*console.log(titulo.innerHTML);*/

let parrafoEspecial = document.querySelector (".parrafo-especial");
parrafoEspecial.innerHTML = "Un texto con algo en <i>cursiva</i>";
console.log(parrafoEspecial); /* <i></i> esto es para cursiva*/

/*innerHTML = vemos el resultado "Un texto con algo en cursiva"
innerText = vemos literal el texto "Un texto con algo en <i>cursiva</i>"*/


/*let confirmaCambios = confirm ("Queres cambiar el color del titulo?");

if (confirmaCambios) {
    let titulo = document.querySelector ("h1");
    titulo.innerHTML = titulo.innerHTML += " Soy un contenido nuevo desde JS";
    titulo.style.color ="crimson";
    titulo.style.fontSize = "50px";
}*/
let titulo = document.querySelector ("h1");
titulo.innerHTML = titulo.innerHTML += " Soy un contenido nuevo desde JS";
titulo.classList.add("titulo-destacado");

let confirmaEliminarClase = confirm ("Queres eliminar la clase del titulo?");
 if (confirmaEliminarClase){
     titulo.classList.remove ("titulo-destacado");
     
 }
