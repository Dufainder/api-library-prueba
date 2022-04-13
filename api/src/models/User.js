const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
 
      name: {
        type: DataTypes.STRING,
      },
      
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      identification:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      admin:{
        type: DataTypes.BOOLEAN,
    
      }

  })
}