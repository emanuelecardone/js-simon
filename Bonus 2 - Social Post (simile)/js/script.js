// ARRAY DI OGGETTI
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
        created: '21-09-2021'
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
        created: '15-03-2021'
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
        created: '30-11-2021'
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
        created: '07-10-2021'
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
        created: '11-01-2021'
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

    const {id, content, media, author, likes, created} = element;
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
    currentPostDownSection.classList.add('post_down_wrapper', 'd-flex', 'justify-content-between', 'align-items-center', 'text-white');
    currentPostContainer.append(currentPostUpSection, currentPostMiddleSection, currentPostDownSection);

    // Post sub-sections
    const currentPostUpImgSection = document.createElement('div');
    const currentPostUpTextSection = document.createElement('div');
    const currentPostMiddleTextSection = document.createElement('div');
    const currentPostMiddleImgSection = document.createElement('div');
    const currentPostDownBtnSection = document.createElement('div');
    const currentPostDownLikesSection = document.createElement('div');
    currentPostUpImgSection.classList.add('up_img_wrapper', 'd-flex', 'justify-content-center', 'align-items-center');
    currentPostUpSection.append(currentPostUpImgSection, currentPostUpTextSection);
    currentPostMiddleSection.append(currentPostMiddleTextSection, currentPostMiddleImgSection);
    currentPostDownSection.append(currentPostDownBtnSection, currentPostDownLikesSection);

    // Content sub-sections
    const currentPostUpImg = document.createElement('img');
    const currentPostUpName = document.createElement('h5');
    const currentPostUpDate = document.createElement('span');
    const currentPostMiddleText = document.createElement('p');
    const currentPostMiddleImg = document.createElement('img');
    currentPostUpImg.classList.add('profile_pic');
    currentPostUpName.classList.add('profile_name', 'my-1');
    currentPostUpDate.classList.add('post_date');
    currentPostMiddleText.classList.add('text-center');
    currentPostMiddleImg.classList.add('middle_pic', 'w-100');
    currentPostMiddleImg.src = media;
    currentPostUpName.innerText = name;
    const fixedDate = dateFix(created);
    const [day, month, year] = fixedDate;
    currentPostUpDate.innerText = `${day} ${month}, ${year}`;
    currentPostMiddleText.innerText = content;
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
    currentPostMiddleTextSection.appendChild(currentPostMiddleText);
    currentPostMiddleImgSection.appendChild(currentPostMiddleImg);
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
    
