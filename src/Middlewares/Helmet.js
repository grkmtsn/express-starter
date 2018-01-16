const Express = require('../Express')
const helmet = require('helmet')

module.exports = () => {
    Express.core.use(helmet())
}
