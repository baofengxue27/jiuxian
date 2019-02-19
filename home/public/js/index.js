$(function(){
	// 顶上的小三角效果
	$('ppt .main-right .jiuxian').mouseenter(function(){
		$(this).find('.myjiu').css({'transform':'rotate(180deg)','margin-left':'0px','margin-top':'10px'});
		$(this).find('.jiuxiantop').css({'background':'#fff'});
		$(this).find('.mydropdown').show();
	});

	//小三角下滑部分
	$('.main-right .jiuxian').mouseleave(function(){
		$(this).find('.myjiu').css({'transform':'rotate(0deg)','margin-left':'5px','margin-top':'2px'});
		$(this).find('.jiuxiantop').css({'background':'#F2F2F2'});
		$(this).find('.mydropdown').hide();
	});

	//左侧导航
	$('.div3 .left-menu').mouseenter(function(){
		$(this).css({'background':'#eee'});
		$(this).find('.right').show();
		$('.right').not($(this).find('.right')).hide();
	});

	$('.div3 .left-menu').mouseleave(function(){
		$(this).find('.right').hide();
		$(this).css({'background':'#fff'});
	});

	// 幻灯片设计
	(function(){
		$(".navppt .paging").show();  
		$(".navppt .paging a:first").addClass("active");  
		var num=$('.navppt .paging a:first').attr('rel');
		var arr=[1,2,3,4,5,6,7,8,9];
		var imgs=arr.slice((num-1)*3,num*3);

		for(var i=0;i<imgs.length;i++){
			$('.'+imgs[i]).show();
		}
		 
		//Get size of the image, how many images there are, then determin the size of the image reel.  
		var imageWidth = $(".navppt .window").width();  
		var imageSum = $(".navppt .image_reel img").size();  
		var imageReelWidth = imageWidth * imageSum;  
		   
		//Adjust the image reel to its new size  
		$(".navppt .image_reel").css({'width' : imageReelWidth});   

		// 第二步
		//Paging  and Slider Function  
		var rotate = function(end){  
			if(end){
				var triggerID = imageSum - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".navppt .paging a").removeClass('active'); //Remove all active class  
				$active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".navppt .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 ,function(){
					$(this).css({'left':'0px'});
				});  
			}else{
				var triggerID = $active.attr("rel") - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".navppt .paging a").removeClass('active'); //Remove all active class  
				$active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".navppt .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 );  
			}
		  	
		  	var act=$('.navppt .paging a.active').attr('rel'); 

		  	var imgs=arr.slice((act-1)*3,act*3);

		  	for(var i=0;i<imgs.length;i++){
		  		$('.'+imgs[i]).show();
		  	}
		};   
		   
		//Rotation  and Timing Event  
		var rotateSwitch = function(){  
		    	play = setInterval(function(){ //Set timer - this will repeat itself every 7 seconds  
		    	$('.navppt .img').hide();
		        $active = $('.navppt .paging a.active').next(); //Move to the next paging  

		        var rel=$('.navppt .paging a.active').attr('rel');

		        if(rel==3) { //If paging reaches the end...  
		            $active = $('.navppt .paging a:first'); //go back to first  
		            var end=true;
		        }else{
		        	var end=false;
		        }
		        rotate(end); //Trigger the paging and slider function  
		    }, 5000); //Timer speed in milliseconds (7 seconds)  
		};  
		   
		rotateSwitch(); //Run function on launch   

		// 第三步
		//On Hover  
		$(".navppt .image_reel a").hover(function() {  
		    clearInterval(play); //Stop the rotation  
		}, function() {  
		    rotateSwitch(); //Resume rotation timer  
		});   
		   
		//On Click  
		$(".navppt .paging a").click(function() {  
			$('.navppt .img').hide();
		    $active = $(this); //Activate the clicked paging  

		    var act=$(this).attr('rel'); 

		    var imgs=arr.slice((act-1)*3,act*3);

		    for(i=0;i<imgs.length;i++){
		    	$('.'+imgs[i]).show();
		    }

		    //Reset Timer  
		    clearInterval(play); //Stop the rotation  
		    rotate(false); //Trigger rotation immediately  
		    rotateSwitch(); // Resume rotation timer  
		    return false; //Prevent browser jump to link anchor  
		});
	})();
	// 疯狂抢购标签页JS样式左侧
	$('.indexTabBoxBottom .indexTabCon').first().show();

	$('.indexTabBoxTop ul li').mouseenter(function(){
		$(this).addClass('active');
		$('.indexTabBoxTop ul li').not($(this)).removeClass('active');

		idx=$(this).index('.indexTabBoxTop ul li');

		$('.indexTabBoxBottom .indexTabCon').eq(idx).show();
		$('.indexTabBoxBottom .indexTabCon').not($('.indexTabBoxBottom .indexTabCon').eq(idx)).hide();
	});
	// 疯狂抢购标签页JS样式右侧
	$('.indexTabRight .indexTabNewCon').first().show();

	$('.indexTabRight .indexTabNewNav ul li').mouseenter(function(){
		$(this).addClass('active');
		$('.indexTabRight .indexTabNewNav ul li').not($(this)).removeClass('active');

		idx=$(this).index('.indexTabRight .indexTabNewNav ul li');

		$('.indexTabRight .indexTabNewCon').eq(idx).show();
		$('.indexTabRight .indexTabNewCon').not($('.indexTabRight .indexTabNewCon').eq(idx)).hide();
	});

	//疯狂抢购右侧第一个幻灯片
	// 幻灯片变量
	(function(){
		$(".indexTuanBox .paging").show();  
		$(".indexTuanBox .paging a:first").addClass("active");  
		   
		//Get size of the image, how many images there are, then determin the size of the image reel.  
		var imageWidth = $(".indexTuanBox .window").width();  
		var imageSum = $(".indexTuanBox .image_reel img").size();  
		var imageReelWidth = imageWidth * imageSum;  

		//Adjust the image reel to its new size  
		$(".indexTuanBox .image_reel").css({'width' : imageReelWidth});   

		// 第二步
		//Paging  and Slider Function  
		var rotate = function(end){  
			if(end){
				var triggerID = imageSum - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".indexTuanBox .paging a").removeClass('active'); //Remove all active class  
				$active2.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".indexTuanBox .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 ,function(){
					$(this).css({'left':'0px'});
				});  
			}else{
				var triggerID = $active2.attr("rel") - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".indexTuanBox .paging a").removeClass('active'); //Remove all active class  
				$active2.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".indexTuanBox .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 );  
			}
		};   
		   
		//Rotation  and Timing Event  
		var rotateSwitch = function(){  
			// clearInterval(play2);
		    play2 = setInterval(function(){ //Set timer - this will repeat itself every 7 seconds  
		        $active2 = $('.indexTuanBox .paging a.active').next(); //Move to the next paging  
		        var rel=$('.indexTuanBox .paging a.active').attr('rel');

		        if ( rel==2) { //If paging reaches the end...  
		            $active2 = $('.indexTuanBox .paging a:first'); //go back to first  
		            var end=true;
		        }else{
		        	var end=false;
		        }
		        rotate(end); //Trigger the paging and slider function  
		    }, 3000); //Timer speed in milliseconds (7 seconds)  
		};  
		   
		rotateSwitch(); //Run function on launch   

		// 第三步
		//On Hover  
		$(".indexTuanBox .image_reel a").hover(function() {  
		    clearInterval(play2); //Stop the rotation  
		}, function() {  
		    rotateSwitch(); //Resume rotation timer  
		});   
		   
		//On Click  
		$(".indexTuanBox .paging a").click(function() {  
		    $active2 = $(this); //Activate the clicked paging  
		    //Reset Timer  
		    clearInterval(play2); //Stop the rotation  
		    rotate(false); //Trigger rotation immediately  
		    rotateSwitch(); // Resume rotation timer  
		    return false; //Prevent browser jump to link anchor  
		});
	})();

	//疯狂抢购右侧第二个幻灯片
	(function(){
		$(".indexAdFocus .paging").show();  
		$(".indexAdFocus .paging a:first").addClass("active");  
		   
		//Get size of the image, how many images there are, then determin the size of the image reel.  
		var imageWidth = $(".indexAdFocus .window").width();  
		var imageSum = $(".indexAdFocus .image_reel img").size();  
		var imageReelWidth = imageWidth * imageSum;  

		//Adjust the image reel to its new size  
		$(".indexAdFocus .image_reel").css({'width' : imageReelWidth});   

		// 第二步
		//Paging  and Slider Function  
		var rotate = function(end){  
			if(end){
				var triggerID = imageSum - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".indexAdFocus .paging a").removeClass('active'); //Remove all active class  
				$active3.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".indexAdFocus .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 ,function(){
					$(this).css({'left':'0px'});
				});  
			}else{
				var triggerID = $active3.attr("rel") - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".indexAdFocus .paging a").removeClass('active'); //Remove all active class  
				$active3.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".indexAdFocus .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 );  
			}
		};   
		   
		//Rotation  and Timing Event  
		var rotateSwitch = function(){  
			// clearInterval(play2);
		    play3 = setInterval(function(){ //Set timer - this will repeat itself every 7 seconds  
		        $active3 = $('.indexAdFocus .paging a.active').next(); //Move to the next paging  
		        var rel=$('.indexAdFocus .paging a.active').attr('rel');

		        if ( rel==2) { //If paging reaches the end...  
		            $active3 = $('.indexAdFocus .paging a:first'); //go back to first  
		            var end=true;
		        }else{
		        	var end=false;
		        }
		        rotate(end); //Trigger the paging and slider function  
		    }, 3000); //Timer speed in milliseconds (7 seconds)  
		};  
		   
		rotateSwitch(); //Run function on launch   

		// 第三步
		//On Hover  
		$(".indexAdFocus .image_reel a").hover(function() {  
		    clearInterval(play3); //Stop the rotation  
		}, function() {  
		    rotateSwitch(); //Resume rotation timer  
		});   
		   
		//On Click  
		$(".indexAdFocus .paging a").click(function() {  
		    $active3 = $(this); //Activate the clicked paging  
		    //Reset Timer  
		    clearInterval(play3); //Stop the rotation  
		    rotate(false); //Trigger rotation immediately  
		    rotateSwitch(); // Resume rotation timer  
		    return false; //Prevent browser jump to link anchor  
		});
	})();



	//优惠推荐下方滚动效果
	s=0;
	v=-1200;

	

	$('.raceRight').click(function(){
		s+=v;
		if(s<=-2400){
			s=-2400;
		}

		//设置指示灯
		setLight();

		$('.raceBoxs').stop().animate({
			'left':s+'px'
		},500);
	});

	$('.raceLeft').click(function(){
		s-=v;
		if(s>=0){
			s=0;
		}
		
		//设置指示灯
		setLight();

		$('.raceBoxs').stop().animate({
			'left':s+'px'
		},500);
	});


	//优惠推荐右上角指示灯
	$('.indexRaceBox .titleBox .rightNavBox span').click(function(){
		$(this).addClass('active');
		$('.indexRaceBox .titleBox .rightNavBox span').not($(this)).removeClass('active');

		idx=$(this).index('.indexRaceBox .titleBox .rightNavBox span');

		s=idx*v;

		$('.raceBoxs').stop().animate({
			'left':s+'px'
		},500);
	})

	//控制指示灯
	function setLight(){
		n=s/v;
		$('.indexRaceBox .titleBox .rightNavBox span').eq(n).addClass('active');
		$('.indexRaceBox .titleBox .rightNavBox span').not($('.indexRaceBox .titleBox .rightNavBox span').eq(n)).removeClass('active');
	}

	//分类商品区左侧幻灯片
	//白酒馆
	(function(){
		$(".whiteWineJs .paging").show();  
		$(".whiteWineJs .paging a:first").addClass("active");  
		   
		//Get size of the image, how many images there are, then determin the size of the image reel.  
		var imageWidth = $(".whiteWineJs .window").width();  
		var imageSum = $(".whiteWineJs .image_reel img").size();  
		var imageReelWidth = imageWidth * imageSum;  

		//Adjust the image reel to its new size  
		$(".whiteWineJs .image_reel").css({'width' : imageReelWidth});   

		// 第二步
		//Paging  and Slider Function  
		var rotate = function(end){  
			if(end){
				var triggerID = imageSum - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".whiteWineJs .paging a").removeClass('active'); //Remove all active class  
				$active4.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".whiteWineJs .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 ,function(){
					$(this).css({'left':'0px'});
				});  
			}else{
				var triggerID = $active4.attr("rel") - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".whiteWineJs .paging a").removeClass('active'); //Remove all active class  
				$active4.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".whiteWineJs .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 );  
			}
		};   
		   
		//Rotation  and Timing Event  
		var rotateSwitch = function(){  
			// clearInterval(play2);
		    play4 = setInterval(function(){ //Set timer - this will repeat itself every 7 seconds  
		        $active4 = $('.whiteWineJs .paging a.active').next(); //Move to the next paging  
		        var rel=$('.whiteWineJs .paging a.active').attr('rel');

		        if ( rel==2) { //If paging reaches the end...  
		            $active4 = $('.whiteWineJs .paging a:first'); //go back to first  
		            var end=true;
		        }else{
		        	var end=false;
		        }
		        rotate(end); //Trigger the paging and slider function  
		    }, 3000); //Timer speed in milliseconds (7 seconds)  
		};  
		   
		rotateSwitch(); //Run function on launch   

		// 第三步
		//On Hover  
		$(".whiteWineJs .image_reel a").hover(function() {  
		    clearInterval(play4); //Stop the rotation  
		}, function() {  
		    rotateSwitch(); //Resume rotation timer  
		});   
		   
		//On Click  
		$(".whiteWineJs .paging a").click(function() {  
		    $active4 = $(this); //Activate the clicked paging  
		    //Reset Timer  
		    clearInterval(play4); //Stop the rotation  
		    rotate(false); //Trigger rotation immediately  
		    rotateSwitch(); // Resume rotation timer  
		    return false; //Prevent browser jump to link anchor  
		});
	})();

	(function(){
		$(".redWineJs .paging").show();  
		$(".redWineJs .paging a:first").addClass("active");  
		   
		//Get size of the image, how many images there are, then determin the size of the image reel.  
		var imageWidth = $(".redWineJs .window").width();  
		var imageSum = $(".redWineJs .image_reel img").size();  
		var imageReelWidth = imageWidth * imageSum;  

		//Adjust the image reel to its new size  
		$(".redWineJs .image_reel").css({'width' : imageReelWidth});   

		// 第二步
		//Paging  and Slider Function  
		var rotate = function(end){  
			if(end){
				var triggerID = imageSum - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".redWineJs .paging a").removeClass('active'); //Remove all active class  
				$active5.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".redWineJs .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 ,function(){
					$(this).css({'left':'0px'});
				});  
			}else{
				var triggerID = $active5.attr("rel") - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".redWineJs .paging a").removeClass('active'); //Remove all active class  
				$active5.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".redWineJs .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 );  
			}
		};   
		   
		//Rotation  and Timing Event  
		var rotateSwitch = function(){  
			// clearInterval(play2);
		    play5 = setInterval(function(){ //Set timer - this will repeat itself every 7 seconds  
		        $active5 = $('.redWineJs .paging a.active').next(); //Move to the next paging  
		        var rel=$('.redWineJs .paging a.active').attr('rel');

		        if ( rel==2) { //If paging reaches the end...  
		            $active5 = $('.redWineJs .paging a:first'); //go back to first  
		            var end=true;
		        }else{
		        	var end=false;
		        }
		        rotate(end); //Trigger the paging and slider function  
		    }, 3000); //Timer speed in milliseconds (7 seconds)  
		};  
		   
		rotateSwitch(); //Run function on launch   

		// 第三步
		//On Hover  
		$(".redWineJs .image_reel a").hover(function() {  
		    clearInterval(play5); //Stop the rotation  
		}, function() {  
		    rotateSwitch(); //Resume rotation timer  
		});   
		   
		//On Click  
		$(".redWineJs .paging a").click(function() {  
		    $active5 = $(this); //Activate the clicked paging  
		    //Reset Timer  
		    clearInterval(play5); //Stop the rotation  
		    rotate(false); //Trigger rotation immediately  
		    rotateSwitch(); // Resume rotation timer  
		    return false; //Prevent browser jump to link anchor  
		});
	})();

	(function(){
		$(".foreignWineJs .paging").show();  
		$(".foreignWineJs .paging a:first").addClass("active");  
		   
		//Get size of the image, how many images there are, then determin the size of the image reel.  
		var imageWidth = $(".foreignWineJs .window").width();  
		var imageSum = $(".foreignWineJs .image_reel img").size();  
		var imageReelWidth = imageWidth * imageSum;  

		//Adjust the image reel to its new size  
		$(".foreignWineJs .image_reel").css({'width' : imageReelWidth});   

		// 第二步
		//Paging  and Slider Function  
		var rotate = function(end){  
			if(end){
				var triggerID = imageSum - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".foreignWineJs .paging a").removeClass('active'); //Remove all active class  
				$active6.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".foreignWineJs .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 ,function(){
					$(this).css({'left':'0px'});
				});  
			}else{
				var triggerID = $active6.attr("rel") - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".foreignWineJs .paging a").removeClass('active'); //Remove all active class  
				$active6.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".foreignWineJs .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 );  
			}
		};   
		   
		//Rotation  and Timing Event  
		var rotateSwitch = function(){  
			// clearInterval(play2);
		    play6 = setInterval(function(){ //Set timer - this will repeat itself every 7 seconds  
		        $active6 = $('.foreignWineJs .paging a.active').next(); //Move to the next paging  
		        var rel=$('.foreignWineJs .paging a.active').attr('rel');

		        if ( rel==2) { //If paging reaches the end...  
		            $active6 = $('.foreignWineJs .paging a:first'); //go back to first  
		            var end=true;
		        }else{
		        	var end=false;
		        }
		        rotate(end); //Trigger the paging and slider function  
		    }, 3000); //Timer speed in milliseconds (7 seconds)  
		};  
		   
		rotateSwitch(); //Run function on launch   

		// 第三步
		//On Hover  
		$(".foreignWineJs .image_reel a").hover(function() {  
		    clearInterval(play6); //Stop the rotation  
		}, function() {  
		    rotateSwitch(); //Resume rotation timer  
		});   
		   
		//On Click  
		$(".foreignWineJs .paging a").click(function() {  
		    $active6 = $(this); //Activate the clicked paging  
		    //Reset Timer  
		    clearInterval(play6); //Stop the rotation  
		    rotate(false); //Trigger rotation immediately  
		    rotateSwitch(); // Resume rotation timer  
		    return false; //Prevent browser jump to link anchor  
		});
	})();


	(function(){
		$(".healthWineJs .paging").show();  
		$(".healthWineJs .paging a:first").addClass("active");  
		   
		//Get size of the image, how many images there are, then determin the size of the image reel.  
		var imageWidth = $(".healthWineJs .window").width();  
		var imageSum = $(".healthWineJs .image_reel img").size();  
		var imageReelWidth = imageWidth * imageSum;  

		//Adjust the image reel to its new size  
		$(".healthWineJs .image_reel").css({'width' : imageReelWidth});   

		// 第二步
		//Paging  and Slider Function  
		var rotate = function(end){  
			if(end){
				var triggerID = imageSum - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".healthWineJs .paging a").removeClass('active'); //Remove all active class  
				$active7.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".healthWineJs .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 ,function(){
					$(this).css({'left':'0px'});
				});  
			}else{
				var triggerID = $active7.attr("rel") - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".healthWineJs .paging a").removeClass('active'); //Remove all active class  
				$active7.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".healthWineJs .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 );  
			}
		};   
		   
		//Rotation  and Timing Event  
		var rotateSwitch = function(){  
			// clearInterval(play2);
		    play7 = setInterval(function(){ //Set timer - this will repeat itself every 7 seconds  
		        $active7 = $('.healthWineJs .paging a.active').next(); //Move to the next paging  
		        var rel=$('.healthWineJs .paging a.active').attr('rel');

		        if ( rel==2) { //If paging reaches the end...  
		            $active7 = $('.healthWineJs .paging a:first'); //go back to first  
		            var end=true;
		        }else{
		        	var end=false;
		        }
		        rotate(end); //Trigger the paging and slider function  
		    }, 3000); //Timer speed in milliseconds (7 seconds)  
		};  
		   
		rotateSwitch(); //Run function on launch   

		// 第三步
		//On Hover  
		$(".healthWineJs .image_reel a").hover(function() {  
		    clearInterval(play7); //Stop the rotation  
		}, function() {  
		    rotateSwitch(); //Resume rotation timer  
		});   
		   
		//On Click  
		$(".healthWineJs .paging a").click(function() {  
		    $active7 = $(this); //Activate the clicked paging  
		    //Reset Timer  
		    clearInterval(play7); //Stop the rotation  
		    rotate(false); //Trigger rotation immediately  
		    rotateSwitch(); // Resume rotation timer  
		    return false; //Prevent browser jump to link anchor  
		});
	})();

	(function(){
		$(".foodAndWineJs .paging").show();  
		$(".foodAndWineJs .paging a:first").addClass("active");  
		   
		//Get size of the image, how many images there are, then determin the size of the image reel.  
		var imageWidth = $(".foodAndWineJs .window").width();  
		var imageSum = $(".foodAndWineJs .image_reel img").size();  
		var imageReelWidth = imageWidth * imageSum;  

		//Adjust the image reel to its new size  
		$(".foodAndWineJs .image_reel").css({'width' : imageReelWidth});   

		// 第二步
		//Paging  and Slider Function  
		var rotate = function(end){  
			if(end){
				var triggerID = imageSum - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".foodAndWineJs .paging a").removeClass('active'); //Remove all active class  
				$active8.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".foodAndWineJs .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 ,function(){
					$(this).css({'left':'0px'});
				});  
			}else{
				var triggerID = $active8.attr("rel") - 1; //Get number of times to slide  
				var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide  
				
				$(".foodAndWineJs .paging a").removeClass('active'); //Remove all active class  
				$active8.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)  
				
				//Slider Animation  
				$(".foodAndWineJs .image_reel").animate({  
				    left: -image_reelPosition  
				}, 500 );  
			}
		};   
		   
		//Rotation  and Timing Event  
		var rotateSwitch = function(){  
			// clearInterval(play2);
		    play8 = setInterval(function(){ //Set timer - this will repeat itself every 7 seconds  
		        $active8 = $('.foodAndWineJs .paging a.active').next(); //Move to the next paging  
		        var rel=$('.foodAndWineJs .paging a.active').attr('rel');

		        if ( rel==2) { //If paging reaches the end...  
		            $active8 = $('.foodAndWineJs .paging a:first'); //go back to first  
		            var end=true;
		        }else{
		        	var end=false;
		        }
		        rotate(end); //Trigger the paging and slider function  
		    }, 3000); //Timer speed in milliseconds (7 seconds)  
		};  
		   
		rotateSwitch(); //Run function on launch   

		// 第三步
		//On Hover  
		$(".foodAndWineJs .image_reel a").hover(function() {  
		    clearInterval(play8); //Stop the rotation  
		}, function() {  
		    rotateSwitch(); //Resume rotation timer  
		});   
		   
		//On Click  
		$(".foodAndWineJs .paging a").click(function() {  
		    $active8 = $(this); //Activate the clicked paging  
		    //Reset Timer  
		    clearInterval(play8); //Stop the rotation  
		    rotate(false); //Trigger rotation immediately  
		    rotateSwitch(); // Resume rotation timer  
		    return false; //Prevent browser jump to link anchor  
		});
	})();

	//官方推荐下方的小滑块
	$('.contentThree .titleBox li').mouseenter(function(){
		l=$(this).position().left;
		$('.contentThree .titleSlider').animate({
			'left':l+'px'
		},100);
	});

	//官方推荐中的品牌图标标签页效果

	$('.contentThree .logoBox .slider').first().show();
	$('.contentThree .titleBox li').mouseenter(function(){
		idx=$(this).index('.contentThree .titleBox li');

		$('.contentThree .logoBox .slider').eq(idx).show();
		$('.contentThree .logoBox .slider').not($('.contentThree .logoBox .slider').eq(idx)).hide();
	})

	//官方推荐中的品牌图标滑动效果

	$('.contentThree .logoBox ul li img').hover(
		function(){
			$(this).stop().animate({
				'left':'-100px'
			},300);
		},
		function(){
			$(this).stop().animate({
				'left':'0px'
			},300);

		}
	);

	//官方推荐中的第一套图标标签左右控制

	$('.contentThree .logoBox .controlRight').click(function(){
		$('.contentThree .logoBox .slider .one').animate({
			'left':'-1200px'
		},200);
	});

	$('.contentThree .logoBox .controlLeft').click(function(){
		$('.contentThree .logoBox .slider .one').animate({
			'left':'0px'
		},200);
	});

	//回到顶部
	sw=$(window).width();

	$('.returnTop').css({'height':sw+'px'});

	//窗口右侧的导航之我的弹窗
	$('.rightsbc1').mouseenter(function(){
		x=$(this).position().left+35;
		y=$(this).position().top;

		$('.sidebarUser').show().css({'top':y+'px','right':x+'px','z-index':'200'});
	});


	$('.rightsbc1').mouseleave(function(){
		$('.sidebarUser').hide();
	});

	//窗口右侧收藏的导航
	$('.rightsbc2').mouseenter(function(){
		x=$(this).position().left+35;
		y=$(this).position().top;

		$('.sidebarUser2').show().css({'top':y+'px','right':x+'px','z-index':'200'});
	});

	$('.rightsbc2').mouseleave(function(){
		$('.sidebarUser2').hide();
	});


	//窗口右侧反馈
	$('.returnTop .rightSidebarBot .fankui').mouseenter(function(){
		$(this).find('i').css({'background-position':'3px -203px'});

		x=$(this).position().left+35;
		y=$(this).position().top;

		$(this).find('.fankui-left').show().css({'top':y+'px','right':x+'px','z-index':'200'});
	});


	$('.returnTop .rightSidebarBot .fankui').mouseleave(function(){
		$(this).find('.fankui-left').hide();
		$(this).find('i').css({'background-position':'3px -186px'});
	});

	//窗口右侧微信
	$('.returnTop .rightSidebarBot .weixin').mouseenter(function(){
		$(this).find('i').css({'background-position':'3px -203px'});

		x=$(this).position().left+35;
		y=$(this).position().top;

		$(this).find('.weixin-left').show().css({'top':y+'px','right':x+'px','z-index':'200'});

		$(this).find('i').css({'background-position':'-19px -203px'});
	});

	$('.returnTop .rightSidebarBot .weixin').mouseleave(function(){
		$(this).find('i').css({'background-position':'-19px -186px'});
		$(this).find('.weixin-left').hide();
	});

	//窗口右侧返回顶部
	$('.returnTop .rightSidebarBot .rtop').mouseenter(function(){
		$(this).find('i').css({'background-position':'-40px -203px'});
	});

	$('.returnTop .rightSidebarBot .rtop').mouseleave(function(){
		$(this).find('i').css({'background-position':'-40px -186px'});
	});

	//窗口右侧缓缓回到顶部
	$('.returnTop .rightSidebarBot .rtop').click(function(){
		s=$(window).scrollTop();
		v=50;

		sobj=setInterval(function(){
			s-=v;

			if(s<=0){
				s=0;
				clearInterval(sobj);
			}
			$(window).scrollTop(s);
		},10);
	});

	//左侧滚动监听之  回到顶部
	$('.leftnav .floorBack').mouseenter(function(){
		$(this).find('i').css({'background-position':'-95px -190px'});
	});
	$('.leftnav .floorBack').mouseleave(function(){
		$(this).find('i').css({'background-position':'-74px -190px'});
	});
	$('.leftnav .floorBack').click(function(){
		s=$(window).scrollTop();
		v=50;

		sobj=setInterval(function(){
			s-=v;

			if(s<=0){
				s=0;
				clearInterval(sobj);
				$('.leftnav').hide();
			}
			$(window).scrollTop(s);
		},10);
	});


	//左侧滚动监听
	// floor1

	floor1Name=$('.leftnav .floor1').find('a').attr('name');
	$('.leftnav .floor1').find('a').html(floor1Name).css({'display':'block'});
	$('.leftnav .floor1').find('i').hide();
	//鼠标移入图标特效
	$('.leftnav .floor1').mouseenter(function(){
		floor1Name2=$('.leftnav .floor1').find('a').attr('name2');
		$(this).find('a').html(floor1Name2).css({'display':'block'}).animate({
			'width':'60px'
		},500);
		$(this).find('i').hide();
	});

	// 鼠标移出图标特效
	$('.leftnav .floor1').mouseleave(function(){
		$(this).find('a').animate({
			'width':'30px'
		},200,function(){
			$(this).hide();
			$('.leftnav .floor1').find('i').show();

			// myscroll();
		});
	});
	//点击监听
	$('.leftnav .floor1').click(function(){
		f=$(this).find('a').attr('name');
		t=$('#'+f).offset().top-200;
		$(window).scrollTop(t);
	})


	// floor2
	$('.leftnav .floor2').mouseenter(function(){
		floor1Name2=$('.leftnav .floor2').find('a').attr('name2');
		$(this).find('a').html(floor1Name2).css({'display':'block'}).animate({
			'width':'60px'
		},500);
		$(this).find('i').hide();
	});
	$('.leftnav .floor2').mouseleave(function(){
		$(this).find('a').animate({
			'width':'30px'
		},200,function(){
			$(this).hide();
			$('.leftnav .floor2').find('i').show();
			// myscroll();
		});
	});

	$('.leftnav .floor2').click(function(){
		f=$(this).find('a').attr('name');
		t=$('#'+f).offset().top-200;
		$(window).scrollTop(t);
	});

	// floor3
	$('.leftnav .floor3').mouseenter(function(){
		floor1Name2=$('.leftnav .floor3').find('a').attr('name2');
		$(this).find('a').html(floor1Name2).css({'display':'block'}).animate({
			'width':'60px'
		},500);
		$(this).find('i').hide();
	});
	$('.leftnav .floor3').mouseleave(function(){
		$(this).find('a').animate({
			'width':'30px'
		},200,function(){
			$(this).hide();
			$('.leftnav .floor3').find('i').show();
			// myscroll();
		});
	});

	$('.leftnav .floor3').click(function(){
		f=$(this).find('a').attr('name');
		t=$('#'+f).offset().top-200;
		$(window).scrollTop(t);
	});

	// floor4
	$('.leftnav .floor4').mouseenter(function(){
		floor1Name2=$('.leftnav .floor4').find('a').attr('name2');
		$(this).find('a').html(floor1Name2).css({'display':'block'}).animate({
			'width':'60px'
		},500);
		$(this).find('i').hide();
	});
	$('.leftnav .floor4').mouseleave(function(){
		$(this).find('a').animate({
			'width':'30px'
		},200,function(){
			$(this).hide();
			$('.leftnav .floor4').find('i').show();
			// myscroll();
		});
	});
	$('.leftnav .floor4').click(function(){
		f=$(this).find('a').attr('name');
		t=$('#'+f).offset().top-200;
		$(window).scrollTop(t);
	});

	// floor5
	$('.leftnav .floor5').mouseenter(function(){
		floor1Name2=$('.leftnav .floor5').find('a').attr('name2');
		$(this).find('a').html(floor1Name2).css({'display':'block'}).animate({
			'width':'60px'
		},500);
		$(this).find('i').hide();
	});
	$('.leftnav .floor5').mouseleave(function(){
		$(this).find('a').animate({
			'width':'30px'
		},200,function(){
			$(this).hide();
			$('.leftnav .floor5').find('i').show();
			// myscroll();
		});
	});
	$('.leftnav .floor5').click(function(){
		f=$(this).find('a').attr('name');
		t=$('#'+f).offset().top-200;
		$(window).scrollTop(t);
	});
	//左侧滚动监听开始
	$(window).scroll(function(){
		myscroll();	
	});	

	function myscroll(){
		st=$(window).scrollTop();	
		firstTop=$('.comTitle .newIndexIcon').first().offset().top;
		if(st<firstTop){
			$('.leftnav').hide();
		}else{
			$('.comTitle .newIndexIcon').each(function(){
				ot=$(this).offset().top;

				if(st>=ot){
					$('.leftnav').show();

					fname=$(this).attr('id');
					$('.leftnav a[name='+fname+']').html(fname).css({'display':'block'});
					$('.leftnav a[name='+fname+']').next('i').hide();

					$('.leftnav .leftnavA').not($('.leftnav a[name='+fname+']')).each(function(){
						fname2=$(this).attr('name2');
						$(this).html(fname2).hide();
						$(this).next().show();
					});
				}
				
			});
		}
	}

	
});

