class Cafe{
    constructor(id, cafe, grano, precio){
        this.id = id,
        this.cafe = cafe,
        this.grano = grano,
        this.precio = precio
    }

mostrarDatos(){
    console.log(`El cafe es ${this.cafe} su tipo de grano es ${this.grano} y cuesta ${this.precio}`)
    }
}

const cafe1 = new Cafe(1, "fuerte", "natural", 300)
const cafe2 = new Cafe(2, "suave", "arabica", 200)

const estanteria = [cafe1,cafe2]





function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingrese el numero de la opción que desea realizar:
                        1 - Ver catálogo de cafés
                        0 - Salir`))
    menu(opcion)
}
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por visitarnos vuelva pronto`)
        break
        case 1:
            alert(`Podrá ver nuestro catalogo en la consola`)
            for(let cafe of estanteria){
                console.log(cafe.cafe + " " + cafe.grano + " " + cafe.precio)
            }
    }
}

//CÓDIGO
let salir
while (salir != true){
    preguntarOpcion()
}

