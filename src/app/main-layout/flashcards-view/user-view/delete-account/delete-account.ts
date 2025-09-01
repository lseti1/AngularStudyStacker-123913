import { Component } from '@angular/core';
import { UiStatesUser } from '../../../../services/ui-states-user';
import { UIStates } from '../../../../services/ui-states';

@Component({
  selector: 'app-delete-account',
  imports: [],
  templateUrl: './delete-account.html',
  styleUrl: './delete-account.css'
})
export class DeleteAccount {
  constructor(public uiStates: UIStates, public uiStatesUser: UiStatesUser) {}

  onCancel() {
    this.uiStatesUser.toggleView('userAccount');
  }

  onSubmit() {
    this.uiStatesUser.toggleView('login');
    this.uiStates.toggleView(null);
  }
}
