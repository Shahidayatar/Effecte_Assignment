import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-handler',
  templateUrl: './note-handler.component.html',
  styleUrls: ['./note-handler.component.css'],
})
export class NoteHandlerComponent {
  notes: any;
  errorMessage: any;

  constructor(private http: HttpClient, private router: Router) {}

  // Function to fetch notes from the server
  FetchNote() {
    this.http.get<any>('http://localhost:8080/api/Notes').subscribe({
      next: (data) => {
        this.notes = data;
        // Navigate to the "FetchNotes" route on success
        this.router.navigateByUrl('/FetchNotes');
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.log('There was an error!', error);
      },
    });
  }

  // Function to navigate to the "AddNote" route
  AddNote() {
    this.router.navigateByUrl('/');
  }
}
