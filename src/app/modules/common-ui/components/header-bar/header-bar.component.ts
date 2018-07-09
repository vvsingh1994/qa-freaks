import { Component, OnInit, Input } from '@angular/core';

export interface Tab {
  tabName: string;
  tabRoute: string;
  isSelected: boolean;
}

@Component({
  selector: 'qa-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  @Input() tabs: Tab[];
  constructor() { }

  ngOnInit() {
  }

  changeSelectedTab(selectedTab: Tab) {
    for (const tab of this.tabs) {
      if (tab.tabName === selectedTab.tabName) {
        tab.isSelected = true;
      } else {
        tab.isSelected = false;
      }
    }
  }
}
