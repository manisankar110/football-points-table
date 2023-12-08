import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-step2-task';
  constructor(private router: Router) { }

  ngOnInit() : void{
    this.router.navigate(['/england']);  
  }
}
