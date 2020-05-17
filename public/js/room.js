var connect = document.getElementById("connect");
var roomid = document.getElementById("room_id");
connect.addEventListener("click", function() {
  var id = roomid.value;
  if(id !== "") { // non empty room
    console.log("connecting to room " + id + "...");
  }
});
