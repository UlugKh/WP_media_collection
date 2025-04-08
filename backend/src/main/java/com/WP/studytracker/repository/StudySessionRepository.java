// repository/StudySessionRepository.java
package com.WP.studytracker.repository;

import com.yourname.studytracker.model.StudySession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudySessionRepository extends JpaRepository<StudySession, Long> {}
