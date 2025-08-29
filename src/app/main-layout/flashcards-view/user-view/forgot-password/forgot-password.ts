import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIStates } from '../../../../services/ui-states';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css'
})
export class ForgotPassword {
  constructor(public uiStates : UIStates) {}
  message = signal<string>('We will send a password reset link to the email entered above if an account is registered with that email');

  onSendReset() {
    this.message.set('Password reset link has been sent. Redirecting...');

    setTimeout(() => {
      this.uiStates.setIsInAccountArea(true, 'login');
    }, 3000); 
  }

  onReturn() {
    this.uiStates.setIsInAccountArea(true, 'login');
  }
}

