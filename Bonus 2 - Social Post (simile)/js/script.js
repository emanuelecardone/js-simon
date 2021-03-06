// ARRAY DI OGGETTI
const likesId = [1, 3, 4];
const postsArray = [
    {
        id: 1,
        content: 'Lorem 1, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus rerum veritatis accusamus? Iusto accusantium voluptas voluptatibus, accusamus obcaecati omnis doloremque nesciunt architecto officia minus iure amet dolorem molestiae vel?',
        media: 'img/content/nature0.jfif',
        author: {
            name: 'Helen Miron',
            image: 'img/user/user0.png'
        },
        likes: 30,
        created: '21-09-2021',
        tags: ['nature', 'leaf', 'water']
    },
    {
        id: 2,
        content: 'Lorem 2, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus rerum veritatis accusamus? Iusto accusantium voluptas voluptatibus, accusamus obcaecati omnis doloremque nesciunt architecto officia minus iure amet dolorem molestiae vel?',
        media: 'img/content/nature1.jfif',
        author: {
            name: 'Johnny Marsh',
            image: null
        },
        likes: 44,
        created: '15-03-2021',
        tags: ['nature', 'lake', 'sky']
    },
    {
        id: 3,
        content: 'Lorem 3, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus rerum veritatis accusamus? Iusto accusantium voluptas voluptatibus, accusamus obcaecati omnis doloremque nesciunt architecto officia minus iure amet dolorem molestiae vel?',
        media: 'img/content/nature2.jpg',
        author: {
            name: 'Mark Zuk',
            image: 'img/user/user1.png'
        },
        likes: 21,
        created: '30-11-2021',
        tags: ['red leafs']
    },
    {
        id: 4,
        content: 'Lorem 4, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus rerum veritatis accusamus? Iusto accusantium voluptas voluptatibus, accusamus obcaecati omnis doloremque nesciunt architecto officia minus iure amet dolorem molestiae vel?',
        media: 'img/content/nature3.jpg',
        author: {
            name: 'Jessica Loren',
            image: 'img/user/user2.png'
        },
        likes: 92,
        created: '07-10-2021',
        tags: []
    },
    {
        id: 5,
        content: 'Lorem 5, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus rerum veritatis accusamus? Iusto accusantium voluptas voluptatibus, accusamus obcaecati omnis doloremque nesciunt architecto officia minus iure amet dolorem molestiae vel?',
        media: 'img/content/nature4.jpg',
        author: {
            name: 'Matthew Nurton',
            image: null
        },
        likes: 67,
        created: '11-01-2021',
        tags: ['waterfall', 'trees']
    },
];




// VARIABILI
// Body
const pageBody = document.querySelector('body');
// Main
const pageMain = document.createElement('main');
// Title
const pageTitle = document.createElement('h1');
// Social container
const socialContainer = document.createElement('div');
// Fluid container
const socialFluid = document.createElement('div');
// Row
const socialRow = document.createElement('div');

// CLASSI DI STILE
// Body
pageBody.classList.add('w-100');
// Main
pageMain.classList.add('w-100', 'd-flex', 'flex-column', 'align-items-center', 'bg-primary');
// Title
pageTitle.classList.add('fw-bold', 'text-white', 'my-4', 'fs-1');
// Social container
socialContainer.classList.add('social_wrapper', 'bg-dark');
// Fluid container
socialFluid.classList.add('container-fluid');
// Row
socialRow.classList.add('row', 'row-cols-1', 'gy-5');

// CONTENUTO
pageTitle.innerText = 'Social Posts';

