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
			if (!beginTime) {
				return;
			}
			endTime = endTime ? endTime : Date.now();
			if (endtime < beginTime) {
				return;
			}
			var timestamp = parseInt(endTime - beginTime) / 1000; //秒
			if (timestamp <= 0) {
				return;
			}
			var second = parseInt(timestamp % 60); //不足一分钟的秒
			if (timestamp <= 60) {
				return second + "秒";
			}
			var minute = parseInt(parseInt(timestamp / 60) % 60);
			if (timestamp <= 3600) {
				return minute + "分" + second + "秒";
			}
			var hour = parseInt(parseInt(timestamp / 60 / 60) % 24);
			if (timestamp <= 24 * 3600) {
				return hour + "时" + minute + "分" + second + "秒";
			}
			var day = parseInt(timestamp / 60 / 60 / 24);
			return day + "天" + hour + "时" + minute + "分" + second + "秒";
		},
		/**
		 * [isLeapYear 是否闰年]
		 * @param  {[string]}  time [需判断的字符串]
		 * @return {Boolean}
		 */
		isLeapYear : function(time) {
			var year = time ? new Date(time).getFullYear() : new Date().getFullYear();
			return (0 === year % 4 && ((year % 100 !== 0) || (year % 400 === 0)));
		},
		/**
		 * [dateAdd 时间挪移]
		 * @param  {[string]}  strInterval 	[进行计算的单位年月日时分秒]
		 * @param  {[number]}  Number      	[参与计算的数值]
		 * @param  {[string]} isNow       	[当前时间字符串,时间戳或其他时间,默认当前]
		 * @return {[计算后的格林威治时间]}
		 */
		dateAdd : function (strInterval, Number, time) {
			time = time ? new Date(time) : new Date();
			switch (strInterval) {
				case 's':
					return new Date(Date.parse(time) + (1000 * Number));
				case 'm':
					return new Date(Date.parse(time) + (60000 * Number));
				case 'h':
					return new Date(Date.parse(time) + (3600000 * Number));
				case 'd':
					return new Date(Date.parse(time) + (86400000 * Number));
				case 'w':
					return new Date(Date.parse(time) + ((86400000 * 7) * Number));
				case 'M':
					return new Date(time.getFullYear(), (time.getMonth()) + Number, time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
				case 'y':
					return new Date((time.getFullYear() + Number), time.getMonth(), time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
			}
		},
		/**
		 * [dateDiff 计算2个时间单一单位的时间差]
		 * @param  {[number]} strInterval [单位]
		 * @param  {[string]} beginTime   [开始时间字符串]
		 * @param  {[string]} endTime     [结束时间字符串]
		 * @return {[number]}
		 */
		dateDiff: function(strInterval, beginTime, endTime) {
			beginTime = new Date(beginTime);
			endtime = new Date(endtime);
			switch (strInterval) {
				case 's':
					return parseInt((endTime - beginTime) / 1000);
				case 'm':
					return parseInt((endTime - beginTime) / 60000);
				case 'h':
					return parseInt((endTime - beginTime) / 3600000);
				case 'd':
					return parseInt((endTime - beginTime) / 86400000);
				case 'w':
					return parseInt((endTime - beginTime) / (86400000 * 7));
				case 'M':
					return (endTime.getMonth() + 1) + ((endTime.getFullYear() - beginTime.getFullYear()) * 12) - (beginTime.getMonth() + 1);
				case 'y':
					return endTime.getFullYear() - beginTime.getFullYear();
			}
		}
	});
})(window.jQuery);