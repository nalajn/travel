(function($){
'use strict'
	
	var win_top,top,next_top,id;

	//head
	$(window).scroll(function () {
		win_top = $(window).scrollTop();
		//隐藏封面
        if(win_top >= 80){
			$('.head').addClass('hide');
			$('.head-hide').removeClass('hide');
			$('.main').css({'padding-top': '2rem'});
			var text = $('.head-hide .title-txt').text();
			$('.head-hide .title-txt').text(text.slice(0,5)+'...'+text.slice(-5));
		}
		//显示封面
		if(win_top === 0){
			$('.head').removeClass('hide');
			$('.head-hide').addClass('hide');
			$('.main').css({'padding-top': '0'});
		}

		//目录
		$('.day-title,.journey').each(function(){
			top = $(this).offset().top-40;
			next_top = $(this).offset().top+$(this).height();
			id = $(this).attr('id');
			if(top <= win_top && next_top > win_top){
				$('.more-list a').each(function(){
					if($(this).attr('href') == id){
						$('.day-tit,.day-con').removeClass('active');
						$(this).parent().addClass('active');
					}
				})
			}
		})
		
    })

    //封面图
    $('.head').css({"background-image":"url("+$('head').attr('data-img')+")"});

	//目录
	$('.more-btn').on('tap',function(){
		showModule('more');
	})

	//选择day1、day2...
	$('.more-list .day-tit,.more-list .day-con').on('tap',function(){
		$('.day-tit,.day-con').removeClass('active');
		$(this).addClass('active');
		hideModule();

		//滚动到相应位置
		
        var hr = $(this).find('a').attr("data-href");
        var anh = $(hr).offset().top-140;
        $('body').scrollTop(anh);
	})

	//编辑
	$('.edit-btn').on('tap',function(){
		showModule('edit');
	})

	//取消
	$('.cancel').on('tap',function(){
		hideModule();
	})


	//图片描述、时间、地址
	$('.article-txt').each(function(){
	    if(!$(this).text()){
	      $(this).css({'padding':'0'}).next('.time-address').find('p').css({'border':'0'});
	    }
	})
  
  	$('.time-address').each(function(){
  		if(!$(this).find('span').text()){
	      $(this).find('p').css({'border':'0'});
	    }
  	})


	//隐藏foot、mask模块
	function showModule(module_name){
		if(module_name == 'more'){
			$('.mask,.foot,.more-list,.cancel').removeClass('hide').animate({bottom:"0"});
		}else{
			$('.mask,.foot,.edit-list,.cancel').removeClass('hide').animate({bottom:"0"});
		}
		$('body').height($(window).height()).addClass('overflow');
	}
	//显示foot、mask模块
	function hideModule(){
		$('.mask,.foot,.more-list,.edit-list,.cancel').animate({bottom:"-100%"}).addClass('hide');
		$('body').removeClass('overflow').removeAttr('style');
	}


})(Zepto)