//var mongo = require('mongodb')
// var mongocl = require('mongodb').mongocl
// var url = "mongodb://localhost:27017/"

const { db } = require('../model')

var MongoCl = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoCl.connect(url, function(err, db){
    if(err) throw err
    var dbo = db.db("mydb")
    dbo.collection("keethu").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    })
    // var myobj = [
        
    //     { _id: 154, name : 'chocolate heaven '},
    //     { _id: 155, name: 'Tasty lemon'},
    //     { _id: 156, name: 'Vanilla Dream'}
    //     // { name : 'John' , address:'highway 71'  },
    //     // { name : 'Peter' , address: 'Lowstreet 4'},
    //     // {name : 'amy' , address:'apple st 652'},
    //     // { name : 'keethu' , address :'mountain 21'},
    //     // { name : 'shaa' , address : 'vallley 45'},
    //     // { name : 'mom' , address : 'ocean blvd'}
    // ]
    // //var myobj= {name:"comapany inc",adress: "Highway 37"}
    // dbo.collection("keethu").insertMany(myobj,function(err,res) {
    //     if(err) throw err
    
    //     console.log("Number of documents inserted "+ res.insertedCount);
    // dbo.collection("keethu").findOne({},function(err,result) {
    //     if(err) throw err
    //     console.log(result.name)
    //     db.close()
    // })
    // dbo.collection("keethu").find({}).toArray(function(err,result){
    //     if(err) throw err;
    //     console.log(result)
    //     db.close()
    // })
    //     dbo.collection("keethu").find({}, { projection: { _id : 0 , name: 1, address: 1 }
    // }   ).toArray(function(err,result){
    //     if(err) throw err
    //     console.log(result)
    //     db.close()
    // })
       // db.close()
        //console.log(res.insertedCount)

//})


// var MongoClient = require('mongodb').MongoClient
// var url = "mongodb://localhost:27017/admin/hi"
// MongoClient.connect(url,function(err,db){
//     if(err) throw err


//     var dbo = db.db("admin");
//     var myobj = { name: "Company Inc", address: "Highway 37" };
//     dbo.collection("hi").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });
//     dbo.collection("keethu").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
// })
dbo.collection("keethu").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  // dbo.collection("keethu").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  //});
})


