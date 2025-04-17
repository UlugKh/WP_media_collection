package com.wp.studyTracker.controller;

import com.wp.studyTracker.service.MangaService;
import com.wp.studyTracker.model.Manga;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v2/mangas")
public class MangaController {
    @Autowired
    private MangaService mangaService;

    @GetMapping
    public ResponseEntity<List<Manga>> getAllMangas() {
        return new ResponseEntity<List<Manga>>(mangaService.allMangas(), HttpStatus.OK);
    }

    @GetMapping("/{malId}")
    public ResponseEntity<Optional<Manga>> getSingleManga(@PathVariable String malId){
        try {
            int mal = Integer.parseInt(malId);
            return new ResponseEntity<Optional<Manga>>(mangaService.singleManga(mal), HttpStatus.OK);
        } catch (NumberFormatException e) {
            return new ResponseEntity<>(Optional.empty(), HttpStatus.BAD_REQUEST);        //in case the malId is not an integer
        }
    }
}
