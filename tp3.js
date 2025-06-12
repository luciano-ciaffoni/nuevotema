//ejercio 1
let animales = ["perro", "gato", "tortuga", "loro"];

for (let i = 0; i < animales.length; i++) {
    console.log(animales[i]);
}

//ejercicio2



for (let i = 0; i < animales.length; i++) {
    if (i % 2 === 0) {
        console.log("los animales " + animales[i]);
    }
}

//ejercicio3

let numeros = [4, 7, 2, 9, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("La suma es " + suma);

//ejercicio4

let datos = [3, 6, 1, 8];
let nuevoArreglo = [];

for (let i = 0; i < datos.length; i++) {
    nuevoArreglo.push(datos[i] * 2);
}

console.log(nuevoArreglo);

//ejercicio5

let alumnos2 = ["Sofía", "Carlos", "Bruno", "Lucía", "Carla"];
let nombre2 = prompt("Introduce un nombre para buscar:");
let i = 0;

while (i < alumnos2.length) {
    alumnos2[i] === nombre2 && console.log("El nombre " + nombre2 + " se encontró en el arreglo.");
    i++;
}


//ejercicio6

let valores = [5, 0, 8, 0, 2];

for (let i = 0; i < valores.length; i++) {
    if (valores[i] === 0) {
        valores[i] = 100;
    }
}

console.log(valores);

//ejercicio 10

let notas = [8, 7, 9, 10, 6];
let Suma = 0;


for (let i = 0; i < notas.length; i++) {
    Suma += notas[i];
}


let promedio = Suma / notas.length;

console.log("El promedio es " + promedio); 