import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private apiUrl = 'http://localhost:8080/api/Notes';

  constructor(private http: HttpClient) {}

  getNotes(){
    return this.http.get('http://localhost:8080/api/Notes');
  }


  
}

 

