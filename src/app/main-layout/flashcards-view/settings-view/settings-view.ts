import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIStates } from '../../../services/ui-states';
import { LocalStorageService } from '../../../services/local-storage-service';
import { UiStatesSettings } from '../../../services/ui-states-settings';

@Component({
  selector: 'app-settings-view',
  imports: [FormsModule],
  templateUrl: './settings-view.html',
  styleUrl: './settings-view.css'
})
export class SettingsView {
  cardsPerSession: number;
  autoFlip: boolean;
  autoFlipTimer: number;
  message = signal<string>("Clear App Data");

  constructor(
    public uiStates: UIStates, 
    public localStorageService: LocalStorageService, 
  ) { 
    const settings = this.localStorageService.getSettings()

    this.cardsPerSession = settings.cardsPerSession;
    this.autoFlip = settings.autoFlip;
    this.autoFlipTimer = settings.autoFlipTimer;
  }

  onSubmit() {
    this.localStorageService.updateSettings('cardsPerSession', this.cardsPerSession);
    this.localStorageService.updateSettings('autoFlip', this.autoFlip);
    this.localStorageService.updateSettings('autoFlipTimer', this.autoFlipTimer);

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
