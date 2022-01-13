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
const bottomSection = document.querySelector(".info-section")

const carriageRnd = Math.floor(Math.random() *100) +1;
const cpRnd = Math.floor(Math.random() *10000) +1;


goBtn.addEventListener('click', function (){

    // Inietto il nome e cognome nella pagina 
    const name = nameSurname.value;
    if (name ===""){
        bottomName.innerText = "Inserisci il nome e cognome";
    } else {
        bottomName.innerText = name;
    }
    
    // Inietto il numero di carrozza e il CP nella pagina 
    carriageNumber.innerText = carriageRnd;
    cpCode.innerText = cpRnd;
    
    // Transformo i km in numero e calcolo il prezzo del biglietto 
    const kmToGo = parseInt(distance.value.trim());
    console.log( kmToGo);

    if (kmToGo == ""){
        discountType.innerText = "i km inseriti sono nulli";
        ticketPrice.innerText = "i km inseriti sono nulli";
        bottomSection.classList.remove("d-none");
        bottomSection.classList.add("show");
    } else if (isNaN(kmToGo)){ 
        discountType.innerText = "i km inseriti sono errati";
        ticketPrice.innerText = "i km inseriti sono errati";
        bottomSection.classList.remove("d-none");
        bottomSection.classList.add("show");
    }  else { 
        let price = (kmToGo * 0.21);
        let discMin = (price / 100) * 20;
        let discOver = (price / 100) * 40;
    
    // Calcolare tipo di biglietto 
    const optionValue = select.value;
    if ((optionValue) === "minorenne"){
        discountType.innerText = "Biglietto scontato minorenni";
         price = price - (discMin);
    } else if (optionValue === "over65"){
        discountType.innerText = "Biglietto scontato over 65";
         price = price - (discOver);
    } else if (optionValue === "18-65"){
        discountType.innerText = "Biglietto standard";
    } else{
        discountType.innerText = "Non hai inserito l'età";
        price = "";
    }

    

    // Inietto il prezzo del biglietto in pagina 
    ticketPrice.innerText = `Il prezzo è ${price.toFixed(2)} euro`;


    // Faccio apparire la sezione ticket-info 
    bottomSection.classList.remove("d-none");
    bottomSection.classList.add("show");
    
}
});

annBtn.addEventListener('click' , function (){
    discountType.innerText = "";
    bottomName.innerText = "";
    carriageNumber.innerText = "";
    cpCode.innerText = "";
    ticketPrice.innerText = "";

    nameSurname.value = "";
    distance.value = "";


    // Faccio scomparire la sezionee ticket-info
    bottomSection.classList.remove("show");
    bottomSection.classList.add("d-none");
});



