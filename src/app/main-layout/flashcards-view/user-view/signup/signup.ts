import { Component } from '@angular/core';
import { UIStates } from '../../../../services/ui-states';
import { FormsModule } from '@angular/forms';
import { UiStatesUser } from '../../../../services/ui-states-user';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  constructor(public uiStates: UIStates, public uiStatesUser: UiStatesUser) {}

  onSubmit() {
    this.uiStatesUser.toggleView('login');
  }

  onLogin() {
    this.uiStatesUser.toggleView('login');
  }
}
