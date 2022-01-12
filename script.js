const nameSurname = document.getElementById("top-name");
const distance = document.getElementById("top-km");
const age = document.getElementById("top-age");
const bottomName = document.getElementById("bottom-name-show");
const carriageNumber = document.getElementById("carriage-numer-show");
const discountType = document.getElementById("ticket-type-show");
const cpCode = document.getElementById("cp-code-show");
const ticketPrice = document.getElementById("ticket-price-show");
const goBtn = document.getElementById("go-btn");
const annBtn = document.getElementById("ann-btn");
const select = document.getElementById("top-age");

const carriageRnd = Math.floor(Math.random() *100) +1;
const cpRnd = Math.floor(Math.random() *10000) +1;


goBtn.addEventListener('click', function (){

    // Inietto il nome e cognome nella pagina 
    const name = nameSurname.value;
    console.log(name);
    bottomName.innerText = name;
    
    // Inietto il numero di carrozza e il CP nella pagina 
    carriageNumber.innerText = carriageRnd;
    cpCode.innerText = cpRnd;
    
    // Transformo i km in numero e calcolo il prezzo del biglietto 
    const kmToGo = parseInt(distance.value.trim());
    console.log(kmToGo);
    let price = (kmToGo * 0.21);
    
    // Calcolare tipo di biglietto 
    const optionValue = select.options[select.selectedIndex].value;
    if (optionValue === "minorenne"){
        discountType.innerText = "Biglietto scontato minorenni";
         price -= (price / 100 * 20);
    } else if (optionValue === "over65"){
        discountType.innerText = "Biglietto scontato over 65";
         price -= (price / 100 * 40);
    } else if (optionValue === "18-65"){
        discountType.innerText = "Biglietto standard";
    } else{
        discountType.innerText = "Non hai inserito l'età";
        price = "";
    }
    

    // Inietto il prezzo del biglietto in pagina 
    ticketPrice.innerText = price;


});



