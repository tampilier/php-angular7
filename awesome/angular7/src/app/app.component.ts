import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [
      './app.component.scss',
      '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class AppComponent {

  @Output() inputModelChange: EventEmitter<string> = new EventEmitter();

  searchText: string;
  title = 'Angular7, Live search';

  onSynchronizeInputText() {
        this.inputModelChange.emit(this.searchText);
  }
}
