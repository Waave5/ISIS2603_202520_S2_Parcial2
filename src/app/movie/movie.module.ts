import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorModule } from '../actor/actor.module';

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent],
  imports: [CommonModule, ActorModule, HttpClientModule],
  exports: [MovieListComponent, MovieDetailComponent],
})
export class MovieModule {}
