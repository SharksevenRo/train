var util = require('../utils.js');
var models = require('../models')

var codes = {};

//get 方法

codes.list = function*(){

    var data = yield models.gospel_tests.getAll({
        message: 'test' //查询参数
    });
    console.log(data);
    //数据发送到前端
    this.body = data
    //this.body = 'Hello api'
}

module.exports = codes;
