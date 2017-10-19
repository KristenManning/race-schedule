
$(document).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAufcAqAj7wccU0Ziyw-O96ZAj7d3W-OzU",
    authDomain: "beaver-call.firebaseapp.com",
    databaseURL: "https://beaver-call.firebaseio.com",
    projectId: "beaver-call",
    storageBucket: "beaver-call.appspot.com",
    messagingSenderId: "546934107430"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // SATURDAY 
  database.ref().on("value", function(snapshot) {
    var saturday = snapshot.val()["Saturday"];
    console.log(saturday)
    for (race in saturday){
      var event_number = saturday[race][0]
      var event_time = saturday[race][1]
      var event_name = saturday[race][2]
      
      var new_race = $("<div class='row race'>")
      var new_race_num = $("<div class='col-xs-2 race-num'>")
      new_race_num.html(event_number)
      var new_race_name = $("<div class='col-xs-8 race-name'>")
      new_race_name.text(event_name)
      var new_race_time = $("<div class='col-xs-2 race-time'>")
      new_race_time.text(event_time)
      new_race.append(new_race_num)
      new_race.append(new_race_name)      
      new_race.append(new_race_time)
      if (event_number){
        $("#saturday-races").append(new_race)
      }
      for (var i = 3; i <28 ; i+=4) {

        if (saturday[race][i]){
          
          var club = saturday[race][i]
          var bow = saturday[race][i+1]
          var rowers = saturday[race][i+2]
          var comments = saturday[race][i+3]

          var new_boat = $("<div class='row boat'>")

          var new_club = $("<div class='col-xs-9 club'>")
          var new_bow = $("<div class='col-xs-3 bow'>")
          var new_rowers = $("<div class='col-xs-12 rowers'>")
          new_club.text(club)
          new_bow.text("#"+bow)
          new_rowers.text(rowers)
          new_boat.append(new_club)
          new_boat.append(new_bow)
          new_boat.append(new_rowers)
          if (comments){
            var new_comments = $("<div class='col-xs-12 comments'>")
            new_comments.text(comments)
            new_boat.append(new_comments)
          }
          new_race.after(new_boat)
        }
      }
    }
  });

  // SUNDAY
  database.ref().on("value", function(snapshot) {
  var sunday = snapshot.val()["Sunday"];
  console.log(sunday)
  for (race in sunday){
    var event_number = sunday[race][0]
    var event_time = sunday[race][1]
    var event_name = sunday[race][2]
    
    var new_race = $("<div class='row race'>")
    var new_race_num = $("<div class='col-xs-2 race-num'>")
    new_race_num.html(event_number)
    var new_race_name = $("<div class='col-xs-8 race-name'>")
    new_race_name.text(event_name)
    var new_race_time = $("<div class='col-xs-2 race-time'>")
    new_race_time.text(event_time)
    
    new_race.append(new_race_num)
    new_race.append(new_race_name)      
    new_race.append(new_race_time)


    if (event_number){
      $("#sunday-races").append(new_race)
    }
    for (var i = 3; i <28 ; i+=4) {

        if (sunday[race][i]){
          
          var club = sunday[race][i]
          var bow = sunday[race][i+1]
          var rowers = sunday[race][i+2]
          var comments = sunday[race][i+3]

          var new_boat = $("<div class='row boat'>")

          var new_club = $("<div class='col-xs-9 club'>")
          var new_bow = $("<div class='col-xs-3 bow'>")
          var new_rowers = $("<div class='col-xs-12 rowers'>")
          new_club.text(club)
          new_bow.text("#"+bow)
          new_rowers.text(rowers)
          new_boat.append(new_club)
          new_boat.append(new_bow)
          new_boat.append(new_rowers)
          if (comments){
            var new_comments = $("<div class='col-xs-12 comments'>")
            new_comments.text(comments)
            new_boat.append(new_comments)
          }
          new_race.after(new_boat)
        }
      }
  }
  });


  // ANNOUNCEMENTS
  database.ref().on("value", function(snapshot) {
    var announce = snapshot.val()["Announcements"];
    console.log(announce)
    for (a in announce){
      var announce_heading = announce[a][0]
      console.log(announce_heading)
      var announce_text = announce[a][1]
      console.log(announce_text)
      var new_announce= $("<div class='row announce'>")
      var new_announce_heading = $("<div class='col-xs-12 announce-heading'>")
      new_announce_heading.html(announce_heading)
      var new_announce_text = $("<div class='col-xs-12 announce-text'>")
      new_announce_text.html(announce_text)

      new_announce.append(new_announce_heading)
      new_announce.append(new_announce_text)

      if (announce_heading || announce_text){
        $("#announcements").prepend("<hr>")
        $("#announcements").prepend(new_announce)
      }    


    }
  });

});
