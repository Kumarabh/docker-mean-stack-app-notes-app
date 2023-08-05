import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Note } from '../../../types/note';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit{

  notesForm!: FormGroup<any>;
  notes!: Note[];

  constructor(private fb: FormBuilder, private service: DataService) {}

  ngOnInit(): void {
      this.createForm();
      this.getNotes();
  }

  createForm() {
    this.notesForm = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }

  submit() {
    console.log('new note:- ', this.notesForm.value)
    if(!this.notesForm.valid) {
      alert('invalid note');
      return;
    }
    this.service.addNote(this.notesForm.value).subscribe((data: any) => {
      console.log('Note added:- ', data);
      this.getNotes();
    })
  }

  getNotes() {
    this.service.getNotes().subscribe((data: any) => {
      if(data['message'] === 'success') {
        this.notes = data['response'];
        console.log('Notes:- ', this.notes);

      }
    })
  }

  deleteNote(id: any) {
    this.service.deletetNote(id).subscribe((response: any) => {
      console.log('note deleted', response)
      if(response['success']) {
        this.getNotes();
      }
    })
  }
  
}
