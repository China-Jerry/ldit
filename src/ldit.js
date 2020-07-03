var Server = require("./lib/Server");
var Client = require("./lib/Client");

/**
 * 启动
 */
function start() {
    // 启动服务端
    Server.start();
    // 启动客户端
    Client.start();
}

/**
 * 停止
 */
function stop() {
    // 启动服务端
    Server.stop();
    // 启动客户端
    Client.stop();
}

module.exports = {
    start,
    stop
}