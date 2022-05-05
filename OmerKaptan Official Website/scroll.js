$(document).ready(function() {
	
		
    $(window).scroll(function() {
      if ($(document).scrollTop() >= 0 && $(document).scrollTop() < 650) {
        $("#about").addClass("test");
          $("#gifs").removeClass("test");
          $("#contact").removeClass("test");
      } 
        else if($(document).scrollTop() >= 650 && $(document).scrollTop() < 2150)
        {
        $("#about").removeClass("test");
          $("#gifs").addClass("test");
          $("#contact").removeClass("test");
      }
        else 
        {
            $("#about").removeClass("test");
          $("#gifs").removeClass("test");
          $("#contact").addClass("test");
        }
    });
      
      $("#about").click(function(){
          
              $(document).scrollTop(90)
              
              
          })
          $("#gifs").click(function(){
              
              $(document).scrollTop(660)
              
          })
          $("#contact").click(function(){
              
              $(document).scrollTop(2200)
              
          })
          
          
          
  });