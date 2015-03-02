$(document).ready(function() {
  $("#wireframe .container").mouseenter(function() {
    var wf = $(this);
    wf.css({border:"1px dashed #555", padding:"0px 9px"});
    wf.parent().is("header") && wf.append('<div class="label" style="position:absolute; top:0px; left:0px; background-color:rgba(0,0,0,0.7); padding:10px; color:#fff;"><h3>HEADER</h3></div>');
    wf.parent().is("aside") && wf.append('<div class="label" style="position:absolute; top:0px; left:0px; background-color:rgba(0,0,0,0.7); padding:10px; color:#fff;"><h3>ASIDE</h3></div>');
    wf.parent().is("section") && wf.append('<div class="label" style="position:absolute; top:0px; left:0px; background-color:rgba(0,0,0,0.7); padding:10px; color:#fff;"><h3>CONTENT</h3></div>');
    wf.parent().is("footer") && wf.append('<div class="label" style="position:absolute; top:0px; left:0px; background-color:rgba(0,0,0,0.7); padding:10px; color:#fff;"><h3>FOOTER</h3></div>')
  });
  $("#wireframe .container").mouseleave(function() {
    $(".label").remove();
    $(this).css({border:"0px dashed #555", padding:"0px 10px"})
  })
});

(function(d){d.fn.invert=function(){d(this).find("*").andSelf().each(function(){var e=d(this);a("color",e);a("backgroundColor",e);d.each(["right","bottom","left","top"],function(f,g){a("border-"+g+"-color",e)});c(e)});return this};function a(h,f){var g=b(f.css(h));if(g!="transparent"&&g.substring(0,4)!="rgba"){var e=/rgb\((.+),(.+),(.+)\)/.exec(g);f.css(h,"rgb("+(255-e[1])+","+(255-e[2])+","+(255-e[3])+")")}}function b(g){if(g.substring(0,3)=="rgb"||g=="transparent"){return g}if(g.substring(0,1)=="#"){if(g.length==4){g="#"+g.substring(1,2)+g.substring(1,2)+g.substring(2,3)+g.substring(2,3)+g.substring(3,4)+g.substring(3,4)}return"rgb("+parseInt(g.substring(1,3),16)+","+parseInt(g.substring(3,5),16)+","+parseInt(g.substring(5,7),16)+")"}var e=["black","white","red","yellow","gray","blue","green","lime","fuchsia","aqua","maroon","navy","olive","purple","silver","teal"],f=["(0, 0, 0)","(255, 255, 255)","(255, 0, 0)","(255, 255, 0)","(128, 128, 128)","(0, 0, 255)","(0,128,0)","(0, 255, 0)","(255, 0, 255)","(0, 255, 255)","(128, 0, 0)","(0, 0, 128)","(128, 128, 0)","(128, 0, 128)","(192, 192, 192)","(0, 128, 128)"];g=f[d.inArray(g,e)]||g;return"rgb"+g}function c(h){if(!(h.is("img")||/^(data|url)/.test(h.css("backgroundImage")))){return}var e=new Image();d(e).bind("load",function(){var m=document.createElement("canvas");m.width=e.width;m.height=e.height;var j=m.getContext("2d"),s=0,r=0,t;try{j.drawImage(e,s,r);var k=j.getImageData(s,r,e.width,e.height);var q=k.data;for(var o=0,l=q.length;o<l;o+=4){q[o]=255-q[o];q[o+1]=255-q[o+1];q[o+2]=255-q[o+2]}j.putImageData(k,s,r);t=m.toDataURL()}catch(p){}if(h.is("img")){h.attr("src",t)}else{h.css("backgroundImage","url("+t+")")}}).each(function(){if(this.complete||this.complete===undefined){var i=this.src;this.src="#";this.src=i}});var f=h.css("backgroundImage").match(/url\((.*?)\)/),g=f&&f[1];e.src=h[0].src||g||h.css("backgroundImage")}})(jQuery);

var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
$(document).keydown(function(a) {
  kkeys.push(a.keyCode);
  0 <= kkeys.toString().indexOf(konami) && ($(document).unbind("keydown", arguments.callee), $.fn.invert && $("body").invert())
});
