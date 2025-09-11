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
  public message: string = 'Deleting accounts is not implemented at this time. This page is for demonstrating page functionality & only works with the demo user only.';
  public deleteMessage: string = 'Delete Account';

  public enteredPassword: string = '';
  private demoPassword: string;
  public validPassword = signal<boolean>(false);
  
  constructor(
    private uiStatesService: UIStates, 
    private uiStatesUserService: UiStatesUser,
    private dummyDataService: DummyDataService
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
      formData.reset();
      this.uiStatesUserService.toggleView('login');
      this.uiStatesService.toggleView(null);
    }, 3000);  
  }
}
