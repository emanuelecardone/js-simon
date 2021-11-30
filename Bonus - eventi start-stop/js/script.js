// Variabile body
const pageBody = document.querySelector('body');

// Classi stile body
pageBody.classList.add('w-100', 'vh-100', 'bg-dark');

// Variabile header, tasti start/stop, main, box container, set fluid+row+cols e footer
const pageHeader = document.createElement('header');
const startButton = document.createElement('button');
const stopButton = document.createElement('button');

const pageMain = document.createElement('main');
const boxContainer = document.createElement('div');
const boxFluid = document.createElement('div');
const boxRow = document.createElement('div');

const pageFooter = document.createElement('footer');

// Classi stile header, tasti start/stop, main, box container, set fluid+row+cols e footer
// Il position fixed è un debug per non far muovere il bottone deselezionato all'animazione del selezionato
pageHeader.classList.add('w-100', 'h_100p', 'd-flex', 'justify-content-center', 'align-items-center');
startButton.classList.add('start_btn', 'btn', 'btn-danger', 'text-white', 'fw-bold', 'text-center', 'text-uppercase', 'position-fixed');
stopButton.classList.add('stop_btn', 'btn', 'btn-danger', 'text-white', 'fw-bold', 'text-center', 'text-uppercase', 'position-fixed');

pageMain.classList.add('w-100', 'border', 'd-flex', 'justify-content-center', 'align-items-center', 'border-5', 'border-danger');
boxContainer.classList.add('w_500p', 'h_500p');
boxFluid.classList.add('container-fluid', 'h-100');
boxRow.classList.add('row', 'row-cols-5', 'h-100');

pageFooter.classList.add('w-100', 'h_100p');

// Contenuto testo tasti start/stop
startButton.innerText = 'Start';
stopButton.innerText = 'Stop';

// Inserimento in pagina header, tasti start/stop, main, box container, set fluid+row+cols e footer
pageBody.append(pageHeader, pageMain, pageFooter);

pageHeader.append(startButton, stopButton);

pageMain.appendChild(boxContainer);
boxContainer.appendChild(boxFluid);
boxFluid.appendChild(boxRow);
// Numero di box che voglio
const boxesNumber = 25;
for(let i = 0; i < boxesNumber; i++){
    const currentBoxCol = document.createElement('div');
    currentBoxCol.classList.add('col','border', 'border-3', 'border-danger', 'bg-white');
    boxRow.appendChild(currentBoxCol);
}


// Devo dichiarare boxClocks fuori per renderlo leggibile da Start e Stop
let boxClocks;
// Counter che mi serve sia per selezionare le col che per stoppare l'interval function
// Il counter lo lascio fuori da Start, così se si clicka Stop l'indice di Start non verrà resettato a 0
// quindi clickando di nuovo Start riprenderà da dove ha stoppato
let myCounter = 0;

// L'obiettivo è che al click di Start venga rimosso il bg white e aggiunto quello azzurro ad una col per volta ogni mezzo secondo
startButton.addEventListener('click', function(){

    // Funzione setInterval che modifica lo sfondo delle col
    boxClocks = setInterval(function(){

        // Devo necessariamente selezionare le col in questo modo altrimenti lavorerei su un array copiato
        document.getElementsByClassName('col')[myCounter].classList.remove('bg-white');
        document.getElementsByClassName('col')[myCounter].classList.add('bg-info');

        // Aumenta il counter
        myCounter++;

        // Operatore ternario per stoppare l'evento e resettare il counter a 0
        (myCounter === boxesNumber) ? clearInterval(boxClocks) : null;

        // L'evento ha un intervallo di .5s
    }, 500); 

});

// L'obiettivo è che al click di Stop venga fermata l'animazione che colora lo sfondo delle col
stopButton.addEventListener('click', function(){
    clearInterval(boxClocks);
});



