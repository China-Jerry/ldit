#!/usr/bin/env node
const ldit = require("../src/ldit");
console.log("Let's do it together.");
var cmd = process.argv[2];
if(cmd){
    switch(cmd){
        case "start":
            ldit.start();
            break;
        case "stop":
            ldit.stop();
            break;
        default:
            console.log("usage: ldit start|stop");
            break;
    }
}