package com.wp.studyTracker.controller;

import com.wp.studyTracker.service.ShowService;
import com.wp.studyTracker.model.Show;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v2/shows")
public class ShowController {
    @Autowired
    private ShowService showService;

    @GetMapping
    public ResponseEntity<List<Show>> getAlShows() {
        return new ResponseEntity<List<Show>>(showService.allShows(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Show>> getSingleShow(@PathVariable String imdbId){
        return new ResponseEntity<Optional<Show>>(showService.singleShow(imdbId), HttpStatus.OK);
    }
}
