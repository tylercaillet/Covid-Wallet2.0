const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const DocumentRouter = require('./DocumentRouter')
const UserDocumentRouter = require('./UserDocumentRouter')
Router.use('/', AuthRouter)
Router.use('/feed', DocumentRouter)
Router.use('/library', UserDocumentRouter)
module.exports = Router