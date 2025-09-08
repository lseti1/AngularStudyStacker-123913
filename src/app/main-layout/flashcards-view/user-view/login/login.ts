import { Component, signal } from '@angular/core';
import { UIStates } from '../../../../services/ui-states';
import { FormsModule, NgForm } from '@angular/forms';
import { UiStatesUser } from '../../../../services/ui-states-user';
import { DummyDataService } from '../../../../services/dummy-data-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  invalidEmail = signal<boolean>(false);
  invalidPassword = signal<boolean>(false);
  demoEmail: string;
  demoPassword: string;
  enteredEmail: string = '';
  enteredPassword: string = '';

  constructor(
    public uiStates: UIStates, 
    public uiStatesUser: UiStatesUser,
    public dummyDataService: DummyDataService
  ) {
    this.demoEmail = this.dummyDataService.getDemoUserCredentials().email;
    this.demoPassword = this.dummyDataService.getDemoUserCredentials().password;
  }

  onSubmit(formData: NgForm) {
    if (formData.invalid) return;
    if (this.demoEmail !== this.enteredEmail) {
      this.invalidEmail.set(true);
    } else if (this.demoPassword !== this.enteredPassword) {
      this.invalidPassword.set(true);
    } else {
      this.uiStatesUser.toggleView('userAccount');
      formData.reset();
      
      this.invalidEmail.set(false);
      this.invalidPassword.set(false);
    }
  }

  onSignUp() {
    this.uiStatesUser.toggleView('signup');
  }

  onForgotPassword() {
    this.uiStatesUser.toggleView('forgotPassword');
  }


}
