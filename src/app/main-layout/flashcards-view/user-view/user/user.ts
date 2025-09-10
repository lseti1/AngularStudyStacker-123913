import { Component } from '@angular/core';
import { UIStates } from '../../../../services/ui-states';
import { FormsModule } from '@angular/forms';
import { UiStatesUser } from '../../../../services/ui-states-user';
import { DummyDataService } from '../../../../services/dummy-data-service';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  public logoutButtonMessage: string = "Log Out";
  public userEmail: string;
  public userName: string;

  constructor(
    private uiStatesService: UIStates, 
    private uiStatesUserService: UiStatesUser,
    private dummyDataService: DummyDataService
  ) {
    const demoCredentials = this.dummyDataService.getDemoUserCredentials();

    this.userEmail = demoCredentials.email;
    this.userName = demoCredentials.name;
  }

  onSignOut(): void {
    this.logoutButtonMessage = "Logging Out...";
    setTimeout(() => {
      this.uiStatesUserService.setUserLoggedIn(false);
      this.uiStatesUserService.toggleView('login');
      this.uiStatesService.toggleView(null);
    }, 3000)
  }
  
  onClose(): void {
    this.uiStatesService.toggleView(null);
  }

  onDeleteAccount(): void {
    this.uiStatesUserService.toggleView('deleteAccount');
  }

  onChangePassword(): void {
    this.uiStatesUserService.toggleView('changePassword');
  }
}
