import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

type AccountArea = 'settings' | 'user' | null;

@Injectable({ providedIn: 'root' })
export class UIStates {
  AccountAreaView = signal<AccountArea>(null);

  get currentView() {
    return this.AccountAreaView.asReadonly();
  }

  toggleView(view: AccountArea) {
    this.AccountAreaView.set(view);
  }
}
