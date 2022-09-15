// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017')
// //const { default: mongoose, Schema } = require("mongoose");

const { default: mongoose, Types } = require("mongoose");

// const userSchema = new mongoose.Schema({
//     username : String,
//     email : String
// })
// const postSchema = new mongoose.Schema({
//     title : String,
//     postedBy : {
//         type:mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     }
// })
// const User = mongoose.model('User',userSchema)
// const Post = mongoose.model('Post',postSchema)

// Post.find()
// .then(p=> console.log(p))
// .catch(error => console.log(error))

// Post.find()
// .populate("postedBy")
// .then(p=>console.log(p))
// .catch(error=>console.log(error))// module.exports = {
// //     Source , Destination , User , post
// // }

const UserSchema = new mongoose.Schema({
    username : String,
    posts : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    }]
})

const PostSchema = new mongoose.Schema({
    content : String,
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
})

const Post = mongoose.model('Post',PostSchema , 'posts')
const User = mongoose.model('User',UserSchema,'users')

module.exports= {
    User,Post,
}


function getUserWithPosts(username) {
    return User.findOne({username : username})
    .populate('posts').exec((err, posts)=> {
        console.log('Populated User' + posts)
    })
}

getUserWithPosts("keertu")