import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from "./login/login";

@Component({
  selector: 'app-user-view',
  imports: [FormsModule, Login],
  templateUrl: './user-view.html',
  styleUrl: './user-view.css'
})
export class UserView {
}
