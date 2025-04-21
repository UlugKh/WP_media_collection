package com.wp.studyTracker.repository;

import com.wp.studyTracker.model.MyUser;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface MyUserRepository extends MongoRepository<MyUser, String>{

    Optional<MyUser> findByUsername(String username);
}
