import slidebars from './vendors/slidebars';
import $ from 'jquery';

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
$( '.modalBioOpen' ).each((index, element) => {
    $( element ).click(openModalBio);
});

// Close the Modal
$( '#modalBioClose' ).click(() => {
    closeModal('#modalBio');
});

// Donate
$( '.modalDonateOpen' ).each((index, element) => {
    $( element ).click(() => {
        openModal('#modalDonate');
    });
});

// Close the Modal
$( '#modalDonateClose' ).click(() => {
    closeModal('#modalDonate');
});

// General
// When the user clicks anywhere outside of the modal, close it
$( window ).click( () => {
    if (event.target == modalBio) {
        closeModal('#modalBio');
    } else if (event.target == modalDonate) {
        closeModal('#modalDonate');
    }
});

function openModalBio(event) {
    // Set Data
    $( '#modalBioImg' ).attr('src', $(event.target).parent().children()[0].src);
    $( '#modalBioName' ).text($(event.target).parent().children()[1].innerText);
    $( '#modalBioTitle' ).text($(event.target).parent().children()[2].innerText);
    $( '#modalBioBio' ).text($(event.target).parent().attr('bio'));
    
    // Open Modal
    openModal('#modalBio');
}

function openModal(modal) {
    // Prevent Scroll
    $('body').attr('scroll', 'no');
    $('body').css('overflow', 'hidden');

    // Show Modal
    $(modal).css('display', 'block');

}

function closeModal(modal) {
    // Prevent Scroll
    $('body').attr('scroll', 'initial');
    $('body').css('overflow', 'initial');
    
    // Show Modal
    $(modal).css('display', 'none');
}
