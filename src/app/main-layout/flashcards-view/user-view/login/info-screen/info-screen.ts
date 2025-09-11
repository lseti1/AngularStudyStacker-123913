import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info-screen',
  imports: [],
  templateUrl: './info-screen.html',
  styleUrl: './info-screen.css'
})
export class InfoScreen {
  @Output() infoToggle = new EventEmitter<void>();
  @Output() infoDemoUserToggle = new EventEmitter<void>();

  onToggleClick(): void {
    this.infoToggle.emit();
  }

  onToggleClickDemoUser(): void {
    this.infoDemoUserToggle.emit();
  }
}
