import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  /**
   * Url of image.
   */
  public urlImage: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ){
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.urlImage = 'https://supra.la/wp-content/uploads/2020/02/logo-supra-pagos-intenacionales-blanco.svg';
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
        this.toastr.success('Verification successful');

        localStorage.setItem('accessToken', JSON.stringify(data.token));
        this.router.navigate([``]);
      },
      error: (error: any) => {}
    })
  }
}
