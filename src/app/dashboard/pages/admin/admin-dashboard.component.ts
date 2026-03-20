import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="text-3xl font-bold">Admin dashboard</h1>`
})
export class AdminDashboardComponent {}