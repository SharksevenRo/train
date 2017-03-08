var util = require('../utils.js');
var models = require('../models')

var demos = {};

//get 方法

demos.list = function*(){

    models.gospel_demos.findById();
    
    models.gospel_demos.getAll({
        message: 'luowenhuo',
    });
    models.gospel_demos.delete(id);

    //this.body = 'Hello api'
}

//http://xxxxx.xom/demos method post

demos.create= function*(){

}
//http://xxxxx.xom/demos method update

demos.update= function*(){

}
//http://xxxxx.xom/demos method delete
demos.delete= function*(){

}
module.exports = codes;
