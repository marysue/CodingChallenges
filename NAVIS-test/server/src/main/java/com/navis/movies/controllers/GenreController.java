package com.navis.movies.controllers;

import com.navis.movies.dao.MoviesDAO;
import com.navis.movies.dto.GenreDTO;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.navis.movies.Application.GENRE_URL;

@RestController
@RequestMapping(GENRE_URL)
public class GenreController {

    @Autowired
    MoviesDAO moviesDAO;

    @Operation(description = "Get All Genres")
    @GetMapping()
    public List<GenreDTO> getAllGenres()
    {
        return moviesDAO.getGenres();
    }
}
