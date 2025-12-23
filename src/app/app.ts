import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './core/navigation/navigation';
import { AuthModal } from './user/auth-modal/auth-modal';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, AuthModal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clipz');
}
