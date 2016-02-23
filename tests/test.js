var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var request = require('request');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var PORT = 3002;
var url = 'localhost';
//var url = '192.168.99.100';


function getResult(url_arg){

	url_arg = url_arg || '';//No arg given

	//Promise function that makes an http request
	function getMsgPromise(resolve, reject){
	  request('http://' + url + ':' + PORT + '/' + url_arg, function(error, response, body){

	  	//If we get a valid result resolve the promise
			if(!error && response.statusCode == 200){
		    console.log(body);
		    resolve(body)
			}
			//If we dont reject it
			else{
				reject(body);
			}
	  })
	}

	return new Promise(getMsgPromise);
}


it('should always pass', function(){                                                                                                                                                                      
	return expect(1).to.equal(1);                                                                                                                                                                                                                                                                                                                                                                             
}) 

it('should return phrase "hello world" asynchronously', function() {

	url_arg = 'hello';
  var result = new getResult(url_arg);
  return expect(result).to.eventually.equal('hello world');
});

it('should return asynchronously the name you put in the MongoDB container', function() {
	
  var result = getResult();
  var name = 'Leon';
  return expect(result).to.eventually.equal(name);
});


