window.onload = function(){
     datos= [];
}

function agregar(){

    var texto = document.getElementById('texto').value;
    datos.push(texto);

    document.getElementById('texto').value = "";
}

function mostrar(){
    let resultado = document.getElementById('resultado');
    //resultado.innerHTML='';

    for(const elem of datos){
        let datoParrafo = document.createElement('p');
        datoParrafo.innerText = elem;

        resultado.appendChild(datoParrafo);
    }
}