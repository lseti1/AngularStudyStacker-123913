import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FlashcardsViewService {
  private flashcardsViewState = signal<'flashcards' | 'edit' | 'learning' | 'add' | 'view'>('flashcards');
  private editAllState = signal<boolean>(false);
  
  get currentView() {
    return this.flashcardsViewState.asReadonly();
  }

  get isEditAll() {
    return this.editAllState.asReadonly();
  }

  toggleView(view: 'flashcards' | 'edit' | 'learning' | 'add' | 'view') {
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
