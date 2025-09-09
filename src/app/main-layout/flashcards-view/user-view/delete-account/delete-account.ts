import { Component, signal } from '@angular/core';
import { UiStatesUser } from '../../../../services/ui-states-user';
import { UIStates } from '../../../../services/ui-states';
import { DummyDataService } from '../../../../services/dummy-data-service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-account',
  imports: [FormsModule, CommonModule],
  templateUrl: './delete-account.html',
  styleUrl: './delete-account.css'
})
export class DeleteAccount {
  enteredPassword: string = '';
  demoPassword: string;
  invalidPassword = signal<boolean>(true);
  message: string = 'Note: Deleting accounts is not implemented at this time. This page is for demonstrating page functionality & only works with the demo user only.';
  deleteMessage: string = 'Delete Account';

  constructor(
    public uiStates: UIStates, 
    public uiStatesUser: UiStatesUser,
    public dummyDataService: DummyDataService
  ) { this.demoPassword = this.dummyDataService.getDemoUserCredentials().password; }

  onCancel() {
    this.uiStatesUser.toggleView('userAccount');
  }

  checkPassword(value: string) {
    this.invalidPassword.set(value !== this.demoPassword);
  }

  onSubmit(formData: NgForm) {
    if (this.demoPassword !== this.enteredPassword) {
      this.invalidPassword.set(true);
      return;
    } 
    this.invalidPassword.set(false);
    
    this.deleteMessage = 'Redirecting...';
    this.message = "Simulating account deletion."

    setTimeout(() => {
      this.uiStatesUser.toggleView('login');
      this.uiStates.toggleView(null);
      this.invalidPassword.set(true);
    }, 5000);  
  }
}
