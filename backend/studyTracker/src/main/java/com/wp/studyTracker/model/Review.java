package com.wp.studyTracker.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.wp.studyTracker.ObjectIdToStringSerializer;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reviews")
public class Review {

    @Id
    @JsonSerialize(using = ObjectIdToStringSerializer.class)
    private ObjectId id;

    private String body;
    private String userId;

    public Review() {}

    public Review(ObjectId id, String body, String userId) {
        this.id = id;
        this.body = body;
        this.userId = userId;
    }

    public Review(String body) {
        this.body = body;
    }

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
