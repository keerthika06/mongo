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
})
