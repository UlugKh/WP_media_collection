package com.wp.studyTracker.service;

import com.wp.studyTracker.model.Anime;
import com.wp.studyTracker.repository.AnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnimeService {
    @Autowired
    private AnimeRepository animeRepository;

    public List<Anime> allAnimes(){
        return animeRepository.findAll();
    }

    public Optional<Anime> singleAnime(int malId){
        return animeRepository.findAnimeByMalId(malId);
    }
}
