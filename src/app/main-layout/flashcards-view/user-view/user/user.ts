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
  logoutButtonMessage: string = "Log Out";
  userEmail: string;
  userName: string;

  constructor(
    public uiStates: UIStates, 
    public uiStatesUser: UiStatesUser,
    public dummyDataService: DummyDataService
  ) {
    this.userEmail = this.dummyDataService.getDemoUserCredentials().email;
    this.userName = this.dummyDataService.getDemoUserCredentials().name;
  }

  onSignOut(): void {
    this.logoutButtonMessage = "Logging Out...";
    setTimeout(() => {
      this.uiStatesUser.setUserLoggedIn(false);
      this.uiStatesUser.toggleView('login');
      this.uiStates.toggleView(null);
    }, 3000)
  }
  
  onClose(): void {
    this.uiStates.toggleView(null);
  }

  onDeleteAccount(): void {
    this.uiStatesUser.toggleView('deleteAccount');
  }

  onChangePassword(): void {
    this.uiStatesUser.toggleView('changePassword');
  }
}
