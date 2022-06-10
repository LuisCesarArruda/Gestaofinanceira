const sequelize = require('sequelize')

const db = new sequelize ('alexandria', 'postgres', '020602', {

    dialect:'postgres',
    host: 'localhost'

    
});
module.exports = db