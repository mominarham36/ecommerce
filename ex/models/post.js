const { DataTypes } = require('sequelize')
const sequelize = require('../config/config')
const UserTable = require('../models/user')

const Post = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    media: {
        type: DataTypes.STRING,
        allowNull: true,
    }
},
    {
        tableName: "post"
    }
)

Post.belongsTo(UserTable,{
    foreignKey:"userId",
    allowNull:true
})

module.exports = Post