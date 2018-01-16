const Express = require('../Express')
const session = require('express-session')
const redisStore = require('connect-redis')(session)
const config = require('../Config')

module.exports = () => {
    Express.core.use(session({
        ...config.session.session,

    }))
}
