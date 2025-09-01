import { Component } from '@angular/core';
import { UIStates } from '../../../../services/ui-states';
import { FormsModule } from '@angular/forms';
import { UiStatesUser } from '../../../../services/ui-states-user';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(public uiStates: UIStates, public uiStatesUser: UiStatesUser) {}

  onSubmit() {
    this.uiStatesUser.toggleView('userAccount');
  }

  onSignUp() {
    this.uiStatesUser.toggleView('signup');
  }

  onForgotPassword() {
    this.uiStatesUser.toggleView('forgotPassword');
  }
}
