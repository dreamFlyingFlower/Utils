(function($){
	var PI = Math.PI;
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
		/**
		 * [dateInterVal 两个时间相隔的日时分秒]
		 * @param  {[时间戳]} beginTime [开始时间]
		 * @param  {[时间戳]} endTime   [结束时间]
		 * @return {[string]}
		 */
		dateInterVal:function(beginTime,endTime){
			if(!beginTime){return;}
			endTime = endTime ? endTime : Date.now();
			if(endtime<beginTime){return;}
			var timestamp = parseInt(endTime - beginTime)/1000;//秒
			if(timestamp<=0){return;}
			var second = parseInt(timestamp%60);//不足一分钟的秒
			if(timestamp<=60){return second+"秒";}
			var minute = parseInt(parseInt(timestamp / 60) % 60);
			if(timestamp<=3600){return minute+"分"+second+"秒";}
			var hour = parseInt(parseInt(timestamp / 60 / 60) % 24);
			if(timestamp<=24*3600){return hour+"时"+minute+"分"+second+"秒";}
			var day = parseInt(timestamp/60/60/24);
			return day+"天"+hour+"时"+minute+"分"+second+"秒";
		}
	});
})(window.jQuery);