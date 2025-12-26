import { AfterContentInit, Component, contentChildren } from '@angular/core';
import { Tab } from '../tab/tab';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tabs-container',
  imports: [NgClass],
  templateUrl: './tabs-container.html',
  styleUrl: './tabs-container.css'
})
export class TabsContainer implements AfterContentInit{
  tabs = contentChildren(Tab);

  ngAfterContentInit() {
    const activeTab = this.tabs().find((tab) => tab.active());
    if (!activeTab) {
      this.selectTab(this.tabs()[0]);
    }
  }

  selectTab(tab: Tab) {
    this.tabs().forEach((tab) => tab.active.set(false));
    tab.active.set(true);
    return false;
  }
}
