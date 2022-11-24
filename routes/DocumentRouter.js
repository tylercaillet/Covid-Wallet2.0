const Router = require('express').Router()
const controller = require('../controllers/DocumentController')


Router.get('/',controller.GetAllDocuments)
Router.get('/:document_id',controller.GetDocumentDetails)
Router.get('/listings/:user_id',controller.GetUserDocuments)
Router.post('/create/:user_id',controller.CreateDocument)
Router.put('/:document_id',controller.UpdateDocument)
Router.delete('/:document_id',controller.DeleteDocument)

module.exports = Router