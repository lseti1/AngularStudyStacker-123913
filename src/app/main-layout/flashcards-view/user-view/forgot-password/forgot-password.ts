import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UIStates } from '../../../../services/ui-states';
import { UiStatesUser } from '../../../../services/ui-states-user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule, CommonModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css'
})
export class ForgotPassword {
  enteredEmail: string = '';
  resetMessage: string = 'Send Reset Link';
  message: string = 'Note: Resetting passwords is not implemented at this time. This page is for demonstrating page functionality & navigation only.';

  constructor(
    public uiStates : UIStates, 
    public uiStatesUser: UiStatesUser
  ) {}
  

  onSendReset(formData: NgForm) {
    this.message = 'Password reset link has been sent.';
    this.resetMessage = 'Redirecting...';

    setTimeout(() => {
      this.uiStatesUser.toggleView('login');
    }, 3000); 
  }

  onReturn() {
    this.uiStatesUser.toggleView('login');
  }
}

