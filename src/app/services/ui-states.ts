import { Injectable, Signal } from '@angular/core';
import { signal } from '@angular/core';

export type AccountArea = 'settings' | 'user' | null;

@Injectable({ providedIn: 'root' })
export class UIStates {
  private AccountAreaView = signal<AccountArea>(null);

  public get currentView(): Signal<AccountArea> {
    return this.AccountAreaView.asReadonly();
  }

  toggleView(view: AccountArea): void {
    this.AccountAreaView.set(view);
  }
}
