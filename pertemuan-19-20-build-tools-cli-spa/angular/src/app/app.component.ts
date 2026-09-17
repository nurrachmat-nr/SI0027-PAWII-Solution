// Solusi Referensi - Pertemuan 19-20: menambahkan environment variable (apiBaseUrl) dari Pertemuan 17-18.
// Component tree: AppComponent (shell) -> PageHeader, <router-outlet>

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageHeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
