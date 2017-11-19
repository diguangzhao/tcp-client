const net = require('net')
const client = new net.Socket()

var HOST = "192.168.33.10"
var PORT = 3002

// 等待执行
var wait = ms => {
    let currentTime = new Date().getTime();
    while (new Date().getTime() < currentTime + ms);
}

var log = msg => {
	console.log(msg)
}

var test = new Object({'a': 1, 'b': 2, 'c': 3})
console.log(Reflect.has(test, 'c'))

// 连接命令
var command1 = '{"command": "connect", "name": "电源控制器", "uuid": "7425f43662f8ea97458d8ae59222a4e323c98ae6"}'
//登录命令
var command2 = '{"command": "login", "name": "电源控制器"}'

client.connect(PORT, HOST, () => {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);

    // 建立连接后立即向服务器发送数据，服务器将收到这些数据 
    // client.write('I am Chuck Norris!');
})

// 为客户端添加“data”事件处理函数
// data是服务器发回的数据
client.on('data', function(data) {

    console.log('DATA: ' + data);
    // 完全关闭连接
    client.destroy();

});

// 为客户端添加“close”事件处理函数
client.on('close', function() {
    console.log('Connection closed');
});

client.write(command1)

log('command1 执行结束')

wait(20000)

log('command2 开始执行')
// client.write(command2)