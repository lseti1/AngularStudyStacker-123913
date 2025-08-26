import { Component } from '@angular/core';
import { FlashcardsViewService } from '../../../services/flashcards-view-service';
@Component({
  selector: 'app-add-card-view',
  imports: [],
  templateUrl: './add-card-view.html',
  styleUrl: './add-card-view.css'
})
export class AddCardView {
  constructor(public flashcardsViewService: FlashcardsViewService) {}
}
