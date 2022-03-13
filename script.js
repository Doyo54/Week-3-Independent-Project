$(document).ready(function(){
    $('#btn').on('click' , function(event){
      event.preventDefault();
      var name = $("input#Name").val();
      var email = $("input#email").val();
      var message = $("input#message").val();
      if (name && email){
        alert ("HI " + name + ", we have received your message and will get back to you as soon as possible.");
      } 
      else {
        alert("Please enter your name and email!");
      }
      //console.log(message);
    })});

        
    
