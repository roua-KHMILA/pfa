import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private router: Router) {}
  isAccVisible=false;

  @Output() close = new EventEmitter<void>();



  onCancel(){
    this.close.emit();
  }


  // Method to handle form submission
  onSubmit() {

    this.router.navigate(['/acc'])
}

goToHome(){
  this.router.navigate(['/']); // Corrected: lowercase 'router'
}
}
