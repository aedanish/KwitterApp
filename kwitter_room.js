 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDhfGA6ciVsTKHc6n2y7v9shdvQqPC4LQY",
  authDomain: "kwitterapp-2c8b0.firebaseapp.com",
  databaseURL: "https://kwitterapp-2c8b0-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-2c8b0",
  storageBucket: "kwitterapp-2c8b0.appspot.com",
  messagingSenderId: "77974190099",
  appId: "1:77974190099:web:9871bc2c378a73dce427e6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout()
{localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}