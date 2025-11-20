import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  selected: Boolean = false;
  selectedMovie: Movie | null = null;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        console.log("PELICULAS CARGADAS:", data);
        this.movies = data;
      },
      error: (err) => console.error("ERROR AL CARGAR RECETAS:", err)
    });
  }

  verPelicula(movie: Movie) {
  this.selectedMovie = movie;
}
  
  onSelect(movie: Movie) {
    this.selectedMovie = movie;
    this.selected = true;
  }
}
