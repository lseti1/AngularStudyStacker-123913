import { Component } from '@angular/core';
import { UIStates } from '../../../../services/ui-states';
import { UiStatesUser } from '../../../../services/ui-states-user';

@Component({
  selector: 'app-change-password',
  imports: [],
  templateUrl: './change-password.html',
  styleUrl: './change-password.css'
})
export class ChangePassword {
  constructor(public uiStates: UIStates, public uiStatesUser: UiStatesUser) {}
  
  onCancel() {
    this.uiStatesUser.toggleView('userAccount');
  }

  onSubmit() {
    this.uiStatesUser.toggleView('login');
    this.uiStates.toggleView(null);
  }
}
