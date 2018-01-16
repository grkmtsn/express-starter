const Express = require('../../Bootstrap/Express')
const compression = require('compression')

module.exports = () => {
    Express.core.use(compression())
}
