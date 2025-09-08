import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIStates } from '../../../../services/ui-states';
import { UiStatesUser } from '../../../../services/ui-states-user';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css'
})
export class ForgotPassword {
  message: string = 'We will send a password reset link to the email entered above if an account is registered with that email';
  resetMessage: string = 'Send Reset Link';

  constructor(
    public uiStates : UIStates, 
    public uiStatesUser: UiStatesUser
  ) {}
  

  onSendReset() {
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

