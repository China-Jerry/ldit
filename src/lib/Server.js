var dgram = require("dgram");
/**
 * @type dgram.Socket
 */
var server;

/**
 * 启动服务端
 */
function start() {
    server = dgram.createSocket("udp4");
    server.on("error", function (err) {
        console.log("server error:\n" + err.stack);
        server.close();
    });

    server.on("close", function () {
        console.log("server stoped");
    });

    server.on("message", function (msg, rinfo) {
        console.log("server got: " + msg + " from " + rinfo.address + ":" + rinfo.port);
    });

    server.on("listening", function () {
        var address = server.address();
        console.log("server listening " + address.address + ":" + address.port);
    });
    server.bind(12306);
}

/**
 * 停止服务端
 */
function stop() {
    console.log("server stopping...");
    server.close();
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