package com.wp.studyTracker.service;

import com.wp.studyTracker.model.Movie;
import com.wp.studyTracker.model.Review;
import com.wp.studyTracker.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    /*public Review createReview(String reviewBody, String imdbId) {
        Review review = reviewRepository.insert(new Review(reviewBody));

        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds"). value(review))
                .first();

        return review;
    }*/

    public <T> Review createReviewForMedia(Class<T> mediaClass, String idFieldName, String idValue, String reviewBody) {
        Review review = reviewRepository.insert(new Review(reviewBody));

        mongoTemplate.update(mediaClass)
                .matching(Criteria.where(idFieldName).is(idValue))
                .apply(new Update().push("reviewIds", review))
                .first();

        return review;
    }
}
