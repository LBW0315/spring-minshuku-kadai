const stripe = Stripe('pk_test_51OG1BuHaAP59pFXDiZpg2Y0tj0QYaDdpsdiXuqUq4c0VqbOJSLJ35oHf3CeR5avQw8kcSwfR8eJ7YNgv78nBwVbp00msf6NYNv');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });