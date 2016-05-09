(function(win,doc){
// 	//自定义相对设计稿文字大小100px,方便计算
	win.dSize = 100;
	//自定义设计稿宽度
	win.dWidth = 720;
	//最大设备宽度
	win.maxWidth = 414;
	var docEl = doc.documentElement;
	//计算根文字大小,添加到html上,页面布局相采用rem单位
	var fontEl=document.createElement('style');
	var reFont = function (){
		var clientWidth = docEl.clientWidth>maxWidth?maxWidth:docEl.clientWidth;
		var scale = clientWidth/dWidth;
		// document.title=scale;	设备的宽度
		// scale = scale>0.6?0.6:scale;
		var size = dSize * scale;
		docEl.firstElementChild.appendChild(fontEl);

		fontEl.innerHTML = 'html{font-size:' + size + 'px!important;}body{width:'+dWidth/dSize+'rem;margin-left:auto!important;margin-right:auto!important;}';
	}

	// 等待结构加载完成
	var rotateScreen=function (){
		setTimeout(function(){
			reFont();
		},300)
	}
	var loading=function(){
		reFont();
	}
	// 兼容     旋转事件 如果pc兼容orientationchange就用orientationchange  不兼容就用 resize事件   
	win.addEventListener("onorientationchange" in win ? "orientationchange" : "resize",rotateScreen, false);
	document.addEventListener('DOMContentLoaded',loading, false);
})(window,document)