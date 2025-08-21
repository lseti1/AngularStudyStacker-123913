import { Component } from '@angular/core';
import { TopBar } from './top-bar/top-bar';
import { FlaschardView } from './flaschard-view/flaschard-view';
import { BottomActionBar } from './bottom-action-bar/bottom-action-bar';

@Component({
  selector: 'app-main-layout',
  imports: [TopBar, FlaschardView, BottomActionBar],
  templateUrl: './main-layout.html',
  styles: ``
})
export class MainLayout {

}
