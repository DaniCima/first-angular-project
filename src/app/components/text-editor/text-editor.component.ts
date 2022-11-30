import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css'],
})
export class TextEditorComponent implements OnInit {
  message: string = '';
  fontSize: number = 15;

  constructor() {}

  ngOnInit(): void {}

  decreaseSize(): void {
    if (this.fontSize != 0) this.fontSize--;
  }

  increaseSize(): void {
    this.fontSize++;
  }
}
