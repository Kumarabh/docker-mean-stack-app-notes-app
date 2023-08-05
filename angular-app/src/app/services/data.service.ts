import { Injectable } from '@angular/core';
import { Note } from '../../types/note';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:3000/api/v1/notes/'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addNote(note: Note) {
    return this.http.post(baseURL, note)
  }

  getNotes(): Observable<any> {
    return this.http.get(baseURL);
  }

  deletetNote(id: string): Observable<any> {
    return this.http.delete(baseURL+ id);
  }
}
