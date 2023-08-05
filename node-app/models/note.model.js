import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please add a title'],
        min: 2,
        max: 100
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        // unique: true,
        max: 50,
    },
    
}, {timestamps: true})

export default mongoose.model('Note', noteSchema);