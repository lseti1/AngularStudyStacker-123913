import { Component, signal } from '@angular/core';
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

  message = signal<string>("Clear App Data");

  onSubmit() {
    this.uiStates.toggleView(null);
  }

  onClearData() {
    this.message.set("Clearing...");

    setTimeout(() => {
      this.localStorageService.clearAppData();
      this.uiStates.toggleView(null);
    }, 2000);
  }
}
