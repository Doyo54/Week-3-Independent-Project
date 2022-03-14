$(document).ready(function(){
    $('#btn').on('click' , function(event){
      event.preventDefault();
      var name = $("input#Name").val();
      var email = $("input#email").val();
      var message = $("input#message").val();
      if (name && email){
        alert ("HI " + name + ", we have received your message and we'll get back to you as soon as possible.");
      }
      else {
        alert("Please enter your name and email!");
      }
      //console.log(message);
    })});

    $(document).ready(function(){
    
        $(".btn_1").click(function(){ 
            $("p.p1").show();
            $(".btn_1").hide(); 
        });
        $("p.p1").click(function(){
            $("p.p1").hide();
            $(".btn_1").show(); 
        });
         $(".btn_2").click(function(){
             $("p.p2").show();   
             $(".btn_2").hide();
         });
         $("p.p2").click(function(){
             $("p.p2").hide();
             $(".btn_2").show();
         });
         $(".btn_3").click(function(){
             $("p.p3").show();   
             $(".btn_3").hide();
         });
         $("p.p3").click(function(){
            $("p.p3").hide();
             $(".btn_3").show();
         }); 
      });

      $(document).ready(function(){
        $("#work1").mouseover(function(){
          $("p.Port1").show();
        }).mouseout(function(){
          $("p.Port1").hide();
        });
      });
      $(document).ready(function(){
        $("#work2").mouseover(function(){
          $("p.Port2").show();
        }).mouseout(function(){
          $("p.Port2").hide();
        });
      });
      $(document).ready(function(){
        $("#work3").mouseover(function(){
          $("p.Port3").show();
        }).mouseout(function(){
          $("p.Port3").hide();
        });
      });
      $(document).ready(function(){
        $("#work4").mouseover(function(){
          $("p.Port4").show();
        }).mouseout(function(){
          $("p.Port4").hide();
        });
      });
      
      $(document).ready(function(){
        $("#work5").mouseover(function(){
          $("p.Port5").show();
        }).mouseout(function(){
          $("p.Port5").hide();
        });
        $("#work6").mouseover(function(){
          $("p.Port6").show();
        }).mouseout(function(){
          $("p.Port6").hide();
        });
        $("#work7").mouseover(function(){
          $("p.Port7").show();
        }).mouseout(function(){
          $("p.Port7").hide();
        });
        $("#work8").mouseover(function(){
          $("p.Port8").show();
        }).mouseout(function(){
          $("p.Port8").hide();
        });
      });
    

        
    
