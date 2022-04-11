const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('book', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    state: {
      type: DataTypes.BOOLEAN,
    },

    content_short: {
      type: DataTypes.TEXT,
    },

    publisher_date:{
      type: DataTypes.STRING,
    },

    image: {
      type: DataTypes.STRING,
    },

    id_api:{
      type: DataTypes.FLOAT,
    },

  });
};
