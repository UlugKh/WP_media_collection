package com.wp.studyTracker.service;

import com.wp.studyTracker.model.Review;
import com.wp.studyTracker.model.User;
import com.wp.studyTracker.repository.ReviewRepository;
import com.wp.studyTracker.repository.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getUserById(ObjectId id) {
        return userRepository.findById(id);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<Review> getUserReviews(ObjectId userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            return reviewRepository.findAllById(user.get().getReviewIds());
        }
        return Collections.emptyList();
    }

    public Map<String, List<String>> getUserCollection(ObjectId userId) {
        Optional<User> user = userRepository.findById(userId);
        return user.map(User::getCollection).orElse(Collections.emptyMap());
    }

    public User addMediaToCollection(ObjectId userId, String mediaType, String mediaId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) return null;

        User user = optionalUser.get();

        // check if map exists
        Map<String, List<String>> collection = user.getCollection();
        if (collection == null) {
            collection = new HashMap<>();
            user.setCollection(collection);
        }

        String collectionKey = getPluralForm(mediaType); //make plural

        collection.putIfAbsent(collectionKey, new ArrayList<>());

        if (!collection.get(collectionKey).contains(mediaId)) {
            collection.get(collectionKey).add(mediaId);  //to avoid doubles
        }

        return userRepository.save(user);
    }

    // Helper method for plural
    private String getPluralForm(String mediaType) {
        return switch (mediaType.toLowerCase()) {
            case "movie" -> "movies";
            case "book" -> "books";
            case "anime" -> "animes";
            case "manga" -> "mangas";
            case "show" -> "shows";
            default -> mediaType.toLowerCase() + "s";
        };
    }

}

