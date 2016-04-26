(function($){
'use strict'
	
	//head
	$(window).scroll(function () {
        if($(window).scrollTop() >= 80){
			$('.head').addClass('hide');
			$('.head-hide').removeClass('hide');
			$('.main').css({'padding-top': '2rem'})
		}
    })


	//目录
	$('.more-btn').on('tap',function(){
		showModule('more');
	})

	//选择day1、day2...
	$('.more-list .day-tit').on('tap',function(){
		$('.day-tit').removeClass('active');
		$(this).addClass('active');
		hideModule();
	})

	//编辑
	$('.edit-btn').on('tap',function(){
		showModule('edit');
	})

	//取消
	$('.cancel').on('tap',function(){
		hideModule();
	})

	//隐藏foot、mask模块
	function showModule(module_name){
		if(module_name == 'more'){
			$('.mask,.foot,.more-list,.cancel').removeClass('hide').animate({bottom:"0"});
		}else{
			$('.mask,.foot,.edit-list,.cancel').removeClass('hide').animate({bottom:"0"});
		}
		$('.wrap').height($(window).height()).addClass('overflow');
	}
	//显示foot、mask模块
	function hideModule(){
		$('.mask,.foot,.more-list,.edit-list,.cancel').animate({bottom:"-100%"}).addClass('hide');
		$('.wrap').removeClass('overflow').removeAttr('style');
	}

})(Zepto)