const config = require("../config.json");
var dgram = require("dgram");
/**
 * @type dgram.Socket
 */
var socket;

/**
 * 打开客户端
 */
function open() {
    socket = dgram.createSocket("udp4");
    socket.on("error", function (err) {
        console.log("socket error:\n" + err.stack);
        socket.close();
    });

    socket.on("close", function () {
        console.log("socket stoped");
    });

    socket.on("message", function (msg, rinfo) {
        console.log(`receive message from ${rinfo.address}:${rinfo.port}：${msg}`);
    });
    socket.on("listening", function () {
        var address = socket.address();
        console.log("server listening " + address.address + ":" + address.port);
    });
    socket.bind(config.port, function () {
        //socket.setBroadcast(true);
        socket.setMulticastLoopback(false);
        socket.addMembership('224.0.1.10');
        //定时对外发消息
        var message = new Buffer("Hi");
        setInterval(function(){
            socket.send(message, 0, message.length, config.port, function(err, bytes) {
                // TODO
            });
        },3000);
    });
}

/**
 * 停止客户端
 */
function close() {
    console.log("socket closing...");
    socket.close();
}

module.exports = {
    open,
    close
}