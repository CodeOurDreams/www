import './app.js';
import fontawesome from '@fortawesome/fontawesome'
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers'
import faCircle from '@fortawesome/fontawesome-free-regular/faCircle'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

// Icons
fontawesome.library.add(faUsers);
fontawesome.library.add(faCircle);
fontawesome.library.add(faFacebook);

// Images


// Mission
document.getElementById('imgMission').src		= require('../static/images/pic02.jpg');
document.getElementById('imgValues').src		= require('../static/images/pic03.jpg');
document.getElementById('imgGetInvolved').src	= require('../static/images/pic04.jpg');

// // Second Section
// import imgValue0 from '../static/img/first-icon.png';
// import imgValue1 from '../static/img/second-icon.png';
// import imgValue2 from '../static/img/third-icon.png';
// import imgValue3 from '../static/img/fourth-icon.png';
// import imgValue4 from '../static/img/third-icon.png';
// import imgValue5 from '../static/img/first-icon.png';

// // Third Section
// import imgLeftImage from '../static/img/left-image.png'

// // Fourth Section
// import imgPerson0 from '../static/img/01-item.jpg';
// import imgPerson1 from '../static/img/02-item.jpg';
// import imgPerson2 from '../static/img/03-item.jpg';
// import imgBigPerson0 from '../static/img/01-big-item.jpg';
// import imgBigPerson1 from '../static/img/02-big-item.jpg';
// import imgBigPerson2 from '../static/img/03-big-item.jpg';

// // Program
// import imgRightImage from '../static/img/right-image.png'

// // Second Section

// document.getElementById('value0').src = imgValue0;
// document.getElementById('value1').src = imgValue1;
// document.getElementById('value2').src = imgValue2;
// document.getElementById('value3').src = imgValue3;
// document.getElementById('value4').src = imgValue4;
// document.getElementById('value5').src = imgValue5;

// // Third Section
// document.getElementById('missionImg').src = imgLeftImage;

// // People
// document.getElementById('imgPerson0').src = imgPerson0;
// document.getElementById('imgPerson1').src = imgPerson1;
// document.getElementById('imgPerson2').src = imgPerson2;
// document.getElementById('bigPerson0').href = imgBigPerson0;
// document.getElementById('bigPerson1').href = imgBigPerson1;
// document.getElementById('bigPerson2').href = imgBigPerson2;

// // Program
// document.getElementById('programImg').src = imgRightImage;