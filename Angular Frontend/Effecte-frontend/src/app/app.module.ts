import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { StickyNotesComponent } from './sticky-notes/sticky-notes.component';
import { FormsModule } from '@angular/forms';
import { NoteHandlerComponent } from './note-handler/note-handler.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [AppComponent, StickyNotesComponent, NoteHandlerComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
