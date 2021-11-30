// Variabile body
const pageBody = document.querySelector('body');

// Classi stile body
pageBody.classList.add('w-100', 'vh-100', 'bg-dark');

// Variabile header, main, footer
const pageHeader = document.createElement('header');
const pageMain = document.createElement('main');
const pageFooter = document.createElement('footer');

// Classi stile header, main e footer
pageHeader.classList.add('w-100', 'h_100p');
pageMain.classList.add('w-100', 'border', 'border-5', 'border-danger');
pageFooter.classList.add('w-100', 'h_100p');

// Inserimento in pagina header, main e footer
pageBody.append(pageHeader, pageMain, pageFooter);