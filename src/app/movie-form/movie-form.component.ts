import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MoviesApiCallService } from '../movies-api-call.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
  providers: [ MoviesApiCallService ]
})
export class MovieFormComponent implements OnInit {
  movies: any[]=null;

  constructor(private moviesApiCallService: MoviesApiCallService) { }

  getMovieInfo(title: string){
    this.moviesApiCallService.getMovieByTitle(title).subscribe(response =>{
      this.movies = response.json();
    })
  }

  ngOnInit() {
  }

}
