const {Controller, Get} = require('@decorators/express')

@Controller('/base')
class AuthController {
    @Get('/asd')
    index(req,res) {
        res.send('Hello World')
    }
}
module.exports = AuthController