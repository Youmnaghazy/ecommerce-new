import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly cookieService = inject(CookieService);
  private readonly router = inject(Router);

  readonly isLoading = signal(false);
  readonly errorMessage = signal('');

  readonly loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    this.authService.signIn(this.loginForm.getRawValue()).subscribe({
      next: (response: { token?: string }) => {
        if (!response.token) {
          this.errorMessage.set('Login response did not include an authentication token.');
          this.isLoading.set(false);
          return;
        }

        this.cookieService.set('token', response.token);
        this.router.navigateByUrl('/home');
        this.isLoading.set(false);
      },
      error: (error: { error?: { message?: string }; message?: string }) => {
        this.errorMessage.set(
          error.error?.message ?? error.message ?? 'Login failed.',
        );
        this.isLoading.set(false);
      },
    });
  }
}
