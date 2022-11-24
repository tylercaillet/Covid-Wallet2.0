'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersDocuments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsersDocuments.init({
    userId: DataTypes.INTEGER,
    documentId: DataTypes.INTEGER,
    documentName: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UsersDocuments',
    tableName: 'usersdocuments'
  });
  return UsersDocuments;
};