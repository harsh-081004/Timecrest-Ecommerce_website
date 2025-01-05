import mongoose from "mongoose";

const watchSchema = new mongoose.Schema({
  name : {type:String,required:true},
  description : {type:String,required:true},
  price : {type:Number,required:true},
  image : {type:String,required:true},
  category : {type:String,required:true}
})

const watchmodel1 = mongoose.models.watch || mongoose.model("watch",watchSchema);

export default watchmodel1;