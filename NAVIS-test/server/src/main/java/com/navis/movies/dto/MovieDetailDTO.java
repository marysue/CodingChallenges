package com.navis.movies.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class MovieDetailDTO {
    private int id;
    private String title;
    private String year;
    private String rating;
    private String plot;
    private String studio;
    private String poster;
    private List<String> actors;
    private List<Integer> genreIds;
}
