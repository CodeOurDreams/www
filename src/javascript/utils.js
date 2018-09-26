module.exports = {
  openModal: modal => {
    // Prevent Scroll
    $('body').attr('scroll', 'no');
    $('body').css('overflow', 'hidden');

    // Show Modal
    $(modal).css('display', 'block');
  },

  closeModal: modal => {
    // Resotre Scroll
    $('body').attr('scroll', 'initial');
    $('body').css('overflow', 'initial');
    
    // Hide Modal
    $(modal).css('display', 'none');
  }
}