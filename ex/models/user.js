const { DataTypes } = require('sequelize')
const sequelize = require('../config/config')

const UserTable = sequelize.define('userTable', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
  }
})


module.exports = UserTable
