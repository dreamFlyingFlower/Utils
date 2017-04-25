/*!
 * 工具类，不需引入jquery，可能存在不兼容问题
 */
/**
 * [getXmlhttp 获得ajax链接]
 */
function getXmlhttp(){
	var xmlhttp;
	try{
		xmlhttp = new XMLHttpRequest();
	}catch(e){
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	xmlhttp.open("post","url");
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			console.log(xmlhttp.responseText);
		}
	};
	xmlhttp.send();
}
/**
 * [Ualert 弹出框]
 * @param {[type]} txt [description]
 */
 function Ualert(txt){
 	var shield = document.createElement('DIV');
 	shield.id = 'shield';
 	shield.className = 'shield';
 	var Ualert = document.createElement('DIV');
 	Ualert.id = 'Ualert';
 	Ualert.className = 'Ualert';
 	strHtml = "<ul style='list-style:none;margin:0;padding:0;width:100%'>";
	strHtml += " <li>[系统提示]</li>";
	strHtml += " <li style='background:#fff;text-align:center;font-size:12px;height:120px;line-height:120px;border-left:1px solid #F9CADE;border-right:1px solid #F9CADE;'>"+txt+"</li>";
	strHtml += " <li style='background:#FDEEF4;text-align:center;font-weight:bold;height:25px;line-height:25px; border:1px solid #F9CADE;'><input type='button' value='确 定' onclick='doOk()' /></li>";
	strHtml += "</ul>";
	Ualert.innerHTML = strHtml;
 	document.body.appendChild(Ualert);
 	document.body.appendChild(shield);
 	this.doOk = function(){
 		shield.style.display = 'none';
 		Ualert.style.display = 'none';
 	};
 }
/**
 * [getFlashTime 创建一个随系统时间刷新的时间事件]
 * @return {[type]} [当前系统时间]
 */
function getFlashTime(){
	var date = new Date();
	var year = date.getFullYear();
	var nowTime = year;
	var month = date.getMonth()+1;//月
	if(month<10){
		nowTime = nowTime +"-0"+month;
	}else{
		nowTime = nowTime +"-"+month;
	}
	var day = date.getDate();
	if(day<10){
		nowTime = nowTime +"-0"+ day;
	}else{
		nowTime = nowTime +"-"+ day;
	}
	var hours = date.getHours();
	if(hours>9){
		nowTime = nowTime +" "+hours;
	}else{
		nowTime = nowTime +" 0"+hours;
	}
	var min = date.getMinutes();
	if(min< 10){
		nowTime = nowTime +":0"+ min;
	}else{
		nowTime = nowTime +":"+ min;
	}
	var sec = date.getSeconds();
	if(sec<10){
		nowTime =nowTime +":0"+ sec;
	}else{
		nowTime =nowTime +":"+ sec;
	}
	return nowTime;
}
/**
 * [getDay 获取格式化时间]
 * @param  {[type]} timestamp   [时间毫秒数]
 * @param  {[type]} format 		[时间分隔符]
 * @param  {[type]} ishms  		[是否带时分秒,默认为false]
 * @param  {[type]} isweek 		[是否带周]
 * @return {[type]}        		[指定时间]
 */
function getDay(format,ishms,timestamp,isweek){
	var time = typeof timestamp === "number" ? new Date(timestamp) : new Date();
	var ymd = time.toLocaleDateString();
	var week = time.getDay();//周
	var hour = time.getHours();//时
	var minutes = time.getMinutes();
	var second = time.getSeconds();
	ymd = format ? ymd.replace(/[^\d]/g,format) : ymd;
	var Week = "";
	if(isweek){
		switch(week){
			case 0:
				Week = "星期天";
				break;
			case 1:
				Week = "星期一";
				break;
			case 2:
				Week = "星期二";
				break;
			case 3:
				Week = "星期三";
				break;
			case 4:
				Week = "星期四";
				break;
			case 5:
				Week = "星期五";
				break;
			case 6:
				Week = "星期六";
				break;
		}

	}
	if(!ishms){
		return ymd + " " + hour+":"+minutes+":"+second + Week;
	}
}
/**
 * [loadOwnJs 加载其他js工具类]
 * @param  {[string]} url [需要加载的js地址]
 * @return {[无]}     [无]
 */
