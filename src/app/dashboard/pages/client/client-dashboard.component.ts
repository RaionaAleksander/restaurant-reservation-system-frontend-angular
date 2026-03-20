import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="text-3xl font-bold">Client dashboard</h1>`
})
export class ClientDashboardComponent {}