package com.wp.studyTracker.repository;

import com.wp.studyTracker.model.Manga;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MangaRepository extends MongoRepository<Manga, ObjectId> {
    Optional<Manga> findMangaByMalId(int malId);
}

