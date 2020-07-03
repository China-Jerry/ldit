var Socket = require("./lib/Socket");

/**
 * 启动
 */
function start() {
    Socket.open();
}

/**
 * 停止
 */
function stop() {
    Socket.close();
}

module.exports = {
    start,
    stop
}