function loadOwnJs(url){
	var script =docuemnt.createElement('script');
	script.type='text/javascript';
	script.src=url;
	docuemnt.body.appendChild(script);
}
/**
 * [loadLinkCss 加载外部样式]
 * @param  {[string]} url [样式文件地址]
 * @return {[无]}     [无]
 */
function loadLinkCss(url){
	var link =document.createElement('link');
	link.type='text/css';
	link.rel='stylesheet';
	link.href=url;
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(link);
}
/**
 * [bindCAndDblc 为一个元素同是绑定单击和双击事件。此处双击的时候，在延迟时间内只会触发一次setTimeOut函数，故而始终只有一个changeCAndDblc函数在丢列中等待]
 * @param  {[type]} element [添加事件的元素]
 * @param  {[type]} fnC     [鼠标单击事件]
 * @param  {[type]} fnDblc  [鼠标双击事件]
 * @return {[type]}         [无]
 */
function bindCAndDblc(element,fnC,fnDblc){
	if(!element || element.nodeType !==1){
		alert("未选择绑定元素或元素选择有误!");
		console.log("未选择绑定元素或元素选择有误!");
		return;
	}
	if(typeof fnC != "function" || typeof fnDblc != "function"){
		alert("传入方法有误");
		console.log('传入方法有误!');
		return;
	}
	var changeCAndDblc=null;
	element.onclick=function(){
		clearTimeout(changeCAndDblc);
		changeCAndDblc = setTimeout(function(){
			fnC();
		}, 300);
	};
	element.ondblclick=function(){
		clearTimeout(changeCAndDblc);
		fnDblc();
	};
}
/**
 * [EventUtil 跨浏览器以及DOM版本实现事件绑定，EventUtil是专门用来处理浏览器之间差异的对象,可以像使用普通对象一样使用]
 * @param {[type]} element 			[需要绑定事件的元素]
 * @param {[type]} type    			[绑定事件类型]
 * @param {[type]} handler 			[绑定的方法，**不可以是匿名函数，否则无法移除]
 * @param {[type]} EventUtil 		[用来处理浏览器差异的对象]
 * @param {[type]} addHandler 		[添加跨浏览器绑定的方法]
 * @param {[type]} removeHandler 	[移除跨浏览器绑定的方法，只能移除非匿名方法]
 * @param {[type]} getEvent 		[获得不同浏览器的event对象，主要是IE和其他浏览器]
 * @param {[type]} getTarget 		[获得不同浏览器的target对象，主要是IE和其他浏览器]
 * @param {[type]} preventDefault 	[阻止默认行为，主要是IE和其他浏览器]
 * @param {[type]} stopPropagation 	[阻止冒泡行为，主要是IE和其他浏览器]
 */
// function EventUtil(element,type,handler){
	var EventUtil ={
		addHandler:function(element,type,handler){
			if(element.addEventListener){
				element.addEventListener(type,handler,false);
			}else if(element.attachEvent){
				element.attachEvent("on"+type, handler);
			}else{
				element["on"+type]=handler;
			}
		},
		removeHandler:function(element,type,handler){
			if(element.removeEventListener){
				element.removeEventListener(type,handler,false);
			}else if(element,detachEvent){
				element.detachEvent("on"+type, handler);
			}else{
				element["on"+type]=null;
			}
		},
		getEvent:function(event){
			return event ? event:window.event;
		},
		getTarget:function(event){
			return event.target || event.srcElement;
		},
		preventDefault:function(event){
			if(event.preventDefault){
				event.preventDefault();
			}else{
				event.returnValue = false;
			}
		},
		stopPropagation:function(event){
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble=true;
			}
		}
	};
