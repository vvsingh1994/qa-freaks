import { Component } from '@angular/core';
import { Tab } from './modules/common-ui/components/header-bar/header-bar.component';

@Component({
  selector: 'qa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  qaNavTabs: Tab[] = [{
    tabName: String.fromCharCode(0xf015) + 'Home',
    tabRoute: 'home',
    isSelected: true
  },
  {
    tabName: String.fromCharCode(0xf0f3) + 'Notifications',
    tabRoute: 'notifications',
    isSelected: false
  }];
}
