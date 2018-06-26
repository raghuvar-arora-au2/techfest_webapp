$(document).ready(function(){
  var object1=$('#object1');
  var object2=$('#object2');
  var object3=$("#object3");
  var object4=$("#object4");
  var object5=$("#object5");
  var object6=$("#object6");
  var layer=$('.main');

  layer.mousemove(function(e){
         
         var valueX=(e.pageX * -1 / 16);
         var valueY=(e.pageY * -1 / 18);

          object1.css({
              'transform':'translate3d('+valueX+'px,'+valueY+'px,0) '
          });
          object2.css({
              'transform':'translate3d('+valueX+'px,'+valueY+'px,0) '
          });
          object3.css({
              'transform':'translate3d('+valueX+'px,'+valueY+'px,0) '
          });
          object4.css({
              'transform':'translate3d('+valueX+'px,'+valueY+'px,0) '
          });
          object5.css({
              'transform':'translate3d('+valueX+'px,'+valueY+'px,0) '
          });
          object6.css({
              'transform':'translate3d('+valueX+'px,'+valueY+'px,0) '
          });


      });
  $(".icon").click(function(){
    $(".icon").toggleClass("active")

  });
  $(".icon").click(function(){
    $(".menu").toggleClass("active")

  });
});
