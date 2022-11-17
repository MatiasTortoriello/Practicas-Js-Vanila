const instituto = document.querySelector("#instituto");
const vistaPrevia =  document.querySelector(".columna");
instituto.addEventListener("keyup",()=>{
    const texto = document.querySelector("#texto");
    texto.innerHTML = instituto.value;
});

const botones = document.querySelectorAll("button")
botones.forEach((item)=>{
    item.addEventListener("click", ()=>{
        vistaPrevia.classList.remove("fondo-azul");
        vistaPrevia.classList.remove("fondo-verde");
        vistaPrevia.classList.remove("fondo-amarillo");
        vistaPrevia.classList.add(`fondo-${item.value}`);
    })
})

/****************************************************
const instituto = document.querySelector("#instituto");
const vistaPrevia =  document.querySelector(".columna");
instituto.addEventListener("keyup",()=>{
    const texto = document.querySelector("#texto");
    texto.innerHTML = instituto.value;
});


const color = document.querySelector("#colores");
color.addEventListener("change", ()=> {
    const valor = color.value;
    vistaPrevia.classList.remove("fondo-azul","fondo-amarillo","fondo-verde","fondo-restablecer");
    if(valor == "azul"){
        vistaPrevia.classList.add("fondo-azul");
    }else if(valor == "amarillo"){
        vistaPrevia.classList.add("fondo-amarillo");
    }else if(valor == "verde"){
        vistaPrevia.classList.add("fondo-verde");
    }else{
        vistaPrevia.classList.add("fondo-restablecer");
    }
})*/