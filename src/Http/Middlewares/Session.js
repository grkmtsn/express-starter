const Express = require('../../Bootstrap/Express')
const session = require('express-session')
const config = require('../../Config/index')

const driver = config.session.driver
const sessionLibraryDrivers = {
    redis: require('connect-redis')(session),
    file: require('session-file-store')(session)
}

module.exports = () => {
    Express.core.use(session({
        ...config.session.session,
        store: new sessionLibraryDrivers[driver](config.session.driverSettings[driver])
    }))
}
