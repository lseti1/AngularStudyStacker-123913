import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIStates } from '../../../services/ui-states';

@Component({
  selector: 'app-settings-view',
  imports: [FormsModule],
  templateUrl: './settings-view.html',
  styleUrl: './settings-view.css'
})
export class SettingsView {
  constructor(public uiStates: UIStates) {}

  onSubmit() {
    this.uiStates.setChangingSettings(false);
  }
}
