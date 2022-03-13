$(document).ready(function(){
    $("cont").submit("click" , function(event){
      event.preventDefault();
      var name = $("input#Name").val();
      var email = $("input#email").val();
      var message = $("input#message").val();
      if (name && email){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      console.log(message);
    })});

        
    
