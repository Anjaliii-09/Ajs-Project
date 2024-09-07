import mongoose from "mongoose";

const designSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Hoodie', 'Sweatshirt', 'Jeans'],
        required: true
    },
    image: {
        type: String, 
        required: true
    }
});

const DesignModel = mongoose.model('Design', designSchema);

export { DesignModel };
