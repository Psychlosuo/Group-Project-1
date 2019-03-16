// START CODING BELOW!!
var events1 = "";  // var for child pull 
var sport1 = "";     //var for  child pull
var games1 = "";     //var for child pull
var gold = "Gold";
var silver = "Silver";
var bronze = "Bronze";
var city;
var geo = {};
var lat;
var lon;
var map;
var results = []



// Initialize Firebase
var config = {
    apiKey: "AIzaSyBuzC2hZ2ASBJUuZJ-DAd1-l4wapO-r7-I",
    authDomain: "olympicgold-943ae.firebaseapp.com",
    databaseURL: "https://olympicgold-943ae.firebaseio.com",
    projectId: "olympicgold-943ae",
    storageBucket: "olympicgold-943ae.appspot.com",
    messagingSenderId: "985372088866"
};
firebase.initializeApp(config);




// Create a variable to reference the database
var database = firebase.database();

// Initial Values
var events = "Curling Men's Curling";  //blank once dropdowns work
var year = "2018 Winter";  //blank once dropdowns work
var sport = "Curling";  //blank once dropdowns work

// Capture Button Click
$("#add-data").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();

   
    events = $("#event-input").val().trim();
    year = $("#year-input").val().trim();
    sport = $("#sport-input").val().trim();


    database.ref().push({
        events: events,
        year: year,
        sport: sport,

    });

});



database.ref().on("child_added", function (childsnapshot) {

    // Log everything that's coming out of snapshot

    console.log(childsnapshot.val().events);
    console.log(childsnapshot.val().year);
    console.log(childsnapshot.val().sport);


    var events1 = (childsnapshot.val().events);
    var games1 = (childsnapshot.val().year);









});



   ///    var add = $("<tr>")

   //           var name1 = $("<td>");
   //           name1.text(childsnapshot.val().events);
   //           add.append(name1)

  //            var name2 = $("<td>");
  //            name2.text(childsnapshot.val().from);
  //            add.append(name2)

  //            var name3 = $("<td>");
  //            name3.text(childsnapshot.val().des);
  //            add.append(name3)

  //            var name4 = $("<td>");
  //            name4.text(childsnapshot.val().time);
  //            add.append(name4)


   //           var name5 = $("<td>");
   //           name5.text((childsnapshot.val().freq) + " mins");
   //           add.append(name5)

              // need to compute time against current
  //            var name6 = $("<td>");
  //            name6.text(nextTrain)

  //            add.append(name6)

                  //need to do math rate*date in months
  //            var name7 = $("<td>");

         //    var t = childsnapshot.val().time;
         //     var randomFormat = "hh:mm:ss";
         //     var tt = moment(t, randomFormat).fromNow();
         //     console.log(t)
         //     console.log(tt)
         //     name7.text(tt)
 //             name7.text(tMinutesTillTrain + " mins")
 //             add.append(name7)




//      $("#myTable").append(add);



var queryURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + games1 + "Olympics";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    t = response.extract
    $(".city").text(t)


  });



Papa.parse("https://raw.githubusercontent.com/Psychlosuo/Group-Project-1/master/data/athlete_events_mydata.csv", {
    download: true,
    header: true,
    complete: function (results) {

      for (var i = 0; i < results.data.length; ++i) {
       

        if ((results.data[i].Event == event1) && (results.data[i].Games == games1) && (results.data[i].Medal == gold)) {

          console.log(results.data[i]);

          Gtotal = results.data[i].Name + " " + results.data[i].Team + " " + results.data[i].Event + " " + results.data[i].Medal
         
       //   $(".humidity").text(JSON.stringify(results.data[i]))
       //   $(".gold").append(Gtotal)
         

        }

        if ((results.data[i].Event == event1) && (results.data[i].Games == games1) && (results.data[i].Medal == silver)) {


          Stotal = results.data[i].Name + " " + results.data[i].Team + " " + results.data[i].Event + " " + results.data[i].Medal

        //  $(".silver").append(Stotal)
        }

        if ((results.data[i].Event == event1) && (results.data[i].Games == games1) && (results.data[i].Medal == bronze)) {


          Btotal = results.data[i].Name + " " + results.data[i].Team + " " + results.data[i].Event + " " + results.data[i].Medal

        //  $(".bronze").append(Btotal)

          city = results.data[i].City

        }

      }

      weather(city)


     
    }
  });

  function initMap(coordinates) {
    map = new google.maps.Map(document.getElementById("map"), {
    center: coordinates,
     zoom: 8
     });
     }//end initMap() fct

     function weather() {
        var APIKey = "d4107f4d2db5ca1068c8f65c19eeaccc";
  
        // Here we are building the URL we need to query the database
        // &units=imperial
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
  
        // We then created an AJAX call
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
          console.log("Weather Response: ", response)
          temp = response.main
          lat = response.coord.lat
          lon = response.coord.lon
          
          geo.lat = lat
          console.log("Lat into Geopt Obj: ", geo.lat)
          geo.lng = lon
          console.log("Lon into Geopt Obj: ", geo.lng)
  
  
          console.log("type of lat", typeof lat)
  
          geo1.push(lat)
          geo1.push(lon)
  
  
         
          $(".weather").text(response.name + (JSON.stringify(response.main)));
  
          $(".latLon").text("lat " + response.coord.lat + "lon " + response.coord.lon)
  
          initMap( geo );       
        });//end weather AJAX
  
     
  
      }//end weather() fct








