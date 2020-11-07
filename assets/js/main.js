// get input city


var cityCounter = 1;

$('.btnCity').click(function() {

    var city = $('.inputCity').val()
    console.log(city);
    localStorage.setItem('city' + cityCounter, city);
    cityCounter++;
    console.log(cityCounter);
    if (cityCounter > 4) {
        cityCounter = 1;
    }



});


// render city to table and sabe to localstorage

var list = '';
var storageCity = '';

for (var i = 0; i < 4; i++) {

    var displayCity = localStorage.getItem('city' + i, storageCity)

    if (displayCity !== null) {

        list = '<li class="list-group-item">' + localStorage.getItem('city' + i, displayCity) + '</li>';
    }

    $('.list-group').append(list);



}

// make api call



//render response to main card with current weather



//render respose with 5-day forcast