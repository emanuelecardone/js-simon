// Variabile body
const pageBody = document.querySelector('body');

// Classi stile body
pageBody.classList.add('w-100', 'vh-100', 'bg-dark');

// Variabile header, main, box container, set fluid+row+cols e footer
const pageHeader = document.createElement('header');
const pageMain = document.createElement('main');
const boxContainer = document.createElement('div');
const boxFluid = document.createElement('div');
const boxRow = document.createElement('div');
const pageFooter = document.createElement('footer');

// Classi stile header, main, box container, set fluid+row+cols e footer
pageHeader.classList.add('w-100', 'h_100p');
pageMain.classList.add('w-100', 'border', 'd-flex', 'justify-content-center', 'align-items-center', 'border-5', 'border-danger');
boxContainer.classList.add('w_500p', 'h_500p');
boxFluid.classList.add('container-fluid', 'h-100');
boxRow.classList.add('row', 'row-cols-5', 'h-100');
pageFooter.classList.add('w-100', 'h_100p');

// Inserimento in pagina header, main, box container, set fluid+row+cols e footer
pageBody.append(pageHeader, pageMain, pageFooter);
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

