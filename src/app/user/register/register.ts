import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, ValidationErrors } from '@angular/forms';
import { Input } from '../../shared/forms/input/input';
import { Alert } from '../../shared/alert/alert';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, Input, Alert],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  alertColour = signal('blue');
  showAlert = signal(false);
  alertMsg = signal('Please wait while your account is being created.');

  formBuilder = inject(FormBuilder);
  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    age: [18, [Validators.required, Validators.min(18)]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
  });

  register() {
    /**todo: register logic */
    this.alertColour.set('indigo');
    this.showAlert.set(true);
  }

  resetAlert() {
    this.alertColour.set('blue');
    this.alertMsg.set('Please wait while your account is being created.');
  }
}
