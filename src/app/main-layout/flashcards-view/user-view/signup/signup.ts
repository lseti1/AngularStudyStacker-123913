import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UiStatesUser } from '../../../../services/ui-states-user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  public createButtonMessage: string = 'Create Account';
  public message: string = 'Note: User creation is not implemented at this time. This page is for demonstrating page functionality & navigation only.';

  public enteredEmail: string = '';
  public enteredPassword: string = '';
  public enteredConfirmPassword: string = '';

  constructor(
    private uiStatesUser: UiStatesUser
  ) {}

  onSubmit(formData: NgForm): void {
    this.message = "Demo credentials can be found by pressing the info icon on the login screen.";
    this.createButtonMessage = 'Redirecting...';

    setTimeout(() => {
      formData.reset();
      this.uiStatesUser.toggleView('login');
    }, 5000);
  }

  onLogin(): void {
    this.uiStatesUser.toggleView('login');
  }
}
