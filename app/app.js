var local_app = function () {}

const express = require('express')
const app = express()

local_app.prototype.init = function (app) {
	app.use('/assets/css', express.static('../assets/css'));
}

module.exports = new local_app()
