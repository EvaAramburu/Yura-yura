let esFlag = document.querySelector('.es');
esFlag.addEventListener('click', spanish);

let enFlag = document.querySelector('.eng');
enFlag.addEventListener('click', english); 

let japFlag = document.querySelector('.jap');
japFlag.addEventListener('click', japanese); 

let namesArray = []; 
let gifDisplay = document.getElementById('gif'); 

function addName() {
    let allName = document.getElementById('anyName').value; 
    namesArray.push(allName); 
    let namesBox = document.getElementById('namesBox'); 
    namesBox.innerHTML += `<p> <img src="/IMG/palito.png" alt="stick">  ${allName} </p>`;
    document.getElementById('anyName').value = ''; 
}

function showGif() {
   gifDisplay.innerHTML = `<img src="/IMG/caja700px.gif" alt="caja">` ; 
}

function closeGif() {
    document.getElementById('gif').style.display="none"; 
}

function randomName() {
    let winner = Math.floor(Math.random()*namesArray.length);
    let rValue = namesArray[winner];

    let ganador = document.getElementById('ganador'); 
    ganador.innerHTML = `<div class=window> <img id="zorroGif" src="./IMG/zorro.gif" alt="gif"> <p id=winnerText> 🎊 ${rValue} 🎊 </p> </div>`; 
}
function closeWinner(){
    document.getElementById('ganador').style.display="none"; 
}
function spanish() {
    location.href="./index.html"; 
}
function english() {
    location.href="./eng/index.html"; 
}
function japanese() {
    location.href="./jap/index.html";
}

submitBtn.addEventListener('click', addName); 
    document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('namesBox').innerHTML= '';
})
rname.addEventListener('click', showGif);
gif.addEventListener('click', closeGif);
gif.addEventListener('click', randomName);
ganador.addEventListener('click', closeWinner);
