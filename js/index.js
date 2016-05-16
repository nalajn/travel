(function($){
'use strict'

  //themes-box height
  $('.themes-box').height($(window).height());
  $('.focus').height($(window).width()/2);

  //slider
  TouchSlide({ 
	slideCell:"#focus",
	titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	mainCell:".bd ul", 
	effect:"left", 
	autoPlay:true,//自动播放
	autoPage:true, //自动分页
	switchLoad:"_src" //切换加载，真实图片路径为"_src" 
  });

  //滑出选择主题页面
  $('.more').on('click',function(){
    $('.themes-box').removeClass('hide').animate({top:"0"});
    $('.wrap').height($(window).height()).addClass('overflow');
  })

  //关闭选择主题页面
  $('.themes-box .head-title').on('click',function(){
    $('.themes-box').animate({bottom:"-100%"}).addClass('hide');
    $('.wrap').removeClass('overflow').removeAttr('style');
  })

  //推荐模块
  var li_width = $('.recommend-box li').width();
  var li_len = $('.recommend-box li').length;
  var li_margin = parseInt($('.recommend-box li').eq(0).css('margin-right'));
  $('.recommend-box').width(li_width * li_len + li_margin * li_len);
  $('.mask').css({marginTop:-$('.recommend-box img').height()});   

  //标签总数<=8,显示两个，否则显示第一个
  // var num;
  // $('.best-item,.travel-item').each(function(){
  //   num = 0
  //   $(this).find('li').each(function(){
  //     num+=$(this).text().length;
  //   })
  //   if(num > 8){
  //     $(this).find('li:nth-child(2)').hide();
  //   }
  // })


})(Zepto)