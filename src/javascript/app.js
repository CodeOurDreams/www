// Stylesheets
// import 'font-awesome/scss/font-awesome.scss';
import '../styles/app.scss';
import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(regular)
fontawesome.library.add(solid)
fontawesome.library.add(brands)

// Javascript
import './vendors/utils.js';
import './main.js';
import './payment.js';
import './custom.js';