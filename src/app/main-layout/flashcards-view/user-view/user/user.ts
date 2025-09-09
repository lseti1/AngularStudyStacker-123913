import { Component } from '@angular/core';
import { UIStates } from '../../../../services/ui-states';
import { FormsModule } from '@angular/forms';
import { UiStatesUser } from '../../../../services/ui-states-user';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  constructor(
    public uiStates: UIStates, 
    public uiStatesUser: UiStatesUser
  ) {}

  onSignOut(): void {
    this.uiStatesUser.setUserLoggedIn(false);
    this.uiStatesUser.toggleView('login');
  }
  
  onClose(): void {
    this.uiStates.toggleView(null);
  }

  onDeleteAccount(): void {
    this.uiStatesUser.toggleView('deleteAccount');
  }

  onChangePassword(): void {
    this.uiStatesUser.toggleView('changePassword');
  }
}
