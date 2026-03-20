import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    email: string = '';
    password: string = '';
    error: string | null = null;

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit(): void {
        this.error = null;
        this.authService.login(this.email, this.password).subscribe({
        next: (res) => {
            this.authService.setToken(res.token);
            // After logging in, we redirect you to the dashboard.
            this.router.navigate(['/dashboard']);
        },
        error: (err) => {
            this.error = 'Invalid email or password';
        }
        });
    }
}