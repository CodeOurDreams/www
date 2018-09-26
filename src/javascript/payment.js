const utils = require('./utils');

// Create a Stripe client.
// var stripe = Stripe('pk_test_6kThF7ZypxZHe4zUdqV2FJi0');
var stripe = Stripe('pk_live_ltHEPeY8Wy21oRAX6n1M1uaA');

// Create an instance of Elements.
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
var style = {
  base: {
    color: '#32325d',
    lineHeight: '18px',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '20px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

// Create an instance of the card Element.
var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');

// Handle real-time validation errors from the card Element.
card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

// Handle form submission.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  });
});

function stripeTokenHandler(token) {
  $('#payment-form button').attr('disabled','disabled');

  // Insert the token ID into the form so it gets submitted to the server
  var form = $('#payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.append(hiddenInput);
  
  // Submit the form
  // form.submit();
  jQuery.post(
    'https://wt-e9a1b6dd30025a5bdfc6a37d476c72da-0.sandbox.auth0-extend.com/stripe-www',
    form.serialize(),
    (result, status) => {
      utils.closeModal('#modalDonate');
    }
  );
}