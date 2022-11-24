const Router = require('express').Router()
const controller = require('../controllers/UserDocumentController')

Router.get('/:user_id', controller.GetUsersDocument)
Router.get('/:userdocuments_id', controller.GetUsersDocument)
Router.get('/', controller.GetAllUserDocument)
Router.post('/:owner_id/:document_id', controller.AddToUsersDocuments)
Router.delete('/:owner_id/:document_id', controller.DeleteFromUsersDocuments)

module.exports = Router