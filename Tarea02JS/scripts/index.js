//Creo una constante que contiene solo la lista de eventos
let eventList = []

for (let element of data.events) {
    eventList.push(element)
}

//Capturo el elemento donde se imprimiran las cards, tambien podría utilizar querySelector
let event_container = document.getElementById('event_container')

//Creo array de elemento cards
let cardList = []

//`` Comilla francesa permite ingresar variables de js al código html escrito en el script

for (let event of eventList) {
    cardList.push(`
    <article class="card">
    <div>
      <img
        src="${event.image}"
        class="card-img-top"
        alt="Image of ${event.name}"
      />
    </div>
    <div class="card-body text-center row aling-items-center">
      <h3 class="card-title">${event.name}</h3>
      <p class="card-text">
      ${event.description}
      </p>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <p>Price: $${event.price}</p>
      <a href="./details.html" class="btn btn-danger">More info</a>
    </div>
  </article>
  `)
}

/* event_container.innerHTML = cardList
Se imprime el array directamente y separa cada objeto por coma. La mejor forma es imprimirlo con join, crea un string completo separado por espacio vacio*/ 
event_container.innerHTML = cardList.join('')




//Creación de funcion que capta todos los checks con tal selector y que esten checkeados
function captureData(){
  //Primero se captura el elemento
  let categories = document.querySelectorAll('.input-category:checked')

  //Segundo se crea un array
  let data = {
    [categories[0].name]: []
  }
  
  //Se el elemento capturado y se llena el array declarado
  for(let category of categories){
    data[categories[0].name].push(category.value)
  }

  console.log(data)
}

/*Funcion flecha, el parametro va a hacer referencia al evento asociado en este caso se usa preventDefault que evita que se recargue la página al hacer click en el boton, ya que los datos no viajan actualmente a una bd*/
const handleForm = (event) => { event.preventDefault()
  captureData()
}

//Creación de evento para boton de submit*/
let searchButton = document.getElementById('search-button')

// A las funciones que manejan eventos se les suele colocar la palabra handle
searchButton.addEventListener('click', handleForm)
