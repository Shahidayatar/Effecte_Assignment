  import { Component, ChangeDetectorRef } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Router } from '@angular/router';

  interface Note {
    id: number;
    noteText: string;
    createdAt: Date;
  }
  @Component({
    selector: 'app-sticky-notes',
    templateUrl: './sticky-notes.component.html',
    styleUrls: ['./sticky-notes.component.css'],
  })
  export class StickyNotesComponent {
    notes: Note[] = [];
    selectedNote?: Note;
    selectedNoteIndex?: number;
    newNote = '';
    gridColumns = 3;


    constructor(
      private cdr: ChangeDetectorRef,
      private http: HttpClient,
      private router: Router
    ) {}

    onSelect(note: Note, index: number): void {
      this.selectedNote = note;
      this.selectedNoteIndex = index;
    }

    addNote() {
    const createdAt = new Date();
    const note: Note = {
      noteText: this.newNote,
      createdAt: createdAt,
      id: Math.random() + 1,
    };

      this.notes.push(note);
      this.newNote = '';
      this.cdr.detectChanges();
      console.log(this.notes);

    this.http
      .post('http://localhost:8080/api/NotesAdded', note)
      .subscribe((response) => {
        console.log(response);
      });

    }

    deleteNote(): void {
      if (!this.selectedNoteIndex) {
        return;
      }
      this.notes.splice(this.selectedNoteIndex, 1);
      this.selectedNote = undefined;
      this.selectedNoteIndex = undefined;
      this.cdr.detectChanges();
    }

    updateNote(): void {
      if (!this.selectedNoteIndex) {
        return;
      }
      this.notes[this.selectedNoteIndex].noteText =
        this.selectedNote?.noteText || '';
      this.selectedNote = undefined;
      this.selectedNoteIndex = undefined;
      this.cdr.detectChanges();
    }

    FetchNotes(): void {
      this.router.navigateByUrl('/FetchNotes');
    }
  }
