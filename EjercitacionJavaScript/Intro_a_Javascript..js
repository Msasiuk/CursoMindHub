// 1.	Crear una variable llamada miNombre y guardar en ella su primer nombre.

let miNombre = 'Gabriela'
// let miNombre = prompt('Ingrese su nombre')
// ----- Ojo si el prompt lleva comillas dobles ingresará el texto como valor de la variable ------------

// 2.	Crear una variable llamada miApellido y guardar en ella su apellido.

let miApellido = 'Maza Sasiuk'
// let miApellido = prompt('Ingrese su apellido')

// 3.	Crear una variable llamada miEdad y guardar en ella su edad.

let miEdad = 32
// let miEdad = parseInt(prompt('Ingrese su edad'))

// 4.	Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.

let miMascota = 'Iggy'
// let miMascota = prompt('Ingrese el nombre de su mascota')

// 5.	Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.

let edadMascota = 2
// let edadMascota = parseInt(prompt('Ingrese la edad de su mascota'))

// 6.	Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas.

// '\n' ----- para salto de línea -------
console.log('Nombre: ' + miNombre + '\n'
    + 'Apellido: ' + miApellido + '\n'
    + 'Edad: ' + miEdad + '\n'
    + 'Nombre mascota: ' + miMascota + '\n'
    + 'Edad mascota: ' + edadMascota)

// 7.	Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido.

let nombreCompleto = miNombre.concat(' ' + miApellido)
console.log(nombreCompleto)
// 8.	Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento.

let textoPresentacion = miNombre + ' ' + miApellido + ' ' + miEdad + ' ' + miMascota + ' ' + edadMascota
console.log(textoPresentacion)

// 9.	Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota.

let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota
console.log('Suma de edades es: ' + sumaEdades + '\n' +
    'Resta de edades es: ' + restaEdades + '\n' +
    'Producto de edades es: ' + productoEdades + '\n' +
    'División de edades es: ' + divisionEdades);

// 10.	Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados.

// 11.	Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.

// ----- Existen 3 formas de crear un objeto, 1 por medio del método constructor, 2 llamando propiedades que no tiene y asignandole valor, 3 indexando propiedades que no tiene y asignadole valor -----

let alumno = new Object({
    nombre: 'Gabriela',
    apellido: 'Maza',
    edad: 32,
    ciudad: 'Mendoza',
    cursa: true,
})
console.table(alumno)
console.log(alumno.nombre + ' ' + alumno.apellido + ' ' + alumno.edad + ' ' + alumno.ciudad + ' ' + alumno.cursa)

let alumno2 = new Object()
alumno2.nombre = 'Carolina'
alumno2.apellido = 'Maza'
alumno2.edad = 27
alumno2.ciudad = 'Mendoza'
alumno2.cursa = false
console.table(alumno2)
console.log(alumno2.nombre + ' ' + alumno2.apellido + ' ' + alumno2.edad + ' ' + alumno2.ciudad + ' ' + alumno2.cursa)

let alumno3 = new Object()
alumno3['nombre'] = 'Natalia'
alumno3['apellido'] = 'Maza'
alumno3['edad'] = 24
alumno3['ciudad'] = 'Mendoza'
alumno3['cursa'] = false
console.table(alumno3)
console.log(alumno3.nombre + ' ' + alumno3.apellido + ' ' + alumno3.edad + ' ' + alumno3.ciudad + ' ' + alumno3.cursa)

// 12.	Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.

let mascota = new Object({
    nombre: 'Iggy',
    especie: 'Erizo',
    edad: 2,
    sexo: 'Macho',
    color: 'Sal y Pimienta'
})
console.table(mascota)
console.log(Object.entries(mascota))

// 13.	Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.

let frutas = ['mango', 'anana', 'arándano', 'limón', 'sandia']
console.log(frutas)
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

// 14.	Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.

let numeros = [10, 15, 20, 25, 30]
console.log(numeros)
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

// 15.	Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado.

let familia = ['Sergio', 'Edith', 'Gabriela', 'Carolina', 'Natalia']
console.log(familia)
for (let persona of familia) {
    console.log(persona)
}

// 16.	Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15.

let textoAleatorio = frutas[1] + ' ' + numeros[3] + ' ' + familia[4]

// 17.	Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar por consola los resultados de comparar los valores y guardarlos en variables llamadas por ejemplo: edadesIguales, soyMayor, soyMenor, etc. Y mostrar mensajes en consola como los siguientes:
// a.	Mi edad es igual a la de mi compañero: false
// b.	Mi edad es mayor a la de mi compañero: true
// c.	Mi edad es menor a la de mi compañero: false

let edad1 = prompt('Ingrese su edad')
let edad2 = prompt('Ingrese la edad de su compañero')
let edadesIguales = false
let soyMayor = false
let soyMenor = false

if (edad1 == edad2) {
    edadesIguales = true
} else if (edad1 != edad2) {
    if (edad1 > edad2) {
        soyMayor = true
    } else {
        soyMenor = true
    }
}

console.log('Mi edad es igual a la de mi compañero: ' + edadesIguales + '\n' +
    'Mi edad es mayor a la de mi compañero: ' + soyMayor + '\n' +
    'Mi edad es menor a la de mi compañero: ' + soyMenor)

// 18.	Compare su edad ingresada por pantalla con prompt() con el numero 18 y guardarlo en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga: Soy mayor de edad y el valor de la variable.

let soyMayorDeEdad = false

if (edad1 >= 18) {
    soyMayorDeEdad = true
}

console.log('Soy mayor de edad: ' + soyMayorDeEdad)

// 19.	Introducir por pantalla la edad y la altura de una persona y guardarlas en variables separadas y en una variable llamada puedeSubir el resultado de la operación resultante de si la persona es mayor de 6 años y además tiene una altura mínima de 120cm y mostrar por consola un mensaje como el siguiente: Puede subir a la atracción y el valor de la variable resultante.

let altura = prompt('Ingrese su altura')
let puedeSubir = false

if (edad1 > 6 && altura >= 120) {
    puedeSubir = true
}

console.log('Puede subir a la atracción: ' + puedeSubir)

// 20.	Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o “LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una variable llamada puedePasar guardar el resultado de la operación resultante de si la persona tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La persona puede pasar y el resultado de la variable.

let pase = prompt('Ingrese su tipo de pase: VIP - NORMAL - LIMITADO')
let saldo = prompt('Ingrese el saldo disponible')
let puedePasar = false

if (pase == 'VIP' || pase == 'vip' || pase == 'Vip' || saldo > 1000) {
    puedePasar = true
}

console.log('La persona puede pasar: ' + puedePasar)
