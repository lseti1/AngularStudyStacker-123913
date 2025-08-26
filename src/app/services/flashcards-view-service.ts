import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FlashcardsViewService {
  private flashcardsViewState = signal<'flashcards' | 'edit' | 'learning' | 'add'>('flashcards');
  
  get currentView() {
    return this.flashcardsViewState.asReadonly();
  }

  toggleView(view: 'flashcards' | 'edit' | 'learning' | 'add') {
    this.flashcardsViewState.set(
      this.flashcardsViewState() === view ? 'flashcards' : view
    );
  }
}
