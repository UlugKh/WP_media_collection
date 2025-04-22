package com.wp.studyTracker.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.wp.studyTracker.ObjectIdToStringSerializer;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Document(collection = "users")
public class User {
    @Id
    @JsonSerialize(using = ObjectIdToStringSerializer.class)
    private ObjectId id;

    private String name;
    private String username;
    private String email;
    private String password;

    @JsonSerialize(contentUsing = ObjectIdToStringSerializer.class)
    private List<ObjectId> reviewIds;

    private Map<String, List<String>> collection;

    public User() {}

    public User(String name, String username, String email, String password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public ObjectId getId() { return id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public List<ObjectId> getReviewIds() { return reviewIds; }
    public void setReviewIds(List<ObjectId> reviewIds) { this.reviewIds = reviewIds; }
    public Map<String, List<String>> getCollection() { return collection; }
    public void setCollection(Map<String, List<String>> collection) { this.collection = collection; }
}
