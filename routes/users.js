const  mongoose =require('mongoose');


try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    'mongodb+srv://itsnayandubey:iDdCbPVWgqc8Xv6h@cluster0.hjiaxhr.mongodb.net/?retryWrites=true&w=majority',
    // { useNewUrlParser: true, useUnifiedTopology: true }
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
const userschema=mongoose.Schema({
  username:String,
  name:String,
  age:Number
})
module.exports=mongoose.model("user" ,userschema);