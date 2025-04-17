package com.wp.studyTracker.repository;

import com.wp.studyTracker.model.Show;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ShowRepository extends MongoRepository<Show, ObjectId> {
    Optional<Show> findShowByImdbId(String imdbId);
}
