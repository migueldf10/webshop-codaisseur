'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user)
      this.hasMany(models.lineItem)
    }
  };
  order.init({
    status: DataTypes.STRING,
    shippingDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};