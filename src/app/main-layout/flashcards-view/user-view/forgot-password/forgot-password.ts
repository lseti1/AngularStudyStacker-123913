import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UiStatesUser } from '../../../../services/ui-states-user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule, CommonModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css'
})
export class ForgotPassword {
  public resetMessage: string = 'Send Reset Link';
  public message: string = 'Resetting passwords is not implemented at this time. This page is for demonstrating page functionality & navigation only.';

  public enteredEmail: string = '';
  
  constructor(
    private uiStatesUserService: UiStatesUser
  ) {}
  
  onSendReset(formData: NgForm): void {
    this.message = 'Simulating sending password reset link.';
    this.resetMessage = 'Redirecting...';
    

    setTimeout(() => {
      formData.reset();
      this.uiStatesUserService.toggleView('login');
      
    }, 3000); 
  }

  onReturn(): void {
    this.uiStatesUserService.toggleView('login');
  }
}

