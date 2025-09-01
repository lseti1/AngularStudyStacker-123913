import { Injectable, signal } from '@angular/core';

type flashcardViewArea = 'flashcards' | 'edit' | 'learning' | 'add' | 'view' | 'delete';

@Injectable({ providedIn: 'root' })
export class FlashcardsViewService {
  private flashcardsViewState = signal<flashcardViewArea>('flashcards');
  private editAllState = signal<boolean>(false);
  
  get currentView() {
    return this.flashcardsViewState.asReadonly();
  }

  get isEditAll() {
    return this.editAllState.asReadonly();
  }

  toggleView(view: flashcardViewArea) {
    this.flashcardsViewState.set(
      this.flashcardsViewState() === view ? 'flashcards' : view
    );
  }

  toggleEditAll() {
    this.editAllState.set(
      this.editAllState() === true ? false : true
    );
  }
}
