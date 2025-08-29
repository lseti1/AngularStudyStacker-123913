import { Component } from '@angular/core';
import { UIStates } from '../../../services/ui-states';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-view',
  imports: [FormsModule],
  templateUrl: './user-view.html',
  styleUrl: './user-view.css'
})
export class UserView {
  constructor(public uiStates: UIStates) {}

  onSubmit() {
    this.uiStates.setLoggingIn(false);
  }
}
