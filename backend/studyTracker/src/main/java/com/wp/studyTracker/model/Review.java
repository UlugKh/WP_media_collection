package com.wp.studyTracker.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reviews")
public class Review {

    @Id
    private ObjectId id;
    private String body;
    private String userId;

    // No-arg constructor (required by Spring and MongoDB)
    public Review() {
    }

    // All-args constructor
    public Review(ObjectId id, String body, String userId) {
        this.id = id;
        this.body = body;
        this.userId = userId;
    }

    // Constructor for just the body (if needed)
    public Review(String body) {
        this.body = body;
    }

    // Getters and setters
    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Review{" +
                "id=" + id +
                ", body='" + body + '\'' +
                ", userId='" + userId + '\'' +
                '}';
    }
}
