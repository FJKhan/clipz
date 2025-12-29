import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {
  bgColour = input('slate');

  get bgClassName() {
    return `bg-${this.bgColour()}-500`;
  }
}
