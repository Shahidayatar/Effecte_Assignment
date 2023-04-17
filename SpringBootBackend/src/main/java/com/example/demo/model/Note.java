    package com.example.demo.model;

    import jakarta.persistence.*;

    import java.time.LocalDateTime;

    @Entity

    @Table(name = "Notes")
    public class Note {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(name = "NOTE TEXT")
        private String noteText;

        @Column(name = "CREATED AT")
        private LocalDateTime createdAt;




        public Note() {}
        public Note(String noteText, LocalDateTime createdAt ) {
            super();
            this.noteText = noteText;
            this.createdAt = createdAt;

        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getNoteText() {
            return noteText;
        }

        public void setNoteText(String noteText) {
            this.noteText = noteText;
        }

        public LocalDateTime getCreatedAt() {
            return createdAt;
        }

        public void setCreatedAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
        }





    }
