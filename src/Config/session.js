module.exports = {
    /*
     * Defaults to file storing in server/session folder.
     * Supported: "file", "redis"
     */
    driver: process.env.SESSION_DRIVER ||'file',

    /*
     * Driver settings for above selected driver
     */
    driverSettings : {
        file: {
            path: process.env.SESSION_DRIVER_FILE_PATH || require('path').resolve(__dirname, '../Storage/Sessions')
        },
        redis: {
            /*
            redis options already defined in redis client to connect a default setup of redis server.
            client An existing client
            host Redis server hostname
            port Redis server portno
            socket Redis server unix_socket
            url Redis server url
            */
        }
    },

    session: {
        /*
         * secret used to sign the session ID cookie. This can be either a string for a single secret,
         * or an array of multiple secrets. If an array of secrets is provided, only the first element
         * will be used to sign the session ID cookie, while all the elements will be considered when
         * verifying the signature in requests.
         */
        secret: process.env.TOKEN_SECRET || 'keyboard cat',

        /*
         * forces a session that is "uninitialized" to be saved to the store.
         * A session is uninitialized when it is new but not modified.
         * default: false
         */
        saveUninitialized: true,

        /*
         * forces session to be saved even when unmodified.
         */
        resave: false,

        /*
         * forces a cookie set on every response. This resets the expiration date.
         * default: false
         */
        rolling: true,

        /*
         * Cookie specific settings
         */
        cookie: {
            /*
             * Cookie's max age. (in milliseconds) defaults to : 5 minutes
             */
            maxAge: 300000,

            /*
             * Specifies the boolean value for the HttpOnly Set-Cookie attribute.
             */
            httpOnly: true,

            /*
             * A secure cookie will only be sent to the server
             * when a request is made using SSL and the HTTPS protocol
             */
            secure: false
        }
    }
}