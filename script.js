const speakers = [
  {
    picture: 'img/speakers/benkler.png',
    name: 'Yochain Benkler',
    title: 'Berkman Professional of Entrepreurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons based peer production, and pusblished his seminal book The Wealth of Networks in 2006.',
  },
  {
    picture: 'img/speakers/benkler.png',
    name: 'Yochain Benkler',
    title: 'Berkman Professional of Entrepreurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons based peer production, and pusblished his seminal book The Wealth of Networks in 2006.',
  },
  {
    picture: 'img/speakers/benkler.png',
    name: 'Yochain Benkler',
    title: 'Berkman Professional of Entrepreurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons based peer production, and pusblished his seminal book The Wealth of Networks in 2006.',
  },
  {
    picture: 'img/speakers/benkler.png',
    name: 'Yochain Benkler',
    title: 'Berkman Professional of Entrepreurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons based peer production, and pusblished his seminal book The Wealth of Networks in 2006.',
  },
  {
    picture: 'img/speakers/benkler.png',
    name: 'Yochain Benkler',
    title: 'Berkman Professional of Entrepreurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons based peer production, and pusblished his seminal book The Wealth of Networks in 2006.',
  },
  {
    picture: 'img/speakers/benkler.png',
    name: 'Yochain Benkler',
    title: 'Berkman Professional of Entrepreurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons based peer production, and pusblished his seminal book The Wealth of Networks in 2006.',
  }
]

// variables

const menuIcon = document.querySelector(".icon-bar-container");
const navBar = document.querySelector(".nav_bar");
const body = document.querySelector("body");
const barTop = document.querySelector(".icon-bar-top");
const barMiddle = document.querySelector(".icon-bar-middle");
const barBottom = document.querySelector(".icon-bar-bottom");
const featuredSpeakers = document.querySelector("#featured_speakers");
const moreButton = document.querySelector('#more_button');

// functions

function createSpeaker(speaker) {
  const speakerContainer = document.createElement('div');
  const pictureContainer = document.createElement('div');
  const speakerPicture = document.createElement('img');
  const infoContainer = document.createElement('div');
  const infoName = document.createElement('h4');
  const title = document.createElement('p');
  const divisor = document.createElement('hr')
  const description = document.createElement('p');
  // set content
  speakerPicture.src = speaker.picture;
  infoName.textContent = speaker.name;
  title.textContent = speaker.title
  description.textContent = speaker.description;
  // add classes
  speakerContainer.classList.add('speaker_container');
  pictureContainer.classList.add('picture_container');
  speakerPicture.classList.add('speaker_picture');
  infoContainer.classList.add('info_container');
  infoName.classList.add('speaker_name');
  title.classList.add('speaker_title');
  description.classList.add('speaker_description');
  // append elements
  speakerContainer.append(pictureContainer,infoContainer);
  pictureContainer.appendChild(speakerPicture);
  infoContainer.append(infoName,title,divisor,description);
  featuredSpeakers.appendChild(speakerContainer);
  featuredSpeakers.appendChild(moreButton);

}

function toggleMenu() {
  navBar.classList.toggle("only_desktop",);
  navBar.classList.toggle("modal_menu");
  navBar.classList.toggle("autoScroll");
  body.classList.toggle("noScroll");
  barTop.classList.toggle("rotatePos");
  barBottom.classList.toggle("rotateNeg");
  barMiddle.classList.toggle("noShow");
}

// event listeners
menuIcon.addEventListener('click',toggleMenu);
speakers.forEach((speaker) => { createSpeaker(speaker); });