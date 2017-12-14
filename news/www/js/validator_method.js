// 中文字两个字节
jQuery.validator.addMethod("byteRangeLength", function(value, element, param) {
    var length = value.length;
    for(var i = 0; i < value.length; i++){
        if(value.charCodeAt(i) > 127){
            length++;
        }
    }
  return this.optional(element) || ( length >= param[0] && length <= param[1] );   
}, $.validator.format("请确保输入的值在{0}-{1}个字节之间(一个中文字算2个字节)"));

// 邮政编码验证   
// jQuery.validator.addMethod(string,callback,message) 添加验证的方法
// para1：字段
// para2：回调函数，第一个参数表示当前正在被验证的值，第二参数表示当前验证的标签
// para3:错误提示信息
jQuery.validator.addMethod("isZipCode", function(value, element) {   
    var tel = /^[0-9]{6}$/;
    console.log(this.optional(element));
    return this.optional(element) || (tel.test(value));
   
}, "请正确填写您的邮政编码");