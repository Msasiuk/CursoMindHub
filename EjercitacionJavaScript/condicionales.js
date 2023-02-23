// 1.	Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.

/*let numero01 = parseInt(prompt('Ingrese un valor para el número 1'))
let numero02 = parseInt(prompt('Ingrese un valor para el número 2'))

if (numero01 == numero02) {
    console.log('Ambos números son iguales')
} else if (numero01 != numero02) {
    if (numero01 > numero02) {
        console.log('El primer número es mayor al segundo número')
    } else if (numero01 < numero02) {
        console.log('El primer número es menor al segundo número')
    } else {
        console.log('Error al analizar los números')
    }
}*/

// 2.	Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.

/*if (numero01 == numero02) {
    console.log('Ambos números son iguales entre si')
} else {
    console.log('Ambos números son diferentes entre si')
}*/

// 3.	Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.

/*let numeroMayor

if (numero01 == numero02) {
    console.log('Ambos números son iguales entre si')
    numeroMayor = numero01
} else if (numero01 != numero02) {
    if (numero01 > numero02) {
        numeroMayor = numero01;
    } else {
        numeroMayor = numero02;
    }
}

console.log('El número mayor es el ' + numeroMayor)*/

// 4.	Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.

/*let numero03 = parseInt(prompt('Ingrese un valor para el tercer número'))

if (numero01 < numero02 && numero01 < numero03) {
    console.log('El número más chico de los tres es: ' + numero01)
} else if (numero02 < numero01 && numero02 < numero03) {
    console.log('El número más chico de los tres es: ' + numero02)
} else {
    console.log('El número mas chico de los tres es: ' + numero03)
}*/

// 5.	Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.

/*
let persona01 = new Object({
    nombre: 'Gabriela',
    edad: '32',
    altura: '168'
})

let persona02 = new Object({
    nombre: 'Carolina',
    edad: '27',
    altura: '170'
})

let personaAlta
let personaMayorEdad

console.log(persona01)
console.log(persona02)

if (persona01.altura > persona02.altura) {
    personaAlta = persona01.nombre
} else {
    personaAlta = persona02.nombre
}

if (persona01.edad > persona02.edad) {
    personaMayorEdad = persona01.nombre
} else {
    personaMayorEdad = persona02.nombre
}

console.log('La persona más alta es: ' + personaAlta + '\n' +
    'La persona de mayor edad es: ' + personaMayorEdad)
*/

// 6.	Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.

/*let nombre = prompt('Ingrese su nombre')
let edad = prompt('Ingrese su edad')
let altura = prompt('Ingrese su altura')
let vision = prompt('Ingrese su vision')

persona01.nombre = nombre
persona01.edad = edad
persona01.altura = altura
persona01.vision = vision

let estaCapacitado = false

if (persona01.edad >= 18 && persona01.altura > 150 && vision >= 8) {
    estaCapacitado = true
}

console.log('Está capacitad@ ' + persona01.nombre + ': ' + estaCapacitado)*/

// 7.	Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.

/*
nombre = prompt('Ingrese su nombre')
pase = prompt('Ingrese su tipo de pase VIP - NORMAL')
auxiliar = prompt('Indique si posee entrada')
let poseeEntrada = false

if (auxiliar == 's' || auxiliar == 'S' || auxiliar == 'si' || auxiliar == 'SI') {
    poseeEntrada = true
}

let persona03 = new Object({
    nombre: nombre,
    pase: pase,
    poseeEntrada: poseeEntrada
})

let decision = 'n'
let saldo = 0

if (persona01.nombre == persona03.nombre || pase == 'VIP' || pase == 'vip') {
    alert('Bienvenido al club - ' + persona03.nombre + ' - ')
} else if (poseeEntrada) {
    decision = prompt('Desea usar su entrada? Ingrese S o N')
    switch (decision) {
        case 's' || 'S': alert('Bienvenido al club - ' + persona03.nombre + ' - ')
            break
        case 'n' || 'N': alert('Adios')
            break
        default:
            alert('Adios')
            break
    }

} else {
    decision = prompt('Desea comprar una entrada? ingrese S o N')
    switch (decision) {
        case 's' || 'S':
            saldo = prompt('Ingrese cuanto saldo tiene disponible')
            if (saldo >= 1000) {
                alert('Venta exitosa \n Bienvenido al club - ' + persona03.nombre + ' - ')
            } else {
                alert('Venta rechazada, adios')
            }
            break
        case 'n' || 'N': alert('Adios')
            break
        default:
            alert('No se pudo procesar su respuesta')
            break
    }
}
*/

// 8.	Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.

/*
let numeroIncognita = 3
let numeroIngresado

for (let i = 0; i < 3; i++) {
    numeroIntento = prompt('Ingrese un número entre uno y tres')
    if (numeroIncognita == numeroIntento) {
        i = 3
        alert('Ganaste, haz adivinado el número')
    } else if (i == 2) {
        alert('Perdiste, el número era el ' + numeroIncognita)
    } else {
        if (numeroIncognita < numeroIntento) {
            alert('El número ingresado es mayor, vuelve a intentarlo')
        } else {
            alert('El número ingresado es menor, vuelve a intentarlo')
        }
    }
}
*/

// 9.	Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.

