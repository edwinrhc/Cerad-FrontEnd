import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs';
import {CommonModule} from '@angular/common';
import {NotificacionComponent} from './shared/components/notificacion/notificacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, NotificacionComponent ],
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
