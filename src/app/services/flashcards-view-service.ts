import { Injectable, Signal, signal } from '@angular/core';

export type flashcardViewArea = 'flashcards' | 'edit' | 'learning' | 'add' | 'view' | 'delete';

@Injectable({ providedIn: 'root' })
export class FlashcardsViewService {
  private flashcardsViewState = signal<flashcardViewArea>('flashcards');
  private editAllState = signal<boolean>(false);
  
  public get currentView(): Signal<flashcardViewArea> {
    return this.flashcardsViewState.asReadonly();
  }

  public get isEditAll(): Signal<boolean> {
    return this.editAllState.asReadonly();
  }

  toggleView(view: flashcardViewArea): void {
    this.flashcardsViewState.set(
      this.flashcardsViewState() === view ? 'flashcards' : view
    );
  }

  toggleEditAll(): void {
    this.editAllState.set(
      this.editAllState() === true ? false : true
    );
  }
}
