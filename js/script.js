
$(document).ready(function(){

    //hide
    $('.hide').click(function(){

        $('h2').hide("slow");

    });

    //show
    $('.show').click(function(){

        $('h2').show(2000);

    });

    //toggle
    $('.toggle').click(function(){
    
        $('h2').toggle("fast");

    });

    //fadeOut
    $('.FadeOut').click(function(){

        $('.c_h4').fadeOut(1000);

    });

    //fadeIn
    $('.FadeIn').click(function(){

        $('.c_h4').fadeIn(1000);

    });

    //fadeOut
    $('.FadeToggle').click(function(){

        $('.c_h4').fadeToggle(1000);

    });

    //fadeTo
    $('.FadeTo').click(function(){

        $('.c_h4').fadeTo(1000, .5);

    });


    //Slide
    $('.ques').click(function(){

        $('.ans').slideToggle(500);

    });

    //mousehover/enter/dblclick
    $('.ques_2').mouseenter(function(){

        $('.ans_2').slideToggle(500);

    });

    //stop
    $('#slide').click(function(){

        $(".demo").slideDown(5000);

    });
    $('#stop').click(function(){

        $(".demo").stop();

    });

    //callback
    $('#slide_2').click(function(){

        $(".demo_2").hide("slow");
        alert("Hello World");

    });

    //chaining
    $('#slide_3').click(function(){

        $(".demo_3").css("background","green").slideUp(1000).slideDown(1000).hide(1000);
        

    });

    //get
     var demo = $('.text').text();
              $('.text_2').text(demo);

    //set
    var demo = $("input[type='text']").val();
    $(".text_3").html("<h1>"+demo+"<h1>");
              

    //Add Elements append() Method
    $("button").click(function (){
        $("span").append("<h4>Bold Text<h4>")
    });

    //Add Elements prepend() Method
    $("#btn1").click(function(){
        
      $(".p1").prepend("<b>Prepend Text<b>.");
    });
    $("#btn2").click(function(){
        $("ol").prepend("<li>Prepended item</li>");
      });

      //Add Elements Before and After Method
      $("#btn_before").click(function(){
        $("img").before("<b>Before</b>");

        $("#btn_after").click(function(){
            $("img").after("<i>After</i>");
          });
      });

      //Show start
      $( "form" ).submit(function( event ) {
        if ( $( "input" ).first().val() === "correct" ) {
          $( "span" ).text( "Validated..." ).show();
          return;
        }
       
        $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
        event.preventDefault();
      });

      //Show end
  
    //   Prop start
    $( "input" ).change(function() {
        var $input = $( this );
        $( ".prop" ).html(
          ".attr( \"checked\" ): <b>" + $input.attr( "checked" ) + "</b><br>" +
          ".prop( \"checked\" ): <b>" + $input.prop( "checked" ) + "</b><br>" +
          ".is( \":checked\" ): <b>" + $input.is( ":checked" ) + "</b>" );
      });

      //load start
      $("button").click(function(){
        $("#div1").load("demo_test.txt #p1");
      });

    //   get and post start
    $(".get_b").click(function(){
        $.get("demo_test.asp", function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
        });
      });
 

      //data
      $( ".data_b" ).click(function() {
        var value;
       
        switch ( $( ".data_b" ).index( this ) ) {
          case 0 :
            value = $( "div" ).data( "blah" );
            break;
          case 1 :
            $( ".data_d" ).data( "blah", "hello" );
            value = "Stored!";
            break;
          case 2 :
            $( ".data_d" ).data( "blah", 86 );
            value = "Stored!";
            break;
          case 3 :
            $( ".data_d" ).removeData( "blah" );
            value = "Removed!";
            break;
        }
       
        $( ".data_s" ).text( "" + value );
      });

        //data end

        // empty start
        $( ".b_empty" ).click(function() {
            $( ".p_empty" ).empty();
          });


});