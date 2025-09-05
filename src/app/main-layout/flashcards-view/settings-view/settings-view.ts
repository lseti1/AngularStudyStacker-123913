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
    public uiStatesSettings: UiStatesSettings
  ) { 
    this.cardsPerSession = this.uiStatesSettings.cardsPerSession();
    this.autoFlip = this.uiStatesSettings.autoFlip();
    this.autoFlipTimer = this.uiStatesSettings.autoFlipTimer();
  }

  onSubmit() {
    this.uiStatesSettings.setCardsPerSession(this.cardsPerSession);
    this.uiStatesSettings.setAutoFlip(this.autoFlip);
    this.uiStatesSettings.setAutoFlipTimer(this.autoFlipTimer);
    console.log("Autoflip is ", this.uiStatesSettings.autoFlip());
    console.log("Autoflip is ", this.uiStatesSettings.autoFlipTimer());
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
