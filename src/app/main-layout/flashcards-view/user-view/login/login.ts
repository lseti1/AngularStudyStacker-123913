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
  public loginButtonMessage: string = "Log In";
  private demoEmail: string;
  private demoPassword: string;
  public enteredEmail: string = '';
  public enteredPassword: string = '';

  public validEmail = signal<boolean>(true);
  public validPassword = signal<boolean>(true);

  constructor(
    private uiStatesService: UIStates, 
    private uiStatesUserService: UiStatesUser,
    private dummyDataService: DummyDataService
  ) {
    const demoCredentials = this.dummyDataService.getDemoUserCredentials();

    this.demoEmail = demoCredentials.email;
    this.demoPassword = demoCredentials.password;
  }

  onSubmit(formData: NgForm): void {
    if (formData.invalid) return;
    if (this.demoEmail !== this.enteredEmail) {
      this.validEmail.set(false);
    } else if (this.demoPassword !== this.enteredPassword) {
      this.validPassword.set(false);
    } else {
      this.loginButtonMessage = 'Logging In...';

      setTimeout(() => {
        formData.reset();
        this.uiStatesUserService.setUserLoggedIn(true);
        this.uiStatesService.toggleView(null);
        this.uiStatesUserService.toggleView('userAccount');
      }, 3000)
    }
  }

  onSignUp(): void {
    this.uiStatesUserService.toggleView('signup');
  }

  onForgotPassword(): void {
    this.uiStatesUserService.toggleView('forgotPassword');
  }
}
