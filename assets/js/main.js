
// definitions

var cities = []; // Local storage array


loadSearch();

$('.btnCity').click(function (event) {

    event.preventDefault();
    var city = $('.inputCity').val().trim();

    cities.push(city)
    localStorage.setItem('cities', JSON.stringify(cities));

    loadSearch();

});


function loadSearch() {

    var searchCities = JSON.parse(localStorage.getItem('cities'));

   for (var i in searchCities) {

        var renderCities = '<li class="list-group-item">' + searchCities[i] + '</li>';
    }

    $('.list-group').prepend(renderCities);

}
// render city to table and sabe to localstorage



// make api call



//render response to main card with current weather



//render respose with 5-day forcast
