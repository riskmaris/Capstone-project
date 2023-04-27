const speakers = document.querySelector('.featured-speakers');

const speakersDetails = [
  {
    id: 1,
    name: 'Mr.Aggrey Kapuka',
    title: 'C.E.O and founder of Karis Uganda Safaris',
    speakerImg: 'images/JAV_2396.jpg',
    about:
      'Planning, Organizing, Hotel Bookings and Overall',
  },
  {
    id: 2,
    name: 'Mrs Angella Mubangizi.',
    title: 'Proffesor Kampala International University',
    speakerImg: 'images/Dr.-Winifred-Kiryabwire-1.jpg',
    about:
      'KIU Business Desk: Sylvia Mulinge Appointed new CEO of MTN Uganda, Uganda.',
  },
  {
    id: 3,
    name: 'Mrs Lilly Ajarova',
    title: ' Best Uganda Safari Tour.',
    speakerImg: 'images/image-6.png',
    about:
      'CEO for Uganda Tourism Board Responsible Tourism Company.',
  },
  {
    id: 4,
    name: 'Maris Kapuka',
    title: 'Managing Director.',
    speakerImg: 'images/JAV_2500.jpg',
    about:
      'The Shareholders, Board of Directors, Management and Staff of Karis Uganda Safaris Uganda Limited.',
  },
  {
    id: 5,
    name: 'Mr.Lesh Mugabi',
    title: 'Senior Analyst on Covid-19',
    speakerImg: 'images/MD-MM.jpg',
    about:
      "The Impact of Covid-19 on Uganda's Tourism Sector, Highlights, Uganda Canada Business Online Expo.",
  },
  {
    id: 6,
    name: 'Mr Rick Otieno',
    title: 'Driver',
    speakerImg: 'images/JAV_2396.jpg',
    about:
      'The Head of driving Car maintaince and garage expert',
  },
];

function randomSpeaker() {
  speakers.innerHTML = speakersDetails
    .map(
      (speaker) => `
         <div class="speakers-details">
            <img src=${speaker.speakerImg} alt=""/>
            <div class="details">
              <h4>${speaker.name}</h4>
              <p class="title">${speaker.title}</p>
              <hr/>
              <p class="position">${speaker.about}</p>            
          </div>
          </div>
`,
    )
    .join('');
}

randomSpeaker();