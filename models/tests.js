var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const application = sequelize.define("gospel_tests", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    message: DataTypes.STRING,
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
