const personajesOnePiece = [
  {
    nombre: "Marshall Teach",
    apodo: "Marshal",
    poder: "Gura Gura no Mi",
    recompensa: "3,996,000,000 Berries",
    imagen: "img"
  },
    {
      nombre: "Monkey D. Luffy",
      apodo: "Mugi",
      poder: "Gear 5",
      recompensa: "3,000,000,000 Berries",
      imagen: "imagen"
    },
    {
      nombre: "Gol D rogers",
      apodo: "GolD",
      poder: " Uo Uo no Mi",
      recompensa: "4,611,100,000 Berries",
      imagen: ""
    },
  
    {
      nombre: "Doflamingo",
      apodo: "Shank",
      poder: "Gura Gura no Mi",
      recompensa: "3,996,000,000 Berries",
      imagen: "img"
    },

  ];
  
const contenedor = document.querySelector('.container')

  personajesOnePiece.forEach(Personaje =>{

    // crear elemet

    const divCard = document.createElement('div')
    const divImg = document.createElement('div')
    const divInfo = document.createElement('div')

    const img = document.createElement('img')

    const h2 =  document.createElement('h2')
    const p =  document.createElement('p')
    const a =  document.createElement('a')

    h2.textContent = Personaje.nombre
    p.textContent = Personaje.poder
    a.textContent = Personaje.recompensa

    divCard.appendChild(divImg)
    divCard.appendChild(divInfo)
    divImg.appendChild(img)
    divInfo.appendChild(h2)
    divInfo.appendChild(p)
    divInfo.appendChild(a)
    contenedor.appendChild(divCard)

    divCard.classList.add('card')
    divImg.classList.add('img')
    divImg.classList.add('img')
    divInfo.classList.add('info')

    img.src =`./img/${Personaje.apodo}.jpg`



    


  })