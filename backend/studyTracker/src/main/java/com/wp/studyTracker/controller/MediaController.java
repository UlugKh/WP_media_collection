package com.wp.studyTracker.controller;

import com.wp.studyTracker.model.MediaResponse;
import com.wp.studyTracker.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v2/media")
public class MediaController {
    private final BookService bookService;
    private final MovieService movieService;
    private final ShowService showService;
    private final MangaService mangaService;
    private final AnimeService animeService;

    public MediaController(BookService bookService, MovieService movieService,
                           ShowService showService, MangaService mangaService,
                           AnimeService animeService) {
        this.bookService = bookService;
        this.movieService = movieService;
        this.showService = showService;
        this.mangaService = mangaService;
        this.animeService = animeService;
    }

    @GetMapping
    public ResponseEntity<MediaResponse> getAllMedia() {
        MediaResponse response = new MediaResponse(
                bookService.allBooks(),
                movieService.allMovies(),
                showService.allShows(),
                mangaService.allMangas(),
                animeService.allAnimes()
        );

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
