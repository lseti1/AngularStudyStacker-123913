import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIStates } from '../../../services/ui-states';
import { LocalStorageService } from '../../../services/local-storage-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings-view',
  imports: [FormsModule, CommonModule],
  templateUrl: './settings-view.html',
  styleUrl: './settings-view.css'
})
export class SettingsView {
  public cardsPerSession: number;
  public autoFlip: boolean;
  public autoFlipTimer: number;
  public message = signal<string>("Clear App Data");

  constructor(
    private uiStates: UIStates, 
    private localStorageService: LocalStorageService, 
  ) { 
    const settings = this.localStorageService.getSettings()

    this.cardsPerSession = settings.cardsPerSession;
    this.autoFlip = settings.autoFlip;
    this.autoFlipTimer = settings.autoFlipTimer;
  }

  onSubmit(): void {
    this.localStorageService.updateSettings('cardsPerSession', this.cardsPerSession);
    this.localStorageService.updateSettings('autoFlip', this.autoFlip);
    this.localStorageService.updateSettings('autoFlipTimer', this.autoFlipTimer);

    this.uiStates.toggleView(null);
  }

  onClearData(): void {
    this.message.set("Clearing...");

    setTimeout(() => {
      this.localStorageService.clearAppData();
      this.uiStates.toggleView(null);
    }, 2000);
  }
}
