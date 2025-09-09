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
  message: string = 'Note: Deleting accounts is not implemented at this time. This page is for demonstrating page functionality & only works with the demo user only.';
  deleteMessage: string = 'Delete Account';

  enteredPassword: string = '';
  demoPassword: string;
  validPassword = signal<boolean>(false);
  
  constructor(
    public uiStatesService: UIStates, 
    public uiStatesUserService: UiStatesUser,
    public dummyDataService: DummyDataService
  ) { 
    this.demoPassword = this.dummyDataService.getDemoUserCredentials().password; 
  }

  onCancel(): void {
    this.uiStatesUserService.toggleView('userAccount');
  }

  checkPassword(value: string): void {
    this.validPassword.set(value === this.demoPassword);
  }

  onSubmit(formData: NgForm): void {
    this.deleteMessage = 'Redirecting...';
    this.message = "Simulating account deletion."

    setTimeout(() => {
      this.uiStatesUserService.toggleView('login');
      this.uiStatesService.toggleView(null);
    }, 3000);  
  }
}
