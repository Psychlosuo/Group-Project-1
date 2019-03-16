$(document).ready(function () {

    //here we are defining the vars == need db pulls into this format

    var games = [{
        "id": "1",
        "name": "Select an Olympic Games"
    }, {
        "id": "2",
        "name": "Winter 2018"
    }, {
        "id": "3",
        "name": "Summer 2016"
    }, {
        "id": "4",
        "name": "Winter 2014"
    }]

    var sports = {
        'select an olypic games': [{
            display: "Select a Sport",
            value: "select-default"
        }],
        'winter 2018': [{
            display: "Curling",
            value: "curling"
        }, {
            display: "Hockey",
            value: "hockey"
        }],
        'summer 2016': [{
            display: "Pole Vault",
            value: "pole-vault"
        }, {
            display: "Triple Jump",
            value: "triple-jump"
        }],
        'winter 2014': [{
            display: "Bobsled",
            value: "bobsled"
        }, {
            display: "Luge",
            value: "luge"
        }]
    };

    var events = {
        'select-default': [{
            display: "Select an Event",
            value: "event-default"
        }],
        'curling': [{
            display: "Women's Curling",
            value: "womens-curling"
        }, {
            display: "Men's curling",
            value: "mens-curling"
        }],
        'hockey': [{
            display: "Women's Hockey",
            value: "womens-hockey"
        }, {
            display: "Men's Hockey",
            value: "mens-hockey"
        }],
        'pole-vault': [{
            display: "Women's Pole Vault",
            value: "women-pole-vault"
        }, {
            display: "Men's Pole Vault",
            value: "mens-pole-vault"
        }],
        'triple-jump': [{
            display: "Women's Triple Jump",
            value: "womens-triple-jump"
        }, {
            display: "Men's Triple Jump",
            value: "mens-triple-jump"
        }],
        'bobsled': [{
            display: "Women's Bobsled",
            value: "women-bobsled"
        }, {
            display: "Men's Bobsled",
            value: "men-bobsled"
        }],
        'luge': [{
            display: "Women's Bobsled",
            value: "women-bobsled"
        }, {
            display: "Men's Bobsled",
            value: "men-bobsled"
        }]
    };

    //here we are populating the games dropown, and on changes sports dropdowns

    $(games).each(function (i) {
        $("#games").append('<option id="' + games[i].id + '">' + games[i].name + "</option>");
    });
    $("#games").on('change', function () {
        list(sports[$("#games").val().toLowerCase()]);
    });

    function list(array_list) {
        $("#sports").html("");
        $(array_list).each(function (i) {
            $("#sports").append('<option value="' + array_list[i].value + '">' + array_list[i].display + "</option>");
        });
    }

    //here we are populating the events when there is a change to the sports dropdown

    $('#sports').change(function () {
        var sports = $(this).val();
        if (events[sports] == undefined) {
            return $("#events").text('Please select a Sport!');
        }
        array_list = events[sports.toLowerCase()];
        $("#events").html("");
        $(events[sports]).each(function (i) {
            $("#events").append('<option value="' + array_list[i].value + '">' + array_list[i].display + "</option>");
        });
    });
});