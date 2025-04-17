package com.wp.studyTracker.service;

import com.wp.studyTracker.model.Show;
import com.wp.studyTracker.repository.ShowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShowService {
    @Autowired
    private ShowRepository showRepository;

    public List<Show> allShows(){
        return showRepository.findAll();
    }

    public Optional<Show> singleShow(String imdbId){
        return showRepository.findShowByImdbId(imdbId);
    }
}
