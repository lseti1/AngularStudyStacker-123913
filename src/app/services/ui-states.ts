import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UIStates {
  isLoggingIn = signal<boolean>(false);
  isChangingSettings = signal<boolean>(false);

  setLoggingIn(value: boolean) {
    this.isLoggingIn.set(value);
    if (this.isChangingSettings()) {
      this.isChangingSettings.set(false);
    }
  }

  setChangingSettings(value: boolean) {
    this.isChangingSettings.set(value);
    if (this.isLoggingIn()) {
      this.isLoggingIn.set(false);
    }
  }
}
