const Express = require('../Express')
const compression = require('compression')

module.exports = () => {
    Express.core.use(compression())
}
