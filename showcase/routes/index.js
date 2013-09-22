
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.test = function (req, res){
	res.render('test.jade', { subtitle: 'test case1' });
};

exports.springy = function(req, res){
	res.render('springy', { title: 'SPRINGY demo by json'});
};

exports.springy2 = function (req, res){
	res.render('springy2.jade', { title: 'SPRIGY simple demo'});
};

exports.jstest = function (req, res) {
	res.render('jstest/0.jade', { title: 'Javascript Ninja Test code sample'});
};

exports.lifegame = function (req, res){
	res.render('lifegame.jade', { title: 'LIFEGAME'});
};

exports.processing = function (req, res) {
	res.render('processing.jade', { title: 'PROCESSING SAMPLE' });
};
