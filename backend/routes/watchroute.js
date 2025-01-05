import express from 'express'
import { addWatch,editWatch,listwatch,removewatch } from '../controller/watchcontroller.js'
import multer from 'multer'

const watchRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cb)=>{
      return cb(null,`${Date.now()}${file.originalname}`)
  }
})

const upload = multer({storage:storage})

watchRouter.post("/add",upload.single("image"),addWatch)
watchRouter.get("/list",listwatch)
watchRouter.post("/remove",removewatch)
watchRouter.post("/edit",editWatch)



export default watchRouter;