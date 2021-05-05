package com.navis.movies.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MovieResultDTO {
    private int id;
    private String title;
    private String year;
    private String rating;
    private int sort;
    private String poster;
}
