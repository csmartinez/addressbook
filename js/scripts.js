$(document).ready(function() {
  $('#add-address').click(function() {
    $('#new-addresses').append('<div class="new-address new">' +
      '<div class="form-group">' +
        '<label for="new-street1">Address Line 1</label>' +
        '<input type="text" class="form-control new-street1">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="new-street2">Address Line 2</label>' +
        '<input type="text" class="form-control new-street2">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="new-city">City</label>' +
        '<input type="text" class="form-control new-city">' +
        '</div>' +
      '<div class="form-group">' +
        '<label for="new-state">State</label>' +
        '<input type="text" class="form-control new-state">' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="new-zip">Zip</label>' +
          '<input type="text" class="form-control new-zip">' +
          '</div>' +
      '</div>');
    });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    // var inputtedStreet1 = $("input#new-street1").val();
    // var inputtedStreet2 = $("input#new-street2").val();
    // var inputtedCity = $("input#new-city").val();
    // var inputtedState = $("input#new-state").val();
    // var inputtedZip = $("input#new-zip").val()

    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: []};

    $('.new-address').each(function() {
      var inputtedStreet1 = $(this).find("input.new-street1").val();
      var inputtedStreet2 = $(this).find("input.new-street2").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedZip = $(this).find("input.new-zip").val();

      var newAddress = { street1: inputtedStreet1, street2: inputtedStreet2, city: inputtedCity, state: inputtedState, zip: inputtedZip };
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" +
    newContact.firstName + " " +
    newContact.lastName +
    "</span></li>");

    $('.contact').last().click(function() {
      $('#show-contact').show();

      $("#show-contact h2").text(newContact.firstName + "" + newContact.lastName);
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);

      $('ul#addresses').text('');
      newContact.addresses.forEach(function(address) {
        $('ul#addresses').append('<li>' + address.street1 + ", " + address.street2 + ", " + address.city + ", " + address.state + ", " + address.zip + "</li>");
      });
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street1").val("");
    $("input#new-street2").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-zip").val("");

    $(".new").hide()

  });
});
