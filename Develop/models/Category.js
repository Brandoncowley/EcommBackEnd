const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    
    //add ID
    // define columns
    // CREATE TABLE category (
    //   id INT AUTO_INCREMENT NOT NULL,
    //   category_name VARCHAR(50) NOT NULL,
    //   PRIMARY KEY (id)
    // )
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
