const {Controller, Get} = require('@decorators/express')

@Controller('/')
class AuthController {
    @Get('/')
    index(req,res) {
        res.render('pages/homepage',{title: 'Homepage', content: 'EXPRESS STARTER KIT'})
    }
}
module.exports = AuthController