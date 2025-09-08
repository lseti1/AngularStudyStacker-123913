import { Component } from '@angular/core';
import { UIStates } from '../../../../services/ui-states';
import { FormsModule, NgForm } from '@angular/forms';
import { UiStatesUser } from '../../../../services/ui-states-user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  createAccountMessage: string = 'Create Account';
  message: string = 'Note: User creation is not implemented at this time. This page is for demonstrating page functionality & navigation only.';
  enteredEmail: string = '';
  enteredPassword: string = '';
  enteredConfirmPassword: string = '';

  constructor(public uiStates: UIStates, public uiStatesUser: UiStatesUser) {}

  onSubmit(formData: NgForm) {
    this.message = "Demo credentials can be found by pressing the info icon on the login screen.";
    this.createAccountMessage = 'Redirecting...';

    setTimeout(() => {
      this.uiStatesUser.toggleView('login');
    }, 5000);
  }

  onLogin() {
    this.uiStatesUser.toggleView('login');
  }
}
