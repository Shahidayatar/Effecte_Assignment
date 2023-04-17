package com.example.demo.controller;

import com.example.demo.model.Note;
import com.example.demo.repository.NoteRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/")
public class NoteController {
    private final NoteRepository noteRepository;

    public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

   @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/Notes") // Explicitly allowing the GET method
    public List<Note> getAllNotes() {
      return noteRepository.findAll();
    }


   @PostMapping("/NoteAdded")
   public Note addNote(@RequestBody Note note) {
       note.setCreatedAt(LocalDateTime.now());
       return noteRepository.save(note);
   }

}
