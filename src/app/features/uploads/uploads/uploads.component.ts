import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotificacionService} from '../../../core/services/notificacion.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-uploads',
  standalone:true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './uploads.component.html',
  styleUrl: './uploads.component.css'
})
export class UploadsComponent {

  selectedFile?: File;

  constructor(private http: HttpClient, private notificationService: NotificacionService) {
  }

  onFileSelected(event: any){
    const file = event.target.files[0];
    if(file && file.name.endsWith('.txt')){
      this.selectedFile = file;
    }else{
      this.notificationService.show('❌ Solo se permiten archivos .txt');
    }
  }

  onUpload(){
    if(!this.selectedFile){
      this.notificationService.show('❗ Selecciona un archivo antes de subir');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:8085/api/cerad/upload', formData)
      .subscribe({
        next: () => {
          this.notificationService.show('✅ Archivo subido exitosamente');
          this.selectedFile = undefined;
        },
        error: (err) => {
          console.error(err);
          this.notificationService.show('❌ Error al subir el archivo');
        }
      })


  }


}
