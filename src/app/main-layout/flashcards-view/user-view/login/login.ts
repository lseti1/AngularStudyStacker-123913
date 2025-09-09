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
  demoEmail: string;
  demoPassword: string;
  enteredEmail: string = '';
  enteredPassword: string = '';

  validEmail = signal<boolean>(true);
  validPassword = signal<boolean>(true);

  constructor(
    public uiStatesService: UIStates, 
    public uiStatesUserService: UiStatesUser,
    public dummyDataService: DummyDataService
  ) {
    this.demoEmail = this.dummyDataService.getDemoUserCredentials().email;
    this.demoPassword = this.dummyDataService.getDemoUserCredentials().password;
  }

  onSubmit(formData: NgForm): void {
    if (formData.invalid) return;
    if (this.demoEmail !== this.enteredEmail) {
      this.validEmail.set(false);
    } else if (this.demoPassword !== this.enteredPassword) {
      this.validPassword.set(false);
    } else {
      this.uiStatesUserService.setUserLoggedIn(true);
      this.uiStatesUserService.toggleView('userAccount');
      formData.reset();
    }
  }

  onSignUp(): void {
    this.uiStatesUserService.toggleView('signup');
  }

  onForgotPassword(): void {
    this.uiStatesUserService.toggleView('forgotPassword');
  }
}
