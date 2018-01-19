var arr=["1.jpg","2.jpg","3.jpg","4.jpg"];
	var ord=0;
	var myTimer=null;

//初始化界面
function initUI(){
		$("#box li").css({"display":"none"});
	}
//自动播放
function autoPlay(){
	myTimer=setInterval(function(){
		var outOrd=ord;
		ord++;
		if(ord>arr.length-1){
			ord=0;
		}

		let $img=$("#box img");
		$img.eq(outOrd).animate({"opacity":0},1500);

		$img.eq(ord).animate({"opacity":1},1500);

		$("#box li").eq(outOrd).css({"display":"none"});
		$("#box li").eq(ord).css({"display":"block"});
		
	},5000);

	
}


//停止定时器
function stopPlay(){
	window.clearInterval(myTimer);
}


function goImg(transOrd){
	let outOrd=ord;
	ord=transOrd;
	if(ord>arr.length-1){
		ord=0;
	}

	let $img=$("#box img");
	$img.eq(outOrd).animate({"opacity":0},1500);

	$img.eq(ord).animate({"opacity":1},2000);

	$("#box li").eq(outOrd).css({"display":"none"});
	$("#box li").eq(ord).css({"display":"block"});
		

}

  function initEvent(){
  	$("box").mouseenter(function(){
  		stopPlay();
  	});

  	$("#box").mouseleave(function(){
  		autoPlay();
  	});
  	$("#box li").click(function(){
  		goImg($(this).index());
  	});

  	$("#left").click(function(){
  		let transord=ord-1;
  		transord=transord<0?arr.length-1:transord;
  		goImg(transord);
  	});

  		$("#right").click(function(){
  		let transord=ord+1;
  		transord=transord>arr.length-1?0:transord;
  		goImg(transord);
  	});
  }
