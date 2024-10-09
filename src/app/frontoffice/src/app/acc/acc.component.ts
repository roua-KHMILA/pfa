import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.css']
})
export class AccComponent {
  isAddVisible=false;
  constructor(private router: Router) {} // Inject Router in the constructor


  add() {
    this.router.navigate(['/add']);
  }

sugg(){
  this.router.navigate(['/sugg'])
}
}
