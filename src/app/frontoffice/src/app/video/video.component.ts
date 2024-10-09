import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  isPlaying: boolean = false;

  @ViewChild('videoPlayer', { static: false })
  videoPlayer!: ElementRef;

  playVideo() {
    this.isPlaying = true;
    setTimeout(() => {
      this.videoPlayer.nativeElement.play();
    }, 0); 
  }

  closeVideo() {
    
    this.isPlaying = false;
    this.videoPlayer.nativeElement.pause();
    this.videoPlayer.nativeElement.currentTime = 0;
    console.log('closeVideo called');
  }
}
