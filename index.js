let esFlag = document.querySelector('.es');
esFlag.addEventListener('click', spanish);

let enFlag = document.querySelector('.eng');
enFlag.addEventListener('click', english); 

let japFlag = document.querySelector('.jap');
japFlag.addEventListener('click', japanese); 


function spanish() {
    location.href="./index.html"; 
}
function english() {
    location.href="./eng/index.html"; 
}
function japanese() {
    location.href="jap/index.html";
}

let namesArray = []; 

function addName() {
    let allName = document.getElementById('anyName').value; 
    namesArray.push(allName); 
    let namesBox = document.getElementById('namesBox'); 
    namesBox.innerHTML += `<p> <img src="/IMG/palito.png" alt="stick">  ${allName} </p>`;
    document.getElementById('anyName').value = ''; 
}


function showGif() {
   let gifDisplay = document.getElementById('gif'); 
   gifDisplay.innerHTML = `<img src="/IMG/caja700px.gif" alt="caja">` ; 
}

function closeGif() {
    document.getElementById('gif').style.display="none"; 
}

function randomName() {
    
    
    let winner = Math.floor(Math.random()*namesArray.length);
    let rValue = namesArray[winner];

    let ganador = document.getElementById('ganador'); 
    ganador.innerHTML = `<div class=window> 🎊 ${rValue} 🎊 </div>`; 
}

function closeWinner(){
    document.getElementById('ganador').style.display="none"; 
}

submitBtn.addEventListener('click', addName); 
    document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('namesBox').innerHTML= '';
})
rname.addEventListener('click', showGif);
gif.addEventListener('click', closeGif);
gif.addEventListener('click', randomName);
ganador.addEventListener('click', closeWinner);


// Convertir una variable en un array con el método SpreadOperator: [...]

// let str = 'Hola ,  mundo ,  probando , esto';
// let nameArray = str.split(',');
// console.log(nameArray[1]); 