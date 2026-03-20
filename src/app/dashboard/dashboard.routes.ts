import { Routes } from '@angular/router';
import { ClientDashboardComponent } from './pages/client/client-dashboard.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'dashboard/client',
    component: ClientDashboardComponent
  },
  {
    path: 'dashboard/admin',
    component: AdminDashboardComponent
  }
];