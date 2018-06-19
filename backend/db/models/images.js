'use strict';
module.exports = (sequelize, DataTypes) => {
  var Images = sequelize.define('Images', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Images.associate = function(models) {
    // associations can be defined here
  };
  return Images;
};