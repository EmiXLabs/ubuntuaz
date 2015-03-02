$ = jQuery;         
for(n in docready) $(document).ready(docready[n]);

$(document).ready(function() {
  var $header = $('<div class="label" style="position:absolute; top:0px; left:0px; background-color:rgba(0,0,0,0.7); padding:10px; color:#fff;"><h3>HEADER</h3></div>'),
      $aside = $('<div class="label" style="position:absolute; top:0px; left:0px; background-color:rgba(0,0,0,0.7); padding:10px; color:#fff;"><h3>ASIDE</h3></div>'),
      $content = $('<div class="label" style="position:absolute; top:0px; left:0px; background-color:rgba(0,0,0,0.7); padding:10px; color:#fff;"><h3>CONTENT</h3></div>'),
      $footer = $('<div class="label" style="position:absolute; top:0px; left:0px; background-color:rgba(0,0,0,0.7); padding:10px; color:#fff;"><h3>FOOTER</h3></div>');

  $("#wireframe .container").mouseenter(function() {
    var ele = $(this);
    ele.css({border:"1px dashed #555", padding:"0px 9px"});
    if(ele.parent().is("header")) {
      ele.append($header)
    }
    if(ele.parent().is("aside")) {
      ele.append($aside)
    }
    if(ele.parent().is("section")) {
      ele.append($content)
    }
    if(ele.parent().is("footer")) {
      ele.append($footer)
    }
  });

  $("#wireframe .container").mouseleave(function() {
    $(".label").remove();
    $(this).css({border:"0px dashed #555", padding:"0px 10px"})
  })
});

var trypie = function(){
  if(window.PIE){
    $('*').each(function(){
      if($(this).css('box-shadow') || $(this).css('border-radius')){
          PIE.attach(this);
      }
    });
  }
}