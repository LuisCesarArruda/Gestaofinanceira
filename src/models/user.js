const db = require('../database')

const {DataTypes, Model} = require('sequelize')

class User extends Model{}

User.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    valor:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoValor:{
        type: DataTypes.STRING,
        allowNull: false,
    }

},{
    sequelize: db,
    modelName:'User',
    tableName: 'users'
})

module.exports = User