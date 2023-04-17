import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StickyNotesComponent } from './sticky-notes/sticky-notes.component';
import { NoteHandlerComponent } from './note-handler/note-handler.component';


const routes: Routes = [
  { path: '', component: StickyNotesComponent },
  { path: 'FetchNotes', component: NoteHandlerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
