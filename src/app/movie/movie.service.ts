import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Movie } from './Movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl: string = environment.baseUrl;
  private apiUrl2: string = environment.baseUrl2;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> { 
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(this.apiUrl2 + `/${id}` + '.json');
  }
}
