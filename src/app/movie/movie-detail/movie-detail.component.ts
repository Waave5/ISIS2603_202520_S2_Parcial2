import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit, OnChanges {
  @Input() movie: any;
  safeTrailerUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer, private movieService: MovieService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovie(id).subscribe({
      next: (data) => {
        console.log("DETALLE:", data);
        this.movie = data;
      },
      error: (err) => console.error(err)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movie']) {
      this.updateTrailerUrl();
    }
  }

  private updateTrailerUrl(): void {
    if (this.movie?.trailer_url) {
      // Convertir URL de YouTube watch a embed si es necesario
      let embedUrl = this.movie.trailer_url;
      if (embedUrl.includes('watch?v=')) {
        embedUrl = embedUrl.replace('watch?v=', 'embed/');
      }
      this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    } else {
      this.safeTrailerUrl = null;
    }
  }
}
