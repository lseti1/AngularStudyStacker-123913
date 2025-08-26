import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-deck-options',
  imports: [FontAwesomeModule],
  templateUrl: './add-deck-options.html',
  styleUrl: './add-deck-options.css'
})
export class AddDeckOptions {
  faBars = faBars;
}
