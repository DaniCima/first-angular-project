import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  name: string;
  lastName: string;
  message: string;
  isDisabled: boolean;
  imageUrl: string;
  imageAltText: string;
  secretMessageBackgroundColor: string;
  secretMessageFontSize: number;

  constructor() {
    this.name = 'John';
    this.lastName = 'Doe';
    this.message = 'Enter your the value';
    this.isDisabled = false;
    this.imageUrl =
      'https://angular.io/assets/images/logos/angular/angular.png';
    this.imageAltText = 'Angular Logo';

    this.secretMessageBackgroundColor = 'aquamarine';
    this.secretMessageFontSize = 20;
  }

  showSecretMessage() {
    alert('This is a secret message');
  }

  sayHello(): void {
    this.secretMessageBackgroundColor = 'pink';
    alert(`${this.name} ${this.lastName}`);
  }

  isPepe(): boolean {
    return this.name === 'Pepe';
  }
}
