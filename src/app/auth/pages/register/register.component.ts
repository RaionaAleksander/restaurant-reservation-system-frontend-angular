import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../models/user.model';
import { FormsModule } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    user: Partial<User> = {}; // Partial allows you to avoid specifying all fields at once
    error: string | null = null;

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
        this.error = null;
        this.authService.register(this.user as User).subscribe({
        next: (res) => {
            this.authService.setToken(res.token);

            const decoded: any = jwtDecode(res.token);
            const role = decoded.role;

            if (role === 'ROLE_ADMIN') {
            this.router.navigate(['/dashboard/admin']);
            } else {
            this.router.navigate(['/dashboard/client']);
            }
        },
        error: (err) => {
            this.error = 'Registration error. Please check your details.';
        }
        });
    }
}