var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const application = sequelize.define("messages", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    creator: DataTypes.STRING,
    secretkey: DataTypes.STRING,
    src: DataTypes.STRING,
    picture: DataTypes.STRING,
    type: DataTypes.STRING,
    text: DataTypes.STRING,
    isDeleted: {
      type: DataTypes.INTEGER,
      field: "isdeleted",
      defaultValue: 0
    },
  }, {
    timestamps: true,
    createdAt: 'createat',
    updatedAt: 'updateat',
    classMethods: {
      associate: (models) => {
      }
    }
  });
  return application;
}
