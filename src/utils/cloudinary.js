import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (filePath) => {
    try {
        if (!filePath) return null;
        const response = await cloudinary.uploader.upload(filePath, {
            resource_type: 'auto',
        });
        // file uploaded successfully
        console.log('File uploaded successfully', response);
        return response;
    } catch (error) {
        fs.unlinkSync(filePath);
        console.log('File handling error', error);
        return null;
    }
};

export default uploadOnCloudinary;
