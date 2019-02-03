import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoviesApiCallService {

  constructor(private http: Http) { }


  getMovieByTitle(title: string) {
    return this.http.get(`http://www.omdbapi.com/?t=${title}&apikey={key will go here}`);
  }

}
