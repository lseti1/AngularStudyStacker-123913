import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { MainLayout } from './main-layout/main-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, MainLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studyStacker');
}