// }
/**
 * [selectText 选中文本框中指定位置长度的字段，注意是文本框，暂时只有两种，一种是input类型是text的，一种是textarea文本域]
 * @param  {[文本框]} textbox   [选中的文本框，不是文本框中的内容]
 * @param  {[整数]} textstart 	[需要选中的文本开始的下标]
 * @param  {[整数]} textend   	[需要选中的文本结束的下标]
 * @param  {[createTextRange]}	[IE8及以上不支持setSelectionRange]
 * @return {[无]}   			[将页面中指定的文本选中]
 */
function selectText(textbox,textstart,textend){
	if(textbox.type=="text" || textbox.nodeName=="textarea"){
		if(textbox.setSelectionRange){
			textbox.setSelectionRange(parseInt(textstart),parseInt(textend));
		}else if(textbox.createTextRange){
			var range = textbox.createTextRange();
			range.collapse(true);
			range.moveStart("character",parseInt(textstart));
			rabge.moveEnd("character",parseInt(textend)-parseInt(textstart));
			range.select();
		}
		textbox.focus();
	}else{
		alert("您选中的文本框错误");
	}
}
/**
 * [serialize 表单序列化方法]
 * @param  {[一个表单元素]} form 	[一个表单元素]
 * @return {[字符串]}      			[将表单中的元素序列化后用&进行连接成字符串返回]
 * @instruction						[在判断表单中的某个元素是否有value属性时，IE不一样，使用speciafied；若表单中包含fieldset元素，该元素也会出现在集合元素中，但是没有type属性，type属性未定义，则不会对其序列化。同样，对各种按钮以及文件输入字段也是如此(文件输入字段在表单提交过程中包含文件的内容，但是，这个字段无法被模仿，序列化一般要忽略)，此方法还未全部完成]
 */
function serialize(form){
	var parts=[];
	var field=null;
	var i;
	var len;
	var j;
	var optLen;
	var option;
	var optValue;
	for(i=0,len=form.elements.length;i<len;i++){
		field=form.elements[i];
		switch(field.type){
			case "seleclt-one":
			case "select-multiple":
			if(field.name.length){
				for(j=0,optLen=field.options.length;j<len;j++){
					option=field.options[j];
					if(option.selected){
						optValue="";
						if(option.hasAttribute){
							optValue=(option.hasAttribute('value') ? option.value:option.text);
						}else{
							optValue=(option.attributes['value'].specified ? option.value:option.text);
						}
						parts.push(encodeURIComponent(field.name)+"="+encodeURIComponent(optValue));
					}
				}
			}
			break;
			case undefined:
			case "file":
			case "submit":
			case "reset":
			case "button":
			break;
			case "radio":
			case "checkbox":
				if(!field.checked){
					break;
				}
			default:
				if(field.name.length){
					parts.push(encodeURIComponent(field.name)+"="+encodeURIComponent(field.value));
				}
		}
	}
	return parts.join("&");
}
/**
 * [addURLParam 发送get请求时，会将查询的字符串追加到URL末尾，而URL必须经过正确的编码才行。查询字符串中的键值对都必须经过encodeURLComponent进行编码，每一对键值对都由和号(&)分开]
 * @param {[type]} url   [需要经过编码的URL请求]
 * @param {[type]} name  [查询字符串中的键值对的key值]
 * @param {[type]} value [查询字符串中的键值对的value值]
 */
function addURLParam(url,name,value){
	url += (url.indexof("?")==-1 ? "?" : "&");
	url += encodeURIComponent(name) + "=" +encodeURIComponent(value);
	return url;
}
/**需要改进
 * [buddle 对象数组冒泡排序]
 * @param  {[对象数组]} arr 		[需要进行排序的数组，数组里面的元素全都是同类型的对象]
 * @param  {[排序标识]} ordermark   [对象数组中用来进行排序的唯一标识符字段，必须是数字，需要定义后传入]
 * @param  {[排序标识]} boolean   	[升序或者降序，默认降序,true升序]
 * @return {[数组]}     			[排序后的数组]
 */
