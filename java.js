//punto 1
let colores = ["rojo" , "amarillo" , "gris" , "violeta" , "azul"]
console.log("Arreglo inicial", colores[0])
//punto 2
console.log("primer color:", colores[0]);
console.log("ultimo color:", colores [colores.length - 1]);
//punto3
console.log("cantidad de elementos", colores.length)
//PUNTO 4
colores.push("verde")
console.log("agregado al final" ,colores)
//PUNTO 5
colores.unshift("negro");
console.log("agregado al principio", colores)
//PUNTO 6
colores.pop("verde");
console.log("eliminado el del final")
//PUNTO 7
colores.shift("negro")
console.log("eliminado el del principio")
//PUNTO 8
colores[0] = 'marron'
