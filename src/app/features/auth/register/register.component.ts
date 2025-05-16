import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NotificacionService} from '../../../core/services/notificacion.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name = '';
  email = '';
  contactNumber = '';
  password = '';

  constructor(private http: HttpClient, private router: Router, private notificationService: NotificacionService) {}

  onRegister(){
    const payload = {
      name: this.name,
      email: this.email,
      contactNumber: this.contactNumber,
      password: this.password,
      role: 'ADMIN'
    };

    this.http.post('http://localhost:8084/api/user/signup', payload).subscribe({
      next: () => {
        this.notificationService.show('✅ Registro exitoso');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error(error);
        this.notificationService.show('❌ Error al registrarse');
      }
    });

  }

}
