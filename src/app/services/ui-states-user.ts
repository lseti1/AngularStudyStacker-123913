import { Injectable, Signal, signal } from '@angular/core';
import { DummyDataService, user } from './dummy-data-service';

type userArea = 'signup' | 'login' | 'forgotPassword' | 'userAccount' | 'changePassword' | 'deleteAccount';

@Injectable({ providedIn: 'root' })
export class UiStatesUser {
  private UserAreaView = signal<userArea>('login');
  userLoggedIn = signal<boolean>(false);

  constructor(
    public dummyDataService: DummyDataService
  ) {}

  get currentView(): Signal<userArea> {
    return this.UserAreaView.asReadonly();
  }

  toggleView(view: userArea): void {
    this.UserAreaView.set(view);
  }

  setUserLoggedIn(value: boolean): void {
    this.userLoggedIn.set(value);
  }
}
