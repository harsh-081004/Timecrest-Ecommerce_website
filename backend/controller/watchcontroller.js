import watchmodel1 from "../models/watchmodel.js";
import fs from 'fs'

// add watch item

const addWatch = async (req,res)=>{

  let image_filename = `${req.file.filename}`
 
  const watch = new watchmodel1({
      name:req.body.name,
      description:req.body.description,
      price:req.body.price,
      category:req.body.category,
      image:image_filename
  })
  try {
      await watch.save();
      res.json({success:true,message:"watch added"})
  } catch (error) {
      console.log(error)
      res.json({success:false,message:"Error"})
  }

}

// all watch list
const listwatch = async (req,res)=>{
    try {
        const watch = await watchmodel1.find({});
        res.json({success:true,data:watch})
    } 
    catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//edit watch
const editWatch = async (req, res) => {
    console.log("Request Body:", req.body); // Log the request body for debugging
    try {
        const { watchId, updatedData } = req.body;

        // Validate that the watchid and updatedData are provided
        if (!watchId || !updatedData) {
            return res.status(400).json({ success: false, message: "watch ID and updated data are required." });
        }

        console.log("Updating watch with ID:", watchId, "with data:", updatedData);

        const updatedwatch = await watchmodel1.findByIdAndUpdate(watchId, updatedData, {
            new: true,
            runValidators: true,
        });

        if (!updatedwatch) {
            return res.status(404).json({ success: false, message: "watch not found." });
        }

        res.status(200).json({ success: true, message: "watch updated successfully!", data: updatedwatch });
    } catch (error) {
        console.error("Error updating watch:", error);
        res.status(500).json({ success: false, message: "Server error. Could not update the watch." });
    }
};

//remove watch
const removewatch = async (req,res)=>{
    try {
        const watch = await watchmodel1.findById(req.body.id);
        fs.unlink(`uploads/${watch.image}`,()=>{})
        await watchmodel1.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"watch Remove"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

  
  

export {addWatch,listwatch,removewatch,editWatch}