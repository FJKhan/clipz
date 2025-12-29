import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-input',
  imports: [NgxMaskDirective, ReactiveFormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
  providers:[provideNgxMask()]
})
export class Input {
  control = input.required<FormControl>();
  type = input('text');
  placeholder = input('');
  mask = input('');
}
