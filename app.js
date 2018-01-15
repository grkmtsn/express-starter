const express = require('express')
const { attachControllers } = require('@decorators/express');
const path = require('path');
const fs = require('fs');
const config = require('./src/Config/index')

class Express {
    constructor() {
        Express.core = express()
    }

    routes() {
        const normalizedPath = path.join(__dirname, "/src/Controller")
        const controllers = []
        fs.readdirSync(normalizedPath).forEach(function (file,key) {
            controllers[key] = require(normalizedPath + '/' +  file)
        });
        attachControllers(Express.core, controllers);
    }

    startServer() {
        this.routes()
        const server = Express.core.listen(config.app.port, config.app.host, function () {
            console.log('%s App is running at http://localhost:%d in %s mode', '✓', server.address().port, process.env.NODE_ENV);
        });
    }
}

const server = new Express();
server.startServer();