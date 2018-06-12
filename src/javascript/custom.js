import slidebars from './vendors/slidebars';

/*
 * Form
 */
(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })();

/*
 * Slidebars
 */
( function ( $ ) {
    // Initialize Slidebars
    var slidebarsController = new slidebars();
    slidebarsController.init();

    $( '#expansionValuesButton' ).click(function ( event ) {
        // Stop default action and bubbling
        event.stopPropagation();
        event.preventDefault();
      
        // Toggle the Slidebar with id 'id-1'
        slidebarsController.open( 'expansionValues' );
      } );

      $( '#values' ).click(function ( event ) {     
        // Toggle the Slidebar with id 'id-1'
        slidebarsController.close( 'expansionValues' );
      } );

      $( '#expansionGetInvolvedLearn' ).click(function ( event ) {
        // Stop default action and bubbling
        event.stopPropagation();
        event.preventDefault();
      
        // Toggle the Slidebar with id 'id-1'
        slidebarsController.open( 'expansionGetInvolved' );
      } );

      $( '#getInvolved' ).click(function ( event ) {     
        // Toggle the Slidebar with id 'id-1'
        slidebarsController.close( 'expansionGetInvolved' );
      } );
    
  } ) ( jQuery );


/*
 * Modals
 */
// Bio
// Open Modal
var modalBioOpen = document.getElementsByClassName('modalBioOpen');
for (var i = 0; i < modalBioOpen.length; ++i) {
    modalBioOpen[i].onclick = openModalBio;
}

// Close the Modal
document.getElementById('modalBioClose').onclick = function(event) {
    closeModal('modalBio')
};

// Donate
var modalDonateOpen = document.getElementsByClassName('modalDonateOpen');
for (var i = 0; i < modalDonateOpen.length; ++i) {
    modalDonateOpen[i].onclick = function() {
        openModal('modalDonate');
    }
}

// Close the Modal
document.getElementById('modalBioClose').onclick = function(event) {
    closeModal('modalDonate')
};

// General
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalBio) {
        closeModal('modalBio');
    } else if (event.target == modalDonate) {
        closeModal('modalDonate');
    }
}

function openModalBio(event) {
    // Set Data
    document.getElementById('modalBioImg').src = event.target.parentNode.childNodes[0].src;
    document.getElementById('modalBioName').innerText = event.target.parentNode.childNodes[1].innerText;
    document.getElementById('modalBioTitle').innerText = event.target.parentNode.childNodes[2].innerText;
    document.getElementById('modalBioBio').innerText = event.target.parentNode.getAttribute('bio');
    
    // Open Modal
    openModal('modalBio');
}

function openModal(modal) {
    // Prevent Scroll
    document.getElementsByTagName('body')[0].scroll = 'no';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';

    // Show Modal
    document.getElementById(modal).style.display = 'block';

}

function closeModal(modal) {
    // Prevent Scroll
    document.getElementsByTagName('body')[0].scroll = 'initial';
    document.getElementsByTagName('body')[0].style.overflow = 'initial';
    
    // Show Modal
    document.getElementById(modal).style.display = 'none';
}
