$(function(){
	//跳转
	$('#my-jumbotron img').click(function(){
		$('body').animate({scrollTop:670});
	})

	//project轮播
	var proIdArr=['_3dl1','_3dl2','_3dl3','_3dl4','_3dl5','_3dl6','_3dl7','_3dl8','_3dl9','_3dl10'];
	function proMove(der){
		if(der == 'right'){
			proIdArr.push(proIdArr.shift());
			$('.myproject').each(function(i,obj){
				$(obj).attr('id',arr1[i]);
			})
		}else if(der == 'left'){
			proIdArr.unshift(proIdArr.pop());
			$('.myproject').each(function(i,obj){
				$(obj).attr('id',arr1[i]);
			})
		}
	}
})