!(function(win, doc) {
	function setFontSize() {
		// 获取window 宽度
		var winWidth = window.innerWidth;
		doc.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px';
		// 640宽度以上进行限制 需要css进行配合
		// var size = (winWidth / 640) * 100;
		// doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px';
	}

	var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';

	var timer = null;

	win.addEventListener(evt, function() {
		clearTimeout(timer);

		timer = setTimeout(setFontSize, 100);
	}, false);

	win.addEventListener("pageshow", function(e) {
		if(e.persisted) {
			clearTimeout(timer);

			timer = setTimeout(setFontSize, 100);
		}
	}, false);

	// 初始化
	setFontSize();

}(window, document));
document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
		   event.preventDefault();
		 }
	}, false);  	
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
  var now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);

window.onorientationchange=function(){
    if(window.orientation==90||window.orientation==-90){
       alert('为了您更好的体验，请保持竖屏');
    }else{
    	 alert('没有横屏');
    }
}
// H5 plus事件处理
//function plusReady(){
//	alert( "Display height: " + plus.display.resolutionHeight*plus.screen.scale + "px" );
//}
//if(window.plus){
//	plusReady();
//}else{
//	document.addEventListener("plusready",plusReady,false);
//}
//判断手机横竖屏状态：
//	function hengshuping(){
//		if(window.orientation==180||window.orientation==0){
//			console.log("竖屏状态！");
//		}
//		if(window.orientation==90||window.orientation==-90){
//			console.log("横屏状态！");
//		}
//	}
//	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);


