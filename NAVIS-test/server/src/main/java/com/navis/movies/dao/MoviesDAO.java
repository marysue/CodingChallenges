package com.navis.movies.dao;

import com.navis.movies.dto.GenreDTO;
import com.navis.movies.dto.MovieDetailDTO;
import com.navis.movies.dto.MovieResultDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Types;
import java.util.List;

@Repository
public class MoviesDAO {

    @Autowired
    NamedParameterJdbcTemplate jdbcTemplate;

    public List<GenreDTO> getGenres(){
        final List<GenreDTO> genres = jdbcTemplate.query(
                "SELECT id, description from genres",
                (rs, rowNum) -> {
                    GenreDTO dto = new GenreDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setDescription(rs.getString("description"));
                    return dto;
                }
        );
        return genres;
    }

    public List<MovieResultDTO> getFeaturedMovies(){
        final List<MovieResultDTO> movies = jdbcTemplate.query(
                "SELECT m.id, m.title, m.year, m.rating, m.poster, f.sort from movies m inner join featured_movies f on f.movie_id = m.id order by sort",
                (rs, rowNum) -> {
                    MovieResultDTO dto = new MovieResultDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setTitle(rs.getString("title"));
                    dto.setYear(rs.getString("year"));
                    dto.setRating(rs.getString("rating"));
                    dto.setPoster(rs.getString("poster"));
                    dto.setSort(rs.getInt("sort"));
                    return dto;
                }
        );
        return movies;
    }

    public List<MovieResultDTO> search(String titleContains, String actorContains, Integer genreId){
        actorContains = (actorContains == null) ? "" : actorContains.trim();
        titleContains = (titleContains == null) ? "" : titleContains.trim();

        final MapSqlParameterSource params = new MapSqlParameterSource();
        String sql = "select m.id, m.title, m.year, m.rating, m.poster from movies m ";
        String where = "where";

        if (! titleContains.isEmpty()){
            sql += where + " title like '%' || :titleContains || '%' ";
            params.addValue("titleContains", titleContains);
            where = "and";
        }

        if (! actorContains.isEmpty()){
            sql += where + " m.id in (select movie_id from actors a inner join movie_to_actor ma on ma.actor_id = a.id and a.name like '%' || :actorContains || '%') ";
            params.addValue("actorContains", actorContains);
            where = "and";
        }

        if (genreId != null){
            sql += where + " m.id in (select id from genres where id = :genreId) ";
            params.addValue("genreId", genreId);
            where = "and";
        }

        final List<MovieResultDTO> movies = jdbcTemplate.query(sql, params,
                (rs, rowNum) -> {
                    MovieResultDTO dto = new MovieResultDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setTitle(rs.getString("title"));
                    dto.setYear(rs.getString("year"));
                    dto.setRating(rs.getString("rating"));
                    dto.setPoster(rs.getString("poster"));
                    dto.setSort(rowNum);
                    return dto;
                }
        );
        return movies;

    }

    public MovieDetailDTO getMovieDetail(int id){
        final MovieDetailDTO movie = jdbcTemplate.queryForObject(
                "select top 1 id, title, year, rating, plot, studio, poster from movies where id = :id",
                new MapSqlParameterSource().addValue("id", id),
                (rs, rowNum) -> {
                    MovieDetailDTO dto = new MovieDetailDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setTitle(rs.getString("title"));
                    dto.setYear(rs.getString("year"));
                    dto.setRating(rs.getString("rating"));
                    dto.setPlot(rs.getString("plot"));
                    dto.setStudio(rs.getString("studio"));
                    dto.setPoster(rs.getString("poster"));
                    return dto;
                }
        );

        final List<String> actors = jdbcTemplate.query(
                "select a.name from actors a inner join movie_to_actor ma on ma.actor_id = a.id where ma.movie_id = :id order by sort",
                new MapSqlParameterSource().addValue("id", id),
                (rs, rowNum) -> rs.getString("name")
        );
        movie.setActors(actors);

        final List<Integer> genreIds = jdbcTemplate.query(
                "select genre_id from movie_to_genre where movie_id = :id order by genre_id",
                new MapSqlParameterSource().addValue("id", id),
                (rs, rowNum) -> rs.getInt("genre_id")
        );
        movie.setGenreIds(genreIds);

        return movie;
    }
}
