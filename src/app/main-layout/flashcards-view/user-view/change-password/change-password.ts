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
  message: string = 'Note: Changing passwords is not implemented at this time. This page is for demonstrating page functionality & only works with the demo user only.';
  enteredOldPassword: string = '';
  enteredNewPassword: string = '';
  enteredNewConfirmPassword: string = '';
  invalidMatchingPasswords = signal<boolean>(true);
  invalidOldPassword = signal<boolean>(true);
  changeButtonMessage: string = 'Change Password';
  loggedInUserPassword: string;

  constructor(
    public uiStates: UIStates, 
    public uiStatesUser: UiStatesUser,
    public dummyDataService: DummyDataService
  ) {
    this.loggedInUserPassword = this.dummyDataService.getDemoUserCredentials().password;
  }
  
  onCancel() {
    this.uiStatesUser.toggleView('userAccount');
  }

  checkOldPassword(value: string) {
    this.invalidOldPassword.set(value !== this.loggedInUserPassword);
  }

  checkMatchingNewPassword(value: string) {
    this.invalidMatchingPasswords.set(value !== this.enteredNewPassword);
  }

  onSubmit(formData: NgForm) {
    this.changeButtonMessage = 'Redirecting...';
    this.message = 'Simulating Password Change.';

    setTimeout(() => {
      this.uiStatesUser.toggleView('login');
      this.uiStates.toggleView(null);
    }, 3000);
  }
}