function buddleObjectSort(arr,ordermark,boolean){
	if(boolean){
		for(var i=0;i<arr.length;i++){
			for(var j=i+1;j<arr.length;j++){
				if(parseInt(arr[i].ordermark) > parseInt(arr[j].ordermark)){
					var temp=arr[j];
					arr[j] = arr[i];
					arr[i] =temp;
				}
			}
		}
	}else{
		for(var m=0;m<arr.length;m++){
			for(var n=m+1;n<arr.length;n++){
				if(parseInt(arr[m].ordermark) < parseInt(arr[n].ordermark)){
					var _temp=arr[n];
					arr[n] = arr[m];
					arr[m] =_temp;
				}
			}
		}
	}
}
/********无法用字面量的方式将一个变量拼接到正则中，必须使用构造函数才可以********
 * [regex 对输入的数字进行过滤，只保留几位小数]
 * @param  {[数字]} num 	[需要进行判断的数字]
 * @param  {[数字]} digit 	[需要保留的小数位数]
 * @return {[数字]}     	[返回过来后的数字或者错误提示]
 */
function regexDecimals(num,digit){
	// 去掉不是数字的值，^在[]()中表示的是非，不在[]中时表示的匹配第一个字符
    num = num.replace(/[^\d.]/g,'');
    // 第一个值不能是.
    num = num.replace(/^\./g,"");
    // 不能同时连续的有多个.
    // {2，}表示2个以上的点(包括2个)在一起时，只能有一个点，{2，5}表示有2到5个匹配的字符
    num = num.replace(/\.{2,}/g,".");
    // 保证整个数值中只有一个点
    // 第一个replace是将第一个点转换成%$%，第二个replace是将所有的.转换成空字符串，第三个replace是将第一个转换成%$%的字符再转换回.
    num = num.replace('.','%$%').replace(/\./g,'').replace('%$%','.');
    // 将匹配的字符串放到后面的$1,$2中
    if(!digit){
    // .*表示匹配任意个数的除了\n之外的字符，相当于一次匹配所有的字符串，然后只在replace中替换一次
    // 若是.*不和其他正则使用，则表示极可能匹配多的字符串；若是和其他正则使用，则表示匹配的所有的字符串都转为空字符串
    	num = num.replace(/^(\d+)\.(\d\d).*$/,'$1.$2');
    	return num;
    }else{
    // 无法直接用字面量拼接变量，必须使用构造函数拼接一个正则表达式
	    var reg = new RegExp('(\\d+)\\.(\\d{'+digit+'}).*$');
	    num = num.replace(reg,'$1.$2');
	    return num;
    }
}
/**
 * [getMouseXYCoordinate 获取鼠标相对于元素的位置，最好是一个宽高相对大的元素]
 * @param  {[对象]} 	element 	[需要进行判断的元素]
 * @param  {[字符串]} 	eventType 	[事件类型]
 * @return {[对象]}     mouse		[鼠标相对于元素的位置]
 */
