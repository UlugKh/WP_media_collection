package com.wp.studyTracker.service;

import com.wp.studyTracker.model.Manga;
import com.wp.studyTracker.repository.MangaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MangaService {
    @Autowired
    private MangaRepository mangaRepository;

    public List<Manga> allMangas(){
        return mangaRepository.findAll();
    }

    public Optional<Manga> singleManga(int malId){
        return mangaRepository.findMangaByMalId(malId);
    }
}

