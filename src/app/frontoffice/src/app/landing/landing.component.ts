import {AfterViewInit, Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {WaitService} from "../Service/wait.service";
import {HttpResponse} from "@angular/common/http";
import {wait} from "../Models/wait";

declare var $: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements AfterViewInit {

  isSignUpVisible = false;
 isSignInVisible = false;

  typedText: string = '';
  textsToType: string[] = ["What to cook again", "Your grocery list",""];
  currentTextIndex: number = 0;
  currentCharIndex: number = 0;
  showCursor: boolean = false;




  typeText() {
    if (this.currentCharIndex < this.textsToType[this.currentTextIndex].length) {
      this.typedText += this.textsToType[this.currentTextIndex].charAt(this.currentCharIndex);
      this.currentCharIndex++;
      setTimeout(() => this.typeText(), 100); // Adjust typing speed here (milliseconds)
    } else {
      setTimeout(() => this.clearText(), 2000); // Adjust delay before clearing text (milliseconds)
    }
  }

  clearText() {
    this.typedText = '';
    this.currentCharIndex = 0;
    this.currentTextIndex = (this.currentTextIndex + 1) % this.textsToType.length;
    this.typeText();
  }





  ngAfterViewInit(): void {
    this.typeText();
    $(window).scroll(() => this.onScroll());

    $('.back-to-top').click(() => this.onBackToTopClick());

  }





  onScroll() {
    if ($(window).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  }

  onBackToTopClick() {
    $('html, body').animate({ scrollTop: 0 }, 500, 'easeInOutExpo');
    return false;
  }

  @HostListener('window:scroll', ['$event'])
  onHostScroll(event: Event) {
    this.onScroll();
  }
email!:string;
  newWait = new wait();
  isLoading = false;

  constructor(private router: Router) {} // Inject Router in the constructor
showSigUp(){

      // Navigate to the sign-in route
      this.router.navigate(['/signup']);
}
onSubmit(){}

showSignIn(){
  this.router.navigate(['/signin']);
}
hideSignIn() {
  this.isSignInVisible = false;
}
}
