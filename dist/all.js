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
(function($){
'use strict'

	//窗口高度
	$('.wrap').height($(window).height());

	//choose-tag
	// $('.tags-box .tag').on('tap',function(){
	// 	$(this).addClass('active-tag').siblings().removeClass('active-tag');
	// })
})(Zepto)
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
