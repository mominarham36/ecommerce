const UserTable = require('../models/user');


const get = async (req, res) => {
    const user = await UserTable.findAll()
    return res.json(user)
}

const add = async(req, res)=>{
    try {
        console.log('add fucntion')
        const data = await UserTable.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName
        })
        return res.json(data)
    } catch (error) {
        
    }
}

module.exports = {
    get,
    add
}