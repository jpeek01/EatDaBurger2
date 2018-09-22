$(function() {
    $('.devourBurger').on('click', function(event) {
      console.log('Click');
      var id = $(this).data('id');
      var devouredBurger = {
        devoured: 'true'
      };
  
      $.ajax('/api/burgers/' + id, {
        type: 'PUT',
        data: devouredBurger
      }).then(function() {
        location.reload();
      });
    });

    $('.create-form').on('submit', function(event) {
      event.preventDefault();
      var newBurger = {
        burger_name: $('#newBurger').val().trim(),
        devoured: 0
      };
  
      $.ajax('/api/burgers/', {
        type: 'POST',
        data: newBurger
      }).then(function() {
        location.reload();
      });
    });
  });

