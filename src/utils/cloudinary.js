import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});



export const uploadOnCloudinary = async (localFilePath)=>{
    try{
    const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto",
        folder:"images"
    })
    // console.log('File uploaded Successfully :  ',response.url);
    fs.unlinkSync(localFilePath); //remove the file from local storage
    return response;
    }catch(err){
        fs.unlink(localFilePath); //remove the file from local storage
        return null;
    }
}