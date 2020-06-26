'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lineItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.order)
      this.belongsTo(models.variant)
    }
  };
  lineItem.init({
    discount: DataTypes.STRING,
    unitVariant: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lineItem',
  });
  return lineItem;
};