/*
let edad = prompt('Ingresa tu edad')

//Condicion true para que ingrese cuando se cumpla el case especificado
switch (true) {
    case edad >= 0 && edad <= 12: alert('Eres un infante')
        break
    case edad >= 13 && edad <= 18: alert('Eres un adolescente')
        break
    case edad >= 19 && edad <= 45: alert('Eres un mayor joven')
        break
    case edad >= 46 && edad <= 99: alert('Eres un anciano')
        break
    case edad >= 100: alert('De verdad tienes esa edad?')
        break
    default: alert('Has ingresado una edad negativa')
        break
}
*/

// 10.	Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.

/*
alert('Vamos a jugar a PIEDRA, PAPEL O TIJERA')
let jugador1 = prompt('Jugador 1 ingrese su opción')
let jugador2 = prompt('Jugador 2 ingrese su opción')

let listaJugadas = ['PIEDRA', 'PAPEL', 'TIJERA']
let esValido1 = false
let esValido2 = false

for (let i = 0; i < 3; i++) {
    esValido1 = (listaJugadas[i] == jugador1)
    if (esValido1 == true) {
        i = 3
    }
}

for (let i = 0; i < 3; i++) {
    esValido2 = (listaJugadas[i] == jugador2)
    if (esValido2 == true) {
        i = 3
    }
}

if (esValido1 == true && esValido2 == true) {
    switch (true) {
        case (jugador1 == 'PIEDRA' && jugador2 == 'TIJERA') || (jugador1 == 'TIJERA' && jugador2 == 'PAPEL') || (jugador1 == 'PAPEL' && jugador2 == 'PIEDRA'):
            alert('El jugador 1 ha ganado')
            break
        case (jugador2 == 'PIEDRA' && jugador1 == 'TIJERA') || (jugador2 == 'TIJERA' && jugador1 == 'PAPEL') || (jugador2 == 'PAPEL' && jugador1 == 'PIEDRA'):
            alert('El jugador 2 ha ganado')
            break
        case (jugador1 == 'PIEDRA' && jugador2 == 'PIEDRA') || (jugador1 == 'TIJERA' && jugador2 == 'TIJERA') || (jugador1 == 'PAPEL' && jugador2 == 'PAPEL'):
            alert('Han empatado')
            break
    }
} else {
    alert('Un jugador ha hecho trampa')
}
*/

// 11.	Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.

/*
let colorUsuario = prompt('Ingrese un color en mayúsculas')

switch (colorUsuario) {
    case 'BLANCO' || 'NEGRO': alert(colorUsuario + ': Falta de color')
        break
    case 'VERDE': alert(colorUsuario + ': El color de la naturaleza')
        break
    case 'AZUL': alert(colorUsuario + ': El color del agua')
        break
    case 'AMARILLO': alert(colorUsuario + ': El color del sol')
        break
    case 'ROJO': alert(colorUsuario + ': El color del fuego')
        break
    case 'MARRÓN': alert(colorUsuario + ': El color de la tierra')
        break
    default: alert(colorUsuario + ': Excelente elección, no lo teníamos pensado')
        break
}
*/

// 12.	Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.

/*
let valor1 = parseInt(prompt('Ingrese un valor para la variable x'))
let valor2 = parseInt(prompt('Ingrese un valor para la variable y'))
let resultado
let operacionElegida
let esValido = false
let listadoOperaciones = ['S', 'R', 'M', 'D']

do {
    operacionElegida = prompt('Ingrese: \n S para suma \n R para resta \n M para multiplicación \n D para división')
    for (let i = 0; i < 4; i++) {
        esValido = (listadoOperaciones[i] == operacionElegida)
        if (esValido == true) {
            i = 4
        }
    }
} while (esValido == false)

switch (operacionElegida) {
    case 'S': resultado = valor1 + valor2
        alert('La suma entre ' + valor1 + ' y ' + valor2 + ' es igual a: ' + resultado)
        break
    case 'R': resultado = valor1 - valor2
        alert('La resta entre ' + valor1 + ' y ' + valor2 + ' es igual a: ' + resultado)
        break
    case 'M': resultado = valor1 * valor2
        alert('La multiplicación entre ' + valor1 + ' y ' + valor2 + ' es igual a: ' + resultado)
        break
    case 'D':
        if (valor1 != 0) {
            resultado = valor1 / valor2
            alert('La división entre ' + valor1 + ' y ' + valor2 + ' es igual a: ' + resultado)
        } else {
            alert('No se puede dividir a cero')
        }
        break
}
*/

// 13.	Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.

alert('Vamos a completar su documento')

let dni = new Object({
    apellido: prompt('Ingrese su apellido'),
    nombre: prompt('Ingrese su nombre'),
    sexo: prompt('Ingrese su sexo'),
    tipo: prompt('Ingrese su tipo de documento (dni/lc/le)'),
    diaNacimiento: prompt('Ingrese su día de nacimiento'),
    mesNacimiento: prompt('Ingrese su mes de nacimiento'),
    anioNacimiento: prompt('Ingrese su año de nacimiento'),
    numero: prompt('Ingrese su número de documento')
})

let confirmacion = 'O'

console.table(dni)
do {
    confirmacion = prompt('Verifique sus datos, están correctos \n Ingrese S para confirmar \n Ingrese N para rechazar')
} while (confirmacion != 'S' && confirmacion != 'N')

if (confirmacion == 'S') {
    console.table(dni)
    alert('Registro exitoso')
} else {
    alert('Vuelva a internarlo en 1 mes')
}