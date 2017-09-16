import { Component } from '@angular/core';

import { SettingsService } from '../../services/settings';

import { Toggle } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsService: SettingsService) {}

  onToggle(toggle: Toggle) {
    console.log(toggle);
    this.settingsService.setBackground(toggle.checked);
  }

  checkAltBackground() {
    return this.settingsService.isAltBackground();
  }

}
