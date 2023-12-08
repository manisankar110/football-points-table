import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface paramsData{
  league?: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-step2-task';
  constructor(private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() : void{
    this.route.queryParams
    .subscribe((params: paramsData) => {
      console.log(params.league)
      let paramsData = params.league ?? 'england'
      this.router.navigate(['/', paramsData])
        // this.router.navigate(
        //   ['/dashboard'],
        //   { queryParams: { league: paramsData } 
        // });
    }
  );
  }
}
// `/${paramsData}`