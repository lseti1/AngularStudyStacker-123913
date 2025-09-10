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
  private loggedInUserPassword: string;
  public changeButtonMessage: string = 'Change Password';
  public message: string = 'Note: Changing passwords is not implemented at this time. This page is for demonstrating page functionality & only works with the demo user only.';

  public enteredOldPassword: string = '';
  public enteredNewPassword: string = '';
  public enteredNewConfirmPassword: string = '';

  public validMatchingNewPasswords = signal<boolean>(false);
  public validOldPassword = signal<boolean>(false);

  constructor(
    private uiStatesService: UIStates, 
    private uiStatesUserService: UiStatesUser,
    private dummyDataService: DummyDataService
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
      formData.reset();
      this.uiStatesUserService.toggleView('login');
      this.uiStatesService.toggleView(null);
    }, 3000);
  }
}