// INSERIMENTO IN PAGINA
// Main
pageBody.appendChild(pageMain);
// Title + Social container
pageMain.append(pageTitle, socialContainer);
// Fluid container
socialContainer.appendChild(socialFluid);
// Row
socialFluid.appendChild(socialRow);
// Cols e contenuti
const numberOfPosts = 5;
postsArray.forEach((element, index, array) => {

    const {id, content, media, author, created, tags} = element;
    let {likes} = element;
    const {name, image} = author;

    // Col
    const currentSocialCol = document.createElement('col');
    currentSocialCol.classList.add('col');
    socialRow.appendChild(currentSocialCol);

    // Post container
    const currentPostContainer = document.createElement('div');
    currentPostContainer.classList.add('post_main_wrapper', 'w-100', 'd-flex', 'flex-column', 'py-3');
    currentSocialCol.appendChild(currentPostContainer);

    // Post sections
    const currentPostUpSection = document.createElement('div');
    const currentPostMiddleSection = document.createElement('div');
    const currentPostDownSection = document.createElement('div');
    currentPostUpSection.classList.add('post_up_wrapper', 'd-flex', 'align-items-center', 'text-white');
    currentPostMiddleSection.classList.add('post_middle_wrapper', 'd-flex', 'flex-column', 'text-white');
    currentPostDownSection.classList.add('post_down_wrapper', 'd-flex', 'justify-content-between', 'align-items-center', 'text-white', 'px-5');
    currentPostContainer.append(currentPostUpSection, currentPostMiddleSection, currentPostDownSection);

    // Post sub-sections
    const currentPostUpImgSection = document.createElement('div');
    const currentPostUpTextSection = document.createElement('div');
    const currentPostUpTagsSection = document.createElement('div');
    const currentPostMiddleTextSection = document.createElement('div');
    const currentPostMiddleImgSection = document.createElement('div');
    const currentPostDownBtnSection = document.createElement('div');
    const currentPostDownLikesSection = document.createElement('div');
    currentPostUpImgSection.classList.add('up_img_wrapper', 'd-flex', 'justify-content-center', 'align-items-center');
    currentPostUpTagsSection.classList.add('tags_wrapper', 'h-100', 'd-flex', 'align-items-center');
    currentPostUpSection.append(currentPostUpImgSection, currentPostUpTextSection, currentPostUpTagsSection);
    currentPostMiddleSection.append(currentPostMiddleTextSection, currentPostMiddleImgSection);
    currentPostDownSection.append(currentPostDownBtnSection, currentPostDownLikesSection);

    // Content sub-sections
    const currentPostUpImg = document.createElement('img');
    const currentPostUpName = document.createElement('h5');
    const currentPostUpDate = document.createElement('span');
    const currentPostUpTags = document.createElement('ul');
    const currentPostMiddleText = document.createElement('p');
    const currentPostMiddleImg = document.createElement('img');
    const currentPostDownBtn = document.createElement('button');
    const currentPostDownLikes = document.createElement('span');
    currentPostUpImg.classList.add('profile_pic');
    currentPostUpName.classList.add('profile_name', 'my-1');
    currentPostUpDate.classList.add('post_date');
    currentPostUpTags.classList.add('tags_list', 'd-flex', 'justify-content-around', 'p-0', 'm-0');
    currentPostMiddleText.classList.add('text-center');
    currentPostMiddleImg.classList.add('middle_pic', 'w-100');
    currentPostDownBtn.classList.add('down_btn', 'btn', 'border', 'border-2', 'border-light');
    // Assegno il colore verde al tasto dei post che hanno il like dell'utente
    // uso una variabile per identificare il post come "liked"
    let postIsLiked = false;
    if(likesId.includes(id)){
        currentPostDownBtn.classList.add('my_lime_bg');
        postIsLiked = true;
    } else{
        currentPostDownBtn.classList.add('btn-light');
    }
    currentPostDownLikes.classList.add('text-center');
    currentPostMiddleImg.src = media;
    currentPostUpName.innerText = name;
    const fixedDate = dateFix(created);
    const [day, month, year] = fixedDate;
    currentPostUpDate.innerText = `${day} ${month}, ${year}`;
    currentPostMiddleText.innerText = content;
    currentPostDownBtn.innerText = 'Mi piace';
    currentPostDownLikes.innerText = `Likes: ${likes}`;
    if(image !== null){
        currentPostUpImg.src = image;
        currentPostUpImgSection.appendChild(currentPostUpImg);
    } else{
        const fixedName = getFirstLetters(name);
        const [fN, lN] = fixedName; 
        currentPostUpImgSection.style.backgroundColor = "green";
        currentPostUpImgSection.innerText = `${fN} ${lN}`;
    }
    currentPostUpTextSection.append(currentPostUpName, currentPostUpDate);
    // Creo le li
    tags.forEach((tagsElement, tagsIndex, tagsArray) => {
        const currentTagsLi = document.createElement('li');
        const currentTagsLink = document.createElement('a');
        currentTagsLink.classList.add('fw-bold', 'text-info');
        currentTagsLink.innerText = `#${tagsElement}`;
        currentTagsLink.href = "#";
        currentTagsLi.appendChild(currentTagsLink);
        currentPostUpTags.appendChild(currentTagsLi);
    });
    currentPostUpTagsSection.appendChild(currentPostUpTags);
    currentPostMiddleTextSection.appendChild(currentPostMiddleText);
    currentPostMiddleImgSection.appendChild(currentPostMiddleImg);
    currentPostDownBtnSection.appendChild(currentPostDownBtn);
    currentPostDownLikesSection.appendChild(currentPostDownLikes);

    // Eventi tasto like
    // Se il post ha il like, 
    //      rimuove il bg lime e lo mette bianco
    //      diminuisce il numero di likes del post (per key e layout)
    //      parte un forEach che percorre l'array con l'id dei likes
    //          se trova l'elemento uguale all'id, lo rimuove dall'array di likes con splice
    //          il forEach serve per far capire a splice in che indice deve rimuovere l'id dall'array
    //      la variabile postIsLiked va false
    // Se il post non ha il like, 
    //      rimuove il bg bianco e lo mette lime
    //      aumenta il numero di likes del post (per key e layout)
    //      aggiunge l'id alla lista likesId
    //      la variabile postIsLiked va true
    currentPostDownBtn.addEventListener('click', function(){
        if(postIsLiked){
            this.classList.remove('my_lime_bg');
            this.classList.add('btn-light');
            likes--;
            currentPostDownLikes.innerText = `Likes: ${likes}`;
            likesId.forEach((likesElement, likesIndex, likesArray) => {
                (likesElement === id) ? likesArray.splice(likesIndex, 1) : null;
            });
            postIsLiked = false;
            console.log(likesId);
        } else{
            this.classList.remove('btn-light');
            this.classList.add('my_lime_bg');
            likes++;
            currentPostDownLikes.innerText = `Likes: ${likes}`;
            likesId.push(id);
            postIsLiked = true;
            console.log(likesId);
        }
    });

})

// Funzione per rimuovere i trattini dalle date e dividerle in 3 sottostringhe
function dateFix (thisDate){
    const thisFixedDate = thisDate.split('-');
    return thisFixedDate;
}

// Funzione per generare una stringa contenente iniziali di nome e cognome dell'autore
function getFirstLetters(thisName){
    const thisFixedSpaceName = thisName.split(' ');

    const thisFixedName = thisFixedSpaceName.map((element, index, array) => {
        
        const initialLetter = element[0];
        return initialLetter;
    });

    return thisFixedName;
    
}
    
