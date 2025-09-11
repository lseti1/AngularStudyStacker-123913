import { Injectable, Signal, signal } from '@angular/core';
import { LocalStorageService } from './local-storage-service';

export type selectedUserArea = 'signup' | 'login' | 'forgotPassword' | 'userAccount' | 'changePassword' | 'deleteAccount';

@Injectable({ providedIn: 'root' })
export class UiStatesUser {
  private UserAreaView = signal<selectedUserArea>('login');
  // public userLoggedIn = signal<boolean>(false);

  initialize(localStorageService: LocalStorageService): void {
    const savedUser = localStorageService.getSettings().user;
    // this.userLoggedIn.set(savedUser === 'demo');
  }

  get currentView(): Signal<selectedUserArea> {
    return this.UserAreaView.asReadonly();
  }

  toggleView(view: selectedUserArea): void {
    this.UserAreaView.set(view);
  }

  // setUserLoggedIn(value: boolean): void {
  //   this.userLoggedIn.set(value);
  // }
}
