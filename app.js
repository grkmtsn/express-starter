require('dotenv').config()

const Express = require('./src/Bootstrap/Express')
const express = new Express()
express.startServer()