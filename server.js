"use strict";
exports.__esModule = true;
var Express = require("express");
var app = Express();
app.get('/', function (req, res) {
    return res.send('Hello TypeScript');
});
app.listen(3000, function () { return console.log('port 3000'); });
