package com.wp.studyTracker.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "mangas")
@AllArgsConstructor
@NoArgsConstructor
public class Manga {
    @Id
    private String id;

    private String malId;
    private String title;
    private String releaseDate;
    private List<String> genres;
    private String poster;
    private List<String> backdrops;
    private int amountOfChapters;
    private int amountOfVolumes;
    private List<String> reviewIds;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMalId() {
        return malId;
    }

    public void setMalId(String malId) {
        this.malId = malId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public List<String> getGenres() {
        return genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public List<String> getBackdrops() {
        return backdrops;
    }

    public void setBackdrops(List<String> backdrops) {
        this.backdrops = backdrops;
    }

    public int getAmountOfChapters() {
        return amountOfChapters;
    }

    public void setAmountOfChapters(int amountOfChapters) {
        this.amountOfChapters = amountOfChapters;
    }

    public int getAmountOfVolumes() {
        return amountOfVolumes;
    }

    public void setAmountOfVolumes(int amountOfVolumes) {
        this.amountOfVolumes = amountOfVolumes;
    }

    public List<String> getReviewIds() {
        return reviewIds;
    }

    public void setReviewIds(List<String> reviewIds) {
        this.reviewIds = reviewIds;
    }
}

