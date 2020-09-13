import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { title } from 'process';
@Component({
  selector: 'app-video-feed',
  templateUrl: './video-feed.component.html',
  styleUrls: ['./video-feed.component.css']
})
export class VideoFeedComponent implements OnInit {
  videos;
  p;
  name:string;
  poster_path:string;
  
  constructor(private apiService: ApiService) { }

  
  ngOnInit() {
    this.apiService.getVideos().subscribe((data)=>{
      console.log(data);
      this.videos = data['results'];
      
      
      if (this.videos.title == 0){
        this.name = this.videos.original_name;
      }
      else{
        this.name = this.videos[0].title;
      }
      // this.name = this.videos[0].title;
      // this.name = this.videos[this.i].title; 
      this.poster_path = this.videos[0].poster_path;
       
    });
    
  }

  onCardclick(event,title,poster){
    
    this.name = title;
    // this.name = title_1;
    this.poster_path = poster;
  }

}
