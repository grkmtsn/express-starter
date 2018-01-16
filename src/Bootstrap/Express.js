const express = require('express')
const {attachControllers} = require('@decorators/express');
const path = require('path');
const fs = require('fs');
const Database = require('./Database')
const config = require('../Config/index')

class Express {
    constructor() {
        Express.core = express()
    }

    routes() {
        const normalizedPath = path.resolve(__dirname, "../Http/Controllers")
        const controllers = []
        fs.readdirSync(normalizedPath).forEach(function (file, key) {
            controllers[key] = require(normalizedPath + '/' + file)
        });
        attachControllers(Express.core, controllers);
    }

    middlewares() {
        config.middleware.middlewares.forEach(middleware => {
            require('../Http/Middlewares/' + middleware)()
        })
    }

    database() {
        (new Database()).start()
    }

    view() {
        Express.core.set('view engine', config.view.engine)
        Express.core.set('views', path.resolve(__dirname, config.view.path))
        Express.core.use('/static', express.static(path.resolve(__dirname, '../Public')))
    }

    startServer() {
        this.database()
        this.middlewares()
        this.view()
        this.routes()
        const server = Express.core.listen(config.app.port, config.app.host, function () {
            console.log('%s App is running at http://localhost:%d in %s mode', '✓', server.address().port, process.env.NODE_ENV);
        });
    }
}

module.exports = Express