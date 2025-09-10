import { Component, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { User } from './user/user';
import { ForgotPassword } from './forgot-password/forgot-password';
import { UiStatesUser, selectedUserArea } from '../../../services/ui-states-user';
import { ChangePassword } from './change-password/change-password';
import { DeleteAccount } from './delete-account/delete-account';

@Component({
  selector: 'app-user-view',
  imports: [FormsModule, Login, Signup, User, ForgotPassword, ChangePassword, DeleteAccount],
  templateUrl: './user-view.html',
  styleUrl: './user-view.css'
})
export class UserView {
  constructor(
    private uiStatesUserService: UiStatesUser
  ) {}

  public get currentUserUIView(): Signal<selectedUserArea> {
    return this.uiStatesUserService.currentView;
  }
}
