package com.wp.studyTracker.controller;

import com.wp.studyTracker.model.Review;
import com.wp.studyTracker.model.User;
import com.wp.studyTracker.service.UserService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v2/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.createUser(user));
    }

    @PostMapping("/{userId}/collection/add")
    public ResponseEntity<User> addMediaToCollection(
            @PathVariable String userId,
            @RequestBody Map<String, String> payload) {

        String mediaType = payload.get("mediaType"); // e.g. "movie"
        String mediaId = payload.get("mediaId");     // e.g. "tt1234567"

        User updatedUser = userService.addMediaToCollection(new ObjectId(userId), mediaType, mediaId);

        if (updatedUser == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedUser);
    }


    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        return userService.getUserById(new ObjectId(id))
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/reviews")
    public ResponseEntity<List<Review>> getUserReviews(@PathVariable String id) {
        return ResponseEntity.ok(userService.getUserReviews(new ObjectId(id)));
    }

    @GetMapping("/{id}/collection")
    public ResponseEntity<Map<String, List<String>>> getUserCollection(@PathVariable String id) {
        return ResponseEntity.ok(userService.getUserCollection(new ObjectId(id)));
    }
}

