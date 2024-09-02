// const Force = ["Kevind Durant", "Maradona", "Zidane"];

// let Vitas = 0;

// for (let i = 0; i < Force.length; i++) {

//   if (Force.length <= 2) {
//     const p = document.createElement("h1");
//     p.textContent = "No tiene jugadores suficientes";
//     console.log(p);
//     break;
//   } else {
    
//     const p = document.createElement("li");
//     p.textContent = Force[i];
//     console.log(p);
//   }
// }

//Seleccion de elemento
const contenedor = document.querySelector('.container')

//Creaciones de elemento
const nombre = document.createElement('h1')

//Modificaciond e contenido

let val = (a) ? 'j': 'io'
nombre.textContent = 'Zlatan Ibrahomovick'

//Agregar Elemento
contenedor.appendChild(nombre)
