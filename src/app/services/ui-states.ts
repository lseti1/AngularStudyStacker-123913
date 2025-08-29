import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

type AccountArea = 'login' | 'signup' | 'user' | 'forgotPassword' | null;

@Injectable({ providedIn: 'root' })
export class UIStates {
  isInAccountArea = signal<boolean>(false);
  AccountAreaView = signal<AccountArea>(null);

  isChangingSettings = signal<boolean>(false);


  setIsInAccountArea(value: boolean, area: AccountArea) {
    this.isInAccountArea.set(value);
    this.AccountAreaView.set(area);
    if (this.isChangingSettings()) {
      this.isChangingSettings.set(false);
    }
  }

  setChangingSettings(value: boolean) {
    this.isChangingSettings.set(value);
    if (this.isInAccountArea()) {
      this.isInAccountArea.set(false);
    }
  }
}
