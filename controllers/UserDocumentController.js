const { User,Documents, UsersDocument } = require('../models')


const GetUsersDocument = async (req, res) => {

    try {

      const usersDocument=await User.findByPk(req.params.user_id, {

        include:[
          {
            model:Documents,
            as:'card',
            through:{attributes:[]}
          }
        ]
      })

    res.send(usersDocument)
    } catch (error) {
      throw error
      
  }
}

  

const GetUsersDocumentDetails=async(req,res)=>{
  try{
    const usersDocument=await UsersDocument.findByPk(req.params.userDocument_id) 
    res.send(usersDocument)
  } catch (error){
    throw error
  }
}

const GetAllUserDocument = async (req, res) => {
  try {
      const usersDocument = await UsersDocument.findAll()
      res.send(usersDocument)
  } catch (error) {
      throw error
  }
}

const AddToUsersDocuments = async (req, res) => {
  try {
    let owner_id= parseInt(req.params.owner_id);
    let document_id = parseInt(req.params.document_id);
    let body = {
      document_id,
      owner_id,
      ...req.body
    }
    let newEntry = await UsersDocument.create(body)
    res.send(newEntry);
  } catch (error) {
    throw error;
  }
};

const DeleteFromUsersDocuments = async (req, res) => {
  try {
    let ownerId= parseInt(req.params.owner_id);
    let documentId = parseInt(req.params.document_id);
    await UsersDocument.destroy({where:{owner_id:ownerId,document_id:documentId}})
    res.send({message:`Deleted document id ${documentId} from user ${ownerId}'s users documents`})
  } catch (error) {
    throw error;
  }
};


module.exports={
  GetUsersDocument,
  GetAllUserDocument,
  GetUsersDocumentDetails,
  AddToUsersDocuments,
  DeleteFromUsersDocuments
}