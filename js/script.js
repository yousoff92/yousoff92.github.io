
//SMOOTH PAGE SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//OWL CAROSEL TESTIMONIAL
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(document).ready(

  // function() { 

  //   $("html").niceScroll({
  //   	cursorcolor:"#f74d65",
  //   	scrollspeed :"100",
  //   	cursorborder:"1px solid #f74d65",
  //   	horizrailenabled: "false",
  //   	cursorborderradius: "0px"
  //   });

  // }

);

new WOW().init();




    
/*Preloader*/
//<![CDATA[
$(window).load(function() { // makes sure the whole site is loaded

  var lineOption = {
    strokeWidth: 1,
    easing: 'easeInOut',
    //duration: 1400,
    //color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
  };

  var items = [];
  $.getJSON( "data/skill.json", function( response ) {
    var c = [];
    
    $.each(response, function(i, item) {       
        c.push("<tr><td>" + item.name + "</td>");
        c.push("<td>" + item.category + "</td>");
        c.push("<td><div id=\"skill-exp-" + i + "\" value=" + item.experience + "\"></td>");
        c.push("<td><div id=\"skill-interest-" + i + "\" value=" + item.interest + "\"></td></tr>");    
        items.push(item);
    });

    $('#skill-tablebody').html(c.join(""));
  }).then(function() {

    var i = 0;
    items.forEach(item => {
      var bar1 = new ProgressBar.Line('#skill-exp-' + i, lineOption);
      var float1 = item.experience / 100;
      bar1.animate(float1);    

      var bar2 = new ProgressBar.Line('#skill-interest-' + i, lineOption);
      var float2 = item.interest / 100;
      bar2.animate(float2);

      i=i+1;
    });

    $('#example').DataTable( {
      paging: true
    } );

  });


  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});

})
//]]>


