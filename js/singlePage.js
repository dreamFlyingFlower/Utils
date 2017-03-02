window.onload = function(){
	//hash的改变不会引起界面的刷新,但是会发生onhashchange事件
	function hashChanged(hashObj){
		//变化之后的url
		var newHash = hashObj.newUrl.split('#')[1];
		//变化之前的url
		var oldHash = hashObj.oldUrl.split('#')[1];
		//将对应的hash下界显示和隐藏
		document.getElementById(oldhash).style.display = 'none';
		document.getElementById(newHash).style.display = 'block';
	}
};