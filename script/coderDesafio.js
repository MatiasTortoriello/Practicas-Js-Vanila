alert("Esto no tiene nada que ver con el sitio. Pero lo necesito para aprobar los coderDesafíos.")

//Función 1:

alert("Función 1: Calcular IVA")
let precio = parseFloat(prompt("Ingrese el precio del producto: "))

let preciofinal = calcularIva(precio)

alert(`El precio del producto es $${precio}. El precio con IVA es $${preciofinal}`)

function calcularIva(precioProducto) {
    let iva = (precioProducto*21)/100
    precioMasIva = precioProducto + iva
    return precioMasIva
}

//Función 2: 

alert("Función 2: País de fabricación de la marca de automóviles escogida")

let marca = prompt("Ingrese una marca de fabricante de automóviles: ");

marca = marca.toLowerCase();

paisDeFabricacion(marca)

function paisDeFabricacion(marcaDeAuto) {
    marcaDeAuto = marca

    if (marca == "fiat" || marca == "alfa romeo" || marca == "ferrari" || marca == "lamborghini" || marca == "maserati") {
        alert("Este auto es de fabricación italiana");

    } else if (marca == "renault" || marca == "peugeot" || marca == "citroen" || marca == "citröen") {
        alert("Este auto es de fabricación francesa");

    } else if (marca == "volkswagen" || marca == "mercedes benz" || marca == "audi" || marca == "bmw") {
        alert("Este auto es de fabricación alemana");
        
    } else if (marca === "aston martin" || marca === "rover" || marca === "mclaren" || marca === "rolls royce") {
        alert("Este auto es de fabricación británica");

    } else if (marca === "ford" || marca === "dodge" || marca === "chevrolet" || marca === "cadillac" || marca === "jeep") {
        alert("Este auto es de fabricación norteamericana");

    } else if (marca === "toyota" || marca === "honda" || marca === "nissan" || marca === "mazda" || marca === "mitsubishi") {
        alert("Este auto es de fabricación japonesa");

    } else if (marca === "hyundai" || marca === "kia") {
        alert("Este auto es de fabricación coreana");

    } else if (marca === "seat") {
        alert ("Este auto es de fabricación española");

    } else if (marca === "lada") {
        alert ("Este auto es de fabricación rusa");

    } else if (marca === "volvo") {
        alert ("Este auto es de fabricación sueca");

    } else { 
        alert("Esa marca de autos es incorrecta o no se encuentra en nuestra base de datos");
    }
}

//Función 3: Calcular año de nacimiento

alert("Función 3: Calcular año de nacimiento")

let edad = parseInt(prompt("Ingrese la edad"))
let anioDeNacimiento = calcularAnio(edad)

alert(`El año de nacimiento es ${anioDeNacimiento}`)

function calcularAnio(edadActual) {
    anioActual = parseInt(prompt("Ingrese el año actual: "))
    if (anioActual <= 2021 && anioActual >=1900){
        anioNacimiento = anioActual - edadActual
        return anioNacimiento
    } else {
        alert("Eres un gallina McFly!")
        alert("Este programa no funciona con viajeros en el tiempo.")
    }
}

alert("Ahora si, a seguir con el sitio (?)")