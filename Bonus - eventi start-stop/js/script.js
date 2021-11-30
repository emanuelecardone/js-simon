// Variabile body
const pageBody = document.querySelector('body');

// Classi stile body
pageBody.classList.add('w-100', 'vh-100', 'bg-dark');

// Variabile header, tasti start/stop, main, colors container, box container, set fluid+row+cols e footer
const pageHeader = document.createElement('header');
const startButton = document.createElement('button');
const stopButton = document.createElement('button');

const pageMain = document.createElement('main');
const colorsContainer = document.createElement('div');
const colorsFluid = document.createElement('div');
const colorsRow = document.createElement('div');
const boxContainer = document.createElement('div');
const boxFluid = document.createElement('div');
const boxRow = document.createElement('div');

const pageFooter = document.createElement('footer');

// Classi stile header, tasti start/stop, main, colors container, box container, set fluid+row+cols e footer
// Il position fixed è un debug per non far muovere il bottone deselezionato all'animazione del selezionato
pageHeader.classList.add('w-100', 'h_100p', 'd-flex', 'justify-content-center', 'align-items-center');
startButton.classList.add('start_btn', 'btn', 'btn-danger', 'text-white', 'fw-bold', 'text-center', 'text-uppercase', 'position-fixed');
stopButton.classList.add('stop_btn', 'btn', 'btn-danger', 'text-white', 'fw-bold', 'text-center', 'text-uppercase', 'position-fixed');

pageMain.classList.add('w-100', 'border', 'd-flex', 'justify-content-center', 'align-items-center', 'border-5', 'border-danger', 'position-relative');
colorsContainer.classList.add('colors_wrapper', 'w_500p', 'h_75p', 'position-absolute');
colorsFluid.classList.add('container-fluid', 'h-100');
colorsRow.classList.add('row', 'row-cols-4', 'h-100');
boxContainer.classList.add('w_500p', 'h_500p');
boxFluid.classList.add('container-fluid', 'h-100');
boxRow.classList.add('row', 'row-cols-5', 'h-100');

pageFooter.classList.add('w-100', 'h_100p');

// Contenuto testo tasti start/stop
startButton.innerText = 'Start';
stopButton.innerText = 'Stop';

// Inserimento in pagina header, tasti start/stop, main, colors container, colors, box container, set fluid+row+cols e footer
pageBody.append(pageHeader, pageMain, pageFooter);

pageHeader.append(startButton, stopButton);

pageMain.append(colorsContainer, boxContainer);
colorsContainer.appendChild(colorsFluid);
colorsFluid.appendChild(colorsRow);
// Numero di colori che voglio
// Aggiungo un'animazione bordi per il pulsante creato (uso la col invece di un pulsante effettivo)
// il pulsante o col rimuoverà anche l'effetto bordi agli altri
// Faccio poi una variabile che tiene conto del colore selezionato (mi serve per decidere il colore da dare alle col)
// Questa variabile avrà cyan di default dato che è selected, ma cambierà al click di colori diversi
// L'obiettivo è far sì che l'utente possa cambiare colore anche mentre le col si stanno riempendo
// senza il bisogno di clickare stop e poi cambiare
const colorsNumber = 4;
let userColor = 'cyan';
for(let i = 0; i < colorsNumber; i++){

    const currentColorsCol = document.createElement('div');
    currentColorsCol.classList.add('col', 'colors_col');
    currentColorsCol.addEventListener('click', function(){
        for(let j = 0; j < colorsNumber; j++){
            document.getElementsByClassName('colors_col')[j].classList.remove('border_ani');
        }
        this.classList.add('border_ani');
    });

    switch(i){
        case 0:
            // Effetto selected di default per il primo
            currentColorsCol.classList.add('cyan_bg', 'border_ani');
            currentColorsCol.addEventListener('click', function(){userColor = 'cyan'});
            break;
        case 1:
            currentColorsCol.classList.add('red_bg');
            currentColorsCol.addEventListener('click', function(){userColor = 'red'});
            break;
        case 2:
            currentColorsCol.classList.add('yellow_bg');
            currentColorsCol.addEventListener('click', function(){userColor = 'yellow'});
            break;
        case 3:
            currentColorsCol.classList.add('purple_bg');
            currentColorsCol.addEventListener('click', function(){userColor = 'purple'});
            break;           
    }
   
    colorsRow.appendChild(currentColorsCol);
}
boxContainer.appendChild(boxFluid);
boxFluid.appendChild(boxRow);
// Numero di box che voglio
const boxesNumber = 25;
for(let i = 0; i < boxesNumber; i++){
    const currentBoxCol = document.createElement('div');
    currentBoxCol.classList.add('col', 'boxes_col', 'border', 'border-3', 'border-danger', 'bg-white');
    boxRow.appendChild(currentBoxCol);
}




