import { Injectable, signal } from '@angular/core';

interface IModal {
  id: string;
  element: HTMLDialogElement;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals = signal<IModal[]>([]);

  register(id: string, element: HTMLDialogElement) {
    this.modals.set([...this.modals(), { id, element }]);
    console.log(this.modals());
  }

  deregister(id: string) {
    this.modals.set(this.modals().filter((modal) => modal.id !== id));
  }

  toggle(id: string) {
    const modal = this.modals().find((item) => item.id === id);
    if (!modal) return;
    if (modal.element.open) {
      modal.element.close();
    } else {
      modal.element.show();
    }
  }
}
