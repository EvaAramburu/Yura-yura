
// Convertir una variable en un array con el método SpreadOperator: [...]

function randomName() {

    let inputElements = document.querySelectorAll(".anyName");
    let nombres = ([...inputElements].map(element => element.value)); 

    let winner = Math.floor(Math.random()*nombres.length);
    let rValue = nombres[winner];

    let ganador = document.getElementById('ganador'); 
    ganador.innerHTML= '<div class="ventana">' + rValue +  '</div>';

}

rname.addEventListener('click', randomName);