// Devo dichiarare boxClocks fuori per renderlo leggibile da Start e Stop
let boxesClock;
// Counter che mi serve sia per selezionare le col che per stoppare l'interval function
// Il counter lo lascio fuori da Start, così se si clicka Stop l'indice di Start non verrà resettato a 0
// quindi clickando di nuovo Start riprenderà da dove ha stoppato
let myCounter = 0;

// Debug per rendere start non usabile anche dopo che clicco Stop e Start per riprendere
let userStopped = false;

// // L'obiettivo è che al click di Start venga rimosso il bg white e aggiunto quello azzurro ad una col per volta ogni mezzo secondo
startButton.addEventListener('click', function(){

    const switchToStart = () => {
        // Rimuove i bordi animati da Stop e li assegna a sé stesso
        stopButton.classList.remove('border_ani');
        this.classList.add('border_ani');
    };

    switchToStart();

    // Faccio in modo che i click su start vengano ignorati durante l'esecuzione
    // Poiché attiverebbe la funzione di nuovo, è un debug
    // se tutte le col vengono colorate, posso cliccare di nuovo start
    // La flag mi permette di riaggiungere questa restrizione anche se l'utente clicka Stop e Start di nuovo
    if(myCounter === 0 || userStopped){
         this.style.pointerEvents = "none";
    }
    // Il counter si resetta se ha colorato tutte le col
    myCounter = (myCounter === boxesNumber) ? 0 : myCounter;
    console.log(myCounter);

    // Funzione setInterval che modifica lo sfondo delle col
    boxesClock = setInterval(function(){

        // Devo necessariamente selezionare le col in questo modo altrimenti lavorerei su un array copiato
        document.getElementsByClassName('boxes_col')[myCounter].classList.remove('bg-white');
        document.getElementsByClassName('boxes_col')[myCounter].classList.add(`${userColor}_bg`);

        // Aumenta il counter
        myCounter++;

        // Condizione di uscita dall'evento (quando tutte le col sono colorate)
        if(myCounter === boxesNumber){
            // Parte un for che interagisce con col ed altro
            for(let i = 0; i < boxesNumber; i++){
                // Si ferma l'evento che colora le col
                clearInterval(boxesClock);
                // Start torna clickabile
                startButton.style.pointerEvents = "auto";
                // Dopo 1 secondo dalla fine dell'evento, il colore delle col si ripristina
                // così da poter ricominciare l'evento colorandole come prima
                const resetClock = setTimeout(function(){
                    document.getElementsByClassName('boxes_col')[i].classList.remove(`${userColor}_bg`);
                    document.getElementsByClassName('boxes_col')[i].classList.add('bg-white');
                    // Rimuovo l'animazione dal tasto start poiché non sarà più attivo
                    startButton.classList.remove('border_ani');
                }, 1000);
            }
        }

        // L'evento ha un intervallo di .5s
    }, 500); 

    

});

// L'obiettivo è che al click di Stop venga fermata l'animazione che colora lo sfondo delle col
stopButton.addEventListener('click', function(){

    const switchToStop = () => {
        // Rimuove i bordi animati da Start e li assegna a sé stesso
        startButton.classList.remove('border_ani');
        this.classList.add('border_ani');
    };

    switchToStop();
    
    // Flag che fa capire al computer che l'utente ha clickato Stop
    userStopped = true;
    // Start diventa di nuovo clickabile
    startButton.style.pointerEvents = "auto";
    // Si ferma l'evento
    clearInterval(boxesClock);
});


