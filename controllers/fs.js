var util = require('../utils.js'),
	fs = require('fs'),
	path = require('path'),
	co = require('co'),
	parse = require('co-body'),
	url = require('url');

var os = require('os');
var exec = require('child_process').exec;
var dir = require('node-dir');
var multer = require('koa-multer');
var path = require('path');
var models = require('../models');
var exec = require('child_process').exec;

multer({ dest: 'uploads/' });
var baseDir = '/var/www/data/local/storage/'
var temp = '/var/www/storage/codes/temp/';
var remoteIp = '120.77.82.238';
var domain = 'http://'+remoteIp + ':8080';

function render(data, all, cur, code, message) {

	return {
		code: code,
		message: message,
		all: all,
		cur: cur,
		fields: data
	}
}
function* moveFile (options){

   return new Promise(function(resolve, reject) {

	   exec('ssh root@'+ remoteIp + ' mv ' + temp + options.file + ' ' + baseDir + options.type + '/' + options.picture + '/' + options.file, function(err,data){
		   console.log(err);
		   console.log(data);
		   if (err)
			   reject(err);
		   resolve(data);
	   })
   });
}

var fileSystem = {


	upload : function*(){


		var fileName = this.req.files.file.name;
		var originalname = this.req.files.file.originalname;
		var type = this.req.body.type
		var secretKey = this.req.body.secretKey;
		var pictureCode = this.req.body.pictureCode;
		console.log(fileName);
		console.log(type);
		console.log(originalname);
		yield moveFile({
			file: fileName,
			type: type,
			picture: pictureCode
		});
		var inserted = yield models.messages.create({
			picture: pictureCode,
			type: type,
			secretkey: secretKey,
			src: domain + '/storage/' +type + '/' + pictureCode + '/' + fileName
		});
		this.body = render(inserted, null, null, 1, '上传成功')
	}
};
module.exports = fileSystem;
