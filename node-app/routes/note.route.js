import express from 'express';
import {getAllNotes, createNote, updateNote, deleteNote, getNoteById} from '../controllers/note.controller.js';
const router = express.Router();

router.route('/')
.get(getAllNotes)
.post(createNote)

router.route('/:id')
.get(getNoteById)
.put(updateNote)
.delete(deleteNote)

export default router