import noteModel from "../models/note.model.js";

const getAllNotes = async (req, res, next) => {
    const allNotes = await noteModel.find({});
    if(allNotes) return res.status(200).json({message: 'success', response: allNotes })

}

const createNote = async (req, res, next) => {
    try {
        const noteExists = await noteModel.findOne({title: req.body.title})
        if(noteExists) {
          return res.status(400).json({success: false, message: 'note with title exists.', data: null})
        } else {
          const newNote = await noteModel.create(req.body);
          if(newNote) {
            return res.status(200).json({success: true, message: 'Note created successfully.', data: newNote});
          }
        }
        // const newNote = await noteModel.create(req.body);
        // if(!noteExists)return res.status(200).json({success: true, message: 'Note created successfully.', data: newNote})
    
        // res.status(200).json({message: 'success', response: allNotes })
    } catch (e) {
        console.log(e);
        return res.status(500).json({success: false, message: e.message, data: null})
    }

}

const updateNote = async (req, res, next) => {

    try {
    
        const noteExists = await noteModel.findOne({_id: req.params.id});
        if(!noteExists) return res.status(400).json({success: false, message: 'Note doesn\'nt exist.', data: null})
    
        const updatedNote = await noteModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: false, new: true})
        if(updatedNote) return res.status(200).json({success: true, message: 'Note updated successfully.', data: updatedNote})
        console.log('Note exists, Note updated');
    
        if(!updatedNote) return res.status(500).json({success: false, message: 'Note not updated.', data: null})
        console.log('Note exists, Note not updated')

    } catch (e) {
        console.log(e);
        return res.status(500).json({success: false, message: e.message, data: null})

    }
}

const deleteNote = async (req, res, next) => {
    try {
        await noteModel.findOneAndDelete({_id: req.params.id});
        res.status(200).json({success: true, message: 'Note deleted.', data: null})
    } catch (e) {
        res.status(400).json({success: false, message: e.message, data: null})
    }

}

const getNoteById = async (req, res, next) => {
    try {
        const note = await noteModel.findById(req.params.id);
        if(note) res.status(200).json({success: true, message: 'note matched.', data: note})

        if(!note) res.status(200).json({success: true, message: 'note not found.', data: null});

    } catch (e) {
        res.status(400).json({success: false, message: e.message, data: null})
    }

}

export {getAllNotes, createNote, updateNote, deleteNote, getNoteById};