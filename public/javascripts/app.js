var app = app || {};

$(document).ready(function(){


  app.foods = new app.FoodCollection({
    model: app.FoodModel
  })

  app.parties = new app.PartyCollection({
    model: app.PartyModel
  })

  app.foodListPainter = new app.GeneralListView({
    modelView: app.FoodView, // How to draw an individual food
    collection: app.foods,   //  All of the foods
    el: $('#menu-list'),     //  Where to render on the page
  });

  app.partyListPainter = new app.GeneralListView({
    modelView: app.PartyView,
    collection: app.parties,
    el: $('#party-list'),
  });


  app.parties.fetch();
  app.foods.fetch();


  // This is just ONE way to do this....  there are many others....
  $('#place-order').on('click', function(){  // Creating an event listener

    var partyId = app.partySelection.get('id');  // Obtain the id from the selected party
    var foodId = app.foodSelection.get('id');   // Obtain the id from the selected food

    $.ajax({     // make an ajax call
      method: 'post',  // to make a new order
      url: '/api/orders',  //  the route to hit
      data: {order: {party_id: partyId, food_id: foodId} },  // data to make order
      success: function(){
        app.parties.fetch( {reset: true} ); // Reset the party list... update all data

        $('.food-selected').removeClass('food-selected');  // remove selected class for style
        $('.party-selected').removeClass('party-selected');  // remove selected class for style
      }
    });

  });


});












//
