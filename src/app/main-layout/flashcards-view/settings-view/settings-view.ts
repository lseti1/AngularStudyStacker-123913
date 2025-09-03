import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIStates } from '../../../services/ui-states';
import { LocalStorageService } from '../../../services/local-storage-service';

@Component({
  selector: 'app-settings-view',
  imports: [FormsModule],
  templateUrl: './settings-view.html',
  styleUrl: './settings-view.css'
})
export class SettingsView {
  constructor(public uiStates: UIStates, public localStorageService: LocalStorageService) {}

  onSubmit() {
    this.uiStates.toggleView(null);
  }

  onClearData() {
    this.localStorageService.clearAppData();
    this.uiStates.toggleView(null);
  }
}
