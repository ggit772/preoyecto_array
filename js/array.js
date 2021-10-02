let arreglo=[];

arreglo[0] = 0;
arreglo[1] = 1;
arreglo[2] = 2;
arreglo[3] = "ana";

// for normal 
// for(i=0; i < arreglo.length; i++){
//     console.log(arreglo[i]);
// }


// console.log('inicia for in');
// for in 
for(var i in arreglo){
    console.log(arreglo[i]);
}

// agregar elemento en la ultima posicion 
//arreglo.push('hola');

// agregar elemento en la primera posicion 
//arreglo.unshift(67);

// eliminar primer elemento 
//arreglo.shift();

//eliminar el ultimo elemento
//arreglo.pop();

// update de arrays 
//arreglo[0]="jose";

//borrar seleccionando la posicion
//arreglo.splice(2,2);

//agregar con splice
arreglo.splice(4,3,6,7,8);

//console.log('update');
console.log('/////////////////////////////77');
// lista los elementos como string 
console.log(arreglo.join());

//console.log(arreglo[3]);
