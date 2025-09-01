import { Injectable, signal } from '@angular/core';

type userArea = 'signup' | 'login' | 'forgotPassword' | 'userAccount';

@Injectable({ providedIn: 'root' })
export class UiStatesUser {
  private UserAreaView = signal<userArea>('login');

  get currentView() {
    return this.UserAreaView.asReadonly()
  }

  toggleView(view: userArea) {
    this.UserAreaView.set(view);
  }
}
