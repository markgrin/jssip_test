const jssip = require('jssip');
const NodeWebSocket = require('jssip-node-websocket');
jssip.debug.enable('JsSIP:*');


let socket = new NodeWebSocket('xxx');
var username = 'xxx';
var password = 'xxx';
var server = 'xxx';

var config = {
    sockets : [socket],
    uri : 'sip:' + username + '@' + server,
    password : password,
    register : true,
    connection_recovery_min_interval: 10
};
console.log(config);

var ua = new jssip.UA(config);
ua.start();


function history_log(message) {
    document.getElementById('message').innerHTML += message.toString();
    document.getElementById('message').innerHTML += '<br>';
    
    
}

var callHandler = {
    'progress' : function(e) {
        history_log('call is in progress');
    },
    'failed' : function(e) {
        history_log('call failed with cause:' + e);
    },
    'ended':function (e) {
        history_log('call ended with cause:');
    },
    'confirmed': function(e) {
        history_log('call confirmed');
    }
};
function call() {
    console.log('test_call.js::call');
    var options = {
        'eventHandlers' : callHandler,
        'mediaConstraints' : {'audio' : true, 'video' : false}
    };
    var session = ua.call('xxx', options);
}

element = document.getElementById('call_button').onclick = call;
element.onclick = call;

history_log('script loaded');
