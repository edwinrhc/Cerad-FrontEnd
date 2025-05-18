import { Component } from '@angular/core';

import { Router, RouterOutlet} from '@angular/router';


import {NotificacionComponent} from './shared/components/notificacion/notificacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificacionComponent ],
  templateUrl: './app.component.html'
})
export class AppComponent {


  showNavBar = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showNavBar = this.router.url.startsWith('/dashboard');
    });
  }

}
