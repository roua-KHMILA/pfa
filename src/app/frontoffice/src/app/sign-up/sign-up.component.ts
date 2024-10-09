import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router: Router) {}
  isAccVisible=false;
  @Output() close = new EventEmitter<void>();

  goToHome(){
    this.router.navigate(['/']); // Corrected: lowercase 'router'
  }
  onSubmit() {
    this.router.navigate(['/acc'])
}
}
