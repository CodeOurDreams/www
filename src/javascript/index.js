import $ from 'jquery';
import Typed from 'typed.js';
import './app.js';
import content from '../languages/english';

// Images
// Header
setImage('#imgNavLogo', require('../static/images/logos/blue.white.png'));

// Background
setImage('#imgMission', require('../static/images/backgrounds/people.jpg'));
setImage('#imgValues', require('../static/images/backgrounds/planning.jpg'));
setImage('#imgGetInvolved', require('../static/images/backgrounds/team.jpg'));

// Home
setImage('#imgHome', require('../static/images/logos/blue.white.png'));

// People
setImage('#imgCaplan', require('../static/images/people/caplan.jpg'));
setImage('#imgSelig', require('../static/images/people/selig.jpg'));
setImage('#imgVillasenor', require('../static/images/people/villasenor.jpg'));
setImage('#imgDogs', require('../static/images/people/dogs.jpg'));

function setImage(selector, path) {
    $(selector).each((index, element) => {
        element.src = path;
    });
}

// Typed.js
let typedHomeConfig = {
    strings: [],
    typeSpeed: 75,
    backSpeed: 75,
    shuffle: true,
    smartBackspace: true,
    loop: true
};

$.each(content.home.content, (index, item) => {
    typedHomeConfig.strings.push(content.home.header + '\n' + item);
});

new Typed('#typedHome', typedHomeConfig);