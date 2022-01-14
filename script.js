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




goBtn.addEventListener('click', function (){

    // Inietto il nome e cognome nella pagina 
    const name = nameSurname.value;
    if (name ===""){
        bottomName.innerText = "Inserisci il nome e cognome";
    } else {
        bottomName.innerText = name;
    }
    
    // Creo e Inietto il numero di carrozza e il CP nella pagina 
    const carriageRnd = Math.floor(Math.random() *100) +1;
    const cpRnd = Math.floor(Math.random() *10000) +1;
    carriageNumber.innerText = carriageRnd;
    cpCode.innerText = cpRnd;
    
    // Transformo i km in numero e calcolo il prezzo del biglietto 
    const kmToGo = parseInt(distance.value.trim());
    console.log( kmToGo);

    let isValid = true;
    let price = 0;

    if (kmToGo <= 0){
        discountType.innerText = "i km inseriti sono nulli";
        ticketPrice.innerText = "i km inseriti sono nulli";
       isValid = false;
    }  else if (isNaN(kmToGo)){ 
        discountType.innerText = "i km inseriti sono errati";
        ticketPrice.innerText = "i km inseriti sono errati";
        isValid = false;
        bottomSection.classList.remove("d-none");
        bottomSection.classList.add("show");
    }  else  { 
        price = (kmToGo * 0.21);
        let discMin = (price / 100) * 20;
        let discOver = (price / 100) * 40;
    }

    if (isValid === false){
        return;
    }


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
        price = 0;
    }

    

    // Inietto il prezzo del biglietto in pagina 
    ticketPrice.innerText = `Il prezzo è ${price.toFixed(2)} euro`;


    // Faccio apparire la sezione ticket-info 
    bottomSection.classList.remove("d-none");
    bottomSection.classList.add("show");


});

annBtn.addEventListener('click' , function (){
    // discountType.innerText = "";
    // bottomName.innerText = "";
    // carriageNumber.innerText = "";
    // cpCode.innerText = "";
    // ticketPrice.innerText = "";

    // nameSurname.value = "";
    // distance.value = "";

    const field = document.querySelectorAll(".field");
    console.log(field);


    // Così selezionerei un singolo input dalla lista risultato della queryselectorall
    field[1].value = "";
    console.log(field[1]);
    

    // Cosi invece porto a stringa vuota tutti gli elementi della lista della queryselectorall 
    for (let i=0 ; i<field.length; i++){
        const currentField = field[i];
        currentField.value = "";
    }

    select.value = "18-65";


    // Faccio scomparire la sezionee ticket-info
    bottomSection.classList.remove("show");
    bottomSection.classList.add("d-none");
});



