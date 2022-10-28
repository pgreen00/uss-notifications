import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform:Platform, private notifications:NotificationService) {
    this.platform.ready().then(() => {
      this.notifications.init();
    });
  }
}
