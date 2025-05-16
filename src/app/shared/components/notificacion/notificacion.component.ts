import { Component } from '@angular/core';
import {Subscription, timer} from 'rxjs';
import {NotificacionService} from '../../../core/services/notificacion.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-notificacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notificacion.component.html',
  styleUrl: './notificacion.component.css'
})
export class NotificacionComponent {
  message = '';
  private sub?: Subscription;

  constructor(private notificationService: NotificacionService) {
    this.notificationService.notification$.subscribe(msg => {
      // @ts-ignore
      this.message = msg;
      if (this.sub) this.sub.unsubscribe();
      this.sub = timer(3000).subscribe(() => this.message = '');
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
