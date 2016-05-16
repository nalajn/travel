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

  
  //获取url参数
  function getUrlParam(name, url) {
    var search = url || document.location.search;
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) {
        return unescape(r[2]);
    }
    else{
        return null;
    }
  }
  

  //夜间模式
  $('').on('tap',function(){
    if($('.wrap').hasClass('night')){
      $('.wrap').addClass('night');
    }else{
      $('.wrap').removeClass('night');
    }
  })

  //标签长度适配
  function tagLengthAdapt(container){
    var eachLength,totalLength,
        screen = $(window).width();
    if(screen <= 320){
      eachLength = 3;
      totalLength = 6;
    }else{
      eachLength = 4;
      totalLength = 8;
    }
    console.log(eachLength)
    container.find('.tags-list').each(function(){
      var first = $(this).find('li:nth-child(1)');
      var second = $(this).find('li:nth-child(2)');
      if((first.text().length > eachLength || second.text().length > eachLength) 
          && (first.text().length + second.text().length) == totalLength){
        if(first.text().length>second.text().length){
          first.css({"maxWidth":"initial"});
          console.log(first.css("maxWidth"))
        }
      }
    })
  }

  tagLengthAdapt($('.travel-list'));


})(Zepto)