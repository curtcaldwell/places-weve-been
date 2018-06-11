//business logic
function Place(place, time, cities, food,) {
  this.place = place;
  this.time = time;
  this.cities = cities;
  this.food = food;
}

//user interface logic
$(function () {
  $("form#new-place").submit(function (event) {
    event.preventDefault();

    var inputtedPlace = $("input#new-place").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedCities = $("input#new-cities").val();
    var inputtedFood = $("input#new-food").val();


    var newPlace = new Place(inputtedPlace, inputtedTime, inputtedCities, inputtedFood);
    $("ul#places").append("<li><span class='list-place'>" + newPlace.place + "</span></li>");

    $(".list-place").last().click(function () {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.place);
      $(".place").text(newPlace.place);
      $(".time").text(newPlace.time);
      $(".cities").text(newPlace.cities);
      $(".food").text(newPlace.food);
    });

    $("input#new-place").val("");
    $("input#new-time").val("");
    $("input#new-cities").val("");
    $("input#new-food").val("");
  });
});
