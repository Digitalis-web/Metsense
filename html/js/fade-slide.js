!function(a){function b(b){return a(b).filter(function(){return a(this).is(":appeared")})}function c(){g=!1;for(var a=0,c=e.length;a<c;a++){var d=b(e[a]);if(d.trigger("appear",[d]),j[a]){var f=j[a].not(d);f.trigger("disappear",[f])}j[a]=d}}function d(a){e.push(a),j.push()}var e=[],f=!1,g=!1,h={interval:250,force_process:!1},i=a(window),j=[];a.expr[":"].appeared=function(b){var c=a(b);if(!c.is(":visible"))return!1;var d=i.scrollLeft(),e=i.scrollTop(),f=c.offset(),g=f.left,h=f.top;return h+c.height()>=e&&h-(c.data("appear-top-offset")||0)<=e+i.height()&&g+c.width()>=d&&g-(c.data("appear-left-offset")||0)<=d+i.width()},a.fn.extend({appear:function(b){var e=a.extend({},h,b||{}),i=this.selector||this;if(!f){var j=function(){g||(g=!0,setTimeout(c,e.interval))};a(window).scroll(j).resize(j),f=!0}return e.force_process&&setTimeout(c,e.interval),d(i),a(i)}}),a.extend({force_appear:function(){return!!f&&(c(),!0)}})}(function(){return"undefined"!=typeof module?require("jquery"):jQuery}()),$(document).ready(function(){$(".slide-in").css("visibility","visible"),jQuery.fx.interval=100;var a=500,b=1e3,c=$("body").width();c>992&&($(".slide-in").appear(),$(".slide-in").addClass("has-not-slided"),$(".slide-in").css("opacity","0"),$(".slide-in").css("position","relative"),$(".slide-in").css("top","1px"),jQuery.each($(".slide-in"),function(a,b){var c=$(this).width();$(this).hasClass("slide-in-left")?$(this).css("right",c-1+"px"):$(this).css("left",c-1+"px")}),$("body").on("appear",".slide-in",function(c,d){var e=$(this);if($(this).hasClass("has-not-slided")){var f=0;$(this).hasClass("slide-delay-1")?f=500:$(this).hasClass("slide-delay-2")?f=1e3:$(this).hasClass("slide-delay-3")?f=1500:$(this).hasClass("slide-delay-4")&&(f=2e3),setTimeout(function(){e.removeClass("has-not-slided"),e.animate({opacity:"1"},{duration:a,queue:!1}),e.hasClass("slide-in-left")?e.animate({right:"0px"},{duration:b,queue:!1}):e.animate({left:"0px"},{duration:b,queue:!1})},f)}}),$.force_appear())}),console.log("hello"),$(document).ready(function(){$(".fade-in").css("visibility","visible"),jQuery.fx.interval=100;var a=1e3,b=500,c=$("body").width();c>992&&($(".fade-in").appear(),$(".fade-in").addClass("has-not-faded"),$(".fade-in").css("opacity","0"),$(".fade-in").css("position","relative"),$(".fade-in").css("top","20px"),$("body").on("appear",".fade-in",function(c,d){var e=$(this);if($(this).hasClass("has-not-faded")){var f=0;$(this).hasClass("fade-delay-05")?f=250:$(this).hasClass("fade-delay-1")?f=500:$(this).hasClass("fade-delay-2")?f=1e3:$(this).hasClass("fade-delay-3")?f=1500:$(this).hasClass("fade-delay-4")&&(f=2e3),setTimeout(function(){e.removeClass("has-not-faded"),e.animate({opacity:"1"},{duration:a,queue:!1}),e.animate({top:"0px"},{duration:b,queue:!1})},f)}}),$.force_appear(),setTimeout(function(){$.force_appear()},100))});