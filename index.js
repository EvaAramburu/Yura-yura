
// Convertir una variable en un array con el método SpreadOperator: [...]

// let str = 'Hola ,  mundo ,  probando , esto';
// let nameArray = str.split(',');
// console.log(nameArray[1]); 

let namesArray = []; 

function addName() {
    let allName = document.getElementById('anyName').value; 
    namesArray.push(allName); 
    let namesBox = document.getElementById('namesBox'); 
    namesBox.innerHTML += "<p>" + '<img src="/IMG/palito.png" alt="stick"> ' + allName + "</p>";
    document.getElementById('anyName').value = ''; 
}

submitBtn.addEventListener('click', addName); 
    document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('namesBox').innerHTML= '';
})

function randomName() {
    
    
    let winner = Math.floor(Math.random()*namesArray.length);
    let rValue = namesArray[winner];

    let ganador = document.getElementById('ganador'); 
    ganador.innerHTML = '<div class=window>' + '🎊' + rValue + '🎊' + '</div>'; 
    
}

function cerrar(){
    document.getElementById('ganador').style.display="none"; 
}

rname.addEventListener('click', randomName);

ganador.addEventListener('dblclick', cerrar);