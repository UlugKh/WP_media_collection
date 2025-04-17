package com.wp.studyTracker.model;

import java.util.List;

public class MediaResponse {
    private List<Book> books;
    private List<Movie> movies;
    private List<Show> shows;
    private List<Manga> mangas;
    private List<Anime> animes;

    // Constructors
    public MediaResponse() {}

    public MediaResponse(List<Book> books, List<Movie> movies, List<Show> shows,
                         List<Manga> mangas, List<Anime> animes) {
        this.books = books;
        this.movies = movies;
        this.shows = shows;
        this.mangas = mangas;
        this.animes = animes;
    }

    // Getters and Setters
    public List<Book> getBooks() { return books; }
    public void setBooks(List<Book> books) { this.books = books; }

    public List<Movie> getMovies() { return movies; }
    public void setMovies(List<Movie> movies) { this.movies = movies; }

    public List<Show> getShows() { return shows; }
    public void setShows(List<Show> shows) { this.shows = shows; }

    public List<Manga> getMangas() { return mangas; }
    public void setMangas(List<Manga> mangas) { this.mangas = mangas; }

    public List<Anime> getAnimes() { return animes; }
    public void setAnimes(List<Anime> animes) { this.animes = animes; }
}
