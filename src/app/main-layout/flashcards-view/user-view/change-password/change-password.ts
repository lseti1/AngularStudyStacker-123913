import { Component, signal } from '@angular/core';
import { UIStates } from '../../../../services/ui-states';
import { UiStatesUser } from '../../../../services/ui-states-user';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DummyDataService } from '../../../../services/dummy-data-service';

@Component({
  selector: 'app-change-password',
  imports: [FormsModule, CommonModule],
  templateUrl: './change-password.html',
  styleUrl: './change-password.css'
})
export class ChangePassword {
  loggedInUserPassword: string;
  changeButtonMessage: string = 'Change Password';
  message: string = 'Note: Changing passwords is not implemented at this time. This page is for demonstrating page functionality & only works with the demo user only.';

  enteredOldPassword: string = '';
  enteredNewPassword: string = '';
  enteredNewConfirmPassword: string = '';

  validMatchingNewPasswords = signal<boolean>(false);
  validOldPassword = signal<boolean>(false);

  constructor(
    public uiStatesService: UIStates, 
    public uiStatesUserService: UiStatesUser,
    public dummyDataService: DummyDataService
  ) {
    this.loggedInUserPassword = this.dummyDataService.getDemoUserCredentials().password;
  }
  
  onCancel(): void {
    this.uiStatesUserService.toggleView('userAccount');
  }

  checkOldPassword(value: string): void {
    this.validOldPassword.set(value === this.loggedInUserPassword);
  }

  checkMatchingNewPassword(value: string): void {
    this.validMatchingNewPasswords.set(value === this.enteredNewPassword);
  }

  onSubmit(formData: NgForm): void {
    this.changeButtonMessage = 'Redirecting...';
    this.message = 'Simulating Password Change.';

    setTimeout(() => {
      this.uiStatesUserService.toggleView('login');
      this.uiStatesService.toggleView(null);
    }, 3000);
  }
}
