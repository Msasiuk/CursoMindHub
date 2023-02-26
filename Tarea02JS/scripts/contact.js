/*Creación de funcion que capta todos los datos ingresados por el usuario en los inputs de la pagina contact*/
function captureData(){
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let message = document.getElementById('message')

let data = [{[name.name]: name.value},{
            [email.name]: email.value},{
            [message.name]: message.value}]
    console.log(data)
}

/*Funcion flecha, el parametro va a hacer referencia al evento asociado en este caso se usa preventDefault que evita que se recargue la página al hacer click en el boton, ya que los datos no viajan actualmente a una bd*/
const handleForm = (event) => { event.preventDefault()
    captureData()
}

//Creación de evento para boton de submit*/
let contactButton = document.getElementById('contact-button')

// A las funciones que manejan eventos se les suele colocar la palabra handle
contactButton.addEventListener('click', handleForm)

