package com.navis.movies.controllers;

import com.navis.movies.dao.MoviesDAO;
import com.navis.movies.dto.MovieDetailDTO;
import com.navis.movies.dto.MovieResultDTO;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static com.navis.movies.Application.MOVIE_URL;

@RestController
@RequestMapping(MOVIE_URL)
public class MovieController {

    @Autowired
    MoviesDAO moviesDAO;

    @Operation(description = "Get featured Movies")
    @GetMapping("/featured")
    public List<MovieResultDTO> getFeaturedMovies()  {
        return moviesDAO.getFeaturedMovies();
    }

    @Operation(description = "Search Movies Movies")
    @GetMapping("/search")
    public List<MovieResultDTO>searchMovies(
            @RequestParam(value = "title", required = false) String title,
            @RequestParam(value = "actor", required = false) String actor,
            @RequestParam(value = "genreId", required = false) Integer genreId)  {
        return moviesDAO.search(title, actor, genreId);
    }

    @Operation(description = "Get Movie Details")
    @GetMapping("/{id}")
    public MovieDetailDTO getMovieDetail(@PathVariable("id") int movieId)  {


        final MovieDetailDTO movieDetail = moviesDAO.getMovieDetail(movieId);

        if (movieDetail == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        return movieDetail;
    }
}
