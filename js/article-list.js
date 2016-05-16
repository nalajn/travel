(function($){
'use strict' 

  //若labelCode参数不为空，则展开筛选页面
  var labelCode = getUrlParam('labelCode');
  if(labelCode){
  	showFilter();
  }

  //展开筛选页面
  $('.current-tag').on('tap',function(){
    showFilter();
  })

  //折叠筛选页
  $('.head-title,.total').on('tap',function(){
  	hideFilter();
  })

  //点击标签
  $('.tags-list .tag').on('tap',function(){
  	$(this).addClass('active-tag').siblings().removeClass('active-tag');
  })

  //展开筛选页面
  function showFilter(){
  	$('.filter').animate({height:$(window).height()});
    $('.wrap').height($(window).height()).addClass('overflow');
  }

  //折叠筛选页面
  function hideFilter(){
  	$('.filter').animate({height:0});
  	$('.wrap').removeClass('overflow').removeAttr('style');
  }

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
  

})(Zepto)