var dgram = require("dgram");
/**
 * @type dgram.Socket
 */
var client;

/**
 * 启动客户端
 */
function start() {
    client = dgram.createSocket("udp4");
    client.on("error", function (err) {
        console.log("client error:\n" + err.stack);
        client.close();
    });

    client.on("close", function () {
        console.log("client stoped");
    });

    client.on("message", function (msg, rinfo) {
        console.log(`receive message from ${rinfo.address}:${rinfo.port}：${msg}`);
    });
    client.bind(function () {
        client.setBroadcast(true);
    });
    //定时向服务器发送消息
    var message = new Buffer("Hi");
    setInterval(function(){
        client.send(message, 0, message.length, 12306, '255.255.255.255', function(err, bytes) {
            // TODO
        });
    },3000);
}

/**
 * 停止客户端
 */
function stop() {
    console.log("client stopping...");
    client.close();
}

/**
 * 重启服务端
 */
function restart() {
    stop();
    start();
}

module.exports = {
    start,
    stop,
    restart
}