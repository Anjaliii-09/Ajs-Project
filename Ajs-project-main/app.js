import express from "express"

import { upload } from "./middlewares/multer.middleware.js";
import { DesignModel } from "./models/design.model.js";
import { connectDB } from "./db/db.js";
import cors from "cors"
const app = express()
connectDB();

app.use(express.json())

app.use(cors())



app.post('/uploadImage', upload.single('image'), async (req, res) => {
    console.log("Requested")
    try {
        console.log(req.body);
        const uploadedFile = req.file;
        if (!uploadedFile) {
            throw new Error("Error while uploading the file");
        }

        const newDesign = new DesignModel({
            size: req.body.size,
            category: req.body.category,
            image: uploadedFile.path // Assuming Multer provides the path to the uploaded file
        });

        // Save the new design document to the database
        await newDesign.save();

        res.status(200).json({
            statusCode: 200,
            message: "Photo uploaded successfully",
            data: uploadedFile
        });
    } catch (error) {
       throw new Error(404,"error whlie uploading the image. MULTER ERROR")
    }
});

app.get('/getDesign',async (req,res)=>{
    const { designID } = req.params;

    const design = await DesignModel.findById(designID)
    if(!design){
        throw new Error(404,"No design found")
    }

    return res.status(200).json({statusCode: 200 , message: "Design fetched successfully",data: design})
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000")
})