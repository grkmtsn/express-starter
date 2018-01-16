const Express = require('../../Bootstrap/Express')
const helmet = require('helmet')

module.exports = () => {
    Express.core.use(helmet())
}
