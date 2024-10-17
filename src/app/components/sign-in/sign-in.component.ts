import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  /**
   * Form login.
   */
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ){
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * Login.
   */
  public login(): void {
    const body = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.authLoginClient(body).subscribe({
      next: (data: any) => {
        localStorage.setItem('accessToken', JSON.stringify(data.token));
        this.router.navigate([``]);
      },
      error: (error: any) => {}
    })
  }
}
