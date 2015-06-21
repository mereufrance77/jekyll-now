$(document).ready(function(){

    var socket = new WebSocket("ws://localhost:8080/ws");
     
    socket.onopen = function(){  
      console.log("connected"); 
    }; 

    socket.onmessage = function (message) {
      //console.log("receiving: ");
      // console.log(message);
      if (message.data == 'connected'){
        return;
      }
      var data = JSON.parse(message.data);

      if (data.sensor2 < 550) {
        window.showInf(0);
      } else if (data.sensor2 <900){
        window.showInf(1);
      } else {
        window.showInf(2);
      }

      if (data.sensor1 < 500) {
        window.showSup(0);
      } else if (data.sensor1 < 900) {
        window.showSup(1);
      } else {
        window.showSup(2);
      }
    };

    socket.onclose = function(){
      console.log("disconnected"); 
    };

    var sendMessage = function(message) {
      console.log("sending:" + message.data);
      socket.send(message.data);
    };

});
