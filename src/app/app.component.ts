import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(private router: Router){
    const navEndEvents$ = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    );

    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-178653936-1', {
        'page_path': event.urlAfterRedirects
      });
    }); 
  }
}
