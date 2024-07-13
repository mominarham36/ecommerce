const Post = require('../models/post')
const user = require('../models/user');

const get = async (req, res) => {
    const response = { message: "invalid request", resposeCode: 400, data: null }
    try {
        // const data = await Post.findAll({include:user,where: {userId:2}})
        const data = await Post.findByPk(1,{include:user})
        response.data = data;
        response.message = 'data';
        response.resposeCode = 200;
    } catch (error) {
        console.log(error);
        response.message = 'something went wrong';
        response.resposeCode = 404;
    }
    return res.json(response).status(200)
}

const add = async (req, res) => {
    const response = { message: "invalid request", resposeCode: 400, data: null }
    try {
        const data = await Post.create({
            media: req.body.media,
            userId: req.body.userId
        })
        response.data = data;
        response.message = 'data created';
        response.resposeCode = 200;
    } catch (error) {
        console.log(error);
        response.message = 'something went wrong';
        response.resposeCode = 404;
    }
    return res.json(response).status(201)
}






module.exports = {
    get,
    add
}