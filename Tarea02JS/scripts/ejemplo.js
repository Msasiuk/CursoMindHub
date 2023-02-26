/*Primero debe declararse y asignarse una variable y luego asignarle el contenido del documento que quiera atrapar
let saludo = 'Hola mundoo'
console.log(saludo)*/

/*let elemento = document
elemento = document.title
console.log(elemento)*/

/*let elemento = window
console.log(elemento)*/

/*Para seleccionar un objeto del documento por su selector de etiqueta, clase o id se usa
document.querySelector('')
('etiqueta') - ('.clase') - ('#propiedad')*/
/*let elemento = document.querySelector('h1')
console.log(elemento)*/

/*document.head
document.title
document.images
document.forms
Devuelve una collección HTML de los elementos indicados*/

/*Al trabajar con ID y Clases lo más recomendable es trabajar con const y no con let

Con getElementById('') no hace falta colocar el # ya que sabe que voy a buscar por ID
const elemento = document.getElementById('h2')
console.log(elemento)

Con innerHTML puedo cambiar el contenido del objeto seleccionado del html
elemento.innerHTML = 'Todos los eventos'*/

/*Se puede trabajar con objetos por parentezco
const elemento = document.querySelector('footer')
console.log(elemento.children)
console.log(elemento.children[0])

console.log(elemento.firstElementChild)

console.log(elemento.lastElementChild)*/

/* Busqueda del abuelo y del hermano mas cercano a partir del parentezco de padre con hijo
const elemento = document.querySelector('a > img.logo-footer')

console.log(elemento.parentElement.parentElement)
console.log(elemento.nextElementSibling)*/

/*Busca el elemento único
const elemento = document.getElementById('h1')
console.log(elemento)

Crea un array con las etiquetas indicadas
const elemento2 = document.getElementsByTagName('h1')
console.log(elemento2)

Crea un array con las clases indicadas
const elemento3 = document.getElementsByClassName('h1')
console.log(elemento3)*/

/*Con query selector hay que indicar si se busca la etiqueta, la clase o el id - debo escribirlos igualmente que en css. A diferencia del querySelectorAll buscará el primer elemento que coincida
const elemento4 = document.querySelector('.nav-link')
console.log(elemento4)

Trae una lista de Nodos
const elemento5 = document.querySelectorAll('.nav-link')
console.log(elemento5)*/

/*Creacion de nodos e incorporación al HTML
Primero se identifica al padre luego se crea el nuevo nodo y por último se agrega el hijo al padre

const elementoPadre = document.querySelector('footer')

const elementoNuevo = document.createElement('p')

elementoPadre.appendChild(elementoNuevo)

const texto = document.createTextNode('Hola Mundo')

elementoNuevo.appendChild(texto)*/

/*Otra forma de insertar un nodo a etiqueta padre
const elementoPadre = document.querySelector('footer')

elementoPadre.append('Hola mundo', document.createElement('p'))*/

/*Al usar el append/appendChild el nuevo nodo se crea último para poder ubicarlo en algún espacio en particular debe usarse el insertBefore donde necesito identificar el elemento padre y el elemento hermano que será al posterior a su creación 

const elementoPadre = document.querySelector('footer')

const elementoNuevo = document.createElement('p')

const hermanoMayor = document.querySelector('.div-footer')

elementoPadre.insertBefore(elementoNuevo, hermanoMayor)

const texto = document.createTextNode('Hola Mundo')

elementoNuevo.append(texto)*/

/*Tambien puede usarse insertAdjancentElement y no hace falta identificar al padre sino que busco un hermano y elijo si insertarlo anters , despues o al final de los hermanos. Y tambien puedo usarla para crear multiples nodos al repetir la declaracion insertAdjacentElement

const elementoNuevo = document.createElement('p')

const hermanoMayor = document.querySelector('.div-footer')

hermanoMayor.insertAdjacentElement('beforebegin', elementoNuevo)

//('afterbegin', elementoNuevo)
//('beforeend', elementoNuevo)
//('afterend', elementoNuevo)

elementoNuevo.innerText = 'Hola Mundo'*/