import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { UIStates } from '../../../services/ui-states';
import { User } from './user/user';
import { ForgotPassword } from './forgot-password/forgot-password';

@Component({
  selector: 'app-user-view',
  imports: [FormsModule, Login, Signup, User, ForgotPassword],
  templateUrl: './user-view.html',
  styleUrl: './user-view.css'
})
export class UserView {
  constructor(public uiStates: UIStates) {}


}
