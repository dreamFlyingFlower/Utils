(function($){
	//需要选择器才能调用
	$.fn.extend({
		functionname:function(params){
			// 若参数未指定,使用默认值
			var defaults = {
				key1 : "value1",
				key2 : "value2",
			};
			//默认值,第2个和第3个参数依次覆盖到第1个参数上,若覆盖对象为空,则不改变被覆盖对象原有值
			var Params = $.extend({},defaults,params);
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
		},
		// 判断非空
		isEmpty:function(params){
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
		},
		portExcel:function(params){
			if(!params || !params.url){
				console.log("excel数据源为空");
				return;
			}
			var excelForm = document.createElement("form");
			document.body.appendChild(excelForm);
			excelForm.method = params.method  ? params.method : "post";
			excelForm.action = params.url;
			//创建隐藏表单
			var hideInput = document.createElement("input");
			hideInput.setAttribute("name","id");
			hideInput.setAttribute("type","hidden");
			hideInput.setAttribute("value",params.value ? params.value : 1);
			excelForm.appendChild(hideInput);
			excelForm.submit();
		}
	});
})(window.jQuery);