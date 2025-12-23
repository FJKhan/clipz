import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {
  modal = inject(ModalService);

  openModal($event: Event) {
    $event.preventDefault();
    this.modal.toggle('authentication');
  }
}
