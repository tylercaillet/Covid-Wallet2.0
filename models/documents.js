'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Documents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // define association here
      Documents.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'owner_id'
 
      })
     Documents.belongsToMany(models.User,{
      as:'document',
      through:models.UsersDocuments,
      foreignKey:'document_id'
     })
    }
  }
  Documents.init({
    title: DataTypes.STRING,
    DOB: DataTypes.STRING,
    first: DataTypes.STRING,
    second: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Documents',
    tableName: 'documents'
  });
  return Documents;
};