package com.wp.studyTracker.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "movies")
@NoArgsConstructor
@AllArgsConstructor
public class Movie {
    @Id
    private String id;

    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private List<String> genres;
    private String poster;
    private List<String> backdrops;
    private List<String> cast;
    private Imdb imdb;
    private List<String> reviewIds;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getImdbId() {
        return imdbId;
    }

    public void setImdbId(String imdbId) {
        this.imdbId = imdbId;
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

    public String getTrailerLink() {
        return trailerLink;
    }

    public void setTrailerLink(String trailerLink) {
        this.trailerLink = trailerLink;
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

    public List<String> getCast() {
        return cast;
    }

    public void setCast(List<String> cast) {
        this.cast = cast;
    }

    public Imdb getImdb() {
        return imdb;
    }

    public void setImdb(Imdb imdb) {
        this.imdb = imdb;
    }

    public List<String> getReviewIds() {
        return reviewIds;
    }

    public void setReviewIds(List<String> reviewIds) {
        this.reviewIds = reviewIds;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    public static class Imdb {
        private double rating;
        private int votes;
        private int id;

        public double getRating() {
            return rating;
        }

        public void setRating(double rating) {
            this.rating = rating;
        }

        public int getVotes() {
            return votes;
        }

        public void setVotes(int votes) {
            this.votes = votes;
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }
    }
}


