package com.wp.studyTracker.controller;

import com.wp.studyTracker.service.AnimeService;
import com.wp.studyTracker.model.Anime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v2/animes")
public class AnimeController {
    @Autowired
    private AnimeService animeService;

    @GetMapping
    public ResponseEntity<List<Anime>> getAllAnimes() {
        return new ResponseEntity<List<Anime>>(animeService.allAnimes(), HttpStatus.OK);
    }

    @GetMapping("/{malId}")
    public ResponseEntity<Optional<Anime>> getSingleAnime(@PathVariable String malId){
        try {
            int mal = Integer.parseInt(malId);
            return new ResponseEntity<Optional<Anime>>(animeService.singleAnime(mal), HttpStatus.OK);
        } catch (NumberFormatException e) {
            return new ResponseEntity<>(Optional.empty(), HttpStatus.BAD_REQUEST);        //in case the malId is not an integer
        }
    }
}

