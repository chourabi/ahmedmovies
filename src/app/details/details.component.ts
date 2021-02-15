import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id;
  movie:any = {};

  constructor(private route:ActivatedRoute, private moviesSercices:MoviesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.moviesSercices.getMovieDetails(this.id).subscribe((data:any)=>{
      console.log(data);
      this.movie = data.data.movie;
      
    })

  }

}
