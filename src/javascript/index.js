import $ from 'jquery';
import './app.js';
// import fontawesome from '@fortawesome/fontawesome'
// import faUsers from '@fortawesome/fontawesome-free-solid/faUsers'
// import faCircle from '@fortawesome/fontawesome-free-regular/faCircle'
// import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

// // Icons
// fontawesome.library.add(faUsers);
// fontawesome.library.add(faCircle);
// fontawesome.library.add(faFacebook);

// Images
// Background
setImage('#imgMission', require('../static/images/backgrounds/people.jpg'));
setImage('#imgValues', require('../static/images/backgrounds/planning.jpg'));
setImage('#imgGetInvolved', require('../static/images/backgrounds/team.jpg'));

// People
setImage('#imgCaplan', require('../static/images/people/caplan.jpg'));
setImage('#imgSelig', require('../static/images/people/selig.jpg'));
setImage('#imgVillasenor', require('../static/images/people/villasenor.jpg'));
setImage('#imgDogs', require('../static/images/people/dogs.jpg'));

function setImage(selector, path) {
    $(selector).each(function(index, element) {
        element.src = path;
    });
}

// function setBGImage(selector, path) {
//     $(selector).each(function(index, element) {
//         $(element).css('background-image', 'url(' + path + ')');
//     });
// }