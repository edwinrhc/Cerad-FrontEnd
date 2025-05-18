import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-default-layout',
  standalone:true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent {

}
