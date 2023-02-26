//Creo una constante que contiene solo la lista de eventos
let eventList = []

for (let element of data.events) {
    eventList.push(element)
}

//Capturo el elemento donde se imprimiran las cards
let event_container = document.getElementById('event_container')

//Creo array de elemento cards
let cardList = []

//Creo una variable que contenga el value de id del tag
//let ---------------------

for (let event of eventList) {
  /*Debería comparar el value del elemnto con el id de la lista y devolver solo el id que coincida
  if(event.id == event) {cardList.push......}*/
    cardList.push(`
    <div class="acd-item1 fs-4">
    <h2>${event.name}</h2>
    <p>${event.date}</p>
  </div>
  <img
    src="${event.image}"
    class="card-img acd-item2"
    alt="Image of ${event.name}"
  />
  <div class="acd-item3 fs-6">
    <p><span>Description:</span> ${event.description}</p>
    <p><span>Category:</span> ${event.category}</p>
    <p><span>Place:</span> ${event.place}</p>
    <p><span>Capacity:</span> ${event.capacity}</p>
    <p><span>Assitance or estimate:</span> ${event.assistance}</p>
    <p><span>Price:</span> $${event.price}</p>
  </div>`)
}

event_container.innerHTML = cardList[0]
