(function($){
'use strict'
	
  //标签随机颜色
  // var colorlist = ["#4680d1","#da4643","#ff800d","#ffb523","#45c186"];
  // var taglist = $('.colors li').length;

  // for(var i=0;i<taglist;i++){  
  //   var index = Math.floor(Math.random()*colorlist.length);
  //   var bgColor = colorlist[index];
  //   $('.tags-list li').eq(i).css({'color':bgColor});
  // 	$('.tags-list li').eq(i).css({'border':'solid 1px'});
  // } 

  //rem适配
  function adapt() {
      (function (doc, win) {
          var docEl = doc.documentElement,
              resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
              recalc = function () {
                  var clientWidth = docEl.clientWidth;
                  if(docEl.clientWidth > 750){
                      clientWidth = 750;
                  }
                  if (!clientWidth) {
                      return;
                  }
                  docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
              };
          recalc();
          if (!doc.addEventListener) {
              return;
          }
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
      })(document, window);
  }
  adapt();

  //夜间模式
  $('').on('tap',function(){
    if($('.wrap').hasClass('night')){
      $('.wrap').addClass('night');
    }else{
      $('.wrap').removeClass('night');
    }
  })

})(Zepto)