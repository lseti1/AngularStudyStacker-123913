import { Injectable, Signal } from '@angular/core';
import { signal } from '@angular/core';

export type selectedAccountArea = 'settings' | 'user' | null;

@Injectable({ providedIn: 'root' })
export class UIStates {
  private AccountAreaView = signal<selectedAccountArea>(null);

  public get currentView(): Signal<selectedAccountArea> {
    return this.AccountAreaView.asReadonly();
  }

  toggleView(view: selectedAccountArea): void {
    this.AccountAreaView.set(view);
  }
}
