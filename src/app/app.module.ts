import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TextEditorComponent, UsersComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
