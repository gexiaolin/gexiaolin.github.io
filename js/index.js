$(function(){
	var p1Green = (function(){
		var fontsArr = ['M','Y','&nbsp;','W','E','B','S','I','T','E'];
		var $con = $('.section:nth-of-type(1) h1 .p1Green');
		var fontsIndex = 0;
		return function add(){
			var p1Add = function(){
				if(fontsIndex >= fontsArr.length){
					return;
					clearInterval(t);
				}
				var con = $con.html();
				$con.html(con + fontsArr[fontsIndex]);
				fontsIndex += 1;
			}
			var t = setInterval(p1Add,100);
		}
	})();
	var p2White = (function(){
		var fontsArr = ['W','H','A','T','&nbsp;','C','A','N','&nbsp;','I','&nbsp;','D','O','&nbsp;'];
		var $con = $('.section:nth-of-type(2) h1 .p2White');
		var fontsIndex = 0;
		return function add(){
			var p1Add = function(){
				if(fontsIndex >= fontsArr.length){
					return;
				}
				var con = $con.html();
				$con.html(con + fontsArr[fontsIndex]);
				fontsIndex += 1;
			}
			var t = setInterval(p1Add,100);
		}
	})();
	var p2Move = function(){
		move('.speech1')
		  .delay('1s')
		  .translate(0, -250)
		  .end();
		move('.speech2')
		  .delay('1.3s')
		  .translate(0, -250)
		  .end();
		move('.speech3')
		  .delay('1.1s')
		  .translate(0, -250)
		  .end();
		move('.speech4')
		  .delay('1.4s')
		  .translate(0, -250)
		  .end();
	}
	var p2Back = function(){
		move('.speech1')
		  .translate(0, 250)
		  .end();
		move('.speech2')
		  .translate(0, 250)
		  .end();
		move('.speech3')
		  .translate(0, 250)
		  .end();
		move('.speech4')
		  .translate(0, 250)
		  .end();
	}
	var p3Green = (function(){
		var fontsArr = ['E','X','P','E','R','I','E','N','C','E'];
		var $con = $('.section:nth-of-type(3) h1 .p3Green');
		var fontsIndex = 0;
		return function add(){
			var p1Add = function(){
				if(fontsIndex >= fontsArr.length){
					return;
				}
				var con = $con.html();
				$con.html(con + fontsArr[fontsIndex]);
				fontsIndex += 1;
			}
			var t = setInterval(p1Add,100);
		}
	})();
	var p3Move = function(){
		move('.paper1')
			.delay('1s')
			.translate(0,-500)
			.end();
		move('.paper2')
			.delay('1.2s')
			.translate(0,-500)
			.end();
		move('.paper3')
			.delay('1.4s')
			.translate(0,-500)
			.end();
		move('.paper4')
			.delay('1.6s')
			.translate(0,-660)
			.end();
	}
	var p3Back = function(){
		move('.paper1')
			.translate(0,500)
			.end();
		move('.paper2')
			.translate(0,500)
			.end();
		move('.paper3')
			.translate(0,500)
			.end();
		move('.paper4')
			.translate(0,660)
			.end();
	}
	var p4White = (function(){
		var fontsArr = ['P','R','O','D','U','C','E'];
		var $con = $('.section:nth-of-type(4) h1 .p4White');
		var fontsIndex = 0;
		return function add(){
			var p1Add = function(){
				if(fontsIndex >= fontsArr.length){
					return;
				}
				var con = $con.html();
				$con.html(con + fontsArr[fontsIndex]);
				fontsIndex += 1;
			}
			var t = setInterval(p1Add,100);
		}
	})();
	var p4Move = function(){
		move('.screen2')
			.delay('1s')
			.set('opacity',1)
			.scale(1)
			.end();
		move('.screen3')
			.delay('1.2s')
			.set('opacity',1)
			.scale(1)
			.end();
		move('.screen4')
			.delay('1.4s')
			.set('opacity',1)
			.scale(1)
			.end();
	}
	var p4Back = function(){
		move('.screen2')
			.set('opacity',0)
			.scale(0.5)
			.end();
		move('.screen3')
			.set('opacity',0)
			.scale(0.5)
			.end();
		move('.screen4')
			.set('opacity',0)
			.scale(0.5)
			.end();
	}
	var p5Green = function(){
		var fontsArr = ['G','A','M','E','S','&nbsp;','&','&nbsp;','H','5'];
		var $con = $('.section:nth-of-type(5) h1 .p5Green');
		var fontsIndex = 0;
		return function add(){
			var p1Add = function(){
				if(fontsIndex >= fontsArr.length){
					return;
				}
				var con = $con.html();
				$con.html(con + fontsArr[fontsIndex]);
				fontsIndex += 1;
			}
			var t = setInterval(p1Add,100);
		}
	}();
	var p5Move = function(){
		move('.folder1')
			.delay('1s')
			.translate(0,209)
			.end();
		move('.folder2')
			.delay('1s')
			.translate(0,209)
			.end();
		move('.folder3')
			.delay('1s')
			.translate(0,209)
				.then()
				.set('opacity',1)
				.duration('1s')
				.translate(0,-359)
					.then()
					.set('z-index',4)
					.duration('0.1s')
						.then()
						.translate(0,150)
						.duration('2s')
						.pop()
					.pop()
				.pop()
			.end();
		move('.folder6')
			.delay('4.5s')
			.duration('2s')
			.set('opacity',1)
			.set('z-index',97)
			.scale(1)
			.end();
		move('.snake')
			.delay('1s')
			.duration('2s')
			.set('opacity',1)
			.end();
		move('.bird')
			.delay('1.2s')
			.duration('2s')
			.set('opacity',1)
			.end();
		move('.saolei')
			.delay('1.4s')
			.duration('2s')
			.set('opacity',1)
			.end();
		move('.five')
			.delay('1.6s')
			.duration('2s')
			.set('opacity',1)
			.end();
		move('.font')
			.delay('1.8s')
			.duration('2s')
			.set('opacity',1)
			.end();
		move('.snow')
			.delay('2s')
			.duration('2s')
			.set('opacity',1)
			.end();
		move('.flame')
			.delay('2.2s')
			.duration('2s')
			.set('opacity',1)
			.end();
		move('.sketch')
			.delay('2.4s')
			.duration('2s')
			.set('opacity',1)
			.end();
	}
	var p5Back = function(){
		move('.folder1')
			.translate(0,0)
			.end();
		move('.folder2')
			.translate(0,0)
			.end();
		move('.folder3')
			.duration('0.1s')
			.translate(0,0)
			.set('opacity',0)
				.then()
				.duration('0.1s')
				.set('z-index',98)
				.pop()
			.end();
		move('.folder6')
			.duration('0.1s')
			.set('opacity',0)
				.then()
				.duration('0.1s')
				.set('z-index',1)
				.scale(0.1)
				.pop()
			.end();
	}
	var p6White = function(){
		var fontsArr = ['P','R','O','J','E','C','T','S'];
		var $con = $('.section:nth-of-type(6) h1 .p6White');
		var fontsIndex = 0;
		return function add(){
			var p1Add = function(){
				if(fontsIndex >= fontsArr.length){
					return;
				}
				var con = $con.html();
				$con.html(con + fontsArr[fontsIndex]);
				fontsIndex += 1;
			}
			var t = setInterval(p1Add,100);
		}
	}();
	var p6Move = function(){
		
	}
	var p6Back = function(){
		
	}
	var p7Green = function(){
		var fontsArr = ['T','A','L','K'];
		var $con = $('.section:nth-of-type(7) h1 .p7Green');
		var fontsIndex = 0;
		return function add(){
			var p1Add = function(){
				if(fontsIndex >= fontsArr.length){
					return;
				}
				var con = $con.html();
				$con.html(con + fontsArr[fontsIndex]);
				fontsIndex += 1;
			}
			var t = setInterval(p1Add,100);
		}
	}();
	var p7Move = function(){

	}
	$('#fullpage').fullpage({
		anchors:['p1','p2','p3','p4','p5','p6','p7'],
		navigation:true,
		navigationPosition:'right',
		navigationTooltips:['首页','技能掌握','工作经历','工作动力','H5作品','其他作品','联系我'],
		paddingTop:60,
		fixedElements:$('.nav'),
		afterLoad:function(link,index){
			switch(link){
				case 'p1':p1Green();
				break;
				case 'p2':p2White(),p2Move();
				break;
				case 'p3':p3Green(),p3Move();
				break;
				case 'p4':p4White(),p4Move();
				break;
				case 'p5':p5Green(),p5Move();
				break;
				case 'p6':p6White(),p6Move();
				break;
				case 'p7':p7Green(),p7Move();
				break;
			}
		},
		onLeave:function(index,toIndex){
			switch(index){
				case 2:p2Back();
				break;
				case 3:p3Back();
				break;
				case 4:p4Back();
				break;
				case 5:p5Back();
				break;
				case 6:p6Back();
				break;
			}
		}
	})
	var $btn = $('.navHold')
	$btn.bind('click',function(){
		if($(this).attr('key') == 'true'){
			$(this).find('span').css('background','#fff');
			$(this).css({background:'#24354c',width:200}).attr('key','false');
			$(this).find('ul').slideDown();
		}else{
			$(this).find('span').css('background','#24354c');
			$(this).css({background:'#fff',width:40}).attr('key','true');
			$(this).find('ul').slideUp();
		}
	})

	//PROJECTS轮播
	var proIdArr=['_3dl1','_3dl2','_3dl3','_3dl4','_3dl5','_3dl6','_3dl7'];
	function proMove(der){
		if(der == 'right'){
			proIdArr.push(proIdArr.shift());
			$('.myproject li').each(function(i,obj){
				$(obj).attr('id',proIdArr[i]);
			})
		}else if(der == 'left'){
			proIdArr.unshift(proIdArr.pop());
			$('.myproject li').each(function(i,obj){
				$(obj).attr('id',proIdArr[i]);
			})
		}
	}
	$('.proLeft').click(function(){
		proMove('left');
	});
	$('.proRight').click(function(){
		proMove('right');
	});
})