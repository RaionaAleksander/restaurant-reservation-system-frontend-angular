import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
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
            this.router.navigate(['/dashboard']);
        },
        error: (err) => {
            this.error = 'Registration error. Please check your details.';
        }
        });
    }
}