var arreglo=[];
var persona;

function agregar(){
    var nombre= document.getElementById('nombre').value;
    var documento = document.getElementById('documento').value;
    var telefono = document.getElementById('telefono').value;

    persona ={
        "nombre": nombre,
        "documento": documento,
        "telefono": telefono
    }

    arreglo.push(persona);

    // if(arreglo.length >= 3){
    //     arreglo.splice(arreglo.length-1,1);
    //     alert("ingreso mas de 2");
    // }

    document.getElementById('nombre').value ="";
    document.getElementById('documento').value="";
    document.getElementById('telefono').value="";
}

function mostrar(){
    
    console.log(arreglo);
    console.log('orden: '+ org());
    alert(arreglo[1]['telefono']);
}

function org(t=[]){
    //t =[];
    for(var i=0 in arreglo){
       
        t[i]= arreglo[i]['nombre'];
    }
    t.sort();
    return t;
}
