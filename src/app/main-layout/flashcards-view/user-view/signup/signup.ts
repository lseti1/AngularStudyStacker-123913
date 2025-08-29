import { Component } from '@angular/core';
import { UIStates } from '../../../../services/ui-states';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  constructor(public uiStates: UIStates) {}

  onSubmit() {
    this.uiStates.setIsInAccountArea(false, null);
  }

  onLogin() {
    this.uiStates.setIsInAccountArea(true, 'login');
  }
}
