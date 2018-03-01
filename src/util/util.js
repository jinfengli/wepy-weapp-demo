
/**   
 * long -- string
 * @param long long值   
 * @param isFull 是否为完整的日期数据,   
 *               true: "2018-02-28 11:05:00"   
 *               false: "2018-02-28"
 * @return 符合要求的日期字符串   
 */
function getSmpFormatDateByLong(long, isFull) {
  return getSmpFormatDate(new Date(long * 1000), isFull);  // json返回的long是s，这里转换成ms
}

function getSmpFormatDate(date, isFull) {
  var pattern = "";
  if (isFull == true || isFull == undefined) {
    pattern = "yyyy-MM-dd hh:mm:ss";
  } else {
    pattern = "yyyy-MM-dd";
  }
  return getFormatDate(date, pattern);
}

function getFormatDate(date, pattern) {
  if (date == undefined) {
    date = new Date();
  }
  if (pattern == undefined) {
    pattern = "yyyy-MM-dd hh:mm:ss";
  }
  return date.format(pattern);
}

/**
 * 扩展Date的format方法
 **/
Date.prototype.format = function (format) {
  var o = {
    "y+": this.getFullYear,
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S": this.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}

/** 
 * 获取当前时间
 * */
function getCurrentTime() {
    var keep = '';
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    var rand = Math.round(Math.random() * 899 + 100);
    keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
    return keep;
}

module.exports = {
    /** 公开的方法 **/
  getSmpFormatDateByLong: getSmpFormatDateByLong
}
