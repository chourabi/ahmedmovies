import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css']
})
export class MoviecardComponent implements OnInit {
  @Input() imgURL;
  @Input() id;
  @Input() title;



  constructor(private s:DomSanitizer) { }

  ngOnInit(): void {
    //this.imgURL = this.s.bypassSecurityTrustUrl(this.imgURL)
  }

}
