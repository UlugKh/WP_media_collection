// model/StudySession.java
package com.yourname.studytracker.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class StudySession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subject;
    private int durationMinutes;
    private LocalDateTime date;

    // Constructors
    public StudySession() {}

    public StudySession(String subject, int durationMinutes, LocalDateTime date) {
        this.subject = subject;
        this.durationMinutes = durationMinutes;
        this.date = date;
    }

}
