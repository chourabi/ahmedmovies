import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies = [];

  s = new FormGroup({
    q: new FormControl()
  })

  constructor(private m:MoviesService) { }

  ngOnInit(): void {
    this.getMoviesList();
  }


  getMoviesList(){
    this.m.getMoviesList().subscribe((data:any)=>{
      console.log(data);
      this.movies = data.data.movies;
      
    })
  }

  searchFor(){
    this.m.searchFor(this.s.value.q).subscribe((data:any)=>{
      console.log(data);
      this.movies = data.data.movies;
      
    })
  }

}
