import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { WelcomeMessage } from "./welcome-message/welcome-message";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, WelcomeMessage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studyStacker');
  public isWelcomeMessage: boolean = true;

  setIsWelcomeMessage(value: boolean): void {
    this.isWelcomeMessage = value;
  }
}
