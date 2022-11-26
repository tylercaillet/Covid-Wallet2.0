const {User, Documents}= require('../models')

const GetAllDocuments = async (req, res) => {
    try {
        const documents = await Document.findAll()
        res.send(documents)
    } catch (error) {
        throw error
    } 
}

const GetDocumentDetails = async (req, res) => {
  try {
      const documents = await Document.findByPk(req.params.document_id)
      res.send(documents)
  } catch (error) {
      throw error
  } 
}

const GetUserDocuments=async(req,res)=>{
  try {
    let ownerId= parseInt(req.params.user_id);
    const documents = await Document.findAll({where:{owner_id:ownerId}})
    res.send(documents)
  } catch (error) {
    throw error
  } 
  }

const CreateDocument = async (req, res) => {
  try {
    let owner_id=parseInt(req.params.user_id)
    let documentBody={
      owner_id,
      ...req.body
    }
      const newDocument = await Document.create(documentBody)
      res.send(newDocument)
  } catch (error) {
      throw error
  } 
}


const UpdateDocument = async (req, res) => {
  try {
    let documentId=parseInt(req.params.document_id)
    let updatedDocument=await Document.update(req.body,{
      where:{id:documentId},
      returning:true
    })
    res.send(updatedDocument)
  } catch (error) {
      throw error
  } 
}

const DeleteDocument = async (req, res) => {
  try {
    let documentId=parseInt(req.params.document_id)
    await Document.destroy({where:{id:documentId}})
      res.send({message:`Deleted Document with id of ${documentId}`})
  } catch (error) {
      throw error
  } 
}

module.exports = {
    GetAllDocuments,
    GetDocumentDetails,
    GetUserDocuments,
    CreateDocument,
    UpdateDocument,
    DeleteDocument
}