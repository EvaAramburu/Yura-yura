function addName() {
    let allName = document.getElementById('anyName').value; 
    namesArray.push(allName); 
    let namesBox = document.getElementById('namesBox'); 
    namesBox.innerHTML += "<p>" + '<img src="/IMG/palito.png" alt="stick"> ' + allName + "</p>";
    document.getElementById('anyName').value = ''; 
    return allName; 
}


export { addName };