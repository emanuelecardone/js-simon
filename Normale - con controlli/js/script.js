// Descrizione:
// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Creo i numeri casuali da 1 a 100 e li metto in un array
// Faccio anche visualizzare i 5 numeri con 5 alert diversi
// Up: i numeri non capiteranno più uguali
const numbersArray = [];
const numbersAmount = 5;
while(numbersArray.length < numbersAmount){
    const currentNumber = Math.floor(Math.random() * 100) + 1;
    if(!numbersArray.includes(currentNumber)){
        numbersArray.push(currentNumber);
        alert(`Numero ${numbersArray.length}: ${currentNumber}`);
    } 
}


// Visualizzo i numeri usciti in pagina
console.log(numbersArray);

// Counter con valore di default iniziale
let countStart = 30;
// Leggo il conteggio in console a partire da 30
console.log(countStart);

// Funzione Interval ripetuta ogni secondo
const clock = setInterval(function(){

    // Scende il counter
    countStart--;
    // Lo visualizzo in console ogni secondo
    console.log(countStart);

    // Condizione di uscita dalla funzione asincrona
    if(countStart === 0){

        // La funzione Interval viene fermata
        clearInterval(clock);   

        // Al termine, oltre a fermare la funzione eseguo anche il risultato finale
        // Potevo anche creare una funzione col setTimeout (30s di ritardo) ed attivarla quindi concatenandola con la fine del timer
        // oppure evitare il setInterval completamente e far partire il prompt dopo 30s usando solo setTimeout
        // la scelta del setInterval è per rendere possibile la visualizzazione del timer in ogni secondo
        // Uso filter per creare un array di soli numeri indovinati dall'utente
        const rightUserNumbers = [];
        numbersArray.forEach((element, index, array) => {

            // Richiamo alla funzione controllo sui numeri dell'altro file js
            // Il prompt va avanti finché l'utente non inserisce un numero
            let currentUserNumber;
            while(checkLetters(currentUserNumber)){
                // Numero inserito dall'utente (Dirà altre 5/4/3/2/1 volte per dare un indice all'utente)
                // Non uso il trim per fixare eventuali spazi ai lati dell'utente, poiché lo fa il parseInt
                currentUserNumber = parseInt(prompt(`Inserisci un numero che ricordi (Altre ${array.length - index} volte)`));
            }
            
            // Se il numero inserito dall'utente è presente nell'array dei numeri usciti
            if(array.includes(currentUserNumber)){
                rightUserNumbers.push(currentUserNumber);
            }

        });
        
        // Output finale
        // L'array iniziale e dei numeri indovinati ce l'ho già
        // La quantità dei numeri indovinati sarà logicamente
        // uguale alla lunghezza dell'array di indovinati
        alert(` 
        Ecco i numeri che erano usciti: ${numbersArray}
        Hai indovintato ${rightUserNumbers.length} numeri
        Ecco i numeri che hai indovinato: ${rightUserNumbers}
        `);

    }         

}, 1000);


