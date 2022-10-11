const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/IntellectNotes', {
    useNewUrlParser: true,
}).then(() => console.log('DB connection successful!'));

// Schema
const myNotesSchema = new mongoose.Schema(
    {
        notesID: {
            type: Number,
            unique: true,
            required: [true, 'Required Field'],
        },
        name: {
            type: String,
            required: [true, 'Required Field'],
        },
        data: {
            type: String,
        },
    },
    {
        timestamps: {
            createAt: true,
            updateAt: true,
        },
    }
);

// Model
const NotesModel = mongoose.model('mynotes', myNotesSchema);

module.exports = NotesModel;