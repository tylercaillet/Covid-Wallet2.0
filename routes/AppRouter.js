const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const DocumentRouter = require('./DocumentRouter')
const UserDocumentRouter = require('./UserDocumentRouter')
Router.use('/', AuthRouter)
Router.use('/documents', DocumentRouter)
Router.use('/userdocuments', UserDocumentRouter)
module.exports = Router