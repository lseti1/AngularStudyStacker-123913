import { Component, Input } from '@angular/core';
import { Deck } from '../../../services/dummy-data-service';

@Component({
  selector: 'app-edit-deck-view',
  imports: [],
  templateUrl: './edit-deck-view.html',
  styleUrl: './edit-deck-view.css'
})
export class EditDeckView {
  @Input() deckData: Deck | null = null;
}
