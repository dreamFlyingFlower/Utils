window.onload = function(){
	//hash的改变不会引起界面的刷新,但是会发生onhashchange事件
	function hashChanged(hashObj){
		//变化之后的url
		var newHash = hashObj.newURL.split('#')[1];
		//变化之前的url
		var oldHash = hashObj.oldURL.split('#')[1];
		//将对应的hash下界显示和隐藏
		if(oldHash){
			document.getElementById(oldhash).style.display = 'none';
		}
		if(newHash){
			document.getElementById(newHash).style.display = 'block';
		}
	}
	//监听路由变化
	window.onhashchange = hashChanged ;
	//改变url地址的hash来实现跳转
	var div1 = document.getElementById("div1");
	div1.onclick = function(e){
		var event = e ? e :window.event;
		window.location.hash = 'div2';
		e.stopPropagation();
	};
	var div2 = document.getElementById("div2");
	div2.onclick = function(e){
		var event = e ? e :window.event;
		window.location.hash = 'div3';
		e.stopPropagation();
	};
};