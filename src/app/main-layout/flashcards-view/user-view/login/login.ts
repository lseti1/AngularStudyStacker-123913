import { Component, signal } from '@angular/core';
import { UIStates } from '../../../../services/ui-states';
import { FormsModule, NgForm } from '@angular/forms';
import { UiStatesUser } from '../../../../services/ui-states-user';
import { DummyDataService } from '../../../../services/dummy-data-service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { InfoScreen } from "./info-screen/info-screen";

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, FontAwesomeModule, InfoScreen],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  public faInfo = faInfo;
  public loginButtonMessage: string = "Log In";
  public enteredEmail: string = '';
  public enteredPassword: string = '';

  public validEmail = signal<boolean>(true);
  public validPassword = signal<boolean>(true);
  public isShowingInfoScreen = signal<boolean>(false);

  private demoEmail: string;
  private demoPassword: string;

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

  toggleInfoScreen(): void {
    this.isShowingInfoScreen.set(!this.isShowingInfoScreen());
  }

  toggleInfoScreenDemoUser(): void {
    this.enteredEmail = this.demoEmail;
    this.enteredPassword = this.demoPassword;
    this.isShowingInfoScreen.set(!this.isShowingInfoScreen());
  }
}
