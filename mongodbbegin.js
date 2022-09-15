const { insertMany, db } = require('../model');
const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

const connectionURL = 'mongodb://localhost:27017'
const databasename = 'all-functions'

//MongoCl.connect(url, function(err, db)
MongoClient.connect(connectionURL,(error,client)=>{
    if(error){
        return console.log('unable ',error)
    }
    
    const db = client.db(databasename)
//inserting many
    // db.collection('Users').insertMany([
    //     {
    //           name : "keethu",
    //           dob : "15-03-2000",
    //           empid : 1,
    //           email : "keerthika@robosoftin.com",
    //           phonenumber : 8922222222,
    //           address :[{
    //             country : "India",
    //             state : "Karnataka",
    //             city : "Mangalore",
    //             street : "kadri",
    //             pincode : 575002
    //           }]
    //         },
    //         {
    //           name : "sharath",
    //           dob : "06-02-2000",
    //           empid : 2,
    //           email : "sharath@gmail.com",
    //           phonenumber : 9916111111,
    //           address : [{
    //             country : " India",
    //             state : "Karnataka",
    //             city : "mangalore",
    //             street : "dujalaguri",
    //             pincode : 571717
    //           }]
    //         },
    //         {
    //           name : "Vanshu",
    //           dob : "19-08-2014",
    //           empid : 3,
    //           email : "vanshu@gmail.com",
    //           phonenumber : 8861444444,
    //           address : [{
    //             country : "India",
    //             state : "Karnataka",
    //             city : "Hubli",
    //             street : "Gokul road",
    //             pincode : 580852,
    //           }]
    //         },
    //         {
    //           name : "Golu",
    //           dob : "01-10-2019",
    //           empid : 4,
    //           email : "golu@gmsil.com",
    //           phonenumber: 855423698,
    //           address : [{
    //             country : "India ",
    //             state: " Karnataka",
    //             city : "bangalore",
    //             street : " mgroad",
    //             pincode: 8752693147
        
    //           }]
    //         }])
// find gt
    // db.collection('Users').find({empid : {$gt : 1}}).toArray((error, Users)=>{
    //     if(error){
    //         console.log('error')
    //     }
    //     console.log(Users)
    // })
//find value between the two
    // db.collection('Users').find({empid : {$lt :2, $gt : 4}}).toArray((error,Users)=> {
    //     if(error){
    //         console.log('error')
    //     }
    //     console.log(Users)

    // })

//find values less than
    // db.collection('Users').find({empid : {$lt :2}}).toArray((error,Users)=> {
    //         if(error){
    //             console.log('error')
    //         }
    //         console.log(Users)
    
    //     })
 //find less than or equal
        // db.collection('Users').find({empid : {$lte :2}}).toArray((error,Users)=> {
        //     if(error){
        //         console.log('error')
        //     }
        //     console.log(Users)
    
        // })
 // find values greater than or equal to
        // db.collection('Users').find({empid : {$gte :2}}).toArray((error,Users)=> {
        //     if(error){
        //         console.log('error')
        //     }
        //     console.log(Users)
    
        // })
// find values not equal to
        // db.collection('Users').find({empid : {$ne :2}}).toArray((error,Users)=> {
        //     if(error){
        //         console.log('error')
        //     }
        //     console.log(Users)
    
        // })
// find the value specified in 'in
        // db.collection('Users').find({empid : {$in :[1,2]}}).toArray((error,Users)=> {
        //     if(error){
        //         console.log('error')
        //     }
        //     console.log(Users)
        // })
    
            console.log("***********************************************************")
// find values not in 'in'
// db.collection('Users').find({empid : {$nin :[1,2]}}).toArray((error,Users)=> {
//     if(error){
//         console.log('error')
//     }
//     console.log(Users)

//         })
//and operator

        // db.collection('Users').find({$and:[{"name" :"keethu"},{"empid": 1}]}).toArray((error,Users)=> {
        //     if(error){
        //         console.log('error')
        //     }
        //     console.log(Users)
        
        //         })
//not operator
// db.collection('Users').find({"empid":{$not : {$lt:3}}}).toArray((error,Users)=>{
//     if(error)
//     {
//         console.log('error')
//     }
//     console.log(Users)
// })
//not operator using regular expression

// db.collection('Users').find({"name": {$not: /^k.*/}}).toArray((error,Users)=>{
//     if(error)
//     {
//         console.log('error')
//     }
//     console.log(Users)
// })
// db.collection('Users').find({$or:[{"empid":1},{empid:2},{empid:3}]}).toArray((error,Users)=>{
//     if(error){
//         console.log("error")
//     }
//     console.log(Users)
// })
//condition should match
// db.collection("Users").find({"name":"keethu",$or:[{"empid": 1},{"empid":3}] }).toArray((error,Users)=>{
//      if(error){
//         console.log(error)
//      }
//      console.log(Users)
//     })


//nor {not or}
    // db.collection("Users").find({"name":"keethu",$nor:[{"empid": 2},{"empid":3}] }).toArray((error,Users)=>{
    //     if(error){
    //        console.log(error)
    //     }
    //     console.log(Users)})


//regex
    // db.collection("Users").find({ name : { $regex : 'k.*'}}).toArray((error,Users)=>{
    //         if(error){
    //            console.log(error)
    //         }
    //         console.log(Users)
    //     })
    // db.collection("Users").find({name : {$regex : "G.*",$options : 'i'}}).toArray((error,Users)=>{
    //     if(error){
    //         console.log(error)
    //     }
    //     console.log(Users)
    // })


    //where  - both the values should be the same

    //     db.collection("Users").find({$where : function() { return (this.empid == this.mongodb)}}).toArray((error,Users )=>{
    //         if(error)
    //     {
    //         console.log("error")
    //     }       
    // console.log(Users)
    // })


    //All operator
//     db.collection("Users").find({" address.country" : { $all : ["india"]}}).toArray((error,Users )=>{
//         if(error)
//     {
//         console.log("error")
//     }       
// console.log(Users)
// })

//elemmatch

// db.collection("Users").find({"address": { $elemMatch : {"country" : " India", "state":"Karnataka"}}}).toArray((error,Users )=>{
//     if(error)
// {
//     console.log("error")
// }       
// console.log(Users)
// })

// to find elements based on array size
// db.collection("Users").find({"adresss": {$size :5}}).toArray((error,Users )=>{
//     if(error)
// {
//     console.log("error")
// }       
// console.log(Users)
// })
//sort
// db.collection("Users").find().sort({empid:-1}).toArray((error,Users )=>{
//     if(error)
// {
//     console.log("error")
// }       
// console.log(Users)
// })
// inc - increment
// const innnn =
 //db.collection("Users").updateOne({"name" : "Vanshu"},{ $inc: { empid:2}})
// console.log(innnn)
// .toArray((error,Users )=>{
//     if(error)
// {
//     console.log(error)
// }       
// console.log(Users)
// })
//rename
//db.collection("Users").updateOne({empid :1},{$rename:{'name':'Namee','empid':'Empidd'}})

//

// db.collection('Users').find({$text:{$search : "keethu"}}).toArray((error,Users )=>{
//         if(error)
//     {
//         console.log("error")
//     }       
//     console.log(Users)
//     })


//set function
//db.collection('Users').updateOne({empid:4}, {$set:{"email":"golu@gmail.com"}})

//pop
//-1 to pop first Element
//1 to pop the last element

//db.collection('Users').updateOne({achieve: 71 }, { $pop: { achieve : -1 }})

//db.student.find().pretty();


//db.collection('Users').updateOne({ achieve :  71 }, { $pull: { acheive: 71 }} )

//db.collection('Users').updateOne({"name": "Golu"},{$pull : { "name" : "Golu"}})
//db.collection('Users').find()
//db.collection('Users').updateOne( { "name" : "sharath" }, { $pullAll: { "achieve": [80,84,91] }} );

//db.collection('Users').updateOne( { "name" : "sharath" },{ $push: { "achieve": 95 } })
 
// db.collection('Users').find({
//     "empid": {
//         "$elemMatch": {
//           "_id": ObjectId("631b076018b13f0449f65dec"),
//           "default": true
//         }
//       }
//     }, {
//       "address.$._id": "631b076018b13f0449f65ded" // "accounts.$": 1 also works
//     }).toArray((error,Users )=>{
//                 if(error)
//             {
//                 console.log("error")
//             }       
//         console.log(Users)
//         })

// })
//     db.collection('Users').updateOne({
//         "address._id": "631b090dd2834a68f2852c61"
//   },{$set:{"address.$.city":"Manipal"}})

})

