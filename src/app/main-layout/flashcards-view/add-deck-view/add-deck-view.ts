import { Component } from '@angular/core';
import { SelectedDeck } from '../../../services/selected-deck';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-deck-view',
  imports: [FormsModule],
  templateUrl: './add-deck-view.html',
  styleUrl: './add-deck-view.css'
})
export class AddDeckView {
  constructor(public selectedDeckService: SelectedDeck) {}

  onSubmit() {
    this.selectedDeckService.setAddingDeck(false);
  }
}
