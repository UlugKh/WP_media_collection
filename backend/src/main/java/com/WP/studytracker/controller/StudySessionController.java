// controller/StudySessionController.java
package com.yourname.studytracker.controller;

import com.yourname.studytracker.model.StudySession;
import com.yourname.studytracker.repository.StudySessionRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sessions")
@CrossOrigin(origins = "http://localhost:3000") // React dev server
public class StudySessionController {

    private final StudySessionRepository repository;

    public StudySessionController(StudySessionRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<StudySession> getAllSessions() {
        return repository.findAll();
    }

    @PostMapping
    public StudySession createSession(@RequestBody StudySession session) {
        return repository.save(session);
    }

}
