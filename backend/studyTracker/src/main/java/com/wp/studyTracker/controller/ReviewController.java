package com.wp.studyTracker.controller;

import com.wp.studyTracker.model.*;
import com.wp.studyTracker.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v2/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/movies")
    public ResponseEntity<Review> createMovieReview(@RequestBody Map<String, String> payload) {
        Review review = reviewService.createReviewForMedia(
                Movie.class, "imdbId", payload.get("imdbId"), payload.get("reviewBody"));
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @PostMapping("/anime")
    public ResponseEntity<Review> createAnimeReview(@RequestBody Map<String, String> payload) {
        Review review = reviewService.createReviewForMedia(
                Anime.class, "malId", payload.get("malId"), payload.get("reviewBody"));
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @PostMapping("/manga")
    public ResponseEntity<Review> createMangaReview(@RequestBody Map<String, String> payload) {
        Review review = reviewService.createReviewForMedia(
                Manga.class, "malId", payload.get("malId"), payload.get("reviewBody"));
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @PostMapping("/books")
    public ResponseEntity<Review> createBookReview(@RequestBody Map<String, String> payload) {
        Review review = reviewService.createReviewForMedia(
                Book.class, "isbn", payload.get("isbn"), payload.get("reviewBody"));
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @PostMapping("/shows")
    public ResponseEntity<Review> createShowReview(@RequestBody Map<String, String> payload) {
        Review review = reviewService.createReviewForMedia(
                Show.class, "imdbId", payload.get("imdbId"), payload.get("reviewBody"));
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }
}

