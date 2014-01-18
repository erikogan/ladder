$(function() {
  var handler = StripeCheckout.configure({
    key: 'pk_test_0aalOfgxrJHVmVhJIq2pqhat',
    image: '/assets/square.png',
    token: function(token, args) {
      var jqxhr = $.ajax( "http://aws.leadandpledge.com/purchase.php",
      {'data': {
        'stripeToken': token['id']},
        'type': 'POST'})
        .done(function(data) {
          $('#success_dialog').foundation('reveal', 'open');
        })
        .fail(function(data) {
          $('#failure_dialog').foundation('reveal', 'open');
        });
    },
    currency:'USD',
    billingAddress: true,
    shippingAddress: true
  });

  document.getElementById('give-and-get-button').addEventListener('click', function(e) {
    handler.open({
      name: 'Lead and Pledge',
      description: 'Give & Get ($20.00)',
      email: email,
      amount: 2000,
    });
    e.preventDefault();
  });
});
