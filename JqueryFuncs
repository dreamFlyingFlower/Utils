(function($){
	//需要选择器才能调用
	$.fn.extend({
		functionname:function(params){
			// 若参数未指定,使用默认值
			var defaults = {
				key1 : "value1",
				key2 : "value2",
			}
			//默认值,第2个和第3个参数依次覆盖到第1个参数上,若覆盖对象为空,则不改变被覆盖对象原有值
			var params = $.extend({},defaults,params);
			//若不支持链式调用,则这里不需return
			return this.each(function(){
				var $this = $(this);
				//需要进行的操作
			});
		}
	});
	//直接使用$.来调用
	$.extend({
		//按回车
		enterDown:function(event,funcBack){
			$(document).keydown(function(){
				var Event = event ? event : window.event;
				var code = Event.keyCode || Event.which || Event.charCode;
				if(13 === code){
					funcBack();
				}
			});
		}
	});
})(window.jQuery)