function getMouseXYCoordinate(element,eventType){
	var mouse = {"x":0,"y":0};
	element.addEventListener(eventType,function(event){
		var x,y;
		var Event = event ? event : window.event;
		if(event.pageX || event.pageY){
			x = Event.pageX;
			y = Event.pageY;
		}else{//为了兼容IE8及以下版本,并且分为混杂染模式和标准模式
			x = Event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = Event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		x -= element.offsetLeft;
		y -= element.offsetTop;
		mouse.x = x;
		mouse.y = y;
	},false);
	return mouse;
}
/**
 * [queryAllChar 查找指定字符串中所有被查找字符的下标]
 * @param  {[字符串]} 		goalString 	[目标字符串]
 * @param  {[字符或字符串]} queryChar  	[需要进行查找的字符]
 * @return {[-1或者数组]}            	[-1表示没有找到,数组代表找到下标集合]
 */
function queryAllChar(goalString,queryChar){
	var all = [];
	if(typeof goalString === "string"){
		var index = goalString.indexOf(queryChar);
		while(index > -1){
			all.push(index);
			index = goalString.indexOf(queryChar,index+1);
		}
		if(all.length === 0){
			return -1;
		}else{
			return all;
		}
	}else{
		alert(goalString+"不是一个字符串");
		return;
	}
}
/**
 * [getUrlDecodeArgs 查找目标url中的查询参数]
 * @param  {[字符串]} 	key	 [需要在url查询字符串中寻找的key值,若不传,则查找全部的key-value键值对]
 * @return {[对象]} 	args [url中所有的查询对象]
 * @return {[字符串]} 	goal [url中key所对应的值]
 */
function getUrlDecodeArgs(key){
	var urlArgs = location.search.length > 0 ? location.substring(1) : "";
	var args = {};
	var items = urlArgs.length>0 ? urlArgs.split("&") : [];
	var len =items.length;
	var goal = "";
	for(var i=0;i<len;i++){
		var item = items[i].split("=");
		var name = decodeURIComponent(item[0]);
		var value = decodeURIComponent(item[1]);
		if(key === name){
			goal = value;
		}
		args[key] = value;
	}
	if (key === "") {
		return args;
	}else{
		if(goal===""){
			alert("找不到"+key);
		}else{
			return goal;
		}
	}
}

function getXHR(){

}

function ajaxSend(){
	var xhr = getXHR();
	xhr.onreadstatechange = function(){
		if(xhr.readyState == 4){
			if ((xhr.states >= 200 && xhr.states < 300) || xhr.states == 304) {
				alert("chegnggong"+xhr.responseText);
			} else {
				alert("shibai"+xhr.states);
			}
		}
	};
	xhr.open("post",url,flag);
	xhr.send(data);
}
/**
 * [isEmptyObject 判断一个对象是否为空]
 * @param  {[object]}  object 	[需判断的对象]
 * @return {Boolean}        	[空则返回true,不为空返回false]
 */
function isEmptyObject(object){
	for(var attr in object){
		return false;
	}
	return true;
}
/**
 * [isEmpty 判断是否非空]
 * @param  {[type]}  params [description]
 * @return {Boolean}        [description]
 */
function isEmpty(params){
	params = $.trim(params);
	if(null === params){
		return true;
	}else if(undefined === params || "undefined" === params){
		return true;
	}else if(0 === params.length){
		return true;
	}else if(!/[^(^\s*)|(\s*$)]/.test(params)){
		return true;
	}
	return false;
}
/**
 * [enterDown 敲击回车事件触发]
 * @param  {[type]} event    [description]
 * @param  {[type]} funcBack [description]
 */
function enterDown(event,funcBack){
	$(document).keydown(function(){
		var Event = event ? event : window.event;
		var code = Event.keyCode || Event.which || Event.charCode;
		if(13 === code){
			funcBack();
		}
	});
}
/**
 * [storage session存储数据]
 * @param  {[type]} key     [description]
 * @param  {[type]} value   [description]
 * @param  {[type]} boolean [不传或false则为sessionstorage,为true则为localStorage]
 */
function setStorage(key,value,boolean){
	if(!boolean){
		if(isEmptyObject(value)){
			sessionStorage.setItem(key,value);
		}else{
			sessionStorage.setItem(key,JSON.stringify(value));
		}
	}else{
		if(isEmptyObject(value)){
			localStorage.setItem(key,value);
		}else{
			localStorage.setItem(key,JSON.stringify(value));
		}
	}
}
function getStorage(key,boolean){
	if(!boolean){
		if(isEmptyObject(key)){
			return sessionStorage.getItem(key);
		}else{
			return JSON.parse(sessionStorage.getItem(key));
		}
	}else{
		if(isEmptyObject(key)){
			return localStorage.getItem(key);
		}else{
			return JSON.parse(localStorage.getItem(key));
		}
	}
}
function removeStorage(key,boolean){
	if(!boolean){
		sessionStorage.removeItem(key);
	}else{
		localStorage.removeItem(key);
	}
}
function clearStorage(boolean){
	if(!boolean){
		sessionStorage.clear();
	}else{
		localStorage.clear();
	}
}
function lengthStorage(boolean){
	if(!boolean){
		return sessionStorage.length;
	}else{
		return localStorage.length;
	}
}
/**
 * [getStorage 获得storage中指定下标的key值,0开始]
 * @param  {[type]} index   [description]
 * @param  {[type]} boolean [description]
 */
function keyStorage(index,boolean){
	if(!boolean){
		return sessionStorage.key(index);
	}else{
		return localStorage.key(index);
	}
}
/**
 * [popAlert 弹出层]
 * @param  {[type]} content  [需要显示的内容]
 * @param  {[type]} interval [显示的时间]
 */
function popAlert(content,interval){
	content = content ? content : "发生错误";
    var pop = document.getElementById("pop");
    var contents = document.getElementById("contents");
    if (!pop) {
        pop = document.createElement("div");
        pop.id = "pop";
        pop.style.position = "absolute";
        pop.style.top = 0;
        pop.style.left = 0;
        pop.style.width = "100%";
        pop.style.height = "100%";
        pop.style.opacity = 0.5;
        pop.style.filter = "Alpha(opacity=30)";
        pop.style.zIndex = 9999;
        pop.style.backgroundColor = "gray";
        contents = document.createElement("div");
        contents.id = "contents";
        contents.style.position = "absolute";
        contents.style.left = "50%";
        contents.style.width = "300px";
        contents.style.marginLeft = "-150px";
        contents.style.top = "50%";
        contents.style.height = "150px";
        contents.style.marginTop = "-100px";
        contents.style.textAlign = "center";
        contents.style.zIndex = 10000;
        contents.style.backgroundColor = "#fff";
        var a = document.createElement("a");
        a.id = "message";
        a.innerHTML = content;
        a.style.width = "300px";
        a.style.height = "150px";
        a.style.display = "table-cell";
        a.style.verticalAlign = "middle";
        a.style.wordBreak = "break-all";
        contents.appendChild(a);
        document.body.appendChild(contents);
        document.body.appendChild(pop);
    } else {
        var msg = document.getElementById("message");
        msg.innerHTML = content;
        pop.style.display = "block";
        contents.style.display = "block";
    }
    time = time ? time : 2;
    var popTime = setTimeout(function () {
        pop.style.display = "none";
        contents.style.display = "none";
        window.clearTimeout(popTime);
    }, time * 1000);
    document.onclick = function (e) {
        e.stopPropagation();
        pop.style.display = "none";
        contents.style.display = "none";
    };
}
/**
 * [picMove 元素移动,需修改]
 * @param  {[type]} element [需要移动的元素]
 * @return {[type]}         [description]
 */
function picMove(element){
	var width = document.body.clientWidth;
	var height = document.body.clientHeight;
	var x,y;
	element.onmousedown = function(e){
		element.style.position = 'absolute';
		x = e.clientX + document.body.scrollLeft- element.offsetLeft;
		y = e.clientY + document.body.scrollTop- element.offsetTop;
		move();
	};
	function move(){
		element.onmousemove = function(e){
			element.style.left = e.clientX  - x + "px";
			element.style.top = e.clientY  -y + "px";
		};
	}
	element.onmouseup = function(){
		element.onmousemove = null;
	};
}
//执行懒加载
window.addEventListener('scroll', throttle(lazyLoad, 500, 1000), false);
/**
 * [lazyLoad 图片懒加载]
 * @return {[type]} [description]
 */
function lazyLoad(){
	var images = document.getElementsByTagName('img');
	var length = images.length;
	var n=0;
	return function(){
		var seeHeight = document.documentElement.clientHeight;
		var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
		for (var i = n; i < length; i++) {
			if(images[i].offsetTop < seeHeight + scrollHeight){
				if(images[i].getAttribute('src') === 'images/loading.gif') {
			    	images[i].src = images[i].getAttribute('data-src');
		        }
			}
			n++;
		}
	};
}
/**
 * [throttle 函数节流,避免无节制加载事件]
 * @param  {Function} fn      [执行函数]
 * @param  {[type]}   delay   [延迟执行]
 * @param  {[type]}   atleast [间隔时间]
 * @return {[type]}           [description]
 */
function throttle(fn, delay, atleast) {
    var timeout = null,
	startTime = new Date();
    return function() {
		var curTime = new Date();
		clearTimeout(timeout);
		if(curTime - startTime >= atleast) {
		    fn();
		    startTime = curTime;
		}else {
		    timeout = setTimeout(fn, delay);
		}
    };
}