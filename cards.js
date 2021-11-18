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
  },
];
const featuredSpeakers = document.querySelector('#featured_speakers');
const moreButton = document.querySelector('#more_button');


function createSpeaker(speaker) {
  const speakerContainer = document.createElement('div');
  const pictureContainer = document.createElement('div');
  const speakerPicture = document.createElement('img');
  const infoContainer = document.createElement('div');
  const infoName = document.createElement('h4');
  const title = document.createElement('p');
  const divisor = document.createElement('hr');
  const description = document.createElement('p');
  // set content
  speakerPicture.src = speaker.picture;
  infoName.textContent = speaker.name;
  title.textContent = speaker.title;
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
  speakerContainer.append(pictureContainer, infoContainer);
  pictureContainer.appendChild(speakerPicture);
  infoContainer.append(infoName, title, divisor, description);
  featuredSpeakers.appendChild(speakerContainer);
  featuredSpeakers.appendChild(moreButton);
}

speakers.forEach((speaker) => { createSpeaker(speaker); });