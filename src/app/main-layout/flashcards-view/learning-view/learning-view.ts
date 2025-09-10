import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { FlashcardsLearning } from '../../../services/flashcards-learning';
import { Flashcard } from '../../../services/dummy-data-service';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../../../services/local-storage-service';

@Component({
  selector: 'app-learning-view',
  imports: [CommonModule],
  templateUrl: './learning-view.html',
  styleUrl: './learning-view.css'
})
export class LearningView implements OnInit {
  @Input() flashcardsData: Flashcard[] = [];

  public autoflipMessage: boolean = false;
  public isAutoFlip: boolean = false;
  public autoFlipTimer: number = 1;
  private autoFlipTimeoutID: any = null;
  private cardsPerSession: number;

  private randomIndex: number = 0;
  private savedIndex: number = 0;
  public currentCard = signal<Flashcard | null>(null);
  
  public isCardHidden = signal<boolean>(true);
  public revealButtonText = computed(() => this.isCardHidden() ? "Reveal" : "Hide");
  public nextButtonText = signal<string>("Get Next Card");

  constructor(
    private flashcardsLearningService: FlashcardsLearning, 
    private localStorageService: LocalStorageService
  ) { 
    const settings = this.localStorageService.getSettings();

    this.cardsPerSession = settings.cardsPerSession;
    this.autoFlipTimer = settings.autoFlipTimer;
    this.isAutoFlip = settings.autoFlip;
  }
  
  ngOnInit(): void {
      this.getRandomFlashcard();
  }

  getRandomFlashcard(): void {
    if (this.isAutoFlip) {
      this.autoflipTimer();
    }
    this.flashcardsLearningService.incrementLearntCount();

    if (this.flashcardsData.length === 0) {
      this.currentCard.set(null);
      return;
    }
    this.randomIndex = Math.floor(Math.random() * this.flashcardsData.length);
    if (this.randomIndex === this.savedIndex) {
      this.randomIndex = (this.savedIndex + 1) % this.flashcardsData.length
    }

    if (this.flashcardsLearningService.flashcardsLearntCount() === this.cardsPerSession) {
      this.nextButtonText.set("Finish");
    }
    if (this.flashcardsLearningService.flashcardsLearntCount() > this.cardsPerSession) {
      this.flashcardsLearningService.toggleIsLearning();
    }

    this.savedIndex = this.randomIndex;
    this.currentCard.set(this.flashcardsData[this.savedIndex]);
    this.isCardHidden.set(true);
  }

  toggleCardHidden(): void {
    this.isCardHidden.set(!this.isCardHidden());
  }

  autoflipTimer(): void {
    if (this.autoFlipTimeoutID) {
      clearTimeout(this.autoFlipTimeoutID);
    }

    this.autoFlipTimeoutID = setTimeout(() => {
      this.isCardHidden.set(false);
      this.autoFlipTimeoutID = null;
    }, this.autoFlipTimer * 1000)
  }
}
