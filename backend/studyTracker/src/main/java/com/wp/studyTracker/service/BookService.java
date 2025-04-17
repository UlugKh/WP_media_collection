package com.wp.studyTracker.service;

import com.wp.studyTracker.model.Book;
import com.wp.studyTracker.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> allBooks(){
        return bookRepository.findAll();
    }

    public Optional<Book> singleBook(String isbn){
        return bookRepository.findBookByIsbn(isbn);
    }
}
