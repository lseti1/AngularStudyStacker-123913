import { Injectable } from '@angular/core';

export interface Flashcard {
  id: number;
  front: string;
  back: string;
}

export interface Deck {
  id: number;
  title: string;
  proficiency: number;
  description: string;
  flashcards: Flashcard[];
}

export interface settings {
  user: 'guest' | 'demo';
  language: string;
  cardsPerSession: number;
  autoFlip: boolean;
  autoFlipTimer: number;
}

export interface user {
  email: string;
  name: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class DummyDataService {
  private demoData = {
    decks: [
      {
        id: 1,
        title: 'Indonesian Language Basics',
        proficiency: 50,
        description: 'Flashcards to help you learn Indonesian',
        flashcards: [
          {
            id: 1,
            front: 'Aku',
            back: 'Me',
          },
          {
            id: 2,
            front: 'Siapa Itu?',
            back: 'Who is that?',
          },
          {
            id: 3,
            front: 'Ini enak banget!',
            back: 'This is delicious!',
          },
          {
            id: 4,
            front: 'Ada apa?',
            back: 'What is going on?',
          },
        ],
      },
      {
        id: 2,
        title: 'Quick Multiplication',
        proficiency: 80,
        description: 'Flashcards to help you with quick multiplication',
        flashcards: [
          {
            id: 1,
            front: '5 x 5',
            back: '25',
          },
          {
            id: 2,
            front: '6 x 3',
            back: '18',
          },
        ],
      },
      {
        id: 3,
        title: 'NFL Positions',
        proficiency: 10,
        description: 'Flashcards to help you learn NFL Positions',
        flashcards: [
          {
            id: 1,
            front: 'What position throws the football on offense?',
            back: 'Quarterback (QB)',
          },
          {
            id: 2,
            front: 'Which offensive position primarily runs the ball?',
            back: 'Running Back (RB)',
          },
          {
            id: 3,
            front: 'What offensive players line up wide and catch passes?',
            back: 'Wide Receivers (WR)',
          },
        ],
      },
    ],
  };

  private defaultSettings: settings = {
    user: 'guest',
    language: 'English',
    cardsPerSession: 10,
    autoFlip: false,
    autoFlipTimer: 1
  };

  private demoSettings: settings = {
    user: 'demo',
    language: 'English',
    cardsPerSession: 25,
    autoFlip: true,
    autoFlipTimer: 4
  };

  private demoUser: user = {
    email: 'StudyStacker@stack.com',
    name: 'StudyStacker Demo User',
    password: 'StudyStacker2025'
  };

  getDecks(): Deck[] {
    return this.demoData.decks;
  }

  getDefaultSettings(): settings {
    return this.defaultSettings;
  }

  getDemoSettings(): settings {
    return this.demoSettings;
  }

  getDeckTitles(): string[] {
    return this.demoData.decks.map((deck) => deck.title);
  }

  getDemoUserCredentials(): user {
    return this.demoUser;
  }
}
